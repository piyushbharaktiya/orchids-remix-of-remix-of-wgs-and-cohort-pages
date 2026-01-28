"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Microscope, Building2, Zap, Award, CheckCircle2 } from 'lucide-react';

const stats = [
{
  icon: <Building2 className="w-8 h-8" />,
  value: "1,20,000+",
  suffix: "sq ft",
  label: "Genomics Lab Infrastructure",
  description: "Expansive world-class facilities designed for scale and precision."
},
{
  icon: <Zap className="w-8 h-8" />,
  value: "30%+",
  suffix: "Capacity",
  label: "India's Private Sequencing",
  description: "Unmatched sequencing power to serve millions of patients."
},
{
  icon: <Award className="w-8 h-8" />,
  value: "India's First",
  suffix: "PacBio Revio",
  label: "Long-Read Sequencing",
  description: "Pioneering long-read technology for unprecedented genomic clarity."
},
{
  icon: <Microscope className="w-8 h-8" />,
  value: "Illumina",
  suffix: "NovaSeq X Plus",
  label: "Next-Gen Sequencing",
  description: "The most powerful high-throughput sequencer on the planet."
}];


const images = [
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/20230223_155819_result-resized-1769148595556.jpg?width=1200&height=1200&resize=cover",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/20230223_151847_result-resized-1769148595598.jpg?width=1200&height=1200&resize=cover",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/20230223_152818_result-resized-1769148595595.jpg?width=1200&height=1200&resize=cover",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/20230223_143624_result-resized-1769148597641.jpg?width=1200&height=1200&resize=cover",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/IMG_9681-resized-1769148597636.jpg?width=1200&height=1200&resize=cover",
"https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/IMG_1010-resized-1769148595588.jpg?width=1200&height=1200&resize=cover"];


const LabFacilities = () => {
  return (
    <section className="bg-[#f8f9ff] py-[120px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-[800px] mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold text-sm tracking-[0.2em] uppercase mb-4">

            World-Class Infrastructure
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary text-[48px] md:text-[64px] font-bold leading-[1.1] mb-8 tracking-tight">

            Advanced Labs. <span className="italic-serif text-secondary">Unmatched Precision.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary/60 text-lg md:text-xl font-medium max-w-[600px] leading-relaxed">

            Operating India's most advanced genomics network, we combine massive scale with the world's leading sequencing platforms.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-[32px] border border-primary/5 hover:border-secondary/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">

              <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-primary text-[32px] font-bold leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-secondary font-bold text-sm uppercase tracking-wider">
                  {stat.suffix}
                </span>
              </div>
              <h3 className="text-primary font-bold text-lg mb-4 leading-tight">
                {stat.label}
              </h3>
              <p className="text-primary/50 text-sm font-medium leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative h-[400px] md:h-[600px] rounded-[32px] overflow-hidden group shadow-2xl">

            <Image
              src={images[0]}
              alt="Main Lab Facility"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105" />

            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <p className="text-sm font-bold tracking-widest uppercase mb-1">Central Hub</p>
              <p className="text-2xl font-bold !whitespace-pre-line">Karkinos Mumbai Lab</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-[290px] rounded-[32px] overflow-hidden group">

              <Image
                src={images[1]}
                alt="Sequencing Platform"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105" />

              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-[290px] rounded-[32px] overflow-hidden group">

              <Image
                src={images[2]}
                alt="Lab Equipment"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105" />

            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px] rounded-[32px] overflow-hidden group">

            <Image
              src={images[3]}
              alt="Lab Corridor"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105" />

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-[300px] rounded-[32px] overflow-hidden group">

            <Image
              src={images[4]}
              alt="Lab Lobby"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105" />

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[300px] rounded-[32px] overflow-hidden group">

            <Image
              src={images[5]}
              alt="Technician at Work"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105" />

          </motion.div>
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">CAP & NABL Accredited</h3>
              <p className="text-white/60 font-medium">Maintaining the highest global standards for clinical diagnostics.</p>
            </div>
          </div>
          <button className="bg-secondary text-primary px-10 py-4 rounded-full font-bold hover:bg-white transition-all hover:scale-105 whitespace-nowrap !whitespace-pre-line">Know more about our labs

          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        .italic-serif {
          font-family: 'Times New Roman', serif;
          font-style: italic;
        }
      `}</style>
    </section>);

};

export default LabFacilities;