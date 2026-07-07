import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Cpu, FlaskConical, FileCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";

const HERO_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/c888dd1d0_generated_d350a8ac.png";

const services = [
  { icon: Lightbulb, title: "DFM Analysis", desc: "Comprehensive Design for Manufacturability review before tooling commitment. We identify gate locations, draft angles, porosity risks, and unnecessary machining operations at the drawing stage — saving time and tooling costs." },
  { icon: Cpu, title: "Die Design & Flow Simulation", desc: "In-house die design with advanced flow simulation to optimize fill patterns, predict shrinkage, and ensure consistent quality. Rapid tool qualification and prototype-to-production transition." },
  { icon: FlaskConical, title: "Rapid Prototyping", desc: "From initial concept to first castings in weeks. Our engineering team works alongside your design engineers to validate geometry, test functional requirements, and refine specifications." },
  { icon: FileCheck, title: "First Article Inspection", desc: "Full dimensional and material characterization before production release. Every critical dimension verified against CAD, every alloy specification confirmed in writing." },
];

export default function PrecisionEngineering() {
  return (
    <>
      <section className="relative bg-foundry py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Precision engineering" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-foundry/80" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Capabilities</span>
            <h1 className="heading-xl text-white mt-4">Precision<br /><span className="text-aluminum/90">Engineering.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">End-to-end engineering support from DFM analysis through die design, prototyping, and production validation. We catch design problems before the die is cut.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading label="Engineering Services" title="From Concept to Validated Production" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200/60">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 bg-engineered flex items-center justify-center mb-5"><s.icon className="w-5 h-5 text-precision" /></div>
                <h3 className="text-xl font-semibold text-foundry mb-3">{s.title}</h3>
                <p className="text-sm text-steel/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/rfq" className="inline-flex items-center gap-2 bg-foundry text-white px-7 py-3.5 font-semibold text-sm hover:bg-steel transition-colors chamfer">
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}