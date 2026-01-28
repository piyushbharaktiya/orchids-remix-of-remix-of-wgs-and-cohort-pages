import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const conditionsRow1 = [
  "Hereditary Cancer",
  "Rare Disease Screening",
  "Pharmacogenomics",
  "Carrier Screening",
  "Whole Genome Sequencing",
  "Ancestry Analysis",
  "Nutrigenomics",
  "Cardiac Risk Panel",
  "Neurogenic Screen",
  "Metabolic Profiling"
];

const conditionsRow2 = [
  "DNA Methylation",
  "Epigenetic Profiling",
  "Liquid Biopsy",
  "Somatic Mutations",
  "Germline Testing",
  "Variant Interpretation",
  "Copy Number Variation",
  "Single Nucleotide Polymorphisms",
  "Structural Variation",
  "Exome Sequencing"
];

const conditionsRow3 = [
  "Personalized Nutrition",
  "Fitness Optimization",
  "Sleep Propensity",
  "Cardiovascular Risk",
  "Neurodegenerative Screen",
  "Immune System Profile",
  "Hormonal Balance",
  "Longevity Markers",
  "Biological Age Analysis"
];

const conditionsRow4 = [
  "Precision Medicine",
  "Clinical Genomics",
  "Bioinformatic Analysis",
  "Genetic Counseling",
  "Health Span Optimization",
  "Targeted Prevention",
  "Integrative Health",
  "Biomarker Discovery"
];

const TreatmentPillCloud = () => {
  return (
    <section className="relative w-full overflow-hidden bg-accent-light">
      {/* High-quality skin-texture background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559839734-2b71f1e598c6?q=80&w=2070&auto=format&fit=crop"
          alt="Clinical background"
          fill
          priority
          className="object-cover opacity-10 grayscale brightness-100"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-light/60 via-accent-light/40 to-accent-light/60" />
      </div>

      <div className="relative z-10 py-[120px] flex flex-col items-center">
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="container text-center mb-16 text-primary px-6"
        >
          <h2 className="font-sans text-[48px] md:text-[56px] font-bold leading-[1.2] mb-4 tracking-tight">
            Unlock your health's <span className="font-serif italic-serif italic font-normal text-primary-light">genetic code</span>
          </h2>
          <p className="font-sans text-[20px] md:text-[24px] font-medium opacity-90 text-foreground">
            Comprehensive genomic screening to <span className="font-serif italic-serif italic font-normal">identify risks</span> before they become symptoms.
          </p>
        </motion.div>

        {/* Scrolling Pill Rows */}
        <div className="w-full flex flex-col gap-5 py-8">
          {/* Row 1: Left to Right */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-infinite-scroll-slow items-center gap-4">
              {conditionsRow1.map((condition, idx) => (
                  <motion.div 
                    key={`r1-${idx}`}
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-sans text-[16px] font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  >
                    {condition}
                  </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {conditionsRow1.map((condition, idx) => (
                <motion.div 
                  key={`r1-dup-${idx}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-sans text-[16px] font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {condition}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-infinite-scroll-reverse-slow items-center gap-4">
              {conditionsRow2.map((condition, idx) => (
                <motion.div 
                  key={`r2-${idx}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-sans text-[16px] font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {condition}
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {conditionsRow2.map((condition, idx) => (
                <motion.div 
                  key={`r2-dup-${idx}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-sans text-[16px] font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {condition}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 3: Left to Right */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-infinite-scroll-slow items-center gap-4">
              {conditionsRow3.map((condition, idx) => (
                <motion.div 
                  key={`r3-${idx}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-sans text-[16px] font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {condition}
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {conditionsRow3.map((condition, idx) => (
                <motion.div 
                  key={`r3-dup-${idx}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-sans text-[16px] font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {condition}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 4: Right to Left */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-infinite-scroll-reverse-slow items-center gap-4">
              {conditionsRow4.map((condition, idx) => (
                <motion.div 
                  key={`r4-${idx}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-sans text-[16px] font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {condition}
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {conditionsRow4.map((condition, idx) => (
                <motion.div 
                  key={`r4-dup-${idx}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-sans text-[16px] font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {condition}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
            <a
              href="#tests"
              className="inline-block"
            >
              <motion.button 
                  whileHover={{ 
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-10 py-5 uppercase tracking-widest"
                >
                Order Screening Test
              </motion.button>
            </a>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes infinite-scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-infinite-scroll-slow {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll-reverse-slow {
          animation: infinite-scroll-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TreatmentPillCloud;
