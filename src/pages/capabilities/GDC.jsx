import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import CTASection from "@/components/home/CTASection";

const HERO_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/b09dc23bf_generated_4fcbcbd8.png";

const specs = [
  { label: "Process", value: "Permanent Mould Gravity Casting" },
  { label: "Alloys", value: "LM25, LM6, A356" },
  { label: "Heat Treatment", value: "T6 Solution Treated & Aged" },
  { label: "Part Weight", value: "200g to 25 kg" },
  { label: "Wall Thickness", value: "4 mm minimum" },
  { label: "Applications", value: "Structural, high-integrity components" },
];

const advantages = [
  "Superior mechanical properties compared to HPDC",
  "T6 heat treatment for maximum strength and hardness",
  "Excellent pressure tightness for fluid applications",
  "Lower porosity levels for critical structural parts",
  "Ideal for low to medium volume production runs",
  "Better weldability than pressure die cast components",
];

export default function GDC() {
  return (
    <>
      <section className="relative bg-foundry py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Gravity die casting" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-foundry/80" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Capabilities</span>
            <h1 className="heading-xl text-white mt-4">Gravity Die<br /><span className="text-aluminum/90">Casting.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">Permanent mould gravity casting in LM25 and LM6 alloys. T6 heat treatment for superior mechanical properties and high-integrity structural applications.</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="T6" label="Heat Treatment" light />
            <StatCard value="25" suffix="kg" label="Max Part Weight" light />
            <StatCard value="LM25" label="Primary Alloy" light />
            <StatCard value="100%" label="Pressure Tight" light />
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
            <SectionHeading title="Why Choose GDC" />
            <ul className="space-y-3">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-steel/80">
                  <div className="w-1.5 h-1.5 bg-precision mt-2 flex-shrink-0" />{a}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/rfq" className="inline-flex items-center gap-2 bg-foundry text-white px-6 py-3 font-semibold text-sm hover:bg-steel transition-colors chamfer">
                Request GDC Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}