"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tag?: string;
  link: string;
}

const products: ProductCard[] = [
  {
    id: 1,
    title: "Advanced Hormone and Fertility Test",
    description: "A diagnostic test with clinical grade results, including a comprehensive clinically recommended Care Plan and Clinical Result Review Call.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_8.png",
    tag: "Most popular",
    link: "#"
  },
  {
    id: 2,
    title: "Fertility Advisor Call",
    description: "In-depth consultation with an expert Fertility Advisor, offering personalised guidance on navigating fertility services and treatment options.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_9.png",
    link: "#"
  },
  {
    id: 3,
    title: "Pelvic Ultrasound Scan",
    description: "Pelvic ultrasound scan referral at one of our nationwide partner clinics to investigate symptoms and obtain an accurate Antral Follicle Count.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_10.png",
    link: "#"
  },
  {
    id: 4,
    title: "Private Gynaecologist Consultation",
    description: "In-depth consultation with a Private Gynaecologist for comprehensive symptom management advice, specialist referrals, and care plans for reproductive health conditions.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_11.png",
    link: "#"
  },
  {
    id: 5,
    title: "Nutrition Consultation",
    description: "Comprehensive consultation with a Registered Nutritionist or Dietitian, trained in pre-conception and pregnancy nutrition, intuitive eating, and PCOS-specific nutrition.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_9.png",
    link: "#"
  },
  {
    id: 6,
    title: "Menopause Specialist",
    description: "In-depth, personalised advice and expert guidance from menopause specialists, including detailed next steps, such as HRT prescriptions.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_11.png",
    link: "#"
  },
  {
    id: 7,
    title: "Counselling",
    description: "Tailored emotional support with our Counselling Service. Our trained Counsellor can help with a wide range of reproductive health-related issues.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_9.png",
    link: "#"
  },
  {
    id: 8,
    title: "Egg Freezing",
    description: "Start your Egg-freezing journey with our comprehensive packages, including immediate specialist referrals to leading nationwide clinics.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/images/images_10.png",
    link: "#"
  }
];

export default function ProductCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 330; 
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-[#FBF5FC] py-[80px] lg:py-[120px] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] text-[#2D0A2D] font-sans">
              We&apos;re <span className="font-italic-serif italic">more</span> than just a test
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-4 mt-6 md:mt-0"
          >
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border ${
                canScrollLeft 
                  ? 'bg-white border-[#EEDDEE] text-[#2D0A2D] hover:bg-[#7D2C7D] hover:text-white' 
                  : 'bg-white border-[#EEDDEE] text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border ${
                canScrollRight 
                  ? 'bg-[#2D0A2D] border-[#2D0A2D] text-white hover:bg-[#7D2C7D]' 
                  : 'bg-white border-[#EEDDEE] text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="flex-shrink-0 w-[300px] md:w-[320px] lg:w-[350px] snap-start"
            >
              <div className="bg-white rounded-[24px] overflow-hidden h-full flex flex-col shadow-[0px_4px_20px_rgba(125,44,125,0.08)] hover:scale-[1.01] transition-transform duration-300 group">
                <div className="relative aspect-[4/3] w-full bg-[#F3E8F3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 300px, 350px"
                  />
                  {product.tag && (
                    <div className="absolute left-4 bottom-4">
                      <span className="bg-[#D9F99D] text-[#2D0A2D] text-[12px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#2D0A2D] mb-4 leading-tight group-hover:text-[#7D2C7D] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] text-[#280828] opacity-80 leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>
                  
                  <a 
                    href={product.link}
                    className="inline-flex items-center text-[#2D0A2D] font-bold text-[14px] group/link"
                  >
                    Learn more
                    <span className="ml-2 w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] group-hover/link:bg-[#2D0A2D] group-hover/link:text-white transition-colors">
                      <ArrowRight size={12} />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}