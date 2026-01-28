"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Search,
  AlertTriangle,
  Users,
  Pill,
  Globe,
  CheckCircle2 } from
'lucide-react';

const reportItems = [
{
  icon: Search,
  title: "Primary Findings",
  description: "DNA changes directly linked to your current health concerns or symptoms. Clear answers for diagnosis and medical decision-making.",
  color: "bg-blue-500"
},
{
  icon: AlertTriangle,
  title: "Incidental & Actionable Risks",
  description: "Surprise findings you were not looking for — but can act on. Conditions where early screening, prevention, or treatment can make a difference. Important for awareness, long-term monitoring, and future planning.",
  color: "bg-amber-500"
},
{
  icon: Users,
  title: "Family Planning (Carrier Findings)",
  description: "Hidden genetic conditions you may pass on to your children. Essential insight for couples and future parents.",
  color: "bg-purple-500"
},
{
  icon: Pill,
  title: "Medication Response (Pharmacogenomics)",
  description: "Know your gene's response to different drug and side effects, and choose the right drug, at the right dose.",
  color: "bg-teal-500"
},
{
  icon: Globe,
  title: "Ancestry & Population Origins",
  description: "A view into your genetic ancestry and deep population roots. Understand where your DNA comes from and how it shapes your genome.",
  color: "bg-indigo-500"
}];


const ReportContents = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-6 mx-auto max-w-[1280px]">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-4">

            <FileText size={16} className="text-accent" />
            Comprehensive Insights
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            What's Included in Your WGS Report
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Everything your genome can tell you, brought together in one simple, easy-to-understand report.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reportItems.map((item, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-[24px] border border-border shadow-sm hover:shadow-md transition-shadow">

              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-${item.color.split('-')[1]}-500/20`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed !whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-primary p-8 rounded-[24px] text-white flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-1">

            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
            <p className="text-white/80 mb-8">
              Get the most complete view of your health with clinical-grade accuracy.
            </p>
            <button className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
              Order Your Test
            </button>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default ReportContents;