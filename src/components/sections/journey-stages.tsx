import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * JourneyStages component
 * Clones the "We're all at different stages of our journey" section.
 * Features a 2-column layout with text on the left and image-based cards on the right.
 */
const JourneyStages = () => {
  const stages = [
    {
      title: 'Managing symptoms',
      description: 'Fatigue, irritability, anxiety, feeling cold, low mood, acne...',
      backgroundImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/symptomsBg_b58dba5a-16.webp',
    },
    {
      title: 'Fertility',
      description: 'Planning for the future or actively trying to conceive',
      backgroundImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/fertilityBg_ebb3b2d7-17.webp',
    },
    {
      title: 'Perimenopause or Menopause',
      description: 'Menopausal or experiencing symptoms and looking for answers',
      backgroundImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/perimenopauseBg_75daaa9b-18.webp',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-[#FBF5FC] section-padding overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[540px]"
          >
            <h2 
              className="text-[#2D0A2D] font-medium leading-[1.2] mb-6"
              style={{ fontSize: '48px', letterSpacing: '-0.01em' }}
            >
              We&apos;re all at different stages of our <span className="font-italic-serif italic text-[#7D2C7D]">journey</span>
            </h2>
            <p className="text-[#7D2C7D] font-semibold text-lg">
              What&apos;s most important to you?
            </p>
          </motion.div>

          {/* Right Column: Category Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            {stages.map((stage, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="group relative h-[140px] md:h-[160px] rounded-[24px] overflow-hidden cursor-pointer transition-shadow duration-300"
                style={{ boxShadow: '0px 4px 20px rgba(125, 44, 125, 0.08)' }}
              >
                {/* Background Image with Overlay */}
                <Image
                  src={stage.backgroundImage}
                  alt={stage.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
                
                {/* Plus Icon Circle */}
                <motion.div 
                  whileHover={{ rotate: 90 }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7D2C7D] z-10 shadow-sm transition-colors group-hover:bg-[#FFDF61]"
                >
                  <Plus size={20} strokeWidth={2.5} />
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-white z-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90 line-clamp-1">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneyStages;