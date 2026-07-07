import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cylinder, CircleDot, Cog, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const capabilities = [
  {
    icon: Cylinder,
    title: "High Pressure Die Casting",
    description: "Cold chamber machines from 400T to 2000T. ADC12, A380, LM24 alloys. Tolerances to ±0.05 mm. Capacity for 500,000+ castings per month.",
    path: "/capabilities/hpdc",
    stats: "Up to 2000T",
  },
  {
    icon: CircleDot,
    title: "Gravity Die Casting",
    description: "LM25, LM6 alloys delivering superior mechanical properties for structurally demanding, high-integrity components requiring exceptional finish.",
    path: "/capabilities/gdc",
    stats: "T6 Heat Treated",
  },
  {
    icon: Cog,
    title: "CNC Machining",
    description: "40+ CNC and VMC machines including 5-axis capability. Tolerances to ±0.01 mm. 100% dimensional inspection on every component.",
    path: "/capabilities/cnc",
    stats: "5-Axis Capable",
  },
  {
    icon: Wrench,
    title: "Precision Engineering",
    description: "End-to-end DFM analysis, die design with flow simulation, rapid prototyping, and first-article inspection for production validation.",
    path: "/capabilities/precision-engineering",
    stats: "Full DFM",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          label="Our Capabilities"
          title="Complete Aluminium Casting & Machining Solutions"
          description="Four integrated capabilities under one roof — built for OEMs that need precision, consistency, and a single point of accountability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200/60">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={cap.path}
                className="group block bg-white p-8 md:p-10 hover:bg-engineered transition-colors h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-engineered group-hover:bg-precision/10 flex items-center justify-center transition-colors">
                    <cap.icon className="w-5 h-5 text-precision" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-precision transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foundry mb-3">{cap.title}</h3>
                <p className="text-sm text-steel/70 leading-relaxed mb-5">{cap.description}</p>
                <span className="text-xs uppercase tracking-widest text-precision font-semibold">{cap.stats}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}