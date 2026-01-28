"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Database, Shield, Activity, Heart, Microchip, Sparkles } from "lucide-react";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60, filter: "blur(20px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const lineTransition = {
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1 },
  transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FBF5FC] nolan-grid">
      <div className="scan-line opacity-10" />
      
      {/* Cinematic Borders */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FBF5FC] via-[#FBF5FC]/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FBF5FC] via-[#FBF5FC]/80 to-transparent z-10" />
      
      {/* Dynamic Grid Background Overlay */}
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,44,125,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B174AE]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7D2C7D]/5 blur-[120px] rounded-full animate-pulse delay-700" />
      </motion.div>
      
      {/* Technical Metadata Decoration */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-16 left-12 font-mono text-[9px] tracking-[0.5em] uppercase hidden lg:flex items-center gap-4 text-[#7D2C7D]"
      >
        <Microchip className="w-3 h-3" />
        <span>Karkinos Molecular / Lab: Alpha</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute top-16 right-12 font-mono text-[9px] tracking-[0.5em] uppercase hidden lg:flex items-center gap-4 text-[#7D2C7D]"
      >
        <Heart className="w-3 h-3" />
        <span>Care Status: Distributed / Precision: 99.9%</span>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 text-center z-20">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={fadeInUp}
            className="font-mono text-[10px] tracking-[0.6em] uppercase mb-16 flex items-center gap-6"
          >
            <motion.span variants={lineTransition} className="w-16 h-[1px] bg-[#7D2C7D]/20 origin-right" />
            <span className="text-[#7D2C7D]/60 font-bold flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              The Distributed Cancer Care Model
            </span>
            <motion.span variants={lineTransition} className="w-16 h-[1px] bg-[#7D2C7D]/20 origin-left" />
          </motion.div>
  
          <div className="relative mb-16">
            <motion.h1
              variants={fadeInUp}
              className="text-7xl md:text-9xl lg:text-[11rem] font-display font-black tracking-[-0.06em] leading-[0.8] text-[#7D2C7D]"
            >
              GENOMIC <br />
              <span className="text-[#B174AE]/30">INTELLIGENCE.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 left-0 w-full h-[1px] bg-[#7D2C7D]/10"
            />
          </div>
  
          <div className="max-w-2xl mx-auto mb-20 relative">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -left-12 top-0 w-[1px] bg-[#7D2C7D]/20 hidden md:block" 
            />
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[#7D2C7D]/60 font-sans tracking-tight leading-relaxed text-center md:text-left md:pl-10 font-medium"
            >
              Harnessing the power of Whole Genome Sequencing to redefine 
              oncology. Distributed care, centralized expertise, and 
              unparalleled precision in genetic diagnosis.
            </motion.p>
          </div>
  
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-12">
            <motion.button 
              whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
              whileTap={{ scale: 0.95 }}
              className="sharp-button scale-110 bg-[#7D2C7D] text-white border-[#7D2C7D] hover:bg-transparent hover:text-[#7D2C7D] px-12 transition-all duration-500"
            >
              Explore Solutions
            </motion.button>
            <div className="group flex items-center gap-4 font-mono text-[10px] tracking-[0.4em] uppercase text-[#7D2C7D]/40 cursor-pointer hover:text-[#7D2C7D] transition-all">
              <span className="w-8 h-[1px] bg-[#7D2C7D]/10 group-hover:w-12 transition-all" />
              Genetic Awareness Sessions
            </div>
          </motion.div>
        </motion.div>
      </div>
  
      {/* Cinematic Scanning Element */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <div className="w-full h-[1px] bg-[#7D2C7D]/10 shadow-[0_0_15px_rgba(125,44,125,0.2)]" />
      </motion.div>
  
      {/* Ticker for cinematic feel */}
      <div className="absolute bottom-16 left-0 w-full overflow-hidden border-y border-[#7D2C7D]/10 py-6 bg-white/40 backdrop-blur-md">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap font-mono text-[10px] tracking-[0.5em] uppercase text-[#7D2C7D]/30"
        >
          <span className="mx-12">WGS (WHOLE GENOME) // BGE (BLENDED GENOME) // WES (WHOLE EXOME) // MRP TRANSPARENCY // PRECISION ONCOLOGY // MOLECULAR DIAGNOSTICS //</span>
          <span className="mx-12">WGS (WHOLE GENOME) // BGE (BLENDED GENOME) // WES (WHOLE EXOME) // MRP TRANSPARENCY // PRECISION ONCOLOGY // MOLECULAR DIAGNOSTICS //</span>
          <span className="mx-12">WGS (WHOLE GENOME) // BGE (BLENDED GENOME) // WES (WHOLE EXOME) // MRP TRANSPARENCY // PRECISION ONCOLOGY // MOLECULAR DIAGNOSTICS //</span>
        </motion.div>
      </div>
    </section>
  );
}
