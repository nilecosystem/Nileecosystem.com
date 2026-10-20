import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { 
  Building2, 
  TrendingUp, 
  ShoppingBag, 
  ArrowLeftRight, 
  Coins, 
  Flame, 
  CreditCard, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Lock, 
  Globe, 
  Menu, 
  X, 
  ChevronDown,
  LogOut,
  User,
  ExternalLink,
  Layers
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    user, 
    balances, 
    setCertificateModalOpen,
    setSelectedCertificate,
    setWhitepaperModalOpen,
    isLoggedIn,
    setAuthModalOpen,
    logout
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [appsMenuOpen, setAppsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setAppsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#030712]/92 backdrop-blur-md border-b border-slate-800/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Left: Brand Logo (Stylized Gold Wave Emblem + NILE ECOSYSTEM) */}
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-11 h-11 rounded-xl overflow-hidden shadow-lg shadow-[#F5C26B]/20 border border-[#F5C26B]/50 bg-[#071326] p-0.5 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                src="/assets/branding/nile-official-logo.png" 
                alt="Nile Gold Logo" 
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-black tracking-wider text-[#F5C26B] leading-none">
                NILE
              </span>
              <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-slate-300 uppercase leading-tight mt-1">
                ECOSYSTEM
              </span>
            </div>
          </div>

          {/* 2. Center: Primary Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-3 text-sm font-medium">
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'home' 
                  ? 'text-[#F5C26B] font-semibold bg-[#F5C26B]/10 border-b-2 border-[#F5C26B]' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('bank')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'bank' 
                  ? 'text-[#F5C26B] font-semibold bg-[#F5C26B]/10 border-b-2 border-[#F5C26B]' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNav('presale')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer relative ${
                activeTab === 'presale' 
                  ? 'text-[#F5C26B] font-semibold bg-[#F5C26B]/10 border-b-2 border-[#F5C26B]' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Presale</span>
              <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-[#F5C26B]/20 text-[#F5C26B] rounded-full">
                Active
              </span>
            </button>

            <button
              onClick={() => { setSelectedCertificate('incorporation'); setCertificateModalOpen(true); }}
              className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Trust Center
            </button>

            <button
              onClick={() => handleNav('education')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'education' 
                  ? 'text-[#F5C26B] font-semibold bg-[#F5C26B]/10 border-b-2 border-[#F5C26B]' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Academy
            </button>

            <button
              onClick={() => handleNav('marketplace')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'marketplace' 
                  ? 'text-[#F5C26B] font-semibold bg-[#F5C26B]/10 border-b-2 border-[#F5C26B]' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Marketplace
            </button>

            <button
              onClick={() => setWhitepaperModalOpen(true)}
              className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Roadmap
            </button>

            {/* All Ecosystem Apps Dropdown (Preserving 100% of functional tabs) */}
            <div className="relative">
              <button
                onClick={() => setAppsMenuOpen(!appsMenuOpen)}
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white flex items-center gap-1.5 hover:bg-slate-800/60 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#F5C26B]" />
                <span>Ecosystem</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {appsMenuOpen && (
                <div 
                  onMouseLeave={() => setAppsMenuOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#071326] border border-slate-700/80 shadow-2xl p-2 z-50 space-y-1"
                >
                  <div 
                    onClick={() => handleNav('investment')}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#0E1E38] cursor-pointer"
                  >
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Investment Vaults</span>
                  </div>
                  <div 
                    onClick={() => handleNav('dex')}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#0E1E38] cursor-pointer"
                  >
                    <ArrowLeftRight className="w-4 h-4 text-cyan-400" />
                    <span>Nile DEX Swaps</span>
                  </div>
                  <div 
                    onClick={() => handleNav('cards')}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#0E1E38] cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4 text-purple-400" />
                    <span>Crypto Cards</span>
                  </div>
                  <div 
                    onClick={() => handleNav('token')}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#0E1E38] cursor-pointer"
                  >
                    <Coins className="w-4 h-4 text-[#F5C26B]" />
                    <span>NILE Tokenomics</span>
                  </div>
                  <div 
                    onClick={() => handleNav('referrals')}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#0E1E38] cursor-pointer"
                  >
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>10-Level Referral</span>
                  </div>
                  <div 
                    onClick={() => handleNav('kyc')}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#0E1E38] cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>KYC Verification</span>
                  </div>
                  {user.role === 'super_admin' || user.role === 'admin' ? (
                    <div 
                      onClick={() => handleNav('admin')}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/30 cursor-pointer border-t border-slate-800 mt-1"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Admin Portal</span>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </nav>

          {/* 3. Right: Language & Auth CTA Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector: English (Default 100% English) */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>English</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langMenuOpen && (
                <div 
                  onMouseLeave={() => setLangMenuOpen(false)}
                  className="absolute top-full right-0 mt-2 w-36 rounded-xl bg-[#071326] border border-slate-700/80 shadow-2xl p-1 z-50 text-xs"
                >
                  <button 
                    onClick={() => setLangMenuOpen(false)} 
                    className="w-full text-left px-3 py-1.5 rounded-lg text-white font-medium bg-[#0E1E38] flex items-center justify-between"
                  >
                    <span>English</span>
                    <span>🇬🇧</span>
                  </button>
                  <button 
                    onClick={() => setLangMenuOpen(false)} 
                    className="w-full text-left px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#0E1E38] flex items-center justify-between"
                  >
                    <span>Deutsch</span>
                    <span>🇩🇪</span>
                  </button>
                  <button 
                    onClick={() => setLangMenuOpen(false)} 
                    className="w-full text-left px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#0E1E38] flex items-center justify-between"
                  >
                    <span>Français</span>
                    <span>🇫🇷</span>
                  </button>
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#071326] border border-[#F5C26B]/30 hover:border-[#F5C26B] text-white text-xs font-semibold cursor-pointer shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F5C26B]/20 text-[#F5C26B] flex items-center justify-center font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="hidden sm:inline max-w-[100px] truncate">{user.name}</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-mono">
                    ${balances.USDT.toLocaleString()}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {userMenuOpen && (
                  <div 
                    onMouseLeave={() => setUserMenuOpen(false)}
                    className="absolute top-full right-0 mt-2 w-48 rounded-xl bg-[#071326] border border-slate-700/80 shadow-2xl p-2 z-50 space-y-1 text-xs"
                  >
                    <div 
                      onClick={() => { handleNav('profile'); setUserMenuOpen(false); }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#0E1E38] cursor-pointer"
                    >
                      <User className="w-4 h-4 text-cyan-400" />
                      <span>User Profile</span>
                    </div>
                    <div 
                      onClick={() => { window.dispatchEvent(new CustomEvent('open-dashboard-modal')); setUserMenuOpen(false); }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#0E1E38] cursor-pointer"
                    >
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <span>Financial Dashboard</span>
                    </div>
                    <div 
                      onClick={() => { logout(); setUserMenuOpen(false); }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-rose-400 hover:bg-rose-950/30 cursor-pointer border-t border-slate-800 mt-1"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => setAuthModalOpen(true, 'login')}
                  className="px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#071326]/80 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setAuthModalOpen(true, 'signup')}
                  className="px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-slate-950 bg-[#F5C26B] hover:bg-[#eab35b] shadow-[0_0_15px_rgba(245,194,107,0.3)] transition-all cursor-pointer"
                >
                  Get Started
                </button>
              </>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#071326] border-b border-slate-800 px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <button onClick={() => handleNav('home')} className="p-2 text-left rounded-lg hover:bg-slate-800 text-slate-200">Home</button>
            <button onClick={() => handleNav('bank')} className="p-2 text-left rounded-lg hover:bg-slate-800 text-slate-200">About / Bank</button>
            <button onClick={() => handleNav('presale')} className="p-2 text-left rounded-lg hover:bg-slate-800 text-[#F5C26B]">Presale</button>
            <button onClick={() => { setSelectedCertificate('incorporation'); setCertificateModalOpen(true); }} className="p-2 text-left rounded-lg hover:bg-slate-800 text-slate-200">Trust Center</button>
            <button onClick={() => handleNav('education')} className="p-2 text-left rounded-lg hover:bg-slate-800 text-slate-200">Academy</button>
            <button onClick={() => handleNav('marketplace')} className="p-2 text-left rounded-lg hover:bg-slate-800 text-slate-200">Marketplace</button>
            <button onClick={() => handleNav('investment')} className="p-2 text-left rounded-lg hover:bg-slate-800 text-emerald-400">Investments</button>
            <button onClick={() => handleNav('dex')} className="p-2 text-left rounded-lg hover:bg-slate-800 text-cyan-400">DEX Swaps</button>
            <button onClick={() => handleNav('cards')} className="p-2 text-left rounded-lg hover:bg-slate-800 text-purple-400">Crypto Cards</button>
            <button onClick={() => handleNav('referrals')} className="p-2 text-left rounded-lg hover:bg-slate-800 text-amber-400">Referrals</button>
          </div>
        </div>
      )}
    </header>
  );
};
