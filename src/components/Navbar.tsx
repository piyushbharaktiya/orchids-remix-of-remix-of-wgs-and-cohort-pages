"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Database, Activity, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/CartContext";

const navItems = [
  { name: "Solutions", href: "/#solutions", id: "01" },
  { name: "Science", href: "/#pharmacogenomics", id: "02" },
  { name: "Sessions", href: "/#sessions", id: "03" },
  { name: "Protocol", href: "/#timeline", id: "04" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { items, setIsOpen: setCartOpen } = useCart();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(251, 245, 252, 0)", "rgba(251, 245, 252, 0.9)"]
  );
  
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ["rgba(125, 44, 125, 0)", "rgba(125, 44, 125, 0.1)"]
  );

  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  return (
    <motion.nav
      style={{ backgroundColor, borderColor: borderOpacity, scale: navScale }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-700 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-20">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-display text-3xl font-black tracking-tighter uppercase text-[#7D2C7D]"
              >
                Karkinos<span className="text-[#B174AE]/40"> Healthcare</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-[10px] font-black text-[#7D2C7D]/40 hover:text-[#7D2C7D] transition-all uppercase tracking-[0.4em] flex items-center gap-3 group"
                  >
                    <span className="text-[8px] opacity-20 group-hover:opacity-100 group-hover:text-[#7D2C7D] transition-all">/ {item.id}</span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

            <div className="hidden md:flex items-center gap-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCartOpen(true)}
                className="relative p-3 bg-white border border-[#7D2C7D]/10 text-[#7D2C7D] hover:bg-[#FBF5FC] transition-colors group"
              >
                <ShoppingBag className="w-5 h-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#7D2C7D] text-white text-[10px] flex items-center justify-center font-bold">
                    {items.length}
                  </span>
                )}
              </motion.button>
              
              <Link href="/genetics#sessions">
                <motion.button 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="group flex items-center gap-3 font-mono text-[10px] font-black uppercase tracking-[0.3em] border border-[#7D2C7D]/10 px-8 py-4 hover:bg-[#7D2C7D] hover:text-white transition-all duration-500 ease-[0.16,1,0.3,1] text-[#7D2C7D]"
                >
                  Sign Up for Sessions
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </Link>
            </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-4 text-[#7D2C7D] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-24 z-40 bg-[#FBF5FC]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-10 py-24 flex flex-col justify-between h-full">
              <div className="space-y-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-end gap-6 text-5xl font-display font-black text-[#7D2C7D] uppercase tracking-tighter hover:text-[#B174AE] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-xs font-mono opacity-20 mb-3 tracking-[0.4em]">{item.id}</span>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pb-32"
              >
                <div className="font-mono text-[10px] tracking-[0.5em] uppercase text-[#7D2C7D]/20 mb-12 flex items-center gap-4">
                  <Database className="w-3 h-3" />
                  Karkinos Molecular Access
                </div>
                <button className="w-full sharp-button py-8 text-lg bg-[#7D2C7D] text-white">
                  Schedule Testing
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
