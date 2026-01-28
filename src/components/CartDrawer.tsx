"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight, ShieldCheck, Microscope, Loader2 } from "lucide-react";
import { useCart } from "@/lib/CartContext";

export function CartDrawer() {
  const { items, removeItem, clearCart, isOpen, setIsOpen, total } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items.map((item) => ({ id: item.id })) }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed");
      }

      if (data.url) {
        clearCart();
        window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: data.url } }, "*");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[200]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[201] flex flex-col border-l border-[#7D2C7D]/10"
          >
            <div className="p-8 border-b border-[#7D2C7D]/5 flex justify-between items-center bg-[#FBF5FC]/50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7D2C7D] flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-black text-[#7D2C7D] tracking-tight">Biological Protocol</h2>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#7D2C7D]/40">System Enrollment v2.0</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-[#7D2C7D]/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#7D2C7D]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#7D2C7D]/10 flex items-center justify-center">
                    <Microscope className="w-8 h-8 text-[#7D2C7D]/20" />
                  </div>
                  <div>
                    <p className="text-[#7D2C7D] font-bold text-lg">No Protocols Selected</p>
                    <p className="text-[#7D2C7D]/40 text-sm">Select a genomic architecture to begin.</p>
                  </div>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-6 bg-[#FBF5FC] border border-[#7D2C7D]/10 relative group"
                  >
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#7D2C7D]/40">{item.id} Protocol</span>
                      <h3 className="text-xl font-display font-black text-[#7D2C7D]">{item.name}</h3>
                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center gap-2 text-[#B174AE]">
                          <ShieldCheck className="w-3 h-3" />
                          <span className="font-mono text-[9px] uppercase tracking-widest">Clinical Grade</span>
                        </div>
                        <span className="text-xl font-display font-bold text-[#7D2C7D]">{item.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

              {items.length > 0 && (
                <div className="p-8 border-t border-[#7D2C7D]/5 space-y-6 bg-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7D2C7D]/40 mb-1">Total Investment</p>
                      <p className="text-4xl font-display font-black text-[#7D2C7D]">₹{total.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-[#B174AE] mb-1">NCCN Compliant</p>
                      <p className="font-mono text-[8px] uppercase tracking-widest text-[#B174AE]">ISO 15189 Certified</p>
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <button 
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="w-full py-6 bg-[#7D2C7D] text-white font-mono text-xs tracking-[0.4em] uppercase hover:bg-[#6A256A] transition-all flex items-center justify-center gap-3 group shadow-xl shadow-[#7D2C7D]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Confirm Enrollment
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-[9px] text-center text-[#7D2C7D]/40 font-mono uppercase tracking-widest leading-loose">
                    By proceeding, you initiate the clinical intake process. <br />
                    A specialist will be assigned for post-test consultation.
                  </p>
                </div>
              )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
