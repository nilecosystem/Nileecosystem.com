import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function KycVerificationModal({ isOpen, onClose }) {
  const { user } = useAuth();
  const [docType, setDocType] = useState('PASSPORT'); // PASSPORT, NATIONAL_ID, DRIVERS_LICENSE
  const [idNumber, setIdNumber] = useState('');
  const [fullName, setFullName] = useState(user ? `${user.firstName} ${user.lastName}` : '');
  const [frontImageName, setFrontImageName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idNumber) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="glass-panel w-full max-w-lg p-7 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl relative bg-slate-950">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center text-2xl">
            🪪
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white">Nile Official Nile Official Nile Official Nile Official (KYC)</h3>
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Nile Official Nile Official Nile Official Nile Official Nile Official FATF & AML
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-6">
          Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official‌Nile Official Nile Official Nile Official‌Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
            <span className="text-3xl block">✓</span>
            <div className="text-sm font-bold text-emerald-400">Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official!</div>
            <p className="text-xs text-slate-400">
              Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Nile Official Nile Official Nile Official</label>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white"
              >
                <option value="PASSPORT">Nile Official Nile Official‌Nile Official (Passport)</option>
                <option value="NATIONAL_ID">Nile Official Nile Official Nile Official (National ID)</option>
                <option value="DRIVERS_LICENSE">Nile Official Nile Official Nile Official (Driver License)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Nile Official Nile Official (Document Number)</label>
              <input
                type="text"
                required
                placeholder="e.g. A12345678"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white font-mono"
              />
            </div>

            {/* File Upload Mockup */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-dashed border-slate-700 text-center cursor-pointer hover:border-cyan-400 transition-colors">
              <span className="text-2xl block mb-1">📷</span>
              <span className="text-xs font-semibold text-slate-300 block">
                {frontImageName ? `Nile Official Nile Official Nile Official: ${frontImageName}` : "Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official"}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Nile Official‌Nile Official Nile Official: JPG, PNG, PDF (Nile Official Nile Official Nile Official)</span>
              <input
                type="file"
                className="hidden"
                id="docUpload"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setFrontImageName(e.target.files[0].name);
                  }
                }}
              />
              <label
                htmlFor="docUpload"
                className="mt-2 inline-block px-3 py-1 rounded-lg bg-slate-800 text-[11px] font-bold text-cyan-300 cursor-pointer hover:bg-slate-700"
              >
                Nile Official Nile Official Nile Official Nile Official
              </label>
            </div>

            <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-slate-400 text-[11px] leading-relaxed">
              🔒 Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official AES-256 Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official‌Nile Official.
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:brightness-110 transition-all text-xs shadow-lg shadow-cyan-500/20"
            >
              Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
