"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, FileText, ArrowRight, X, Sparkles, Activity, ShieldCheck, Microscope, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";

const tests = [
  {
    id: "WES",
    name: "Whole Exome Sequencing",
    description: "Targeted sequencing focusing on protein-coding regions.",
    mrp: "₹25,000",
    priceValue: 25000,
    depth: "100x - 150x",
    coverage: "20,000+ Genes",
    clinical: "Best for identifying known mutations in exons where 85% of disease-causing variants reside.",
    features: ["Exonic regions focus", "High clinical depth", "Cost-effective diagnostic", "Standard oncology panel"],
    differences: "Focuses only on the 1-2% of the genome that codes for proteins. Faster turnaround but misses non-coding structural variants.",
    reportPreview: "https://karkinos-reports.s3.amazonaws.com/sample_wes.pdf",
    color: "#B174AE"
  },
  {
    id: "BGE",
    name: "Blended Genome-Exome",
    description: "Hybrid architecture for comprehensive variant detection.",
    mrp: "₹38,500",
    priceValue: 38500,
    depth: "Hybrid 130x / 1x",
    coverage: "Global Architecture",
    clinical: "Combines high-depth exome precision with whole-genome structural variation detection.",
    features: ["CNV & SV detection", "Exomic precision", "Genome-wide backbone", "Enhanced diagnostic yield"],
    differences: "A unique Karkinos protocol that bridges the gap between WES and WGS, providing structural context at a lower cost than full WGS.",
    reportPreview: "https://karkinos-reports.s3.amazonaws.com/sample_bge.pdf",
    color: "#7D2C7D"
  },
  {
    id: "WGS",
    name: "Whole Genome Sequencing",
    description: "The gold standard for total genomic transparency.",
    mrp: "₹55,000",
    priceValue: 55000,
    depth: "30x - 60x",
    coverage: "3 Billion Base Pairs",
    clinical: "Uncovers variants in regulatory and intronic regions. Critical for complex oncology cases.",
    features: ["100% Genome coverage", "Regulatory region analysis", "Deep intronic detection", "Future-proof data asset"],
    differences: "Sequences the entire 3 billion base pairs. Detects variants in non-coding regions that WES and BGE might miss. Highest clinical sensitivity.",
    reportPreview: "https://karkinos-reports.s3.amazonaws.com/sample_wgs.pdf",
    color: "#7D2C7D"
  }
];

