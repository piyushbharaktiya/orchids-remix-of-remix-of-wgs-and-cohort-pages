"use client";

import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import WGSBenefits from "@/components/sections/wgs-benefits";
import ProcessSection from "@/components/sections/process-section";
import ComparisonSection from "@/components/sections/comparison-section";
import OrientationSignup from "@/components/sections/orientation-signup";
import TestimonialsSection from "@/components/sections/testimonials";
import LabFacilities from "@/components/sections/lab-facilities";
import TreatmentPillCloud from "@/components/sections/treatment-pill-cloud";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <HeroSection />
      <WGSBenefits />
      <TestimonialsSection />
      <ProcessSection />
      <ComparisonSection />
      <OrientationSignup />
      <LabFacilities />
      <TreatmentPillCloud />
      <Footer />
    </main>
  );
}
