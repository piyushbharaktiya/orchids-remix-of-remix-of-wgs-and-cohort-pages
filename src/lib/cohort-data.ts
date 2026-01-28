export type CohortData = {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  emotiveImage: string;
  brochureCoverImage: string;
  description: string;
  brochureUrl: string;
  mailerContent: {
    subject: string;
    body: string;
  };
  whatsappContent: {
    message: string;
    image: string;
  };
  benefits: string[];
};

export const COHORTS: Record<string, CohortData> = {
  clinicians: {
    slug: "clinicians",
    title: "Clinicians",
    heroTitle: "Precision Medicine for Your Practice",
    heroSubtitle: "Empower your clinical decisions with high-fidelity Whole Genome Sequencing data.",
    heroImage: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?q=80&w=2070&auto=format&fit=crop",
    emotiveImage: "https://images.unsplash.com/photo-1579152123223-2a5b069d71c6?q=80&w=2080&auto=format&fit=crop",
    brochureCoverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    description: "Integrate genomics into your diagnostic workflow. Our WGS reports provide clear, actionable insights for rare diseases, oncology, and pharmacogenomics.",
    brochureUrl: "/brochures/clinician-guide.pdf",
    mailerContent: {
      subject: "Enhance Patient Outcomes with Whole Genome Sequencing",
      body: "Dear Doctor,\n\nWe invite you to explore the diagnostic power of Whole Genome Sequencing (WGS) for your practice. With WGS, you can identify variants that traditional panels miss, providing your patients with the most comprehensive genetic analysis available today.\n\nOur reports are designed by clinicians, for clinicians—prioritizing actionable findings and clinical utility.\n\nBest regards,\nThe WGS E-Com Team",
    },
    whatsappContent: {
      message: "Hello Doctor! 🩺 Elevate your practice with our Clinical-Grade Whole Genome Sequencing. Get 100% genomic coverage and actionable reports for your patients. Download our Clinician's Guide here: [Link]",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop",
    },
    benefits: [
      "Highest diagnostic yield in the industry",
      "Actionable pharmacogenomic insights",
      "Dedicated genetic counseling support",
      "Fast turnaround time for critical cases"
    ],
  },
  "clinics-hospitals": {
    slug: "clinics-hospitals",
    title: "Clinics & Hospitals",
    heroTitle: "Future-Proof Your Institution",
    heroSubtitle: "Scale precision medicine across your departments with our institutional partnership program.",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    emotiveImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    brochureCoverImage: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2070&auto=format&fit=crop",
    description: "Partner with us to offer world-class genomic testing to your patients. We provide the infrastructure, logistics, and expert analysis while you focus on care.",
    brochureUrl: "/brochures/institutional-partnership.pdf",
    mailerContent: {
      subject: "Setting New Standards in Precision Healthcare",
      body: "To the Administration,\n\nGenomics is no longer the future—it's the present. By partnering with WGS E-Com, your hospital can offer comprehensive Whole Genome Sequencing without the overhead of building an in-house genomics lab.\n\nLet's discuss how we can integrate our platform into your EHR and workflow.\n\nSincerely,\nPartnership Desk",
    },
    whatsappContent: {
      message: "Transform your hospital into a Precision Medicine Hub! 🏥 Partner with WGS E-Com for seamless genomic testing integration. View our institutional brochure: [Link]",
      image: "https://images.unsplash.com/photo-1538108149393-fdfd81895907?q=80&w=2070&auto=format&fit=crop",
    },
    benefits: [
      "White-labeled reporting options",
      "Seamless logistics and kit management",
      "Volume-based institutional pricing",
      "Integration with hospital management systems"
    ],
  },
  "nuclear-families": {
    slug: "nuclear-families",
    title: "Nuclear Families",
    heroTitle: "Protection for Your Home",
    heroSubtitle: "Ensure a healthy future for your children and yourself with proactive genetic screening.",
    heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    emotiveImage: "https://images.unsplash.com/photo-1536640719371-31260b377d08?q=80&w=2070&auto=format&fit=crop",
    brochureCoverImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2070&auto=format&fit=crop",
    description: "Identify hereditary risks early. Our family-focused genomic screening helps you manage potential health issues before they arise.",
    brochureUrl: "/brochures/family-health-guide.pdf",
    mailerContent: {
      subject: "A Gift of Health for Your Family",
      body: "Hi there,\n\nNothing is more important than the health of your loved ones. Our Whole Genome Sequencing for families provides a roadmap for lifelong wellness, helping you identify risks for conditions that can be managed or prevented.\n\nStart your family's journey to precision health today.",
    },
    whatsappContent: {
      message: "Your family's health is in their DNA. 👨‍👩‍👧‍👦 Discover how WGS can protect your loved ones with proactive health insights. Download the Family Guide: [Link]",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop",
    },
    benefits: [
      "Comprehensive carrier screening",
      "Pediatric health risk assessment",
      "Personalized nutrition for children",
      "Peace of mind for parents"
    ],
  },
  "joint-families": {
    slug: "joint-families",
    title: "Joint Families",
    heroTitle: "A Legacy of Health",
    heroSubtitle: "Understand shared genetic traits across generations to preserve your family's vitality.",
    heroImage: "https://images.unsplash.com/photo-1590072223844-30678d975a5b?q=80&w=2070&auto=format&fit=crop",
    emotiveImage: "https://images.unsplash.com/photo-1529156069898-49953e39b30c?q=80&w=2027&auto=format&fit=crop",
    brochureCoverImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop",
    description: "Joint families share more than just a home—they share a genetic legacy. Map your family's health history to protect the elders and guide the youth.",
    brochureUrl: "/brochures/generational-wellness.pdf",
    mailerContent: {
      subject: "Preserving the Vitality of Your Generations",
      body: "Dear Family,\n\nIn a joint family, health history is shared history. By understanding the genetic makeup of multiple family members, we can gain deeper insights into hereditary conditions and ensure everyone receives the care they need.\n\nJoin our Generational Wellness program today.",
    },
    whatsappContent: {
      message: "Protect the elders, guide the youth. 👵👶 Joint family genomic screening helps identify shared risks and preserve your family legacy. Get the brochure: [Link]",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop",
    },
    benefits: [
      "Cross-generational risk analysis",
      "Elder care and longevity insights",
      "Shared lifestyle and diet recommendations",
      "Comprehensive family health mapping"
    ],
  },
  couples: {
    slug: "couples",
    title: "Couples",
    heroTitle: "Planning Your Tomorrow, Today",
    heroSubtitle: "The most comprehensive pre-conception screening for a healthy start.",
    heroImage: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2080&auto=format&fit=crop",
    emotiveImage: "https://images.unsplash.com/photo-1534533983688-c7ba8913ed79?q=80&w=2070&auto=format&fit=crop",
    brochureCoverImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    description: "Before you start a family, ensure you're both on the same page genetically. Our couple's screening identifies matching carrier risks for over 1,000 conditions.",
    brochureUrl: "/brochures/couples-screening.pdf",
    mailerContent: {
      subject: "Starting Your Journey on a Healthy Note",
      body: "Congratulations on your journey together!\n\nAs you plan your future family, knowledge is your best ally. Our Pre-conception WGS for couples is the most advanced screening available, ensuring you have the information needed for a healthy pregnancy.\n\nBook a session with our genetic counselors today.",
    },
    whatsappContent: {
      message: "Planning a family? 👩‍❤️‍👨 Start with the ultimate peace of mind. Our Couples' Genomic Screening covers 1,000+ conditions. Learn more here: [Link]",
      image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2071&auto=format&fit=crop",
    },
    benefits: [
      "Carrier matching for 1,000+ disorders",
      "Pre-conception genetic counseling",
      "Insights into reproductive health",
      "Simple saliva-based home collection"
    ],
  },
  newborns: {
    slug: "newborns",
    title: "Newborns",
    heroTitle: "The Ultimate Gift: A Lifetime of Health",
    heroSubtitle: "Identify 500+ manageable conditions that standard newborn screening misses.",
    heroImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65ee9?q=80&w=2070&auto=format&fit=crop",
    emotiveImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2070&auto=format&fit=crop",
    brochureCoverImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2070&auto=format&fit=crop",
    description: "Standard heel-prick tests only cover a handful of conditions. WGS provides a comprehensive safety net, identifying metabolic and genetic issues early.",
    brochureUrl: "/brochures/newborn-genomics.pdf",
    mailerContent: {
      subject: "A Healthier Future for Your Little One",
      body: "Welcome to the world!\n\nEvery parent wants the best for their newborn. Our Baby-WGS screening goes beyond standard tests to identify treatable conditions early, giving your child the best possible start in life.\n\nIt's a one-time test for a lifetime of health guidance.",
    },
    whatsappContent: {
      message: "Give your baby a head start! 👶 Our Newborn WGS identifies 500+ treatable conditions early. It's the ultimate roadmap for their health. Download the Baby-WGS guide: [Link]",
      image: "https://images.unsplash.com/photo-1519689684481-96018e4ee07c?q=80&w=2070&auto=format&fit=crop",
    },
    benefits: [
      "Early detection of 500+ disorders",
      "Actionable insights for diet and medication",
      "Non-invasive collection method",
      "Lifelong genomic health record"
    ],
  },
  corporate: {
    slug: "corporate",
    title: "Corporate",
    heroTitle: "Precision Wellness for High Performance",
    heroSubtitle: "Empower your team with DNA-based health insights for peak productivity.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    emotiveImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    brochureCoverImage: "https://images.unsplash.com/photo-1454165833767-027ff33027ef?q=80&w=2070&auto=format&fit=crop",
    description: "Generic wellness programs are a thing of the past. Our corporate genomics program offers personalized nutrition, stress management, and fitness plans based on employee DNA.",
    brochureUrl: "/brochures/corporate-wellness-dna.pdf",
    mailerContent: {
      subject: "Revolutionize Your Employee Wellness Program",
      body: "Hi [HR Manager Name],\n\nInvest in your most valuable asset: your people. Our DNA-based wellness programs go beyond gym memberships, providing employees with personalized health roadmaps that reduce burnout and improve performance.\n\nLet's schedule a demo of our corporate portal.",
    },
    whatsappContent: {
      message: "Elevate your corporate wellness! 🏢 Personalized DNA insights for your team to boost health and productivity. See our corporate offerings: [Link]",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    },
    benefits: [
      "Customized stress management profiles",
      "DNA-based nutrition and fitness plans",
      "Aggregate workforce health insights",
      "Higher employee engagement and retention"
    ],
  },
  "fitness-enthusiasts": {
    slug: "fitness-enthusiasts",
    title: "Fitness Enthusiasts",
    heroTitle: "Unlock Your Peak Potential",
    heroSubtitle: "Train smarter, not harder, with genetic insights into your athletic performance.",
    heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    emotiveImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    brochureCoverImage: "https://images.unsplash.com/photo-1441926972411-04285703f443?q=80&w=2070&auto=format&fit=crop",
    description: "Understand your body's response to different types of training, recovery needs, and nutritional requirements. Optimize your fitness journey with your unique DNA.",
    brochureUrl: "/brochures/fitness-genomics.pdf",
    mailerContent: {
      subject: "Stop Guessing, Start Training with Your DNA",
      body: "Hey Champ,\n\nAre you hitting a plateau? Your DNA might have the answers. Our Fitness WGS analyzes markers for muscle power, endurance, injury risk, and recovery speed.\n\nTake your performance to the next level with precision training.",
    },
    whatsappContent: {
      message: "Train according to your DNA! 🏋️‍♂️ Optimize recovery, prevent injuries, and unlock your true potential with WGS. Download the Athlete's DNA Guide: [Link]",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    },
    benefits: [
      "Power vs. Endurance profile",
      "Injury risk and recovery mapping",
      "Personalized macro-nutrient ratios",
      "Optimal training volume insights"
    ],
  },
};
