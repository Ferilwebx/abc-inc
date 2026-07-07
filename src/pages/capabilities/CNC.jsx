import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import CTASection from "@/components/home/CTASection";

const HERO_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/1f730838c_generated_d945ed5d.png";

const specs = [
  { label: "Machine Count", value: "40+ CNC & VMC Centres" },
  { label: "Axis Capability", value: "3-axis, 4-axis, 5-axis simultaneous" },
  { label: "Tolerances", value: "±0.01 mm on critical dimensions" },
  { label: "Materials", value: "Aluminium, Steel, Brass, Stainless" },
  { label: "Surface Finish", value: "Down to Ra 0.4 µm" },
  { label: "Inspection", value: "In-process gauging with CMM verification" },
];

const advantages = [
  "5-axis simultaneous machining for complex geometries",
  "In-process gauging with automatic tool compensation",
  "Integrated with casting for single-source accountability",
  "Lights-out machining capability for 24/7 production",
  "Rapid changeover between part numbers",
  "100% dimensional inspection on critical features",
];

export default function CNC() {
  return (
    <>
      <section className="relative bg-foundry py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="CNC machining" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-foundry/80" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Capabilities</span>
            <h1 className="heading-xl text-white mt-4">CNC<br /><span className="text-aluminum/90">Machining.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">40+ CNC and VMC machines including 5-axis capability. Tolerances to ±0.01 mm. 100% dimensional inspection on every critical feature.</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="40+" label="CNC/VMC Machines" light />
            <StatCard value="5" label="Axis Capability" light />
            <StatCard value="±0.01" suffix="mm" label="Best Tolerance" light />
            <StatCard value="Ra 0.4" label="Surface Finish (µm)" light />
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
            <SectionHeading title="Machining Advantages" />
            <ul className="space-y-3">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-steel/80">
                  <div className="w-1.5 h-1.5 bg-precision mt-2 flex-shrink-0" />{a}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/rfq" className="inline-flex items-center gap-2 bg-foundry text-white px-6 py-3 font-semibold text-sm hover:bg-steel transition-colors chamfer">
                Request Machining Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}