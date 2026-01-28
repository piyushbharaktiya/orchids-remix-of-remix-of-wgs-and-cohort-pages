"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, Dna, FileText, Download, Home, Clock, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-background pt-[100px] md:pt-[120px] pb-[60px] md:pb-[80px]">
        {/* Background Genetic Illustration */}
        <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: 0.25,
          scale: 1.1,
          rotate: 360
        }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut" },
          scale: { duration: 1.5, ease: "easeOut" },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
        className="absolute -top-20 -right-20 w-[60%] h-[120%] pointer-events-none z-0 flex items-center justify-center overflow-hidden">
  
          <div className="relative w-full h-full flex items-center justify-center">
            <Dna className="w-[100%] h-[100%] text-primary opacity-20 blur-[1px]" strokeWidth={0.3} />
            <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center">
  
              <Dna className="w-[70%] h-[70%] text-secondary opacity-30 blur-[2px]" strokeWidth={0.2} />
            </motion.div>
          </div>
        </motion.div>
  
        <div className="container relative z-10 px-6 mx-auto max-w-[1280px]">
          {/* Headline */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[850px] mb-10 md:mb-16">
  
            <div className="pill-tag mb-4 md:mb-6">Cutting-Edge Genetic Testing</div>
              <h1 className="text-[40px] md:text-[64px] font-bold tracking-[-0.02em] leading-[1.1] text-primary">
                Unlock your health <br className="hidden md:block" />
                DNA story with <motion.span
              initial={{ color: "var(--color-primary)" }}
              animate={{ color: "var(--color-accent)" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="font-italic-serif font-medium italic">
  
                  Precision.
                </motion.span>
              </h1>
            <p className="mt-4 md:mt-6 text-[16px] md:text-[18px] text-muted-foreground max-w-[600px] !whitespace-pre-line">Karkinos Healthcare brings you the <span className="text-accent font-bold">world's most advanced & comprehensive Genetic Test: Whole Genome Sequencing (WGS)</span> to identify health risks before they become symptoms.
            </p>
          </motion.div>

        {/* Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px]">
            
            {/* WGS Test Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-[24px] overflow-hidden card-shadow flex flex-col justify-between group cursor-pointer transition-all duration-300 border border-border">

              <div className="p-8 pb-4 flex justify-between items-start">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary text-white text-[12px] font-bold px-3 py-1.5 rounded-full">
                      Gold Standard
                    </span>
                    <span className="bg-white border border-border text-primary text-[12px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <ShieldCheck size={14} />
                      100% Comprehensive
                    </span>
                  </div>
                  <h3 className="text-[24px] font-bold text-primary leading-[1.2]">
                    Whole Genome Sequencing (WGS)
                  </h3>
                    <p className="text-[14px] text-muted-foreground !whitespace-pre-line">Sequences all 3 billion base pairs of your DNA for the most complete health profile possible, so that you can make confident and informed choices.

                  </p>
                    
                    <div className="mt-6 flex flex-col gap-3">
                      <div className="flex items-center gap-3 text-[14px] text-primary/80 font-medium">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <Home size={14} />
                        </div>
                        At home collection
                      </div>
                      <div className="flex items-center gap-3 text-[14px] text-primary/80 font-medium !whitespace-pre-line">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <Clock size={14} />
                        </div>Results in 14 working days

                    </div>
                      <div className="flex items-center gap-3 text-[14px] text-primary/80 font-medium !whitespace-pre-line">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <Users size={14} />
                        </div>Post test genetic counselling
                      </div>
                      <div className="flex items-center gap-3 text-[14px] text-primary/80 font-medium">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <Zap size={14} />
                        </div>
                        30x clinical-grade sequencing depth
                      </div>
                      <div className="flex items-center gap-3 text-[14px] text-primary/80 font-medium !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <ShieldCheck size={14} />
                        </div>Your report is 100% secure with us

                    </div>
                    </div>
                  </div>
                </div>
              
              <div className="px-8 pb-8 mt-auto flex flex-col gap-4">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[12px] font-bold text-muted-foreground line-through !whitespace-pre-line">₹1,19,999</span>
                    <div className="text-[28px] font-bold text-primary !whitespace-pre-line">₹19,999*</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn-primary">

                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Comparison/Awareness Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(0, 64, 128, 0.03)" }}
              className="bg-accent/10 rounded-[24px] overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 border border-accent/20">

                <div className="p-8 flex flex-col h-full">
                  <div className="pill-tag text-accent border-accent mb-4">Awareness Session</div>
                  <p className="text-[22px] font-bold text-primary mb-2 !whitespace-pre-line">Genetic Counselling Orientation</p>
                  <p className="text-[15px] text-muted-foreground mb-6 !whitespace-pre-line">Have doubts regarding your genetic profile or this test? Join our free awareness session led by expert genetic counsellors.

                </p>
                    <a href="#orientation" className="btn-secondary w-fit mb-8 group-hover:scale-105 transition-transform">
                      Register for Next Session <ArrowUpRight size={18} strokeWidth={2.5} />
                    </a>
                  
                  <div className="mt-auto bg-white/50 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between border border-white/60">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                        <FileText size={22} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider leading-none mb-1">Sample Report</p>
                        <p className="text-[14px] font-bold text-primary leading-none">Comprehensive WGS Insights</p>
                      </div>
                    </div>
                    <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "var(--color-primary)", color: "white" }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl bg-white text-primary border border-border shadow-sm transition-colors"
                    title="Download Sample Report">

                      <Download size={20} />
                    </motion.button>
                  </div>
                </div>
            </motion.div>

          </div>

          {/* Trust Labels */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <p className="text-[14px] font-bold text-primary/60 uppercase tracking-widest">Global Standards & Accreditations</p>
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-3 transition-all">
                <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1.5 shadow-sm border border-border">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/8/87/NABL_India_Logo.png"
                    alt="NABL Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    unoptimized />

                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[15px] leading-tight">NABL</span>
                  <span className="text-[9px] text-muted-foreground uppercase font-semibold">Accredited</span>
                </div>
              </div>

              <div className="flex items-center gap-3 transition-all">
                <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1.5 shadow-sm border border-border">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/7/75/College_of_American_Pathologists_logo.svg"
                    alt="CAP Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    unoptimized />

                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[15px] leading-tight">CAP</span>
                  <span className="text-[9px] text-muted-foreground uppercase font-semibold">Accredited</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;