export function TestingComparison() {
  const [selectedTest, setSelectedTest] = useState<typeof tests[0] | null>(null);
  const { addItem } = useCart();

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7D2C7D]/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B174AE]/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.6em] uppercase mb-16 text-[#7D2C7D]/40 flex items-center justify-center gap-6"
        >
          <span className="w-12 h-[1px] bg-[#7D2C7D]/10" />
          <Sparkles className="w-3 h-3" />
          Clinical Intelligence // Protocol Matrix
          <span className="w-12 h-[1px] bg-[#7D2C7D]/10" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl md:text-9xl font-display font-black mb-32 leading-[0.85] tracking-tighter text-center text-[#7D2C7D]"
        >
          SELECT <br />
          <span className="text-[#B174AE]/20">PRECISION.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tests.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="bg-[#FBF5FC]/50 border border-[#7D2C7D]/10 p-10 relative group backdrop-blur-sm flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#7D2C7D] to-[#B174AE] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[11px] tracking-[0.4em] text-[#7D2C7D]/40">0{idx + 1} // {test.id}</span>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-1 bg-[#7D2C7D] text-white font-display font-bold text-lg"
                >
                  {test.mrp}
                </motion.div>
              </div>

              <h3 className="text-4xl font-display font-black mb-6 text-[#7D2C7D] leading-tight group-hover:tracking-tight transition-all duration-500">
                {test.name}
              </h3>
              
              <p className="text-[#7D2C7D]/70 text-sm font-medium mb-12 leading-relaxed min-h-[4rem]">
                {test.description}
              </p>

              <div className="space-y-6 mb-12 p-6 bg-white/50 border border-[#7D2C7D]/5">
                <div className="flex items-center gap-4">
                  <Activity className="w-4 h-4 text-[#B174AE]" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#7D2C7D]/40">Clinical Scope</span>
                    <span className="text-xs font-bold text-[#7D2C7D]">{test.coverage}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Microscope className="w-4 h-4 text-[#B174AE]" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#7D2C7D]/40">Sequencing Depth</span>
                    <span className="text-xs font-bold text-[#7D2C7D]">{test.depth}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <button 
                  onClick={() => addItem({
                    id: test.id,
                    name: test.name,
                    price: test.mrp,
                    priceValue: test.priceValue,
                    description: test.description,
                    color: test.color
                  })}
                  className="w-full py-5 bg-[#7D2C7D] text-white border border-[#7D2C7D] font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-[#6A256A] transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-[#7D2C7D]/20 group/btn"
                >
                  Initiate Protocol
                  <ShoppingCart className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setSelectedTest(test)}
                  className="w-full py-5 bg-white border border-[#7D2C7D]/20 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-[#FBF5FC] text-[#7D2C7D] transition-all duration-500 flex items-center justify-center gap-3"
                >
                  Technical Analysis
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison Modal */}
      <AnimatePresence>
        {selectedTest && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-xl bg-black/40"
            onClick={() => setSelectedTest(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-[#7D2C7D]/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTest(null)}
                className="absolute top-8 right-8 p-2 hover:bg-[#FBF5FC] rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6 text-[#7D2C7D]" />
              </button>

              <div className="p-12 md:p-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-16 border-b border-[#7D2C7D]/5">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.5em] text-[#7D2C7D]/40 uppercase block mb-4">Protocol Selection</span>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-[#7D2C7D] tracking-tighter">{selectedTest.id}</h3>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] tracking-[0.5em] text-[#7D2C7D]/40 uppercase block mb-4">MRP Rate</span>
                    <span className="text-4xl font-display font-black text-[#7D2C7D]">{selectedTest.mrp}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                  <div>
                    <h4 className="font-mono text-[11px] font-black uppercase tracking-[0.4em] text-[#B174AE] mb-8 flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4" />
                      Clinical Utility
                    </h4>
                    <p className="text-lg text-[#7D2C7D] font-medium leading-relaxed mb-8">
                      {selectedTest.clinical}
                    </p>
                    <ul className="space-y-4">
                      {selectedTest.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-xs font-bold text-[#7D2C7D]/60 uppercase tracking-widest">
                          <Check className="w-4 h-4 text-[#B174AE]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] font-black uppercase tracking-[0.4em] text-[#B174AE] mb-8 flex items-center gap-3">
                      <Info className="w-4 h-4" />
                      Key Differences
                    </h4>
                    <p className="text-sm text-[#7D2C7D]/70 font-medium leading-relaxed bg-[#FBF5FC] p-8 border-l-4 border-[#7D2C7D]">
                      {selectedTest.differences}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => {
                      addItem({
                        id: selectedTest.id,
                        name: selectedTest.name,
                        price: selectedTest.mrp,
                        priceValue: selectedTest.priceValue,
                        description: selectedTest.description,
                        color: selectedTest.color
                      });
                      setSelectedTest(null);
                    }}
                    className="flex-1 py-6 bg-[#7D2C7D] text-white font-mono text-xs tracking-[0.4em] uppercase hover:bg-[#6A256A] transition-colors shadow-lg shadow-[#7D2C7D]/20 flex items-center justify-center gap-3"
                  >
                    Confirm Enrollment
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <button className="flex-1 py-6 border border-[#7D2C7D] text-[#7D2C7D] font-mono text-xs tracking-[0.4em] uppercase hover:bg-[#FBF5FC] transition-colors">
                    Consult Specialist
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
