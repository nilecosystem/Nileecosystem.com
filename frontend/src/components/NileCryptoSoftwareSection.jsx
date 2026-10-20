import React from 'react';

export default function NileCryptoSoftwareSection() {
  const softwareList = [
    {
      id: 1,
      name: "Nile Arbitrage & Flash Bot",
      badge: "Nile Official",
      desc: "Nile Official Nile Official Nile Official Nile Official‌Nile Official Nile Official Nile Official Nile Official Nile Official.Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official‌Nile Official Nile Official Nile Official Nile Official.",
      price: "$149 USDT",
      features: ["Nile Official API Nile Official Nile Official Nile Official Nile Official", "Nile Official Nile Official Nile Official Nile Official (Nile Official Nile Official)", "Nile Official Nile Official Nile Official Stop-Loss"]
    },
    {
      id: 2,
      name: "Nile Node Validator Client",
      badge: "Nile Official Nile Official‌Nile Official",
      desc: "Nile Official‌Nile Official Nile Official Nile Official‌Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official BSC Nile Official Nile Official Nile Official‌Nile Official Nile Official‌Nile Official Nile Official Nile Official.",
      price: "$299 USDT",
      features: ["Nile Official‌Nile Official Nile Official Nile Official Nile Official", "Nile Official Nile Official Nile Official Nile Official Nile Official", "Nile Official Nile Official/Nile Official Nile Official"]
    },
    {
      id: 3,
      name: "Nile DEX Sniper & Liquidity Watcher",
      badge: "Nile Official Nile Official",
      desc: "Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official PancakeSwap Nile Official Uniswap Nile Official Nile Official Nile Official Nile Official Nile Official‌Nile Official Nile Official Nile Official Nile Official.",
      price: "$199 USDT",
      features: ["Nile Official Nile Official Nile Official Nile Official Nile Official", "Nile Official Nile Official Nile Official Nile Official Nile Official‌Nile Official‌Nile Official", "Nile Official Nile Official‌Nile Official Nile Official"]
    }
  ];

  return (
    <section id="crypto-software" className="py-24 relative overflow-hidden bg-slate-950 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Proprietary Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Nile Official Nile Official Nile Official‌Nile Official (Nile Crypto Software)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Nile Official Nile Official‌Nile Official Nile Official‌Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official‌Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official. Nile Official Nile Official‌Nile Official Nile Official Nile Official Nile Official‌Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official Nile Official.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {softwareList.map(sw => (
            <div key={sw.id} className="glass-panel glass-panel-hover p-7 rounded-3xl border border-white/10 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-nile-accent px-2.5 py-1 rounded bg-nile-accent/10 border border-nile-accent/20">
                    {sw.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-white bg-slate-900 px-2 py-1 rounded border border-white/5">
                    {sw.price}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {sw.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                  {sw.desc}
                </p>

                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  {sw.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href="#marketplace"
                  className="block text-center py-2.5 rounded-xl bg-slate-800 hover:bg-nile-accent hover:text-nile-950 text-white font-bold text-xs transition-colors"
                >
                  Nile Official Nile Official Nile Official‌Nile Official
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
