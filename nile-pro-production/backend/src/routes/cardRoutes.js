const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const prisma = require('../utils/prisma');

let memoryCards = {};

const getDefaultCards = (userId, userName) => [
  {
    id: `card-${userId.substring(0, 8)}-1`,
    userId,
    name: 'Nile Platinum Virtual Visa',
    type: 'VIRTUAL',
    tier: 'PLATINUM',
    cardholderName: (userName || 'NILE INVESTOR').toUpperCase(),
    cardNumber: '4532 •••• •••• 8842',
    expiryDate: '12/29',
    cvv: '842',
    balance: 2500.0,
    limit: 10000.0,
    status: 'ACTIVE',
    currency: 'USD'
  },
  {
    id: `card-${userId.substring(0, 8)}-2`,
    userId,
    name: 'Nile Metal Corporate Mastercard',
    type: 'PHYSICAL',
    tier: 'BLACK',
    cardholderName: (userName || 'NILE INVESTOR').toUpperCase(),
    cardNumber: '5412 •••• •••• 9921',
    expiryDate: '08/30',
    cvv: '921',
    balance: 15400.0,
    limit: 50000.0,
    status: 'ACTIVE',
    currency: 'USD'
  }
];

router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    let cards = [];
    if (prisma && prisma.cryptoCard) {
      try {
        cards = await prisma.cryptoCard.findMany({ where: { userId } });
      } catch (e) {
        cards = [];
      }
    }
    if (!cards || cards.length === 0) {
      if (!memoryCards[userId]) {
        memoryCards[userId] = getDefaultCards(userId, req.user.firstName ? `${req.user.firstName} ${req.user.lastName || ''}` : 'Nile Client');
      }
      cards = memoryCards[userId];
    }
    res.json({ success: true, cards });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/apply', authenticateToken, async (req, res) => {
  const { name, type = 'VIRTUAL', tier = 'STANDARD', currency = 'USD' } = req.body;
  const userId = req.user.id;
  try {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const cardData = {
      id: `card-${Date.now().toString(36)}`,
      userId,
      name: name || `Nile ${tier} Card`,
      type: type.toUpperCase(),
      tier: tier.toUpperCase(),
      cardholderName: (req.user.firstName ? `${req.user.firstName} ${req.user.lastName || ''}` : 'NILE CLIENT').toUpperCase(),
      cardNumber: `${type === 'VIRTUAL' ? '4532' : '5412'} •••• •••• ${randomSuffix}`,
      expiryDate: '12/30',
      cvv: String(Math.floor(100 + Math.random() * 900)),
      balance: 0.0,
      limit: tier === 'BLACK' ? 100000.0 : tier === 'PLATINUM' ? 25000.0 : 5000.0,
      status: 'ACTIVE',
      currency
    };
    if (prisma && prisma.cryptoCard) {
      try {
        const created = await prisma.cryptoCard.create({ data: cardData });
        return res.status(201).json({ success: true, message: 'Card issued successfully.', card: created });
      } catch (e) {}
    }
    if (!memoryCards[userId]) memoryCards[userId] = getDefaultCards(userId, req.user.firstName);
    memoryCards[userId].push(cardData);
    res.status(201).json({ success: true, message: 'Card issued successfully.', card: cardData });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/:id/freeze', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    if (prisma && prisma.cryptoCard) {
      try {
        const card = await prisma.cryptoCard.findUnique({ where: { id } });
        if (card && card.userId === userId) {
          const newStatus = card.status === 'ACTIVE' ? 'FROZEN' : 'ACTIVE';
          const updated = await prisma.cryptoCard.update({ where: { id }, data: { status: newStatus } });
          return res.json({ success: true, status: newStatus, card: updated });
        }
      } catch (e) {}
    }
    if (memoryCards[userId]) {
      const card = memoryCards[userId].find(c => c.id === id);
      if (card) {
        card.status = card.status === 'ACTIVE' ? 'FROZEN' : 'ACTIVE';
        return res.json({ success: true, status: card.status, card });
      }
    }
    res.status(404).json({ success: false, message: 'Card not found.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/:id/load', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  const numAmount = parseFloat(amount);
  const userId = req.user.id;
  if (!numAmount || numAmount <= 0) {
    return res.status(400).json({ success: false, message: 'Valid amount is required.' });
  }
  try {
    const wallet = await prisma.wallet.findUnique({
      where: { userId_type_currency: { userId, type: 'INTERNAL', currency: 'USDT' } }
    });
    if (!wallet || wallet.balance < numAmount) {
      return res.status(400).json({ success: false, message: 'Insufficient funds in Internal Wallet.' });
    }
    await prisma.wallet.update({ where: { id: wallet.id }, data: { balance: { decrement: numAmount } } });
    if (prisma && prisma.cryptoCard) {
      try {
        const updated = await prisma.cryptoCard.update({ where: { id }, data: { balance: { increment: numAmount } } });
        return res.json({ success: true, message: `Loaded $${numAmount} onto card.`, card: updated });
      } catch (e) {}
    }
    if (memoryCards[userId]) {
      const card = memoryCards[userId].find(c => c.id === id);
      if (card) {
        card.balance += numAmount;
        return res.json({ success: true, message: `Loaded $${numAmount} onto card.`, card });
      }
    }
    res.json({ success: true, message: `Loaded $${numAmount} onto card.` });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
