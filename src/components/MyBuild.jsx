import { useState, useEffect } from 'react';
import { Cpu, Monitor, X, Terminal, Server, HardDrive } from 'lucide-react';

const MyBuild = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="build" className="py-16 scroll-mt-24 border-t border-zinc-800/80">
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
        
        {/* Left Info Column */}
        <div className="w-full lg:w-5/12 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-zinc-800 rounded-full text-xs text-zinc-400 font-mono">
            <Server className="w-3.5 h-3.5 text-emerald-400" />
            <span>Beyond Code & Engineering Lab</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Workstation & Local Lab
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Beyond software development, I maintain an interest in computer architecture, thermal dynamics, 
            and hardware optimization. My workstation is tuned for rapid local compilation, Docker containerization, 
            and low-level C benchmarking.
          </p>

          <div className="pt-2">
            <button 
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 border-b border-emerald-500/40 pb-1 hover:border-emerald-400 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              <span>cat /proc/sys_specs.log</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right Hardware Spec Card */}
        <div className="w-full lg:w-7/12">
          <div className="p-1 rounded-3xl bg-surface/70 border border-zinc-800 shadow-bezel">
            <div className="bg-[#0d0d11] rounded-[calc(1.5rem-2px)] p-6 sm:p-8">
              
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-5 mb-6">
                <div>
                  <h3 className="text-base font-semibold text-white">Hardware Architecture</h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">Host ID: MD-WS-7600X/4070</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Operational
                </div>
              </div>

              <div className="space-y-4">
                {/* CPU */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-surface/50 border border-zinc-800/60 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Central Processing Unit</div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">Socket AM5 • 6 Cores, 12 Threads (5.3 GHz Boost)</div>
                    </div>
                  </div>
                  <div className="text-zinc-200 font-mono text-xs bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 shrink-0 self-start sm:self-auto">
                    AMD Ryzen 5 7600X
                  </div>
                </div>

                {/* GPU */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-surface/50 border border-zinc-800/60 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Graphics Processing Unit</div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">Ada Lovelace • 12GB GDDR6X</div>
                    </div>
                  </div>
                  <div className="text-zinc-200 font-mono text-xs bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 shrink-0 self-start sm:self-auto">
                    NVIDIA RTX 4070
                  </div>
                </div>

                {/* Memory & NVMe */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-surface/50 border border-zinc-800/60 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 shrink-0">
                      <HardDrive className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Memory & NVMe Storage</div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">High Frequency Workload Profiling</div>
                    </div>
                  </div>
                  <div className="text-zinc-200 font-mono text-xs bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 shrink-0 self-start sm:self-auto text-left sm:text-right">
                    16GB DDR5 5600MHz <br className="hidden sm:inline" />
                    1TB NVMe PCIe 4.0
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Terminal Inspection Modal */}
      {isModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div 
            className="absolute inset-0 bg-black/75 backdrop-blur-sm" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-lg bg-surface border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0d0d11]">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs font-mono font-medium text-zinc-200">system_specs.log — /proc/sysinfo</h3>
              </div>
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded"
                aria-label="Close terminal specification modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6 bg-[#0a0a0d]">
              <div className="font-mono text-xs sm:text-sm text-zinc-400 space-y-3">
                <p>
                  <span className="text-emerald-400">marcodipalma@workstation</span>
                  <span className="text-zinc-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-zinc-300">$ cat /proc/sys_specs</span>
                </p>
                
                <ul className="pl-4 space-y-2 border-l border-zinc-800 ml-2 mt-4 text-zinc-300 text-xs">
                  <li><span className="text-zinc-500 mr-3">CPU:</span> AMD Ryzen 5 7600X (6C/12T, 5.3 GHz)</li>
                  <li><span className="text-zinc-500 mr-3">GPU:</span> NVIDIA GeForce RTX 4070 12GB</li>
                  <li><span className="text-zinc-500 mr-3">Motherboard:</span> Gigabyte B650 Eagle AX (Socket AM5)</li>
                  <li><span className="text-zinc-500 mr-3">RAM:</span> 16GB (2x8) DDR5 5600MHz CL36</li>
                  <li><span className="text-zinc-500 mr-3">Storage:</span> 1TB NVMe PCIe 4.0 SSD</li>
                  <li><span className="text-zinc-500 mr-3">Cooling:</span> Thermalright Aqua Elite 240mm AIO</li>
                  <li><span className="text-zinc-500 mr-3">PSU:</span> Corsair VS550 80-Plus</li>
                  <li><span className="text-zinc-500 mr-3">Peripherals:</span> ENDORFY Thock TKL & VXE Dragonfly R1 Pro</li>
                </ul>

                <p className="mt-4 pt-2 border-t border-zinc-900 text-xs">
                  <span className="text-emerald-400">marcodipalma@workstation</span>
                  <span className="text-zinc-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-zinc-300">$ </span>
                  <span className="animate-pulse text-emerald-400">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyBuild;
