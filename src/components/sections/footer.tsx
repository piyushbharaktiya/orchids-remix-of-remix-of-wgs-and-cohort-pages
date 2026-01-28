"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Dna, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
    const footerLinks = [
      {
        title: 'Specialized Solutions',
        links: [
          { name: 'Clinicians', href: '/cohorts/clinicians' },
          { name: 'Clinics & Hospitals', href: '/cohorts/clinics-hospitals' },
          { name: 'Nuclear Families', href: '/cohorts/nuclear-families' },
          { name: 'Joint Families', href: '/cohorts/joint-families' },
          { name: 'Couples', href: '/cohorts/couples' },
          { name: 'Newborns', href: '/cohorts/newborns' },
          { name: 'Corporate Wellness', href: '/cohorts/corporate' },
          { name: 'Fitness Enthusiasts', href: '/cohorts/fitness-enthusiasts' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Karkinos', href: 'https://www.karkinos.in/about-us/' },
          { name: 'Our Mission', href: '/mission' },
          { name: 'Leadership', href: '/leadership' },
          { name: 'Careers', href: '/careers' },
          { name: 'Contact Us', href: '/contact' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { name: 'Patient Education', href: '/education' },
          { name: 'Sample Reports', href: '/reports' },
          { name: 'FAQs', href: '/faqs' },
          { name: 'Privacy Policy', href: '/privacy' },
          { name: 'Terms of Use', href: '/terms' },
        ],
      },
    ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/karkinos-healthcare', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/KarkinosHealthcare', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/karkinoshealth', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/karkinoshealthcare', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/karkinoshealthcare', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary pt-24 pb-12 font-sans text-white overflow-hidden relative">
      {/* Decorative DNA Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <Dna className="w-full h-full rotate-45" strokeWidth={0.5} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-10">
            <NextLink href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2.5 rounded-2xl group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-black/10">
                  <Dna className="w-7 h-7 text-primary" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[26px] font-bold text-white tracking-tight">KARKINOS</span>
                  <span className="text-[12px] font-bold text-secondary tracking-[0.3em] uppercase">Healthcare</span>
                </div>
              </div>
            </NextLink>

            <div className="space-y-6 max-w-md">
              <h3 className="text-[32px] font-bold leading-[1.1] text-secondary">
                Pioneering the future <br />of cancer care.
              </h3>
              <p className="text-white/70 text-[16px] leading-relaxed">
                Stay updated with the latest in precision oncology and genetic intelligence. Join our medical community.
              </p>
              
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 text-white px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-white/40 border border-white/10 transition-all group-focus-within:bg-white/15"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors border border-white/5"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {footerLinks.map((section) => (
                <div key={section.title} className="space-y-8">
                  <h4 className="text-[14px] font-bold tracking-widest text-secondary uppercase border-l-2 border-secondary pl-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <NextLink
                          href={link.href}
                          className="text-[15px] text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block"
                        >
                          {link.name}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-white/40 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:contact@karkinos.in" className="text-[15px] hover:text-secondary transition-colors">contact@karkinos.in</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-white/40 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-[15px] text-white/70">Mumbai | Kochi | New Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-30">
            <span className="text-[11px] font-bold tracking-widest uppercase">NABL</span>
            <span className="text-[11px] font-bold tracking-widest uppercase">CAP</span>
            <span className="text-[11px] font-bold tracking-widest uppercase">ISO 15189</span>
            <span className="text-[11px] font-bold tracking-widest uppercase">GDPR COMPLIANT</span>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-2">
            <p className="text-[13px] text-white/40">
              © 2025 Karkinos Healthcare Private Limited. All Rights Reserved.
            </p>
            <p className="text-[11px] text-white/20 tracking-wider">
              CIN: U85300MH2020PTC342416
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
