import React from 'react';
import Image from 'next/image';

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/svgs/logo1_479a6ab7-6.svg", width: 80, height: 60, alt: "brand logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/svgs/logo2_f5ed2e61-7.svg", width: 156, height: 16, alt: "brand logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/svgs/logo3_37952d20-8.svg", width: 31, height: 42, alt: "brand logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/svgs/logo4_6f803e7f-9.svg", width: 81, height: 50, alt: "brand logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/svgs/logo5_a751e99c-10.svg", width: 81, height: 32, alt: "brand logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/svgs/logo6_40fe9470-11.svg", width: 91, height: 26, alt: "brand logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/svgs/logo7_1f410c6c-12.svg", width: 81, height: 24, alt: "brand logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/svgs/logo8_34a2b7aa-13.svg", width: 102, height: 40, alt: "brand logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f21d5a5-6fa5-4618-b6b0-897cdf7bda18-hertilityhealth-com/assets/svgs/logo9_55a852ce-14.svg", width: 84, height: 34, alt: "brand logo" },
];

const PartnerCarousel = () => {
  return (
    <section 
      className="w-full py-[32px] md:py-[41.144px] overflow-hidden"
      style={{
        backgroundColor: '#FBF5FC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <p 
        className="text-[#7D2C7D] font-sans font-semibold mb-[24px] md:mb-[32.328px]"
        style={{
          fontSize: '11px',
          lineHeight: '1.4',
          letterSpacing: '0.04em',
          textTransform: 'none'
        }}
      >
        Partnered with
      </p>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div 
          className="flex whitespace-nowrap animate-marquee"
          style={{
            animation: 'marquee 40s linear infinite',
            width: 'max-content'
          }}
        >
          {/* First set of logos */}
          <div className="flex items-center gap-[40px] md:gap-[64.656px] px-[20px] md:px-[32.328px]">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex-shrink-0 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicated set for infinite loop */}
          <div className="flex items-center gap-[40px] md:gap-[64.656px] px-[20px] md:px-[32.328px]">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex-shrink-0 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Third set to ensure seamless scroll on large screens */}
          <div className="flex items-center gap-[40px] md:gap-[64.656px] px-[20px] md:px-[32.328px]">
            {logos.map((logo, index) => (
              <div key={`logo-3-${index}`} className="flex-shrink-0 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default PartnerCarousel;