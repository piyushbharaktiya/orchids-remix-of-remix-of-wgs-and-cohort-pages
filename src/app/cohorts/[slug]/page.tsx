"use client";

import React, { use, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { COHORTS, CohortData } from '@/lib/cohort-data';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import ProductGrid from '@/components/sections/product-grid';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Send,
  Loader2,
  Share2
} from 'lucide-react';
import Image from 'next/image';

export default function CohortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const cohort = COHORTS[slug as keyof typeof COHORTS];

  if (!cohort) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={cohort.heroImage} 
            alt={cohort.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="pill-tag mb-6 border-primary text-primary bg-primary/10">Solutions for {cohort.title}</div>
              <h1 className="text-primary mb-6 font-bold text-5xl md:text-6xl leading-[1.1]">
                {cohort.heroTitle}
              </h1>
              <p className="text-muted-foreground text-[20px] mb-10 leading-relaxed">
                {cohort.heroSubtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#ordering" className="btn-primary flex items-center gap-2">
                  Order Test Now <ArrowRight size={18} />
                </a>
                <a href="#brochure" className="btn-secondary flex items-center gap-2">
                  Download Brochure <Download size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Mission & Value Proposition */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4 z-0"></div>
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-1 bg-secondary rounded-full"></div>
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm">Our Vision for {cohort.title}</span>
                  </div>
                  <h2 className="text-primary mb-8 font-bold text-4xl lg:text-5xl leading-tight">
                    Precision Health, <br />
                    <span className="text-accent">Tailored for You.</span>
                  </h2>
                  <p className="text-muted-foreground text-[22px] leading-relaxed mb-10">
                    {cohort.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {cohort.benefits.map((benefit, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border/40 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="mt-1 bg-secondary/10 p-2 rounded-xl text-secondary shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-primary font-medium leading-tight">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative"
              >
                <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                  <Image 
                    src={cohort.emotiveImage} 
                    alt={`${cohort.title} Connection`}
                    fill
                    className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                    <p className="text-primary font-bold italic text-lg leading-snug">
                      "Empowering {cohort.title.toLowerCase()} with the highest resolution of genomic data available today."
                    </p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Ordering (Product Grid) */}
      <div id="ordering">
        <ProductGrid />
      </div>

      {/* Brochure Section */}
      <section id="brochure" className="section-padding bg-background relative overflow-hidden">
        <div className="container">
          <div className="bg-primary rounded-[48px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={cohort.emotiveImage} 
                alt="Background"
                fill
                className="object-cover opacity-10 mix-blend-overlay"
              />
            </div>
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <h2 className="text-white mb-6 font-bold text-3xl md:text-4xl lg:text-5xl">Access Detailed Resources</h2>
                <p className="text-white/80 text-[18px] md:text-[20px] mb-10 leading-relaxed">
                  Get our comprehensive guide for {cohort.title.toLowerCase()}. This brochure covers clinical specifications, report samples, and implementation details.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-xl hover:bg-secondary/90 transition-all"
                >
                  <Download size={22} /> Download PDF Brochure
                </motion.button>
              </div>
              
              <div className="flex justify-center lg:justify-end items-center">
                <div className="relative group cursor-pointer">
                  {/* Backdrop glow */}
                  <div className="absolute -inset-8 bg-secondary/20 rounded-[40px] blur-3xl group-hover:bg-secondary/40 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* The "Book" visual */}
                  <div className="w-[280px] sm:w-[320px] h-[380px] sm:h-[440px] bg-white rounded-r-3xl rounded-l-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col transform group-hover:-rotate-3 group-hover:-translate-y-4 transition-all duration-500 border-l-[16px] border-secondary">
                    {/* Cover Image */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={cohort.brochureCoverImage}
                        alt="Brochure Cover"
                        fill
                        className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90"></div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col relative z-10">
                      <div className="bg-white/10 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                        <FileText size={32} className="text-white" />
                      </div>
                      <div className="space-y-2 mb-8">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Official Report</p>
                        <h3 className="text-white font-bold text-2xl leading-tight">{cohort.title} Solutions Guide</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                            <div className="h-2 bg-white/10 rounded-full flex-1"></div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold text-white/40 uppercase">Edition</p>
                          <p className="text-white font-bold">2025/26</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                          <Download size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none z-20"></div>
                  </div>
                  
                  {/* Reflection/Shadow */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Assets (Mailer & WhatsApp) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h2 className="text-primary mb-4 font-bold">Marketing & Communication</h2>
            <p className="text-muted-foreground">Ready-to-use content to help you share the power of genomics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mailer Preview */}
            <div className="bg-background rounded-[32px] p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-primary">Mailer Content</h3>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border text-[14px]">
                <p className="font-bold mb-2">Subject: {cohort.mailerContent.subject}</p>
                <div className="h-px bg-border my-4"></div>
                <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                  {cohort.mailerContent.body}
                </p>
              </div>
              <button className="mt-6 w-full py-4 border-2 border-primary/20 text-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
                <Share2 size={18} /> Copy Mailer Content
              </button>
            </div>

            {/* WhatsApp Preview */}
            <div className="bg-background rounded-[32px] p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent/10 p-3 rounded-2xl text-accent">
                  <MessageSquare size={24} />
                </div>
                <h3 className="font-bold text-primary">WhatsApp Creative</h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
                  <Image 
                    src={cohort.whatsappContent.image} 
                    alt="WhatsApp Creative"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button className="bg-white/90 text-primary px-4 py-2 rounded-full font-bold text-sm">Download Image</button>
                  </div>
                </div>
                <div className="bg-[#DCF8C6] rounded-2xl p-4 text-[14px] text-primary relative">
                  {cohort.whatsappContent.message}
                  <div className="absolute -left-2 top-4 w-4 h-4 bg-[#DCF8C6] rotate-45 rounded-sm -z-10"></div>
                </div>
              </div>
              <button className="mt-6 w-full py-4 border-2 border-accent/20 text-accent rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-accent/5 transition-colors">
                <MessageSquare size={18} /> Send to WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-[1000px] mx-auto bg-white rounded-[40px] border border-border shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-10 text-white">
              <h3 className="text-white mb-6 font-bold text-2xl">Get Personalized Guidance</h3>
              <p className="text-white/70 mb-8">
                Speak with our genomic consultants to find the best plan for you or your organization.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-2 rounded-lg"><Mail size={20} /></div>
                  <span className="text-sm">support@wgs-ecom.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-2 rounded-lg"><MessageSquare size={20} /></div>
                  <span className="text-sm">+91 90000 00000</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-10">
              <CohortContactForm cohortTitle={cohort.title} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CohortContactForm({ cohortTitle }: { cohortTitle: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-full flex flex-col items-center justify-center text-center py-10"
      >
        <div className="bg-accent/20 p-6 rounded-full text-accent mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-primary mb-2 text-2xl font-bold">Request Received!</h3>
        <p className="text-muted-foreground mb-8">
          A member of our {cohortTitle} support team will contact you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="btn-secondary"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-[13px] font-bold text-primary/60 ml-2">Full Name</label>
        <input required type="text" placeholder="John Doe" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[13px] font-bold text-primary/60 ml-2">Email Address</label>
        <input required type="email" placeholder="john@example.com" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[13px] font-bold text-primary/60 ml-2">Phone Number</label>
        <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[13px] font-bold text-primary/60 ml-2">Organization (Optional)</label>
        <input type="text" placeholder="Company/Hospital Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-[13px] font-bold text-primary/60 ml-2">Your Message</label>
        <textarea rows={4} placeholder={`How can we help your ${cohortTitle.toLowerCase()}?`} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
      </div>
      <div className="md:col-span-2">
        <button 
          disabled={isSubmitting}
          className="btn-primary w-full py-4 flex items-center justify-center gap-2"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Send Message</>}
        </button>
      </div>
    </form>
  );
}
