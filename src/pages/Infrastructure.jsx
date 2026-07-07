import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import CTASection from "@/components/home/CTASection";

const INFRA_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/489f3deac_generated_68cf963b.png";
const CNC_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/1f730838c_generated_d945ed5d.png";
const QC_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/5d9410d08_generated_c2b29e3f.png";
const CASTING_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/2fb40dd05_generated_2395a659.png";

const sectors = [
  {
    title: "Die Casting Foundry",
    image: CASTING_IMG,
    specs: [
      "8 HPDC cold chamber machines (400T–2000T)",
      "2 Gravity Die Casting stations",
      "Automated ladle systems for consistent metal temperature",
      "Centralized alloy melting with spectro analysis",
      "ADC12, A380, LM24, LM25, LM6 alloy capabilities",
    ],
  },
  {
    title: "CNC & VMC Machining Wing",
    image: CNC_IMG,
    specs: [
      "40+ CNC and VMC machining centres",
      "5-axis simultaneous machining capability",
      "Tolerances to ±0.01 mm on critical dimensions",
      "4th-axis rotary tables for complex geometries",
      "In-process gauging with automatic tool compensation",
    ],
  },
  {
    title: "Quality Control Laboratory",
    image: QC_IMG,
    specs: [
      "CMM (Coordinate Measuring Machine) for full 3D inspection",
      "Profile projector and surface roughness tester",
      "Spectrometer for alloy composition verification",
      "Hardness testing (Brinell, Rockwell, Vickers)",
      "X-ray and dye penetrant testing capability",
    ],
  },
];

export default function Infrastructure() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-foundry py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={INFRA_IMG} alt="CNC machining facility" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-foundry/80" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Infrastructure</span>
            <h1 className="heading-xl text-white mt-4">75,000 Sq. Ft. of<br /><span className="text-aluminum/90">Pure Precision.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              Housing 2000T cold chamber machines and 5-axis machining excellence. Every process under one roof, controlled by one team.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="75,000" suffix=" Sq.Ft" label="Total Facility Area" light />
            <StatCard value="8" label="HPDC Machines" light />
            <StatCard value="40+" label="CNC/VMC Centres" light />
            <StatCard value="2000T" label="Max Machine Tonnage" light />
          </div>
        </div>
      </section>

      {/* Sectors */}
      {sectors.map((sector, i) => (
        <section key={sector.title} className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-engineered"}`}>
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <SectionHeading title={sector.title} />
                <ul className="space-y-3">
                  {sector.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3 text-sm text-steel/80">
                      <div className="w-1.5 h-1.5 bg-precision mt-2 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <img src={sector.image} alt={sector.title} className="w-full aspect-[16/10] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}