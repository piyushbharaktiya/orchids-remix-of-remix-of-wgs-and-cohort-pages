"use client";

import { Navbar } from "@/components/Navbar";
import { TestingComparison } from "@/components/TestingComparison";
import { Sessions } from "@/components/Sessions";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Database, Globe, Sparkles, ArrowDown, Shield, Zap, FileSearch, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function GeneticsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="flex min-h-screen flex-col bg-[#FBF5FC] selection:bg-[#7D2C7D] selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7D2C7D] to-[#B174AE] origin-left z-[100]"
        style={{ scaleX }}
      />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Section for Genetics */}
          <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-white">
            <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#7D2C7D_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-mono text-[10px] tracking-[0.6em] uppercase mb-16 text-[#7D2C7D]/60 flex items-center justify-center gap-6"
              >
                <span className="w-12 h-[1px] bg-[#7D2C7D]/20" />
                <Sparkles className="w-3 h-3" />
                Genomic Intelligence // Protocols
                <span className="w-12 h-[1px] bg-[#7D2C7D]/20" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl lg:text-[11rem] font-display font-black mb-16 leading-[0.8] tracking-tighter text-[#7D2C7D]"
              >
                DECODING <br />
                <span className="text-[#B174AE]/20">LIFE'S CODE.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-2xl text-[#7D2C7D]/60 mb-24 max-w-2xl mx-auto font-sans font-medium leading-relaxed"
              >
                Comprehensive genetic testing protocols designed for precision oncology. 
                Compare WGS, BGE, and WES to find the most clinical utility for your needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center gap-12"
              >
                <div className="flex gap-12 text-[10px] font-mono tracking-[0.4em] uppercase text-[#7D2C7D]/30">
                  <span className="flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    NCCN COMPLIANT
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-3 h-3" />
                    FAST TURNAROUND
                  </span>
                  <span className="flex items-center gap-2">
                    <FileSearch className="w-3 h-3" />
                    CLINICAL DEPTH
                  </span>
                </div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-8 text-[#7D2C7D]/20"
                >
                  <ArrowDown className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Protocol Comparison */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <TestingComparison />
          </motion.div>

          {/* Educational Sessions */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sessions />
          </motion.div>

          {/* Final CTA Section (Mirrored from homepage for consistency) */}
          <section className="py-48 relative overflow-hidden bg-white border-t border-[#7D2C7D]/5">
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#7D2C7D] rounded-full blur-[150px]" />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[10px] tracking-[0.6em] uppercase mb-16 text-[#7D2C7D]/40 flex items-center justify-center gap-6"
              >
                <span className="w-12 h-[1px] bg-[#7D2C7D]/10" />
                <Sparkles className="w-3 h-3" />
                Distributed Care // Future
                <span className="w-12 h-[1px] bg-[#7D2C7D]/10" />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl lg:text-[11rem] font-display font-black mb-16 leading-[0.8] tracking-tighter text-[#7D2C7D]"
              >
                PRECISION <br />
                <span className="text-[#B174AE]/20">REDEFINED.</span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-12 justify-center items-center"
              >
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="sharp-button scale-125 bg-[#7D2C7D] text-white border-[#7D2C7D]"
                >
                  Schedule a Consult
                </motion.button>
                <div className="group flex items-center gap-4 cursor-pointer font-mono text-[11px] tracking-[0.4em] uppercase py-4 text-[#7D2C7D]/40 hover:text-[#7D2C7D] transition-all">
                  <span className="w-8 h-[1px] bg-[#7D2C7D]/10 group-hover:w-12 transition-all" />
                  Technical Dossier
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-32 border-t border-[#7D2C7D] bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-32 mb-32">
                <div className="col-span-1 md:col-span-2">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-12"
                  >
                    <span className="font-display text-4xl font-black tracking-tighter uppercase text-[#7D2C7D]">
                      Karkinos<span className="text-[#B174AE]/40"> Healthcare</span>
                    </span>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#7D2C7D]/60 max-w-sm mb-16 text-base leading-relaxed font-medium"
                  >
                    A technology-led, purpose-driven oncology platform. Pioneering 
                    distributed cancer care through genomic intelligence and 
                    molecular precision.
                  </motion.p>
                  <div className="flex items-center gap-8 font-mono text-[9px] tracking-[0.4em] uppercase text-[#7D2C7D]/20">
                    <span className="flex items-center gap-2">
                      <Database className="w-3 h-3" />
                      NCCN Compliant
                    </span>
                    <span className="flex items-center gap-2">
                      <Globe className="w-3 h-3" />
                      Network: Active
                    </span>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-mono text-[10px] font-black mb-10 uppercase tracking-[0.5em] text-[#7D2C7D]">Protocols</h4>
                  <ul className="space-y-6 text-[#7D2C7D]/60 text-xs font-bold uppercase tracking-[0.2em]">
                    <li><a href="#" className="hover:text-[#7D2C7D] transition-colors block border-b border-transparent hover:border-[#7D2C7D]/10 pb-2 w-fit">Whole Genome</a></li>
                    <li><a href="#" className="hover:text-[#7D2C7D] transition-colors block border-b border-transparent hover:border-[#7D2C7D]/10 pb-2 w-fit">Blended Genome</a></li>
                    <li><a href="#" className="hover:text-[#7D2C7D] transition-colors block border-b border-transparent hover:border-[#7D2C7D]/10 pb-2 w-fit">Whole Exome</a></li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-mono text-[10px] font-black mb-10 uppercase tracking-[0.5em] text-[#7D2C7D]">Connect</h4>
                  <ul className="space-y-6 text-[#7D2C7D]/60 text-xs font-bold uppercase tracking-[0.2em]">
                    <li className="flex items-center gap-4 group cursor-pointer hover:text-[#7D2C7D] transition-colors">
                      <div className="w-8 h-8 rounded-full border border-[#7D2C7D]/5 flex items-center justify-center group-hover:bg-[#7D2C7D] group-hover:border-[#7D2C7D] transition-all">
                        <Mail className="w-3 h-3 group-hover:text-white" />
                      </div>
                      contact@karkinos.in
                    </li>
                    <li className="flex items-center gap-4 group cursor-pointer hover:text-[#7D2C7D] transition-colors">
                      <div className="w-8 h-8 rounded-full border border-[#7D2C7D]/5 flex items-center justify-center group-hover:bg-[#7D2C7D] group-hover:border-[#7D2C7D] transition-all">
                        <Phone className="w-3 h-3 group-hover:text-white" />
                      </div>
                      1800-KARKINOS
                    </li>
                    <li className="flex items-center gap-4 group cursor-pointer hover:text-[#7D2C7D] transition-colors">
                      <div className="w-8 h-8 rounded-full border border-[#7D2C7D]/5 flex items-center justify-center group-hover:bg-[#7D2C7D] group-hover:border-[#7D2C7D] transition-all">
                        <MapPin className="w-3 h-3 group-hover:text-white" />
                      </div>
                      Mumbai / Kochi / Bengaluru
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <div className="pt-16 border-t border-[#7D2C7D]/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-mono tracking-[0.3em] uppercase text-[#7D2C7D]/40">
                <p>© {new Date().getFullYear()} Karkinos Healthcare. All rights reserved.</p>
                <div className="flex gap-12">
                  <a href="#" className="hover:text-[#7D2C7D] transition-colors">[ TWITTER ]</a>
                  <a href="#" className="hover:text-[#7D2C7D] transition-colors">[ LINKEDIN ]</a>
                  <a href="#" className="hover:text-[#7D2C7D] transition-colors">[ INSTAGRAM ]</a>
                </div>
                <div className="text-[#7D2C7D]/10 hidden lg:block">
                  DISTRIBUTED CANCER CARE // PRECISION GENOMICS
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
