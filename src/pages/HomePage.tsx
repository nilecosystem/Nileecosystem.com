import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { HeroSection } from '../components/HeroSection.tsx';
import { VideoAdsSection } from '../components/VideoAdsSection.tsx';
import { InvestmentPlansSection } from '../components/InvestmentPlansSection.tsx';
import { MarketplaceSection } from '../components/MarketplaceSection.tsx';
import { ReferralSection } from '../components/ReferralSection.tsx';
import { TestimonialsSection } from '../components/TestimonialsSection.tsx';
import { NileTokenCoin } from '../components/NileTokenCoin.tsx';
import { 
  Building2, 
  TrendingUp, 
  ShoppingBag, 
  ArrowLeftRight, 
  Coins, 
  Flame, 
  CreditCard, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  ExternalLink,
  CheckCircle,
  FileCheck,
  Globe,
  Sparkles
} from 'lucide-react';
import { OFFICIAL_SUPPORT_CHANNELS } from '../data/paymentConfig.ts';

export const HomePage: React.FC = () => {
  const { setActiveTab, setCertificateModalOpen, setSelectedCertificate } = useApp();

  return (
    <div className="w-full space-y-16 pb-20">
      {/* 1. Hero Section & Live Spot Ticker & Grand Opening Spotlight */}
      <HeroSection />

      {/* 2. Official Video Broadcast & Commercial Spotlight */}
      <VideoAdsSection />

      {/* 3. Ecosystem Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#E5B842] font-mono">
            Ecosystem Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Five Dedicated Pillars of Digital Wealth
          </h2>
          <p className="text-sm text-slate-400">
            Every product operates with transparent accounting, institutional compliance, and shared identity across web and mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1: Nile Crypto Bank */}
          <div 
            onClick={() => setActiveTab('bank')}
            className="group p-6 rounded-3xl bg-[#091124] border border-slate-800 hover:border-[#E5B842]/60 hover:bg-[#0C1630] transition-all cursor-pointer shadow-lg space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center text-[#E5B842] group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#E5B842] transition-colors">
                Nile Crypto Bank (NCB)
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Multi-currency accounts supporting USD, EUR, GBP, BTC, ETH, and USDT. Instant internal settlement, statements download, and 3D-Secure card controls.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-[#E5B842] gap-1 group-hover:translate-x-1 transition-transform">
              <span>Access Banking Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 2: Nile Investment */}
          <div 
            onClick={() => setActiveTab('investment')}
            className="group p-6 rounded-3xl bg-[#091124] border border-slate-800 hover:border-emerald-500/60 hover:bg-[#0C1630] transition-all cursor-pointer shadow-lg space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                Nile Investment Management
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Five enterprise plan frameworks: Asset-Based, Time-Locked, Amount Tiers, Plan 4 ULTIMATE (up to 50,000%), and 90-Day Surprise Campaign.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-emerald-400 gap-1 group-hover:translate-x-1 transition-transform">
              <span>Explore Portfolios</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 3: Nile Marketplace */}
          <div 
            onClick={() => setActiveTab('marketplace')}
            className="group p-6 rounded-3xl bg-[#091124] border border-slate-800 hover:border-purple-500/60 hover:bg-[#0C1630] transition-all cursor-pointer shadow-lg space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                Nile Reserve Marketplace
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Rare physical Casascius Bitcoins (0.25 to 10 BTC), genuine certified US $1,000,000 banknotes with bullion bars, crypto packages, and worldwide eSIMs.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-purple-400 gap-1 group-hover:translate-x-1 transition-transform">
              <span>View Product Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 4: Nile DEX */}
          <div 
            onClick={() => setActiveTab('dex')}
            className="group p-6 rounded-3xl bg-[#091124] border border-slate-800 hover:border-cyan-500/60 hover:bg-[#0C1630] transition-all cursor-pointer shadow-lg space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <ArrowLeftRight className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                Nile Decentralized Exchange (DEX)
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Non-custodial automated market maker (AMM) swaps with live Recharts multi-timeframe price visualizer, slippage controls, and transparent liquidity pools.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-cyan-400 gap-1 group-hover:translate-x-1 transition-transform">
              <span>Launch Trading Terminal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 5: NILE Token & Presale */}
          <div 
            onClick={() => setActiveTab('presale')}
            className="group p-6 rounded-3xl bg-[#091124] border border-[#E5B842]/40 hover:border-[#E5B842] hover:bg-[#0C1630] transition-all cursor-pointer shadow-lg space-y-4 md:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <NileTokenCoin size="sm" animate={true} />
                <div className="w-10 h-10 rounded-xl bg-[#E5B842]/20 border border-[#E5B842] flex items-center justify-center text-[#E5B842] group-hover:scale-110 transition-transform">
                  <Flame className="w-5 h-5" />
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 text-[#E5B842] text-xs font-mono font-bold">
                Presale Active · $0.05 / NILE
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#E5B842] transition-colors">
                NILE Token & Multi-Round Presale
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Native utility token with 500,000,000 fixed supply. 15% unlock at TGE with 85% transparent linear vesting. Holding 1,000,000 NILE unlocks up to 5× yield multipliers.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-[#E5B842] gap-1 group-hover:translate-x-1 transition-transform">
              <span>Join Presale Allocation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Investment Frameworks Section */}
      <InvestmentPlansSection />

      {/* 4. Marketplace Section */}
      <MarketplaceSection />

      {/* 5. 10-Tier Affiliate Referral Engine */}
      <ReferralSection />

      {/* 6. Verified Institutional Client Testimonials */}
      <TestimonialsSection />

      {/* 7. Official Institutional Regulatory & Audited Certificates Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5C26B] font-mono">
            Regulatory Authority & Audited Credentials
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Official Statutory Certificates & Proof of Reserves
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Nile Investment Ltd operates under full statutory registration in the United Kingdom (CRN: 08253865), European Union (FN 674459 m), and UAE (TRN 100820028255333).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cert Card 1: UK Incorporation */}
          <div 
            onClick={() => { setSelectedCertificate('incorporation'); setCertificateModalOpen(true); }}
            className="group p-6 rounded-3xl bg-[#071326] border border-slate-800 hover:border-[#F5C26B]/60 transition-all cursor-pointer shadow-xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img 
                  src="/assets/branding/official_certificate_of_incorporation.jpg" 
                  alt="UK Certificate of Incorporation" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#F5C26B] text-slate-950">
                  CRN #08253865
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#F5C26B] transition-colors">
                UK Certificate of Incorporation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Official Companies House Cardiff statutory incorporation under the UK Companies Act 2006. Registered at 47 Academy Street, SN4 7DZ, UK.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#F5C26B]">
              <span>Inspect & Download Certificate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Cert Card 2: Regulatory Compliance */}
          <div 
            onClick={() => { setSelectedCertificate('compliance'); setCertificateModalOpen(true); }}
            className="group p-6 rounded-3xl bg-[#071326] border border-slate-800 hover:border-emerald-500/60 transition-all cursor-pointer shadow-xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img 
                  src="/assets/branding/certificate_of_compliance.jpg" 
                  alt="Certificate of Regulatory Compliance" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-slate-950">
                  AML / MiCA Tier-3
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                Regulatory Compliance & AML Seal
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verified institutional adherence to FCA, EU MiCA, and FATF Travel Rule guidelines with 4 segregated ledger wallets per client.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>Inspect & Download Certificate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Cert Card 3: Proof of Reserves & Security Audit */}
          <div 
            onClick={() => { setSelectedCertificate('incorporation'); setCertificateModalOpen(true); }}
            className="group p-6 rounded-3xl bg-[#071326] border border-slate-800 hover:border-cyan-500/60 transition-all cursor-pointer shadow-xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img 
                  src="/assets/branding/smart_contract_audit_certificate.png" 
                  alt="Proof of Reserves & Security Audit" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-400 text-slate-950">
                  108.4% Reserve Ratio
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                Proof of Reserves & Security Audit
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                108.4% over-collateralized liquidity reserves verified via cryptographic Merkle root and 99.4/100 AAA smart contract audit score.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-cyan-400">
              <span>Inspect & Download Audit Report</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
