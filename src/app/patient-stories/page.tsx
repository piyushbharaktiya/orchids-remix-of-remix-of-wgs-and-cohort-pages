"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { testimonials, Testimonial } from '@/lib/testimonials-data';

const StoryCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden rounded-[24px] aspect-[4/5] cursor-pointer bg-primary"
      >
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-[1] opacity-90" />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-[2]">
          <div className="flex flex-wrap gap-2">
            {testimonial.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-semibold border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-white text-2xl font-bold leading-tight">
                {testimonial.name}
              </h3>
              <span className="text-white/60 text-xs font-medium">Verified Story</span>
            </div>
            <div className="bg-white rounded-full p-2 group-hover:bg-secondary transition-colors shadow-lg">
              <Plus className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-lg"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl my-auto"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all z-10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            
              <div className="p-8 md:p-12 -mt-12 relative bg-white">
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary/10 text-primary px-4 py-1.5 rounded-full text-[12px] font-bold border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-8">
                  <h2 className="text-primary text-3xl font-bold mb-2 leading-tight">
                    {testimonial.storyTitle || `"${testimonial.name}'s Journey"`}
                  </h2>
                  <p className="text-primary/60 font-medium">{testimonial.subtitle || "Patient Story"}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-primary/80 text-lg leading-relaxed italic whitespace-pre-line">
                    {testimonial.storyBody}
                  </p>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
                  <div className="flex flex-col">
                    <span className="text-primary font-bold text-xl">{testimonial.name}</span>
                    <span className="text-primary/40 text-sm">Verified Story</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-light transition-all"
                  >
                    Close Story
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function PatientStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-[800px] mb-16">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-sm uppercase tracking-widest">Back to Home</span>
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-[48px] md:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight"
            >
              Real Stories of&nbsp;
              <span className="italic-serif text-secondary">Genomic Impact</span>
            </motion.h1>
            <p className="text-muted-foreground text-[20px] leading-relaxed font-medium">
              Every genome tells a story. Discover how personalized genetic insights are helping Indians make informed decisions about their health, family, and future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StoryCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="mt-20 p-12 rounded-[40px] bg-primary text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-[500px]">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Own Story</h2>
                <p className="text-white/70 text-lg">
                  Join 1,00,000+ Indians who have chosen Karkinos for their genomic journey. Get your Whole Genome Sequence today.
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-secondary text-primary border-secondary hover:bg-secondary/90 hover:border-primary px-10 py-4 text-lg"
              >
                Order Your Test
              </motion.button>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          </div>

          <p className="mt-12 text-[10px] text-primary/30 font-medium uppercase tracking-widest text-center">
            * ALL THE STORIES ARE REAL. NAMES AND IMAGES HAVE BEEN MASKED TO MAINTAIN USER PRIVACY AND CONFIDENTIALITY.
          </p>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .italic-serif {
          font-family: 'Times New Roman', serif;
          font-style: italic;
        }
      `}</style>
    </main>
  );
}
