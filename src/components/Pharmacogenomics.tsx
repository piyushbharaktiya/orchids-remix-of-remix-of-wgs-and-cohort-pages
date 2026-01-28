"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Pill, AlertCircle, CheckCircle2, Info, Activity, Database, Shield } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState } from "react";

const data = [
  { name: "Optimal Response", value: 65, color: "#7D2C7D", description: "Standard therapeutic efficacy expected." },
  { name: "Risk Identified", value: 20, color: "#B174AE", description: "Potential adverse drug reactions detected." },
  { name: "Metabolic Variant", value: 15, color: "#5d1c5d", description: "Altered metabolism requiring dosage adjustment." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Pharmacogenomics() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="lab" className="py-24 bg-white relative overflow-hidden border-t border-[#7D2C7D]/5">
      {/* Cinematic Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7D2C7D] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B174AE] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={itemVariants}
              className="font-mono text-[10px] tracking-[0.5em] uppercase mb-8 text-[#7D2C7D]/40 flex items-center gap-4"
            >
              <Database className="w-3 h-3" />
              Module 03 // Pharmacogenomics
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-display font-black mb-12 leading-[0.85] text-[#7D2C7D] tracking-tighter"
            >
              MOLECULAR <br />
              <span className="text-[#B174AE]/20">CALIBRATION.</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-[#7D2C7D]/60 mb-16 leading-relaxed max-w-xl font-sans font-medium"
            >
              Genetic variation dictates pharmacological efficacy. We analyze 300+ clinical 
              compounds against your exome data to ensure zero-error prescription 
              architecture.
            </motion.p>
            
            <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6">
              {[
                { icon: CheckCircle2, text: "Clinical compound verification", id: "01", status: "Verified" },
                { icon: AlertCircle, text: "Adverse metabolic detection", id: "02", status: "Active" },
                { icon: Info, text: "Precision dosage optimization", id: "03", status: "Live" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-8 border border-[#7D2C7D]/5 bg-[#FBF5FC]/30 backdrop-blur-sm group cursor-pointer hover:border-[#7D2C7D]/20 transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full border border-[#7D2C7D]/5 flex items-center justify-center group-hover:bg-[#7D2C7D] group-hover:border-[#7D2C7D] transition-all duration-500">
                      <item.icon className="w-4 h-4 text-[#7D2C7D]/40 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="text-sm font-bold tracking-tight uppercase block mb-1 text-[#7D2C7D]">{item.text}</span>
                      <span className="font-mono text-[9px] text-[#7D2C7D]/30 uppercase tracking-[0.2em]">Status: {item.status}</span>
                    </div>
                  </div>
                  <div className="font-mono text-[10px] text-[#7D2C7D]/20 flex flex-col items-end">
                    <span>ARCH-PGX</span>
                    <span>ID: {item.id}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square border border-[#7D2C7D]/5 p-16 flex flex-col items-center justify-center bg-white shadow-[0_40px_100px_-20px_rgba(125,44,125,0.05)] group"
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#7D2C7D]/10" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#7D2C7D]/10" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#7D2C7D]/10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#7D2C7D]/10" />
            
            <div className="absolute top-8 left-12 right-12 flex justify-between font-mono text-[9px] tracking-[0.4em] text-[#7D2C7D]/30 uppercase">
              <span>System: PGX-Core</span>
              <Activity className="w-3 h-3 text-[#7D2C7D] animate-pulse" />
              <span>Ref: WGS-30X</span>
            </div>
            
            <div className="w-full h-full relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="85%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="65%"
                    outerRadius="80%"
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        style={{ 
                          filter: activeIndex === index ? 'drop-shadow(0 0 8px rgba(125,44,125,0.2))' : 'none',
                          transition: 'all 0.5s ease'
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={() => null}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeIndex ?? 'default'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center px-12"
                  >
                    {activeIndex !== null ? (
                      <>
                        <div className="text-4xl font-display font-black mb-2 text-[#7D2C7D]">{data[activeIndex].value}%</div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#7D2C7D]/40">{data[activeIndex].name}</div>
                      </>
                    ) : (
                      <>
                        <div className="text-5xl font-display font-black mb-2 text-[#7D2C7D]">300+</div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#7D2C7D]/40">Tested Compounds</div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-12 w-full pt-16 border-t border-[#7D2C7D]/5 mt-8">
              {data.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="text-center"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <motion.div 
                    animate={{ scale: activeIndex === i ? 1.1 : 1 }}
                    className="text-2xl font-display font-black mb-2 text-[#7D2C7D]"
                  >
                    {item.value}%
                  </motion.div>
                  <div className="text-[9px] text-[#7D2C7D]/40 uppercase tracking-[0.2em] font-bold leading-tight">{item.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
