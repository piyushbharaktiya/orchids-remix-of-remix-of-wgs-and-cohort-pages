"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, ShieldCheck, Zap, Download } from 'lucide-react';

const products = [
  {
    id: "wgs-test",
    name: "Whole Genome Sequencing (WGS)",
    description: "The ultimate genetic test covering 100% of your DNA for lifelong health insights.",
    price: 85000,
    mrp: 150000,
    features: ["3 Billion Base Pairs", "Non-coding Region Analysis", "Priority Counseling", "10-12 Days TAT"],
    tag: "Premium",
    highlight: true
  }
];

const ProductGrid = () => {
  return (
    <section id="tests" className="section-padding bg-white relative">
      <div className="container">
        <div className="text-center max-w-[800px] mx-auto mb-16">
            <div className="pill-tag mb-4 border-secondary text-secondary bg-secondary/10">Direct Ordering</div>
            <h2 className="text-primary mb-6 font-bold">Take the first step <br />towards Precision Health</h2>
            <p className="text-muted-foreground text-[18px]">
              Order your test kit today. Secure, private, and professionally guided.
            </p>
        </div>

        <div className="flex justify-center">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative flex flex-col p-8 rounded-[40px] border transition-all duration-300 max-w-md ${
                  product.highlight 
                    ? 'border-primary bg-primary/5 card-shadow ring-1 ring-primary/20' 
                    : 'border-border bg-white hover:border-secondary/30 hover:shadow-xl'
                }`}
              >
                  {product.highlight && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary text-[12px] font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
                    >
                      <Zap size={14} fill="currentColor" /> BEST VALUE
                    </motion.div>
                  )}

                <div className="mb-8">
                  <span className="text-[12px] font-bold text-primary/60 uppercase tracking-widest">{product.tag}</span>
                  <h3 className="text-[22px] font-bold text-primary mt-2 mb-4 leading-tight">{product.name}</h3>
                  <p className="text-[14px] text-muted-foreground">{product.description}</p>
                </div>

                <div className="mb-8 flex flex-col gap-3">
                  {product.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                      className="flex items-center gap-3 text-[14px] text-primary/80 font-medium"
                    >
                      <div className="bg-accent/20 p-1 rounded-full text-accent">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="mb-6">
                    <span className="text-[14px] text-muted-foreground line-through mr-2">₹{product.mrp.toLocaleString()}</span>
                    <div className="text-[32px] font-bold text-primary">₹{product.price.toLocaleString()}*</div>
                    <p className="text-[10px] text-muted-foreground mt-1">*Excluding GST and Sample Collection</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "var(--color-primary-light)" }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 transition-all ${
                      product.highlight
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    <ShoppingCart size={18} /> Order Test
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full mt-3 py-3 rounded-full font-bold text-[13px] flex items-center justify-center gap-2 text-primary/60 hover:text-primary hover:bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" /> Download Sample Report
                  </motion.button>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-background rounded-[32px] border border-border">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-sm text-primary">
              <ShieldCheck size={32} />
            </div>
            <div>
              <p className="font-bold text-primary">Data Privacy Guaranteed</p>
              <p className="text-[13px] text-muted-foreground">Your genetic data is encrypted and never shared with third parties.</p>
            </div>
          </div>
          <div className="h-px w-12 bg-border hidden md:block"></div>
          <p className="text-[14px] text-muted-foreground font-medium text-center md:text-left max-w-[400px]">
            All tests are processed in our CAP-accredited and NABL-certified labs in Mumbai and Kochi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
