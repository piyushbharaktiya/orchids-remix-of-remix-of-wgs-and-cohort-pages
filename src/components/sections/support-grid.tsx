import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SupportGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-[#7D2C7D] py-[80px] md:py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Animated Headline Block */}
        <div className="flex flex-col items-center justify-center text-center mb-24 space-y-4 md:space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#FBF5FC] text-[42px] md:text-[64px] font-medium italic-serif line-through decoration-1"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            I feel dismissed
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#FBF5FC] text-[42px] md:text-[64px] font-medium italic-serif line-through decoration-1"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            I am just a number
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#FBF5FC] text-[42px] md:text-[64px] font-medium italic-serif"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            I don&apos;t feel heard
          </motion.h2>
        </div>

        {/* Support Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 
            className="text-[#FBF5FC] text-[32px] md:text-[48px] font-medium leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We&apos;re here to support you
          </h3>
        </motion.div>

        {/* Interaction Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        >
          {/* Card 1: Clinical Grade Results */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-white rounded-[24px] p-8 card-shadow flex flex-col justify-between overflow-hidden group">
            <div>
              <p className="text-[#2D0A2D] text-[18px] md:text-[20px] font-semibold leading-[1.4] mb-8 group-hover:text-[#7D2C7D] transition-colors">
                Receive clinical-grade results in 6 days of testing
              </p>
            </div>
            <div className="relative h-[240px] w-full flex justify-center items-end mt-4">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_3.png"
                alt="A hand getting pricked on the finger"
                width={315}
                height={400}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Card 2: Egg Count Insights */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-white rounded-[24px] p-8 card-shadow flex flex-col justify-between overflow-hidden group">
            <div>
              <p className="text-[#2D0A2D] text-[18px] md:text-[20px] font-semibold leading-[1.4] mb-8 group-hover:text-[#7D2C7D] transition-colors">
                Get insights into your egg count
              </p>
            </div>
            <div className="relative h-[240px] w-full flex justify-center items-center mt-4">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_4.png"
                alt="A Hertility snapshot of the report showing AMH hormone scale"
                width={315}
                height={400}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Card 3: Hormonal Symptoms */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-white rounded-[24px] p-8 card-shadow flex flex-col justify-between overflow-hidden group">
            <div>
              <p className="text-[#2D0A2D] text-[18px] md:text-[20px] font-semibold leading-[1.4] mb-8 group-hover:text-[#7D2C7D] transition-colors">
                Find answers to your hormonal symptoms, such as acne or irregular periods
              </p>
            </div>
            <div className="relative h-[240px] w-full flex justify-center items-center mt-4">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_5.png"
                alt="Some decorative circles outlining symptoms a user most tracked"
                width={315}
                height={400}
                className="object-contain transition-transform duration-500 group-hover:rotate-6"
              />
            </div>
          </motion.div>

          {/* Card 4: Doctor Report - Large */}
          <motion.div variants={itemVariants} className="md:col-span-6 bg-white rounded-[24px] p-8 card-shadow flex flex-col md:flex-row justify-between items-center overflow-hidden gap-6 group">
            <div className="md:max-w-[45%]">
              <p className="text-[#2D0A2D] text-[18px] md:text-[20px] font-semibold leading-[1.4] group-hover:text-[#7D2C7D] transition-colors">
                Receive a doctor-written report, with a clinical Care Plan
              </p>
            </div>
            <div className="relative h-[300px] w-full md:w-[50%] flex justify-end items-end">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_6.png"
                alt="An example of a Hertility report"
                width={315}
                height={400}
                className="object-contain transition-transform duration-500 group-hover:translate-y--2"
              />
            </div>
          </motion.div>

          {/* Card 5: Expert Support - Large */}
          <motion.div variants={itemVariants} className="md:col-span-6 bg-white rounded-[24px] p-8 card-shadow flex flex-col md:flex-row justify-between items-center overflow-hidden gap-6 group">
            <div className="md:max-w-[45%]">
              <p className="text-[#2D0A2D] text-[18px] md:text-[20px] font-semibold leading-[1.4] group-hover:text-[#7D2C7D] transition-colors">
                Expert support included with a Clinical Result Review Call
              </p>
            </div>
            <div className="relative h-[300px] w-full md:w-[50%] flex justify-end items-end">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_7.png"
                alt="Clinical Results Review Call on mobile phone"
                width={315}
                height={400}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-[60px] flex justify-center"
        >
          <a href="/health-assessment/goal">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFDF61] text-[#2D0A2D] px-[48px] py-[16px] rounded-[100px] font-bold text-[16px] shadow-lg"
            >
              Start 5-min assessment
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportGrid;