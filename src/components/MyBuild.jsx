import React, { useState } from 'react';
import { Cpu, Monitor, Zap, X, Terminal } from 'lucide-react';

const MyBuild = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="build" className="py-24 mb-24 relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        
        <div className="w-full md:w-5/12 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full text-xs text-zinc-400 font-medium">
            <Cpu className="w-4 h-4" />
            Workspace Spec
          </div>
          
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">
            Hardware & Environment
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            A sober look at the technical specifications of my workstation. Built for fast compilations, smooth multitasking, and reliable performance across any development workload.
          </p>

          <div className="pt-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sm font-medium text-white border-b border-border pb-1 hover:border-white transition-colors cursor-pointer"
            >
              View full system log &rarr;
            </button>
          </div>
        </div>

        <div className="w-full md:w-7/12">
          <div className="bg-surface rounded-2xl border border-border overflow-hidden p-1 shadow-2xl relative z-0">
            <div className="bg-background rounded-xl p-8 h-full">
              
              <div className="flex items-center justify-between border-b border-border pb-6 mb-6">
                 <div>
                    <h3 className="text-lg font-medium text-white">System Architecture</h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1">ID: MD-WS-7600/4070</p>
                 </div>
                 <div className="flex items-center gap-2 text-xs font-medium bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded-full">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                   Online
                 </div>
              </div>

              <div className="space-y-6">
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-lg hover:bg-zinc-900 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Central Processing Unit</div>
                      <div className="text-xs text-zinc-500 font-mono mt-0.5">Socket AM5, 6-Core 12-Thread</div>
                    </div>
                  </div>
                  <div className="text-zinc-300 font-mono text-sm bg-zinc-800/50 px-3 py-1 rounded border border-zinc-800">
                    AMD Ryzen 5 7600X
                  </div>
                </div>

                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-lg hover:bg-zinc-900 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Graphics Processing Unit</div>
                      <div className="text-xs text-zinc-500 font-mono mt-0.5">Ada Lovelace Architecture</div>
                    </div>
                  </div>
                  <div className="text-zinc-300 font-mono text-sm bg-zinc-800/50 px-3 py-1 rounded border border-zinc-800">
                    NVIDIA RTX 4070
                  </div>
                </div>

                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-lg hover:bg-zinc-900 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">System Memory & Storage</div>
                      <div className="text-xs text-zinc-500 font-mono mt-0.5">High Frequency Workload Specs</div>
                    </div>
                  </div>
                  <div className="text-zinc-300 font-mono text-sm bg-zinc-800/50 px-3 py-1 rounded border border-zinc-800 text-right">
                    16GB DDR5 RAM <br/>
                    1TB NVMe Gen4
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-lg bg-surface border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/50">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-zinc-400" />
                <h3 className="text-sm font-medium text-white">system_specs.log</h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 bg-[#0a0a0a]">
              <div className="font-mono text-sm text-zinc-400 space-y-3">
                <p><span className="text-emerald-500">marcodipalma@workstation</span>:<span className="text-blue-400">~</span>$ cat /proc/sys_specs</p>
                <ul className="pl-4 space-y-2 border-l border-zinc-800 ml-2 mt-4 text-zinc-300">
                  <li><span className="text-zinc-500 mr-4">CPU:</span> AMD Ryzen 5 7600X</li>
                  <li><span className="text-zinc-500 mr-4">GPU:</span> NVIDIA RTX 4070</li>
                  <li><span className="text-zinc-500 mr-4">Motherboard:</span> Gigabyte B650 Eagle AX</li>
                  <li><span className="text-zinc-500 mr-4">RAM:</span> 16GB (2x8) DDR5 5600MHz</li>
                  <li><span className="text-zinc-500 mr-4">Storage:</span> 1TB NVMe SSD</li>
                  <li><span className="text-zinc-500 mr-4">Cooling:</span> Thermalright Aqua Elite 240mm</li>
                  <li><span className="text-zinc-500 mr-4">PSU:</span> Corsair VS550</li>
                  <li><span className="text-zinc-500 mr-4">Peripherals:</span> ENDORFY Thock TKL (Kailh Box Red) & VXE Dragonfly R1 Pro</li>
                </ul>
                <p className="mt-4"><span className="text-emerald-500">marcodipalma@workstation</span>:<span className="text-blue-400">~</span>$ <span className="animate-pulse">_</span></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyBuild;
