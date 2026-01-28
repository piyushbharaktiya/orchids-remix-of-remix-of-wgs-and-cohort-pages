"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Baby,
  HeartPulse,
  Microscope,
  Pill,
  Stethoscope,
  Dna } from
'lucide-react';

const benefits = [
{
  icon: ShieldAlert,
  title: "Disease Risk Prediction",
  description: "Predict your risk for cancer, cardiovascular, neurological, and other inherited health conditions.",
  color: "from-red-500 to-rose-600",
  shadow: "shadow-red-500/10",
  bg: "bg-red-50"
},
{
  icon: Baby,
  title: "Family Planning",
  description: "Know if there are any hidden genetic conditions which you may pass on to your children so that you can plan your family with confidence.",
  color: "from-purple-500 to-indigo-600",
  shadow: "shadow-purple-500/10",
  bg: "bg-purple-50"
},
{
  icon: HeartPulse,
  title: "Proactive Wellness",
  description: "Plan proactively for your long-term health and your family’s wellbeing.",
  color: "from-rose-500 to-pink-600",
  shadow: "shadow-rose-500/10",
  bg: "bg-rose-50"
},
{
    icon: Microscope,
    title: "Incidental & Actionable Risks",
    description: "Surprise findings you were not looking for but can act on. Conditions where early screening, prevention, or treatment can make a difference. Important for awareness, long-term monitoring, and future planning.",
    color: "from-amber-500 to-orange-600",
  shadow: "shadow-amber-500/10",
  bg: "bg-amber-50"
},
  {
    icon: Pill,
    title: "Medication Response (Pharmacogenomics)",
    description: "Know your gene's response to different drug and side effects, and choose the right drug, at the right dose.",
    color: "from-teal-500 to-emerald-600",
    shadow: "shadow-teal-500/10",
    bg: "bg-teal-50"
  },
{
  icon: Stethoscope,
  title: "Newborn Screening",
  description: "Detect and manage certain genetic conditions in newborns early.",
  color: "from-indigo-500 to-blue-600",
  shadow: "shadow-indigo-500/10",
  bg: "bg-indigo-50"
}];


export default function WGSBenefits() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#004080 0.5px, transparent 0.5px)', size: '24px 24px' }} />
      </div>

      <div className="container relative z-10 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">

            <Dna size={16} className="text-accent" />
            Empowering Insights
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-6xl font-bold tracking-tight text-primary mb-6 md:mb-8 leading-[1.1]">

            How Whole Genome Sequencing <br className="hidden md:block" /> 
            can <span className="font-italic-serif italic font-medium text-accent">transform</span> your health?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[700px] mx-auto text-base md:text-lg text-muted-foreground !whitespace-pre-line">Know what's included in your report. Unlock the blueprint of your life to make data-driven decisions about your future, your family, and your long-term wellbeing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative">

                <div className="h-full bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden flex flex-col items-start text-left">
                  {/* Hover Background Accent */}
                  <div className="absolute top-0 left-0 w-2 h-0 bg-accent group-hover:h-full transition-all duration-500" />
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg ${benefit.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <benefit.icon size={26} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 leading-tight !whitespace-pre-line !whitespace-pre-line">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[15px] text-muted-foreground leading-relaxed !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                    {benefit.description}
                  </p>
                </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}