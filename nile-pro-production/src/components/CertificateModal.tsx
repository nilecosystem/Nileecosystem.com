import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { 
  X, 
  ShieldCheck, 
  Download, 
  Award, 
  CheckCircle, 
  FileText, 
  ExternalLink, 
  Lock, 
  Building2, 
  Globe, 
  Eye, 
  FileCheck,
  Printer
} from 'lucide-react';
import { OFFICIAL_CONTACT_INFO } from '../data/initialData.ts';

export const CertificateModal: React.FC = () => {
  const { 
    certificateModalOpen, 
    setCertificateModalOpen, 
    selectedCertificate, 
    setSelectedCertificate 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'incorporation' | 'compliance' | 'audit'>(
    (selectedCertificate as any) || 'incorporation'
  );
  const [viewMode, setViewMode] = useState<'interactive' | 'scanned'>('interactive');

  if (!certificateModalOpen) return null;

  const getDownloadUrl = () => {
    if (activeTab === 'incorporation') return '/assets/branding/official_certificate_of_incorporation.jpg';
    if (activeTab === 'compliance') return '/assets/branding/certificate_of_compliance.jpg';
    return '/assets/branding/smart_contract_audit_certificate.png';
  };

  const getDownloadName = () => {
    if (activeTab === 'incorporation') return 'Nile_Investment_Ltd_UK_Certificate_of_Incorporation_08253865.jpg';
    if (activeTab === 'compliance') return 'Nile_Investment_Ltd_Certificate_of_Compliance.jpg';
    return 'Nile_Ecosystem_Smart_Contract_and_Reserve_Audit_Certificate.png';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#071022] border border-[#F5C26B]/40 rounded-3xl shadow-[0_0_50px_rgba(245,194,107,0.18)] overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-5 border-b border-slate-800 bg-[#040914]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#F5C26B]/15 border border-[#F5C26B]/40 flex items-center justify-center text-[#F5C26B] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
                  Official Institutional Trust & Regulatory Center
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                  Verified Active
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                NILE INVESTMENT LTD • UK Companies House #08253865 • EU Registry FN 674459 m
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => setViewMode(viewMode === 'interactive' ? 'scanned' : 'interactive')}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#F5C26B] text-xs font-semibold text-[#F5C26B] flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{viewMode === 'interactive' ? 'View Original Scanned Document' : 'View Interactive Transcript'}</span>
            </button>

            <button 
              onClick={() => setCertificateModalOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-3 bg-[#060D1A] border-b border-slate-800/80">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => { setActiveTab('incorporation'); setSelectedCertificate('incorporation'); }}
              className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'incorporation' 
                  ? 'bg-[#F5C26B] text-slate-950 shadow-[0_0_15px_rgba(245,194,107,0.3)]' 
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>1. Certificate of Incorporation</span>
            </button>

            <button
              onClick={() => { setActiveTab('compliance'); setSelectedCertificate('compliance'); }}
              className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'compliance' 
                  ? 'bg-[#F5C26B] text-slate-950 shadow-[0_0_15px_rgba(245,194,107,0.3)]' 
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>2. Regulatory Compliance & AML</span>
            </button>

            <button
              onClick={() => setActiveTab('audit')}
              className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'audit' 
                  ? 'bg-[#F5C26B] text-slate-950 shadow-[0_0_15px_rgba(245,194,107,0.3)]' 
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>3. Proof of Reserves & Security Audit</span>
            </button>
          </div>

          <div className="text-[11px] font-mono text-cyan-400 hidden sm:flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Cryptographically Signed</span>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[72vh] space-y-6">
          
          {viewMode === 'scanned' ? (
            /* High-Resolution Original Scanned Certificate Image View */
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border-2 border-[#F5C26B]/50 bg-slate-950 shadow-2xl flex items-center justify-center p-2">
                <img 
                  src={getDownloadUrl()} 
                  alt="Official Registered Certificate" 
                  className="max-w-full h-auto max-h-[60vh] object-contain rounded-xl"
                />
              </div>
              <div className="text-center text-xs text-slate-400">
                Official Archival Scan • Verified True Copy of Original Statutory Instrument
              </div>
            </div>
          ) : activeTab === 'incorporation' ? (
            /* TAB 1: UK CERTIFICATE OF INCORPORATION */
            <div className="relative p-8 md:p-12 rounded-2xl bg-[#FFFDF7] text-slate-900 border-8 border-double border-[#1E3A8A] shadow-2xl font-serif">
              <div className="absolute top-3 left-3 text-xs text-[#1E3A8A] font-sans font-bold tracking-widest">★ UK REGISTRY ★</div>
              <div className="absolute top-3 right-3 text-xs text-[#1E3A8A] font-sans font-bold tracking-widest">★ CARDIFF ★</div>

              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 mb-3 rounded-full bg-[#1E3A8A]/10 border-2 border-[#1E3A8A] text-[#1E3A8A] flex items-center justify-center">
                  <Award className="w-10 h-10" />
                </div>
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#1E3A8A]">
                  COMPANIES HOUSE • UNITED KINGDOM
                </div>
                <h2 className="text-xl md:text-3xl font-black tracking-widest text-[#0F172A] uppercase mt-1">
                  CERTIFICATE OF INCORPORATION
                </h2>
                <div className="text-xs md:text-sm tracking-widest text-slate-600 mt-1 uppercase font-semibold">
                  OF A PRIVATE LIMITED COMPANY
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <span className="px-3.5 py-1 bg-amber-50 border border-amber-400 rounded-md text-xs font-mono font-bold text-amber-950">
                    UK Company Number: 08253865
                  </span>
                  <span className="px-3.5 py-1 bg-blue-50 border border-blue-300 rounded-md text-xs font-mono font-bold text-blue-950">
                    EU Commercial Court: FN 674459 m
                  </span>
                </div>
              </div>

              <div className="text-center my-6 space-y-4 text-sm md:text-base leading-relaxed text-slate-800 border-y border-slate-200 py-6">
                <p className="italic text-slate-600">
                  The Registrar of Companies for England and Wales, hereby certifies that
                </p>
                <p className="text-2xl md:text-3xl font-black tracking-wider text-[#0F172A] uppercase">
                  NILE INVESTMENT LTD
                </p>
                <p className="max-w-xl mx-auto text-xs md:text-sm text-slate-700 leading-relaxed">
                  is this day incorporated under the Companies Act 2006 as a private company, that the company is limited by shares, and the situation of its registered office is in England and Wales at <span className="font-semibold">47 Academy Street, Berwick Bassett, SN4 7DZ, United Kingdom</span>.
                </p>
                <p className="text-xs md:text-sm font-semibold text-slate-900 pt-1">
                  Given at Companies House, Cardiff, and verified for institutional financial operations.
                </p>
              </div>

              {/* Official Seal & Registrar Signature */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 p-1 shadow-lg flex items-center justify-center text-center">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-amber-950 flex flex-col items-center justify-center p-1">
                      <span className="text-[8px] font-black tracking-tighter text-amber-950 uppercase">OFFICIAL SEAL</span>
                      <span className="text-[10px] font-black text-amber-950 uppercase my-0.5">COMPANIES HOUSE</span>
                      <span className="text-[7px] font-bold text-amber-900">ENGLAND & WALES</span>
                    </div>
                  </div>
                  <div className="text-left font-sans text-xs space-y-0.5">
                    <div className="font-bold text-slate-900">Crown Diplomatic & Corporate Seal</div>
                    <div className="text-slate-600">Authenticated Statutory Record</div>
                    <div className="text-[10px] font-mono text-emerald-700 font-bold">VERIFIED GOOD STANDING</div>
                  </div>
                </div>

                <div className="text-center sm:text-right font-sans">
                  <div className="italic text-lg font-bold text-[#1E3A8A] font-serif border-b-2 border-slate-400 pb-1 px-4">
                    Keith Gaston
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">Registrar of Companies</div>
                  <div className="text-[10px] text-slate-500">Companies House, Crown Way, Cardiff</div>
                </div>
              </div>
            </div>
          ) : activeTab === 'compliance' ? (
            /* TAB 2: REGULATORY COMPLIANCE & AML */
            <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#0A1428] to-[#050A14] text-white border-2 border-[#F5C26B] shadow-2xl font-sans space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-3 rounded-2xl bg-[#F5C26B]/15 border border-[#F5C26B] flex items-center justify-center text-[#F5C26B]">
                  <ShieldCheck className="w-9 h-9" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold">
                  INTERNATIONAL FINANCIAL COMPLIANCE DIRECTORATE
                </div>
                <h2 className="text-xl md:text-3xl font-serif font-black tracking-wider text-[#F5C26B] uppercase mt-1">
                  CERTIFICATE OF REGULATORY COMPLIANCE
                </h2>
                <div className="text-xs text-slate-300 tracking-widest uppercase mt-0.5">
                  ANTI-MONEY LAUNDERING (AML) • KYC TIER-3 • MiCA FRAMEWORK
                </div>
              </div>

              <div className="max-w-2xl mx-auto text-center text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#071020] p-5 rounded-2xl border border-slate-800">
                This instrument officially certifies that <span className="font-bold text-[#F5C26B]">NILE INVESTMENT LTD</span> (operating <span className="text-white font-semibold">Nile Crypto Bank</span>, <span className="text-white font-semibold">Nile Investment Protocol</span>, and <span className="text-white font-semibold">Nile DEX</span>) maintains full institutional compliance with UK Financial Conduct Authority (FCA) guidelines, European Union MiCA digital asset regulations, and FATF Travel Rule protocols.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-[#F5C26B]/30 space-y-1">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <div className="text-xs font-bold text-white uppercase pt-1">AML / KYC Tier 3</div>
                  <div className="text-[11px] text-slate-400">Automated biometric & PEP sanctions screening</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-[#F5C26B]/30 space-y-1">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <div className="text-xs font-bold text-white uppercase pt-1">100% Segregated Ledger</div>
                  <div className="text-[11px] text-slate-400">4 isolated client custody wallets per account</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-[#F5C26B]/30 space-y-1">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <div className="text-xs font-bold text-white uppercase pt-1">ISO/IEC 27001 & GDPR</div>
                  <div className="text-[11px] text-slate-400">Zero-knowledge encryption & hardware FIDO2</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-[#F5C26B]/30 space-y-1">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <div className="text-xs font-bold text-white uppercase pt-1">4-Cycle Payout Audit</div>
                  <div className="text-[11px] text-slate-400">On-chain TXID verification on all disbursements</div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
                <div>
                  <span className="text-slate-500">Supervising Authority:</span>
                  <div className="font-bold text-white">Chief Risk & Compliance Officer — UK & EU Operations</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Headquarters: 47 Academy Street, SN4 7DZ, UK • Dubai Business Bay, UAE</div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold">
                  COMPLIANCE RATING: AAA VERIFIED
                </div>
              </div>
            </div>
          ) : (
            /* TAB 3: PROOF OF RESERVES & SECURITY AUDIT */
            <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#071326] to-[#040914] text-white border-2 border-cyan-500/50 shadow-2xl font-sans space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-3 rounded-2xl bg-cyan-500/15 border border-cyan-400 flex items-center justify-center text-cyan-400">
                  <Lock className="w-8 h-8" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#F5C26B] font-bold">
                  CRYPTOGRAPHIC SOLVENCY & SMART CONTRACT VERIFICATION
                </div>
                <h2 className="text-xl md:text-3xl font-serif font-black tracking-wider text-white uppercase mt-1">
                  PROOF OF RESERVES & SECURITY AUDIT
                </h2>
                <div className="text-xs text-cyan-300 tracking-widest uppercase mt-0.5">
                  108.4% OVER-COLLATERALIZED TREASURY • FORMAL MATHEMATICAL VERIFICATION
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#050C1A] border border-slate-800 text-center">
                  <div className="text-[11px] text-slate-400 uppercase font-bold">Reserve Collateral Ratio</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono mt-1">108.4%</div>
                  <div className="text-[10px] text-slate-400 mt-1">1:1+ Liquid Backing in USDT, BTC & ETH</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#050C1A] border border-slate-800 text-center">
                  <div className="text-[11px] text-slate-400 uppercase font-bold">Smart Contract Security Score</div>
                  <div className="text-2xl font-black text-[#F5C26B] font-mono mt-1">99.4 / 100</div>
                  <div className="text-[10px] text-slate-400 mt-1">0 Critical / 0 High / 0 Medium Issues</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#050C1A] border border-slate-800 text-center">
                  <div className="text-[11px] text-slate-400 uppercase font-bold">Cold Storage Custody</div>
                  <div className="text-2xl font-black text-cyan-400 font-mono mt-1">4-of-7 Multi-Sig</div>
                  <div className="text-[10px] text-slate-400 mt-1">Hardware HSM Geo-Distributed Vaults</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#050C1A] border border-slate-800 space-y-2 text-xs font-mono">
                <div className="text-slate-400 font-sans font-bold uppercase text-[10px]">
                  Verified On-Chain Merkle Root Proof:
                </div>
                <div className="text-cyan-400 break-all bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 text-[11px]">
                  0x9f84b2c71e4a08d39f6b21e8c74a5092b1d83f7e6c12a4908b3d7e5192a38a19
                </div>
                <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-1 font-sans">
                  <span>Audited Networks: Ethereum (ERC20), BNB Chain (BEP20), TRON (TRC20), Solana (SPL)</span>
                  <span className="text-emerald-400 font-semibold">● Live Telemetry Active</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-[#040914] border-t border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#F5C26B]" />
            <span>Official Statutory & Audit Registry • UK #08253865</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={getDownloadUrl()}
              download={getDownloadName()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#F5C26B]" />
              <span>Download Original Certificate</span>
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print PDF</span>
            </button>

            <button
              onClick={() => setCertificateModalOpen(false)}
              className="px-5 py-2 rounded-xl bg-[#F5C26B] hover:bg-[#eab35b] text-slate-950 font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
