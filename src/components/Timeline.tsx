"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, UserCheck, MessageSquare, Award, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Calendar,
    title: "Initial Consultation",
    description: "Expert geneticists define your diagnostic roadmap and technical alignment.",
    day: "Day 01",
    id: "ARCH-01"
  },
  {
    icon: UserCheck,
    title: "Clinical Extraction",
    description: "Professional sample collection using clinical-grade protocols for high-depth coverage.",
    day: "Day 07",
    id: "ARCH-02"
  },
  {
    icon: Award,
    title: "Genomic Synthesis",
    description: "Delivery of your comprehensive genomic dossier with clinical interpretation.",
    day: "Day 30",
    id: "ARCH-03"
  },
  {
    icon: MessageSquare,
    title: "Post-Test Consultation",
    description: "A definitive clinical session to translate genomic data into actionable health strategies.",
    day: "Day 35",
    id: "ARCH-04"
  }
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="about" className="py-24 relative bg-white border-t border-[#7D2C7D]/5 overflow-hidden">
      {/* Background Cinematic Texture */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#7D2C7D]/[0.03]" />
        <div className="absolute top-0 left-0 w-full h-full nolan-grid opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] tracking-[0.5em] uppercase mb-8 text-[#7D2C7D]/40 flex items-center gap-4"
            >
              <span className="w-8 h-[1px] bg-[#7D2C7D]/20" />
              Section 04 // Care Protocol
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-display font-black leading-[0.85] text-[#7D2C7D] tracking-tighter"
            >
              PRECISION <br />
              <span className="text-[#B174AE]/20">MILESTONES.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-xs pt-4"
          >
            <div className="w-full h-[1px] bg-[#7D2C7D] mb-8 origin-left scale-x-50" />
            <p className="text-[#7D2C7D]/60 text-base leading-relaxed font-sans font-medium">
              Genome sequencing is a definitive clinical milestone. We provide 
              comprehensive post-test consultation to translate genomic data 
              into actionable health strategies.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Animated Central Axis */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#7D2C7D]/[0.05] hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#7D2C7D] z-10 hidden md:block" 
          />

          <div className="space-y-32 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center justify-center w-full group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-1/2 px-12 mb-12 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-[9px] tracking-[0.4em] text-[#7D2C7D] font-bold uppercase py-1 px-3 border border-[#7D2C7D]/10">
                        {step.day}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.2em] text-[#7D2C7D]/20 uppercase">{step.id}</span>
                    </div>
                    
                    <h3 className="text-3xl font-display font-black mb-6 uppercase tracking-tight text-[#7D2C7D] group-hover:text-[#B174AE] transition-colors duration-500">
                      {step.title}
                    </h3>
                    
                    <p className="text-[#7D2C7D]/60 text-sm leading-relaxed max-w-sm font-sans font-medium">
                      {step.description}
                    </p>
                    
                    <motion.div 
                      whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                      className="mt-8 flex items-center gap-2 font-mono text-[8px] tracking-[0.4em] uppercase text-[#7D2C7D] cursor-pointer"
                    >
                      Protocol Details <ArrowUpRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </div>

                {/* Center Point */}
                <div className="relative z-20 w-16 h-16 flex items-center justify-center shrink-0 mx-8 md:mx-0">
                  <motion.div 
                    whileInView={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-[#7D2C7D]/10 bg-white shadow-xl" 
                  />
                  <div className="absolute inset-2 border border-[#7D2C7D]/[0.05]" />
                  <step.icon className="w-5 h-5 text-[#7D2C7D] relative z-10" />
                  
                  {/* Indicator lines */}
                  <div className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-[#7D2C7D]/10 w-12 hidden md:block ${index % 2 === 0 ? 'right-full' : 'left-full'}`} />
                </div>

                {/* Empty Side for spacing */}
                <div className="w-full md:w-1/2 px-12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
