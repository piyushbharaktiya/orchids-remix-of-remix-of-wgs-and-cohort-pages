"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { testimonials } from '@/lib/testimonials-data';

interface TestimonialCardProps {
  name: string;
  tags: string[];
  image: string;
  index: number;
  storyTitle?: string;
  subtitle?: string;
  storyBody?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  tags,
  image,
  index,
  storyTitle,
  subtitle,
  storyBody
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setIsOpen(true)}
        className="relative group overflow-hidden rounded-[24px] min-w-[320px] lg:min-w-[440px] h-[550px] cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-primary">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 z-0 opacity-80"
          sizes="(max-width: 768px) 320px, 440px"
          priority={index === 0} />

        {/* Gradient Overlay - darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-[1] opacity-90" />
        
        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-[2]">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) =>
            <span
              key={tag}
              className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[12px] font-semibold border border-white/20 hover:bg-white/30 transition-colors">

                {tag}
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <h3 className="text-white text-[42px] font-bold leading-none tracking-tight">
                {name}
              </h3>
              <span className="text-white/60 text-sm mt-2 font-medium">Verified Story</span>
            </div>
            <motion.div
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="bg-white rounded-full p-3 group-hover:bg-secondary transition-colors duration-300 shadow-lg">

              <Plus className="w-6 h-6 text-primary group-hover:text-primary" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Story Modal */}
        <AnimatePresence>
          {isOpen &&
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
              <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-primary/90 backdrop-blur-lg" />
  
              
              <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl my-auto">

                <div className="relative h-64 md:h-80 w-full">
                  <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 672px"
                priority />

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all z-10 shadow-lg">

                    <X className="w-6 h-6" />
                  </button>
                </div>
              
              <div className="p-8 md:p-12 -mt-12 relative bg-white">
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) =>
                <span
                  key={tag}
                  className="bg-secondary/10 text-primary px-4 py-1.5 rounded-full text-[12px] font-bold border border-secondary/20">

                      {tag}
                    </span>
                )}
                </div>

                    <div className="mb-8">
                      <h2 className="text-primary text-3xl md:text-4xl font-bold mb-2 leading-tight">
                      {storyTitle || `"${name}'s Journey"`}
                    </h2>
                    <p className="text-primary/60 font-medium !whitespace-pre-line">{subtitle || "Patient Story"}</p>
                  </div>

                <div className="space-y-4">
                  <p className="text-primary/80 text-lg leading-relaxed italic !whitespace-pre-line">
                    {storyBody || "This patient's story details their journey with precision medicine and how personalized diagnostic insights helped shape their treatment path and healthcare decisions."}
                  </p>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
                  <div className="flex flex-col">
                    <span className="text-primary font-bold text-xl">{name}</span>
                    <span className="text-primary/40 text-sm">Verified Story</span>
                  </div>
                  <button
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-light transition-all">

                    Close Story
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </>);
};

const TestimonialsSection = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ?
      scrollLeft - clientWidth :
      scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

      // Update index based on card width
      const cardWidth = 440; // Approximate min-width
      const index = Math.min(Math.round(scrollLeft / cardWidth) + 1, testimonials.length);
      setCurrentIndex(index);
    }
  };

  React.useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', updateScrollState);
      updateScrollState();
      window.addEventListener('resize', updateScrollState);
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('scroll', updateScrollState);
      }
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  return (
    <section className="bg-background py-[120px] overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px]">

              <h2 className="text-primary text-[48px] md:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight !whitespace-pre-line">We have helped&nbsp;
              <span className="italic-serif text-secondary !whitespace-pre-line">1,00,000+ Indians</span>
              </h2>
              <p className="text-muted-foreground text-[18px] leading-relaxed max-w-[600px] font-medium !whitespace-pre-line">From risk assessment based early screening to personalised advanced diagnostics, we have supported thousands on their healthcare journey. Read their stories.

            </p>
            </motion.div>
            
            {/* Slider Controls */}
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mt-8 md:mt-0">

              <span className="text-primary text-[16px] font-bold opacity-60">
                {currentIndex}/{testimonials.length}
              </span>
              <div className="flex gap-2">
                <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-border bg-white flex items-center justify-center hover:bg-muted transition-all hover:scale-105 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
                disabled={!canScrollLeft}>

                  <ArrowLeft className="w-5 h-5 text-primary" />
                </button>
                <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary-light transition-all hover:scale-105 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
                disabled={!canScrollRight}>

                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </motion.div>
          </div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory">

          {testimonials.map((testimonial, index) =>
          <div key={index} className="snap-start">
              <TestimonialCard {...testimonial} index={index} />
            </div>
          )}
        </div>

        {/* Footer Link & Disclaimer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

                <Link
                  href="/patient-stories"
                  className="btn-primary bg-secondary text-primary border-secondary hover:bg-secondary/90 hover:border-primary group inline-flex items-center">

                  Read more patient stories
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </motion.div>

            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] text-primary font-medium max-w-[280px] leading-tight md:text-right uppercase tracking-wider">
              * ALL THE STORIES ARE REAL. NAMES AND IMAGES HAVE BEEN MASKED TO MAINTAIN USER PRIVACY AND CONFIDENTIALITY.
            </motion.p>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .italic-serif {
          font-family: 'Times New Roman', serif;
          font-style: italic;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
