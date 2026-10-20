const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const prisma = require('../utils/prisma');

const PRESALE_PHASES = [
  { id: 1, name: 'Phase 1: Private Seed Allocation', tokenPriceUsd: 0.05, totalAllocation: 10000000, soldAllocation: 8450000, startDate: '2026-09-01', endDate: '2026-10-15', status: 'completed', minBuyUsd: 100, maxBuyUsd: 50000, bonusPercent: 20 },
  { id: 2, name: 'Phase 2: Strategic Ecosystem Round', tokenPriceUsd: 0.08, totalAllocation: 25000000, soldAllocation: 19820000, startDate: '2026-10-16', endDate: '2026-11-15', status: 'active', minBuyUsd: 50, maxBuyUsd: 25000, bonusPercent: 15 },
  { id: 3, name: 'Phase 3: Public Community Sale', tokenPriceUsd: 0.12, totalAllocation: 40000000, soldAllocation: 6150000, startDate: '2026-11-16', endDate: '2026-12-15', status: 'upcoming', minBuyUsd: 25, maxBuyUsd: 10000, bonusPercent: 10 },
  { id: 4, name: 'Phase 4: Final DEX Launch Liquidity Round', tokenPriceUsd: 0.18, totalAllocation: 25000000, soldAllocation: 0, startDate: '2026-12-16', endDate: '2027-01-10', status: 'upcoming', minBuyUsd: 25, maxBuyUsd: 5000, bonusPercent: 5 }
];

let memoryPurchases = [];

router.get('/phases', (req, res) => {
  res.json({ success: true, phases: PRESALE_PHASES });
});

router.post('/buy', authenticateToken, async (req, res) => {
  const { phaseId, amountUsd, paymentAsset = 'USDT', network = 'TRC20', txHash } = req.body;
  const numAmount = parseFloat(amountUsd);
  const userId = req.user.id;

  if (!numAmount || numAmount <= 0) {
    return res.status(400).json({ success: false, message: 'Valid purchase amount in USD is required.' });
  }

  const phase = PRESALE_PHASES.find(p => p.id === parseInt(phaseId, 10));
  if (!phase) {
    return res.status(404).json({ success: false, message: 'Presale phase not found.' });
  }

  const baseTokens = numAmount / phase.tokenPriceUsd;
  const bonusTokens = (baseTokens * (phase.bonusPercent || 0)) / 100;
  const totalTokens = baseTokens + bonusTokens;

  try {
    const nileWallet = await prisma.wallet.findUnique({
      where: { userId_type_currency: { userId, type: 'INTERNAL', currency: 'NILE' } }
    });

    if (nileWallet) {
      await prisma.wallet.update({ where: { id: nileWallet.id }, data: { balance: { increment: totalTokens } } });
    } else {
      await prisma.wallet.create({ data: { userId, type: 'INTERNAL', currency: 'NILE', balance: totalTokens } });
    }

    phase.soldAllocation = Math.min(phase.totalAllocation, phase.soldAllocation + totalTokens);

    const purchaseRecord = {
      id: `presale-${Date.now().toString(36)}`,
      userId,
      phaseId: phase.id,
      phaseName: phase.name,
      tokensNile: totalTokens,
      amountUsd: numAmount,
      paymentAsset,
      network,
      txHash: txHash || `tx-sim-${Date.now().toString(36)}`,
      createdAt: new Date()
    };

    if (prisma && prisma.presalePurchase) {
      try {
        await prisma.presalePurchase.create({ data: purchaseRecord });
      } catch (e) {}
    }

    memoryPurchases.push(purchaseRecord);

    res.status(201).json({
      success: true,
      message: `Presale order confirmed! ${totalTokens.toLocaleString()} NILE credited to your verified wallet.`,
      purchase: purchaseRecord,
      nileTokensAwarded: totalTokens
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get('/my', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  try {
    let purchases = [];
    if (prisma && prisma.presalePurchase) {
      try {
        purchases = await prisma.presalePurchase.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } });
      } catch (e) {}
    }
    if (!purchases || purchases.length === 0) {
      purchases = memoryPurchases.filter(p => p.userId === userId);
    }
    res.json({ success: true, purchases });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
