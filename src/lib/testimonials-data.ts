export interface Testimonial {
  name: string;
  tags: string[];
  image: string;
  storyTitle?: string;
  subtitle?: string;
  storyBody?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jayatri',
    tags: ['Answers From the First Day', 'Newborn Screening', 'Mumbai'],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/Gemini_Generated_Image_k27i86k27i86k27i-1769579642292.png?width=8000&height=8000&resize=contain',
    storyTitle: '“Answers From the First Day”',
    subtitle: 'Parents of a 1 day old baby, Mumbai',
    storyBody: "“When our baby was just one day old, doctors found the genetic cause behind the anemia and jaundice.\nKnowing this early helped our doctors treat our child quickly and helped us understand what this means for our family.\n\nGetting answers so soon gave us reassurance and a clear path forward from the very beginning.”"
  },
    {
      name: 'Bhavya',
      tags: ['Active Life', 'Cardiac Risk', 'Bangalore'],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/Bhavya-GYM-1769580542723.png?width=8000&height=8000&resize=contain',
      storyTitle: '“Peace of Mind for an Active Life”',
    subtitle: '26 year old male, Bangalore',
    storyBody: "“As someone who spends nearly two and a half hours in the gym every day, I had started worrying about the stories of sudden cardiac problems in young athletes. Even though I felt healthy, the fear stayed in the back of my mind.\nMy genome test showed no harmful variants linked to cardiomyopathy.\nThat one result gave me something I truly needed — peace of mind.\nNow I can train with confidence, knowing my heart is on my side.”"
  },
    {
      name: 'Samitha',
      tags: ['Family Decision', 'Carrier Status', 'Bangalore'],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/Samitha-website-1769580844709.png?width=8000&height=8000&resize=contain',
      storyTitle: 'One Result, Informed as a Family',
      subtitle: 'Family of 3 from Bangalore',
      storyBody: "“As a nuclear family, we chose to undergo genetic testing together. The analysis showed that 2 of us are carriers of an HBA gene variant, explaining the mild anemia seen in our family.\nWith this information, we now understand our carrier status, the inheritance pattern, and what this means for our daughter and for future family planning.\nThis one test gave our family clarity, reassurance, and the confidence to make informed decisions together.”"
    },
  {
    name: 'Gupta Family',
    tags: ['Cancer Risk', 'Hereditary Variant', 'Delhi'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/Gemini_Generated_Image_596bh7596bh7596b-1769580684348.png?width=8000&height=8000&resize=contain',
    storyTitle: 'Protecting the Whole Family',
    subtitle: 'Family of 15, Delhi',
    storyBody: "“Our family had lost two relatives to early-onset cancer, and many of us lived with constant uncertainty about our own risk. As a large family, we decided to undergo genetic testing together to find answers.\nThe analysis identified a hereditary cancer variant in our family. For the first time, we understood why cancer kept appearing across generations.\nThis result didn’t just help one person — it helped all of us. Some of us began early screening, others made preventive choices, and every branch of the family finally had clarity.\nOne test changed how our entire family thinks about cancer, prevention, and the future.”"
  },
    {
      name: 'Dr Ashish Singh',
      tags: ['Clinical Direction', 'Pediatric Case', 'Bangalore'],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/Gemini_Generated_Image_9eb8e89eb8e89eb8-1769581888738.png?width=8000&height=8000&resize=contain',
      storyTitle: 'Precision That Changes Clinical Direction',
    subtitle: 'A Neurology Clinic, Bangalore',
    storyBody: "“In this complex pediatric case with overlapping metabolic and neurological differentials, genomic analysis identified a homozygous stop-gain variant in the MADD gene, confirming an autosomal recessive neurodevelopmental disorder.\nThis definitive diagnosis ended years of diagnostic uncertainty, refined our clinical management, and enabled accurate genetic counseling for the family.\nFor us as clinicians, this was a powerful reminder of how genomic testing can transform complex cases into clear clinical answers.”"
  },
    {
      name: 'Kavya Mahatre',
      tags: ['Family Planning', 'Newlyweds', 'Maharashtra'],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/Gemini_Generated_Image_klg2t9klg2t9klg2-1-1769581619227.png?width=8000&height=8000&resize=contain',
      storyTitle: 'Planning Our Family With Confidence',
      subtitle: 'Newlyweds from Maharashtra',
      storyBody: "“We decided to undergo carrier screening before starting a family, even though we both felt healthy and had no known family history.\nWhen we learned that we were carriers for a genetic condition, the counseling helped us understand our risks and our options.\nInstead of fear, we felt prepared.\nThis one test gave us the confidence to plan our future family with clarity and peace of mind.”"
    },
    {
      name: 'Hospital Patna',
      tags: ['Hospital Integration', 'Genomic Medicine', 'Patna'],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/Gemini_Generated_Image_9eb8e89eb8e89eb8-1769581888738.png?width=8000&height=8000&resize=contain',
      storyTitle: 'Strengthening Care Through Genomic Medicine',
    subtitle: 'A Multispeciality Hospital, Patna',
    storyBody: "“As a hospital, we integrated comprehensive genomic testing into our diagnostic pathway for complex and undiagnosed cases.\nIn multiple patients, this approach has shortened diagnostic odysseys, improved clinical decision-making, and enabled precise counseling for families.\nGenomic testing has become an essential part of how we deliver accurate, modern, and patient-centered care.”"
  },
  {
    name: 'Anita S.',
    tags: ['Carrier Insight', 'Family Planning', 'Beta Thalassemia'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/ChatGPT-Image-Jan-22-2026-03_28_28-PM-1769075946817.png?width=1200&height=1200&resize=cover',
    storyTitle: '“It gave me clarity, not anxiety.”',
    subtitle: '30-year-old woman',
    storyBody: "“I felt completely healthy, so I never imagined I could be a carrier for beta thalassemia. My report helped me understand what this means, not just for me, but for any future family decisions. Now I know that partner testing matters, and I can plan my life with the right information.”"
  },
  {
    name: 'Rajesh V.',
    tags: ['Genomic Insight', 'Anxiety & Hypertension', 'Rare Condition'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/ChatGPT-Image-Jan-22-2026-03_44_47-PM-1769077703666.png?width=1200&height=1200&resize=cover',
    storyTitle: '“It finally explained what I was feeling.”',
    subtitle: "",
    storyBody: "“I had struggled with anxiety and blood pressure for years. My genome revealed a rare condition that connected everything. Now I’m monitored properly and no longer in the dark.”"
  },
  {
    name: 'Vikram S.',
    tags: ['Cholesterol Risk', 'Pharmacogenomics', 'Precision Medicine'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3504a90d-5296-4e35-82b3-d4426dd4a297/ChatGPT-Image-Jan-22-2026-04_08_50-PM-1769078519341.png?width=1200&height=1200&resize=cover',
    storyTitle: '“For the first time, treatment felt personal.”',
    subtitle: '50-year-old man',
    storyBody: "“I found out I had a high genetic risk for cholesterol and also which medicines suit me best. My doctor chose the right drug from day one. Fewer side effects. More confidence.”"
  }
];
