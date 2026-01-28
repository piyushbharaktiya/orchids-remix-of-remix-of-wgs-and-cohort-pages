"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Dna, Clock, Mail, ArrowRight, Sparkles, Shield } from "lucide-react";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderNumber] = useState(() => 
    `KH-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
  );

  useEffect(() => {
    if (sessionId) {
      console.log("Checkout session completed:", sessionId);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-[#FBF5FC] relative overflow-hidden">
      <div className="absolute inset-0 nolan-grid opacity-50" />
      <div className="scan-line" />
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#7D2C7D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B174AE]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#7D2C7D] to-[#B174AE] flex items-center justify-center shadow-2xl shadow-[#7D2C7D]/30">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-2 -right-2 w-10 h-10 bg-[#FFDF61] rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 text-[#7D2C7D]" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-[10px] tracking-[0.5em] text-[#B174AE] uppercase mb-4">Protocol Initiated</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-[#7D2C7D] tracking-tight mb-4">
            Enrollment Complete
          </h1>
          <p className="text-[#7D2C7D]/60 text-lg max-w-md mx-auto">
            Your genomic analysis journey begins now. Welcome to precision medicine.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white border border-[#7D2C7D]/10 p-8 max-w-lg w-full mb-8 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#7D2C7D]/5">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#7D2C7D]/40">Order Reference</p>
              <p className="font-mono text-lg font-bold text-[#7D2C7D]">{orderNumber}</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200">
              <Shield className="w-3 h-3 text-green-600" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-green-700">Confirmed</span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#7D2C7D]/5 flex items-center justify-center flex-shrink-0">
                <Dna className="w-5 h-5 text-[#7D2C7D]" />
              </div>
              <div>
                <p className="font-bold text-[#7D2C7D] mb-1">Sample Kit Dispatch</p>
                <p className="text-sm text-[#7D2C7D]/60">Your collection kit will be dispatched within 48 hours via priority courier.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#7D2C7D]/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#7D2C7D]" />
              </div>
              <div>
                <p className="font-bold text-[#7D2C7D] mb-1">Processing Timeline</p>
                <p className="text-sm text-[#7D2C7D]/60">Results delivered in 21-28 working days from sample receipt at our CAP-accredited facility.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#7D2C7D]/5 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#7D2C7D]" />
              </div>
              <div>
                <p className="font-bold text-[#7D2C7D] mb-1">Confirmation Email</p>
                <p className="text-sm text-[#7D2C7D]/60">Detailed instructions and tracking sent to your registered email address.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/"
            className="px-8 py-4 bg-[#7D2C7D] text-white font-mono text-xs tracking-[0.3em] uppercase hover:bg-[#6A256A] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#7D2C7D]/20"
          >
            Return Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-[10px] text-center text-[#7D2C7D]/40 font-mono uppercase tracking-[0.2em]"
        >
          NABL Accredited · ISO 15189 · CAP Certified · NCCN Guidelines Compliant
        </motion.p>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FBF5FC] flex items-center justify-center">
        <div className="animate-pulse text-[#7D2C7D]">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
