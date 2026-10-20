import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { 
  ArrowRight, 
  Flame, 
  Building2, 
  Award, 
  TrendingUp, 
  Zap, 
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  ShoppingBag,
  BarChart3,
  Users,
  FileText,
  Lock,
  ChevronRight
} from 'lucide-react';

interface TickerItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  volume: string;
}

const LIVE_TICKERS: TickerItem[] = [
  { symbol: 'NILE', name: 'Nile Token', price: '$0.1200', change: '+8.4%', isPositive: true, volume: '$4.85M' },
  { symbol: 'BTC', name: 'Bitcoin', price: '$68,420.00', change: '+2.15%', isPositive: true, volume: '$28.5M' },
  { symbol: 'ETH', name: 'Ethereum', price: '$3,580.00', change: '+3.42%', isPositive: true, volume: '$18.2M' },
  { symbol: 'BNB', name: 'BNB Chain', price: '$590.00', change: '+1.20%', isPositive: true, volume: '$6.4M' },
  { symbol: 'SOL', name: 'Solana', price: '$178.00', change: '+5.60%', isPositive: true, volume: '$9.1M' },
  { symbol: 'TRX', name: 'TRON', price: '$0.1650', change: '+0.80%', isPositive: true, volume: '$2.3M' },
  { symbol: 'XRP', name: 'XRP Ledger', price: '$0.5840', change: '+1.90%', isPositive: true, volume: '$3.7M' }
];

interface LiquidityPayout {
  id: string;
  userMasked: string;
  amount: string;
  asset: string;
  type: string;
  timeAgo: string;
}

const INITIAL_PAYOUTS: LiquidityPayout[] = [
  { id: '1', userMasked: '0x71a...92b', amount: '+1,250.00', asset: 'USDT', type: 'Daily Yield Disbursement', timeAgo: '2s ago' },
  { id: '2', userMasked: '0x34e...8f1', amount: '+25,000', asset: 'NILE', type: 'Staking Multiplier Reward', timeAgo: '8s ago' },
  { id: '3', userMasked: 'bc1q...4f2', amount: '+0.125', asset: 'BTC', type: 'Quantum Vault Settlement', timeAgo: '15s ago' },
  { id: '4', userMasked: 'TE5Q...8za', amount: '+15,000', asset: 'TRX', type: 'Affiliate Tier 1 Commission', timeAgo: '22s ago' },
  { id: '5', userMasked: '0x9ad...399', amount: '+3,500.00', asset: 'USDT', type: 'Reserve Yield Release', timeAgo: '29s ago' }
];

