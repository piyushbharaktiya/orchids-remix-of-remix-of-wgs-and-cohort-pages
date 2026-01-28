"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Calendar, FileCheck, ArrowRight } from 'lucide-react';

const steps = [
{
  id: 1,
  title: "Order Test Online",
  description: "Browse our comprehensive genetic tests and order securely from the comfort of your home.",
  icon: ShoppingCart,
  color: "bg-primary",
  iconColor: "text-secondary",
  lightColor: "bg-primary/5"
},
{
  id: 2,
  title: "At-Home Collection",
  description: "Schedule a sample collection at your preferred time. Our phlebotomists will visit you.",
  icon: Calendar,
  color: "bg-secondary",
  iconColor: "text-primary",
  lightColor: "bg-secondary/10"
},
{
  id: 3,
  title: "Report & Counselling",
  description: "Receive your detailed genetic report followed by an expert post-test counseling session.",
  icon: FileCheck,
  color: "bg-accent",
  iconColor: "text-white",
  lightColor: "bg-accent/5"
}];


export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 max-w-6xl mx-auto relative">
        <div className="mb-12 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6">

            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">
              The Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-6xl font-black tracking-tight text-foreground mb-6 leading-[1.1]">

            Get Started in <span className="text-primary">3 Simple Steps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto leading-relaxed">

            From your first order to expert genetic insights, professional care delivered directly to your doorstep.
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-slate-100 -z-10" />

          {steps.map((step, index) =>
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative flex flex-col items-center text-center group">

              {/* Step Number Bubble */}
              <div className="mb-8 relative">
                <div className={`w-28 h-28 rounded-3xl flex items-center justify-center transition-all duration-500 border-2 border-white shadow-xl shadow-slate-200/50 bg-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/10`}>
                  <div className={`w-20 h-20 rounded-2xl ${step.lightColor} flex items-center justify-center text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                </div>
                
                {/* Badge for step number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black border-4 border-white shadow-lg">
                  0{step.id}
                </div>
              </div>

              <div className="space-y-4 max-w-[280px]">
                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors !whitespace-pre-line">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow Indicator for mobile (last one excluded) */}
              {index < steps.length - 1 &&
            <div className="md:hidden mt-8 text-primary animate-bounce">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </div>
            }
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}