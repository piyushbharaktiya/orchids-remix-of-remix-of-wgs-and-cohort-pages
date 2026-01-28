"use client";

import { motion } from "framer-motion";
import { Microscope, Pill, Brain, Heart, Zap, FileText, ArrowRight } from "lucide-react";

const features = [
  {
    id: "01",
    icon: Microscope,
    title: "100% DNA Decoding",
    description: "Sequencing 100% of your genome with 30x clinical-grade coverage. No compromises.",
    metadata: "Coverage: 30X / Method: WGS"
  },
  {
    id: "02",
    icon: Pill,
    title: "Pharmacogenomics",
    description: "Analyze response to 300+ medications. Precisely engineered treatment plans.",
    metadata: "Compounds: 300+ / Risk: Verified"
  },
  {
    id: "03",
    icon: Brain,
    title: "Neurological Architecture",
    description: "Mapping cognitive predispositions and neurological health landscapes.",
    metadata: "System: CNS / Detail: High"
  },
  {
    id: "04",
    icon: Heart,
    title: "Cardiovascular Design",
    description: "Identifying cardiac risks before they manifest. Architectural prevention.",
    metadata: "System: CV / Protocol: Predictive"
  },
  {
    id: "05",
    icon: Zap,
    title: "Dynamic Evolution",
    description: "Automatic re-analysis as genomic science advances. Your data stays current.",
    metadata: "Update: Auto / Cycle: Continuous"
  },
  {
    id: "06",
    icon: FileText,
    title: "Clinical Dossiers",
    description: "Physician-ready reports designed for immediate clinical integration.",
    metadata: "Format: PDF/JSON / Auth: Clinical"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function Features() {
  return (
    <section id="genomics" className="py-48 relative bg-white border-t border-black/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] tracking-[0.5em] uppercase mb-8 text-black/40 flex items-center gap-4"
            >
              <span className="w-8 h-[1px] bg-black/20" />
              Section 02 // Capability Grid
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-display font-black leading-[0.85] text-black tracking-tighter"
            >
              ARCHITECTURAL <br />
              <span className="text-zinc-200">PRECISION.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="lg:max-w-xs"
          >
            <p className="text-zinc-400 font-sans text-base leading-relaxed mb-8">
              We go beyond ancestry. Codexa provides the most comprehensive genetic analysis 
              available, treating your DNA as a blueprint for an optimized future.
            </p>
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-black font-bold flex items-center gap-3">
              View Methodology <ArrowRight className="w-3 h-3" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-black/5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-12 border-r border-b border-black/5 relative overflow-hidden hover:bg-black transition-all duration-700 ease-[0.16,1,0.3,1]"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-black/20 group-hover:text-white/40 transition-colors">
                    {feature.id}
                  </div>
                  <feature.icon className="w-5 h-5 text-black/10 group-hover:text-white/20 transition-all duration-700 group-hover:rotate-12 group-hover:scale-125" />
                </div>
                
                <h3 className="text-2xl font-display font-black mb-6 tracking-tight uppercase group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed mb-12 max-w-[260px] transition-colors">
                  {feature.description}
                </p>

                <div className="font-mono text-[8px] tracking-[0.4em] uppercase text-black/10 group-hover:text-white/10 transition-colors pt-6 border-t border-black/5 group-hover:border-white/5">
                  {feature.metadata}
                </div>
              </div>
              
              {/* Animated hover background */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5d1c5d] to-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left delay-300 z-20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
