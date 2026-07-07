import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";

const HERO_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/cc8558b95_generated_3df3835c.png";

const components = [
  "Motor housings and end covers",
  "Battery enclosure brackets and structural mounts",
  "Powertrain housings and transmission cases",
  "EV inverter and converter housings",
  "Structural brackets and reinforcement plates",
  "Pump housings and water jacket components",
  "Sensor housings and electronic enclosures",
  "Thermal management components and heat sinks",
];

export default function AutomotiveEV() {
  return (
    <>
      <section className="relative bg-foundry py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="EV automotive components" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-foundry/80" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Industries</span>
            <h1 className="heading-xl text-white mt-4">Automotive<br /><span className="text-aluminum/90">& Electric Vehicles.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">Precision aluminium castings for the global automotive and EV revolution. From powertrain housings to thermal management — components engineered for performance, lightweighting, and scale.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading title="Components We Manufacture" description="ABC Inc. supplies Tier-1 aluminium die cast and machined components to automotive and EV OEMs globally. Our integrated facility delivers from casting to finished, inspected parts." />
            <ul className="space-y-3">
              {components.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-steel/80">
                  <div className="w-1.5 h-1.5 bg-precision mt-2 flex-shrink-0" />{c}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/rfq" className="inline-flex items-center gap-2 bg-foundry text-white px-6 py-3 font-semibold text-sm hover:bg-steel transition-colors chamfer">
                Request Automotive Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={HERO_IMG} alt="EV components" className="w-full aspect-[4/3] object-cover" />
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}