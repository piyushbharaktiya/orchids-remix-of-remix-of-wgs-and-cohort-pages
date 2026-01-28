"use client";

import { motion } from "framer-motion";
import { XCircle, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-[#FBF5FC] relative overflow-hidden">
      <div className="absolute inset-0 nolan-grid opacity-50" />
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#7D2C7D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B174AE]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-[#7D2C7D]/10 flex items-center justify-center">
            <XCircle className="w-12 h-12 text-[#7D2C7D]/60" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <p className="font-mono text-[10px] tracking-[0.5em] text-[#B174AE] uppercase mb-4">Protocol Paused</p>
          <h1 className="font-display text-3xl md:text-4xl font-black text-[#7D2C7D] tracking-tight mb-4">
            Enrollment Cancelled
          </h1>
          <p className="text-[#7D2C7D]/60 max-w-md mx-auto">
            Your cart items have been preserved. Return when you&apos;re ready to begin your genomic journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white border border-[#7D2C7D]/10 p-8 max-w-md w-full mb-8"
        >
          <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7D2C7D]/40 mb-4">Need Assistance?</h3>
          <p className="text-sm text-[#7D2C7D]/70 mb-6">
            Our genetic counselors are available to answer your questions and help you make an informed decision.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#7D2C7D]">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">1800-XXX-XXXX (Toll Free)</span>
            </div>
            <div className="flex items-center gap-3 text-[#7D2C7D]">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">support@karkinos.in</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="px-8 py-4 border border-[#7D2C7D] text-[#7D2C7D] font-mono text-xs tracking-[0.3em] uppercase hover:bg-[#7D2C7D] hover:text-white transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Tests
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
