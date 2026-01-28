"use client";

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sessions = [
{
  date: "15th Oct, 2025",
  time: "4:00 PM - 5:00 PM IST",
  topic: "Introduction to WGS & Preventative Health",
  expert: "Dr. Arun Kumar, Oncogeneticist"
},
{
  date: "22nd Oct, 2025",
  time: "11:00 AM - 12:00 PM IST",
  topic: "Interpreting Genetic Risks for Families",
  expert: "Dr. Sarah Jonas, Clinical Geneticist"
}];


const OrientationSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate Supabase insert
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="orientation" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
            <div>
              <div className="pill-tag mb-6 border-secondary text-secondary bg-secondary/10">Awareness Session</div>
              <h2 className="text-primary mb-6 font-bold !whitespace-pre-line !whitespace-pre-line">Learn why WGS matters for your future.<br /></h2>
              <p className="text-muted-foreground text-[18px] mb-10">
                Join our free orientation sessions to understand how Whole Genome Sequencing can help you and your family manage health risks proactively.
              </p>
            
            <div className="flex flex-col gap-6">
              {sessions.map((session, idx) =>
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="bg-white p-6 rounded-[24px] card-shadow flex gap-6 items-center group cursor-default">

                  <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-secondary uppercase tracking-widest mb-1">{session.date}</p>
                    <p className="font-bold text-primary text-[18px] mb-1">{session.topic}</p>
                    <div className="flex items-center gap-4 text-[13px] text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock size={14} /> {session.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> Virtual (Zoom)</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

            <div className="bg-white p-10 lg:p-12 rounded-[40px] border border-border card-shadow relative overflow-hidden">
              <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }} />

              <AnimatePresence mode="wait">
                {!isSuccess ?
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>

                    <h3 className="text-primary mb-2 text-[28px]">Reserve your spot</h3>
                    <p className="text-muted-foreground mb-8 text-[15px]">Fill out the form below to receive the session invite link.</p>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-col gap-2">

                          <label className="text-[13px] font-bold text-primary/60 ml-2">Full Name</label>
                          <input required type="text" placeholder="John Doe" className="w-full bg-background border border-border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </motion.div>
                        <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-col gap-2">

                          <label className="text-[13px] font-bold text-primary/60 ml-2">Phone Number</label>
                          <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-background border border-border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </motion.div>
                      </div>
                      
                      <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-2">

                        <label className="text-[13px] font-bold text-primary/60 ml-2">Email Address</label>
                        <input required type="email" placeholder="john@example.com" className="w-full bg-background border border-border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                      </motion.div>
  
                      <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col gap-2">

                        <label className="text-[13px] font-bold text-primary/60 ml-2">Select Session</label>
                        <select required className="w-full bg-background border border-border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                          {sessions.map((s, i) =>
                      <option key={i} value={s.topic}>{s.topic} ({s.date})</option>
                      )}
                        </select>
                      </motion.div>
  
                        <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="btn-primary w-full py-5 mt-4 group">

                        {isSubmitting ?
                    <Loader2 className="animate-spin" /> :

                    <span className="flex items-center gap-2">Sign Up for Session <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                    }
                      </motion.button>
                      
                      <p className="text-[12px] text-center text-muted-foreground mt-2">
                        By signing up, you agree to receive communication regarding genetic testing.
                      </p>
                    </form>
                  </motion.div> :

              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center py-10">

                    <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="bg-accent/20 p-6 rounded-full text-accent mb-6">

                      <CheckCircle2 size={64} />
                    </motion.div>
                    <h3 className="text-primary mb-4">You're all set!</h3>
                    <p className="text-muted-foreground mb-8">
                      We've sent a confirmation email with the session details and Zoom link. See you there!
                    </p>
                    <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSuccess(false)}
                  className="btn-secondary">

                      Back to Website
                    </motion.button>
                  </motion.div>
              }
              </AnimatePresence>
            </div>

        </div>
      </div>
    </section>);

};

export default OrientationSignup;