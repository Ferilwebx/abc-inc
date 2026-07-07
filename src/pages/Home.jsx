import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhyPartner from "@/components/home/WhyPartner";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import InfrastructurePreview from "@/components/home/InfrastructurePreview";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import QualityPreview from "@/components/home/QualityPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyPartner />
      <CapabilitiesSection />
      <InfrastructurePreview />
      <IndustriesSection />
      <ProcessSection />
      <QualityPreview />
      <CTASection />
    </>
  );
}