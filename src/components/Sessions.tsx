"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Users, MapPin, CheckCircle2, Sparkles, Send, Bell, Info } from "lucide-react";

export function Sessions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section ref={containerRef} className="py-48 bg-[#FBF5FC] relative overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,#7D2C7D,#7D2C7D_1px,transparent_1px,transparent_100px)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-32">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="font-mono text-[10px] tracking-[0.6em] uppercase mb-16 text-[#7D2C7D]/40 flex items-center gap-6"
            >
              <span className="w-12 h-[1px] bg-[#7D2C7D]/10" />
              Public Awareness // Education
            </motion.div>
            
            <h2 className="text-7xl md:text-9xl font-display font-black leading-[0.8] tracking-tighter text-[#7D2C7D] mb-16">
              GENETIC <br />
              <span className="text-[#B174AE]/20">LITERACY.</span>
            </h2>
            
            <p className="text-2xl text-[#7D2C7D]/60 font-sans leading-relaxed max-w-xl mb-16 font-medium">
              Join our weekly orientation sessions. We bridge the gap between complex 
              genomic data and clinical actionability for patients and caregivers.
            </p>

            <div className="flex items-center gap-8 mb-16">
              <div className="w-16 h-16 rounded-full border border-[#7D2C7D]/10 flex items-center justify-center bg-white shadow-xl shadow-[#7D2C7D]/5">
                <Users className="w-6 h-6 text-[#7D2C7D]" />
              </div>
              <div>
                <h4 className="font-display font-black text-[#7D2C7D] text-xl uppercase italic tracking-tight">Community Focused</h4>
                <p className="text-xs font-mono uppercase tracking-widest text-[#7D2C7D]/40">1500+ Participants Monthly</p>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="sharp-button bg-[#7D2C7D] text-white border-[#7D2C7D] py-6 px-12 text-lg"
            >
              View Full Schedule
            </motion.button>
          </motion.div>

          <div className="relative">
            {/* Animated Path */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-[#7D2C7D]/10 hidden md:block">
              <motion.div 
                style={{ scaleY: pathLength, originY: 0 }}
                className="w-full h-full bg-gradient-to-b from-[#7D2C7D] to-[#B174AE]" 
              />
            </div>

            <div className="md:pl-24 space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group bg-white p-16 border border-[#7D2C7D]/5 shadow-2xl shadow-[#7D2C7D]/5 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Sparkles className="w-32 h-32 text-[#7D2C7D]" />
                </div>

                <div className="absolute -left-[101px] top-16 w-4 h-4 rounded-full bg-white border-2 border-[#7D2C7D] z-10 group-hover:bg-[#7D2C7D] transition-colors hidden md:block" />
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="px-4 py-1 bg-[#7D2C7D]/5 rounded-full font-mono text-[9px] tracking-[0.3em] uppercase text-[#7D2C7D]">
                    Primary Session
                  </div>
                  <span className="w-8 h-[1px] bg-[#7D2C7D]/10" />
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#7D2C7D]/30">Weekly Recurring</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-display font-black text-[#7D2C7D] mb-10 leading-tight">
                  Molecular Oncology & <br />
                  <span className="text-[#B174AE]">Genomic Foundations</span>
                </h3>
                
                <p className="text-[#7D2C7D]/60 text-lg font-medium mb-12 leading-relaxed italic">
                  "Demystifying WGS, BGE, and WES for the modern patient journey."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-16">
                  {[
                    "Comparative utility: WGS vs WES",
                    "Understanding MRP structures",
                    "Navigating sample reports",
                    "Genetic counseling overview"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 text-[#7D2C7D] font-mono text-[10px] tracking-wider uppercase font-bold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#B174AE]" />
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-10 pt-12 border-t border-[#7D2C7D]/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FBF5FC] flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-[#B174AE]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#7D2C7D]/40">Next Date</span>
                      <span className="text-xs font-black text-[#7D2C7D]">TUE // 11:00 AM IST</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FBF5FC] flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#B174AE]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#7D2C7D]/40">Location</span>
                      <span className="text-xs font-black text-[#7D2C7D]">KARKINOS VIRTUAL HUB</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Dynamic Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white border border-[#7D2C7D]/10 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-[#7D2C7D]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-[#7D2C7D]/5">
            <div className="lg:col-span-2 p-16 md:p-24 flex flex-col justify-center bg-[#7D2C7D]/[0.01]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#7D2C7D] flex items-center justify-center">
                  <Bell className="w-4 h-4 text-white animate-pulse" />
                </div>
                <h4 className="text-3xl font-display font-black text-[#7D2C7D] uppercase tracking-tighter">Stay Notified</h4>
              </div>
              <p className="text-[#7D2C7D]/60 text-lg font-medium leading-relaxed">
                Receive direct calendar invites and exclusive technical pre-read materials 
                before each session.
              </p>
            </div>

            <div className="lg:col-span-3 p-16 md:p-24 flex items-center">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col sm:flex-row gap-6 relative">
                  <div className="flex-1 relative">
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER_CLINICAL_EMAIL@DOMAIN.COM"
                      className="w-full bg-[#FBF5FC] border-b-2 border-[#7D2C7D]/10 px-8 py-8 font-mono text-sm tracking-[0.2em] focus:outline-none focus:border-[#7D2C7D] transition-all placeholder:text-[#7D2C7D]/20 uppercase"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2">
                      <Info className="w-4 h-4 text-[#7D2C7D]/20 cursor-help" />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className="group relative px-16 py-8 bg-[#7D2C7D] text-white font-mono text-xs tracking-[0.5em] uppercase overflow-hidden disabled:bg-[#7D2C7D]/40"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? "Processing..." : isSuccess ? "Success" : "Get Link"}
                      {!isSubmitting && !isSuccess && <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-[#B174AE]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </button>
                </div>
                <AnimatePresence>
                  {isSuccess && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-8 text-[10px] font-mono tracking-[0.3em] uppercase text-[#7D2C7D] font-bold"
                    >
                      Verification link dispatched to your inbox.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
