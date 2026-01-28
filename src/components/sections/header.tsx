"use client";

import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, Dna, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navItems = [
      { 
        label: 'Solutions', 
        href: '#',
        children: [
          { name: 'Clinicians', href: '/cohorts/clinicians' },
          { name: 'Clinics & Hospitals', href: '/cohorts/clinics-hospitals' },
          { name: 'Nuclear Families', href: '/cohorts/nuclear-families' },
          { name: 'Joint Families', href: '/cohorts/joint-families' },
          { name: 'Couples', href: '/cohorts/couples' },
          { name: 'Newborns', href: '/cohorts/newborns' },
          { name: 'Corporate', href: '/cohorts/corporate' },
          { name: 'Fitness Enthusiasts', href: '/cohorts/fitness-enthusiasts' },
        ]
      },
      { label: 'Genetic Tests', href: '/#tests' },
      { label: 'WGS Deep Dive', href: '/#comparison' },
      { label: 'Orientation', href: '/#orientation' },
      { label: 'About Us', href: 'https://www.karkinos.in/about-us/' },
    ];

    return (
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-[80px] flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-all duration-500 shadow-sm group-hover:shadow-primary/20">
                  <Dna className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[18px] md:text-[22px] font-bold text-primary tracking-tight font-sans">KARKINOS</span>
                  <span className="text-[8px] md:text-[10px] font-bold text-secondary tracking-[0.25em] uppercase font-sans">Healthcare</span>
                </div>
              </Link>
          </div>
  
          {/* Center: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="group relative py-2"
                >
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    {item.children ? (
                      <span className="text-foreground font-sans text-[15px] font-medium hover:text-primary transition-colors relative">
                        {item.label}
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"
                        />
                      </span>
                    ) : (
                      <Link 
                        href={item.href}
                        className="text-foreground font-sans text-[15px] font-medium hover:text-primary transition-colors relative"
                      >
                        {item.label}
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"
                        />
                      </Link>
                    )}
                    {item.children && <ChevronDown className="w-4 h-4 text-primary opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
                  </div>

                  {item.children && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white border border-border rounded-2xl shadow-xl p-4 min-w-[240px] grid grid-cols-1 gap-1">
                        {item.children.map((child) => (
                          <Link 
                            key={child.name}
                            href={child.href}
                            className="px-4 py-2 text-[14px] text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
  
          {/* Right: Actions */}
          <div className="flex items-center gap-x-3 md:gap-x-6">
            {/* Shopping Cart */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 rounded-full hover:bg-primary/10 transition-colors group flex items-center justify-center"
            >
                <div className="relative">
                  <ShoppingCart className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] text-foreground group-hover:text-primary transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-[9px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center shadow-sm border-2 border-white ring-1 ring-primary/10">
                    0
                  </span>
                </div>
            </motion.button>
  
            {/* Login Link */}
            <a 
              href="/login" 
              className="hidden lg:block text-foreground font-sans text-[15px] font-semibold hover:text-primary transition-colors"
            >
              Sign In
            </a>
  
            {/* Start Now Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary py-2 px-4 md:py-2.5 md:px-6 text-sm md:text-base whitespace-nowrap"
            >
              Order Test
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    {item.children ? (
                      <>
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="flex items-center justify-between text-lg font-semibold text-foreground"
                        >
                          {item.label}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex flex-col gap-3 mt-4 ml-4 border-l-2 border-primary/10 pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-base text-muted-foreground hover:text-primary"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-semibold text-foreground hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-6 border-t border-border flex flex-col gap-4">
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-semibold text-foreground"
                  >
                    Sign In
                  </Link>
                  <button className="btn-primary w-full py-4 rounded-2xl text-lg font-bold">
                    Order DNA Test Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    );
};

export default Header;