export const HeroSection: React.FC = () => {
  const { setActiveTab, setAuthModalOpen, setWhitepaperModalOpen, isLoggedIn } = useApp();
  const [payouts, setPayouts] = useState<LiquidityPayout[]>(INITIAL_PAYOUTS);

  // Dynamic real-time liquidity payout stream
  useEffect(() => {
    const interval = setInterval(() => {
      const assets = ['USDT', 'NILE', 'BTC', 'ETH', 'SOL', 'TRX'];
      const chosenAsset = assets[Math.floor(Math.random() * assets.length)];
      const types = [
        'Daily Yield Disbursement',
        'Staking Multiplier Reward',
        'Quantum Vault Settlement',
        'Reserve Yield Release',
        '10-Tier Affiliate Payout'
      ];
      const randomHex = Math.random().toString(16).substring(2, 6);
      const randomAmount = chosenAsset === 'BTC' ? `+${(Math.random() * 0.2 + 0.05).toFixed(4)}`
        : chosenAsset === 'ETH' ? `+${(Math.random() * 1.5 + 0.3).toFixed(3)}`
        : chosenAsset === 'NILE' ? `+${Math.floor(Math.random() * 20000 + 5000).toLocaleString()}`
        : `+${(Math.random() * 2500 + 300).toFixed(2)}`;

      const newPayout: LiquidityPayout = {
        id: Date.now().toString(),
        userMasked: `0x${randomHex}...${Math.random().toString(16).substring(2, 5)}`,
        amount: randomAmount,
        asset: chosenAsset,
        type: types[Math.floor(Math.random() * types.length)],
        timeAgo: 'Just now'
      };

      setPayouts(prev => [newPayout, ...prev.slice(0, 4)]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-10">
      
      {/* ========================================================
          HERO BANNER - EXACT THEME MATCHING SCREENSHOT
         ======================================================== */}
      <section className="relative w-full overflow-hidden rounded-3xl border border-slate-800/80 shadow-2xl bg-[#030712]">
        
        {/* Background Panoramic Artwork */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat pointer-events-none"
          style={{ 
            backgroundImage: "url('/assets/backgrounds/nile-hero-bg.jpg')",
            backgroundPosition: "center 20%"
          }}
        >
          {/* Subtle gradient vignette to blend with content */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#030712]/75 to-[#030712]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60" />
        </div>

        {/* Floating Ambient Text Badges from the artwork */}
        <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-12 text-[10px] font-sans font-bold tracking-[0.2em] text-cyan-300/80 uppercase pointer-events-none drop-shadow">
          A STRONGER FINANCIAL FUTURE
        </div>
        <div className="hidden lg:block absolute top-12 right-24 text-[10px] font-sans font-bold tracking-[0.2em] text-amber-200/80 uppercase pointer-events-none drop-shadow">
          A GLOBAL ECOSYSTEM
        </div>
        <div className="hidden lg:block absolute bottom-36 right-8 max-w-[120px] text-right text-[10px] font-sans font-bold tracking-[0.15em] text-amber-300/80 uppercase leading-snug pointer-events-none drop-shadow">
          ROOTED IN HISTORY BUILT FOR TOMORROW
        </div>
        <div className="hidden md:block absolute top-[45%] left-[58%] text-sm font-serif italic text-cyan-200/80 pointer-events-none drop-shadow-md">
          The Nile Connects the World
        </div>

        {/* Hero Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-10 space-y-10">
          
          {/* Top Headline & Copy (Left-Aligned per screenshot) */}
          <div className="max-w-2xl space-y-4">
            <div className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.25em] text-slate-300 uppercase">
              WELCOME TO NILE ECOSYSTEM
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
              Where Digital <br />
              <span className="text-[#F5C26B] italic font-serif">
                Wealth Flows
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans pt-1">
              NILE merges private banking sophistication with decentralized finance.
              <span className="block text-slate-400 text-xs sm:text-sm mt-1">
                Invest • Earn • Grow • Global • Secure • Innovative
              </span>
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  if (isLoggedIn) {
                    window.dispatchEvent(new CustomEvent('open-dashboard-modal'));
                  } else {
                    setAuthModalOpen(true, 'signup');
                  }
                }}
                className="px-6 py-3 rounded-lg bg-[#F5C26B] hover:bg-[#eab35b] text-slate-950 font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(245,194,107,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Open Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setWhitepaperModalOpen(true)}
                className="px-5 py-3 rounded-lg bg-[#071326]/85 hover:bg-[#0E203C] border border-slate-700/80 hover:border-slate-500 text-white font-medium text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Read Whitepaper</span>
              </button>
            </div>
          </div>

          {/* Metrics Glassmorphic Bar (Cyan bordered card matching screenshot) */}
          <div className="w-full bg-[#061224]/85 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-4 sm:p-5 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-3.5 pt-2 md:pt-0">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-sans">$2.4B+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Total Volume</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:pl-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-sans">150+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Institutions</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:pl-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-sans">0.02s</div>
                  <div className="text-[11px] text-slate-400 font-medium">Execution Time</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:pl-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-sans">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Audited & Secure</div>
                </div>
              </div>

            </div>
          </div>

          {/* Four Interactive Feature Cards (Exact row of 4 cards per screenshot) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            {/* Card 1: Presale */}
            <div 
              onClick={() => setActiveTab('presale')}
              className="group bg-[#071326]/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative">
                  <img 
                    src="/assets/branding/card-presale.jpg" 
                    alt="NILE Presale Coin" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/public/nile-token-coin.png';
                    }}
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-[#F5C26B] text-slate-950">
                    Phase 2 Active
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#F5C26B] transition-colors">
                    Presale
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Get NILE tokens at $0.005 before the public listing at $0.50 — a 100× opportunity.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#00F0FF] group-hover:translate-x-1 transition-transform">
                <span>Join Presale</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2: Staking */}
            <div 
              onClick={() => setActiveTab('investment')}
              className="group bg-[#071326]/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative">
                  <img 
                    src="/assets/branding/card-staking.jpg" 
                    alt="Algorithmic Staking Stations" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/public/assets/plans/plan-nile-staking.png';
                    }}
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-slate-950">
                    Up to 280% APY
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Staking
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Deploy capital into rigorously vetted staking protocols offering sustainable, algorithmic yield.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#00F0FF] group-hover:translate-x-1 transition-transform">
                <span>Start Staking</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: Marketplace */}
            <div 
              onClick={() => setActiveTab('marketplace')}
              className="group bg-[#071326]/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative">
                  <img 
                    src="/assets/branding/card-marketplace.jpg" 
                    alt="Curated Web3 Marketplace" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/public/assets/products/software-license-box.png';
                    }}
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500 text-white">
                    300+ Items
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                    Marketplace
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    300+ curated products — virtual cards, prop trading accounts, software licenses, and more.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#00F0FF] group-hover:translate-x-1 transition-transform">
                <span>Browse Marketplace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 4: Academy */}
            <div 
              onClick={() => setActiveTab('education')}
              className="group bg-[#071326]/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative">
                  <img 
                    src="/assets/branding/card-academy.jpg" 
                    alt="Nile Web3 Academy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/public/assets/plans/plan-asset-based.png';
                    }}
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500 text-white">
                    Free Courses
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    Academy
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Learn, grow, and master Web3 with expert-led courses and practical resources.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#00F0FF] group-hover:translate-x-1 transition-transform">
                <span>Start Learning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

          {/* Institutional Partners Row (Exact text and logos per screenshot) */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-slate-400 text-xs">
            <div className="text-[10px] font-sans font-bold tracking-[0.2em] text-slate-400 uppercase">
              TRUSTED BY GLOBAL INSTITUTIONS
            </div>
            
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs text-slate-300">
              <span className="font-bold tracking-wider hover:text-white transition-colors">BINANCE</span>
              <span className="font-bold tracking-wider hover:text-white transition-colors">coinbase</span>
              <span className="font-bold tracking-wider hover:text-white transition-colors">Chainlink</span>
              <span className="font-bold tracking-wider hover:text-white transition-colors">TRON</span>
              <span className="font-bold tracking-wider hover:text-white transition-colors">ethereum</span>
              <span className="font-bold tracking-wider hover:text-white transition-colors">polygon</span>
              <span className="font-bold tracking-wider hover:text-white transition-colors">SOLANA</span>
              <span className="text-slate-400 text-[10px] uppercase font-sans">AND MORE...</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          LIVE MARKET SPOT TICKER & STREAMING PAYOUTS
         ======================================================== */}
      <div className="w-full bg-[#050914] border border-slate-800 rounded-2xl py-3 px-4 shadow-xl">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none select-none">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-800 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest shrink-0">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Live Spot Ticker</span>
          </div>

          <div className="flex items-center gap-8 text-xs font-mono shrink-0">
            {LIVE_TICKERS.map((item) => (
              <div key={item.symbol} className="flex items-center gap-2">
                <span className="font-bold text-white">{item.symbol}</span>
                <span className="text-slate-300">{item.price}</span>
                <span className={`font-semibold ${item.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {item.change}
                </span>
                <span className="text-slate-400 text-[10px]">Vol {item.volume}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Disbursed Settlement Ticker */}
      <div className="w-full bg-[#071326]/60 border border-slate-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-xs">
            <span className="font-bold text-white">Live Disbursed Settlements: </span>
            <span className="text-slate-300 font-mono text-[11px]">Real-time transparent on-chain liquidity payouts</span>
          </div>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto max-w-full text-xs font-mono">
          {payouts.slice(0, 3).map((p) => (
            <div key={p.id} className="flex items-center gap-2 bg-[#050C1A] px-3 py-1.5 rounded-xl border border-slate-800 shrink-0">
              <span className="text-slate-400">{p.userMasked}</span>
              <span className="text-emerald-400 font-bold">{p.amount} {p.asset}</span>
              <span className="text-slate-400 text-[10px]">{p.timeAgo}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
