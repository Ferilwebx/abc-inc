import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import CTASection from "@/components/home/CTASection";

const HERO_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/2fb40dd05_generated_2395a659.png";

const specs = [
  { label: "Machine Range", value: "400T – 2000T Cold Chamber" },
  { label: "Alloys", value: "ADC12, A380, LM24, LM6" },
  { label: "Tolerances", value: "±0.05 mm standard, ±0.02 mm achievable" },
  { label: "Part Weight", value: "50g to 12 kg" },
  { label: "Monthly Capacity", value: "500,000+ castings" },
  { label: "Surface Finish", value: "As-cast, shot blasted, machined, powder coated" },
];

const advantages = [
  "High production rates ideal for volume manufacturing",
  "Excellent dimensional accuracy and surface finish",
  "Thin wall capability down to 1.5 mm",
  "Complex geometries with minimal secondary operations",
  "Superior repeatability across production runs",
  "Lower per-piece cost at scale compared to other casting methods",
];

export default function HPDC() {
  return (
    <>
      <section className="relative bg-foundry py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="High pressure die casting" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-foundry/80" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Capabilities</span>
            <h1 className="heading-xl text-white mt-4">High Pressure<br /><span className="text-aluminum/90">Die Casting.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">Cold chamber HPDC machines from 400T to 2000T delivering precision aluminium components at scale. Tolerances to ±0.05 mm. Capacity for 500,000+ castings per month.</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="2000T" label="Max Tonnage" light />
            <StatCard value="500K+" label="Monthly Capacity" light />
            <StatCard value="±0.05" suffix="mm" label="Standard Tolerance" light />
            <StatCard value="8" label="HPDC Machines" light />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Technical Specifications" />
            <div className="space-y-4">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between py-3 border-b border-slate-200/60">
                  <span className="text-sm font-medium text-foundry">{s.label}</span>
                  <span className="text-sm text-steel/70 text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="Process Advantages" />
            <ul className="space-y-3">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-steel/80">
                  <div className="w-1.5 h-1.5 bg-precision mt-2 flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/rfq" className="inline-flex items-center gap-2 bg-foundry text-white px-6 py-3 font-semibold text-sm hover:bg-steel transition-colors chamfer">
                Request HPDC Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
