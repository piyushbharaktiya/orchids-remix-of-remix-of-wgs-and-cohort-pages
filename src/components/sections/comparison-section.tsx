"use client";

import React from 'react';
import { Check, X, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const comparisonData = [
{
  feature: "Genome Coverage",
  krakinos: "100% (Entire Genome)",
  others: "2-5% (Coding regions only)"
},
{
  feature: "Base Pairs Analysed",
  krakinos: "3 Billion+",
  others: "50-100 Million"
},
{
  feature: "Variants Detected",
  krakinos: "3,000,000+",
  others: "50,000 - 100,000"
},
{
  feature: "Non-coding Region Analysis",
  krakinos: true,
  others: false
},
{
  feature: "Structural Variants",
  krakinos: true,
  others: false
},
{
  feature: "Pharmacogenomics (Medication Response)",
  krakinos: true,
  others: "Limited"
},
{
  feature: "Ancestry & Traits",
  krakinos: true,
  others: "Basic"
},
{
  feature: "Genetic Counseling",
  krakinos: "Priority 1-on-1 Sessions",
  others: "Generic Reports"
},
{
  feature: "Turnaround Time",
  krakinos: "14 Working Days",
  others: "4-8 Weeks"
}];


const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-16 md:py-32 bg-white">
      <div className="container px-6 mx-auto max-w-[1280px]">
        {/* Why Whole Genome Sequencing matters? */}
        <div className="mb-16 md:mb-24">
          <div className="text-center max-w-[800px] mx-auto mb-10 md:mb-12">
            <h2 className="text-[28px] md:text-5xl text-primary font-bold leading-tight">Why Whole Genome Sequencing matters?</h2>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative group">

              {/* Complex Decorative Background */}
              <div className="absolute -inset-6 md:-inset-10 bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/20 rounded-[2rem] md:rounded-[3rem] blur-[40px] md:blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
              
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative bg-white/40 backdrop-blur-md p-2 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/50 shadow-xl overflow-hidden transform transition-all duration-700 group-hover:translate-y-[-8px]">
                    <div className="relative overflow-hidden rounded-[1.2rem] md:rounded-[2rem]">
                        <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/ChatGPT-Image-Jan-22-2026-02_54_44-PM-1769074051888.png?width=8000&height=8000&resize=contain"
                      alt="Whole Genome Sequencing Comparison"
                      className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-105" />

                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </div>
                </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-8 md:space-y-10">

              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/15 border border-secondary/30">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                  </span>
                  <span className="text-sm font-bold text-primary tracking-wide uppercase">The Gold Standard</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-[32px] md:text-6xl font-bold text-primary leading-[1.1] tracking-tight">
                    You are more than a <span className="relative inline-block">
                      <span className="relative z-10 text-secondary italic">few genes.</span>
                      <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-secondary/40 -z-0" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0 10 Q 25 20 50 10 T 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                      </svg>
                    </span>
                  </h3>
                  <p className="text-lg md:text-2xl font-medium text-muted-foreground leading-relaxed !whitespace-pre-line">When every base matters, partial answers are not enough.
                  </p>
                </div>
              </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed pl-6 md:pl-8 !whitespace-pre-line">Whole Genome Sequencing reads all  of your DNA, not just selected panels, giving you a complete view of your health, traits, and inherited risks among 
                  <span className="text-primary font-bold decoration-secondary decoration-2 underline-offset-4 underline !whitespace-pre-line">3 billion letters.</span>
                </p>
                </div>
              </motion.div>
          </div>
        </div>

        <div className="text-center max-w-[800px] mx-auto mb-12 md:mb-16">
            <div className="pill-tag mb-4 bg-primary text-white mx-auto">Why Choose Us</div>
            <h2 className="text-3xl md:text-5xl text-primary font-bold mb-6 !whitespace-pre-line">Karkinos WGS vs Other Tests</h2>
            <p className="text-muted-foreground text-base md:text-lg !whitespace-pre-line">See how our Whole Genome Sequencing compares to standard genetic tests.
          </p>
        </div>

          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 pt-4">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="min-w-[800px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/10">
                    <th className="p-4 md:p-6 text-left text-primary/60 font-bold uppercase tracking-wider text-[12px]">Feature</th>
                    <th className="p-4 md:p-6 text-center bg-primary/5 rounded-t-[20px] relative z-10">
                      <div className="flex flex-col items-center pt-6">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                          <div className="bg-secondary text-primary px-3.5 py-1 rounded-full font-bold text-[7px] md:text-[8px] uppercase tracking-[0.2em] shadow-md border border-primary/10 flex items-center gap-1.5">
                            <Zap size={8} className="fill-primary" />
                            Our Offering
                          </div>
                        </div>
                        <span className="text-primary font-bold text-lg md:text-[20px] !whitespace-pre-line">Karkinos WGS</span>
                        <span className="text-[10px] md:text-[12px] text-muted-foreground font-medium">Whole Genome Sequencing</span>
                      </div>
                    </th>

                    <th className="p-4 md:p-6 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-primary/60 font-bold text-lg md:text-[20px]">Other Tests</span>
                        <span className="text-[10px] md:text-[12px] text-muted-foreground font-medium">Panel / Exome Tests</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) =>
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-border hover:bg-background/50 transition-colors">

                      <td className="p-4 md:p-6 font-semibold text-primary text-sm md:text-base !whitespace-pre-line">{row.feature}</td>
                      <td className={`p-4 md:p-6 text-center bg-primary/5 font-medium text-primary text-sm md:text-base !whitespace-pre-line !whitespace-pre-line ${index === comparisonData.length - 1 ? 'rounded-b-[20px]' : ''}`}>
                        {typeof row.krakinos === 'boolean' ?
                    row.krakinos ? <Check className="mx-auto text-accent w-5 h-5 md:w-6 md:h-6" /> : <X className="mx-auto text-red-400 w-5 h-5 md:w-6 md:h-6" /> :
                    row.krakinos}
                      </td>
                      <td className="p-4 md:p-6 text-center text-muted-foreground text-sm md:text-base">
                        {typeof row.others === 'boolean' ?
                    row.others ? <Check className="mx-auto text-accent w-5 h-5 md:w-6 md:h-6" /> : <X className="mx-auto text-red-400 w-5 h-5 md:w-6 md:h-6" /> :
                    row.others}
                      </td>
                    </motion.tr>
                )}
                    </tbody>
                  </table>
              </motion.div>
          </div>
      </div>
    </section>);

};

export default ComparisonSection;