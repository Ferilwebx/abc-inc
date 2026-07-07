import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";

const FACILITY_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/9012d5cf3_generated_1cd1da07.png";
const OFFICE_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/dfc0bdf72_generated_8b3d93e3.png";

const timeline = [
  { year: "1994", title: "Foundation", desc: "ABC Inc. established with a single HPDC line and a vision for precision manufacturing excellence." },
  { year: "2002", title: "CNC Expansion", desc: "Invested in dedicated CNC and VMC machining centre, bringing secondary operations in-house." },
  { year: "2010", title: "ISO Certification", desc: "Achieved ISO 9001:2015 certification, formalizing our quality management systems." },
  { year: "2016", title: "Gravity Die Casting", desc: "Added GDC facility for high-integrity structural components requiring superior mechanical properties." },
  { year: "2020", title: "5-Axis & EV Focus", desc: "Commissioned 5-axis machining centres and pivoted to EV powertrain component manufacturing." },
  { year: "2024", title: "Global Expansion", desc: "Supplying Tier-1 components to OEMs across Europe, North America, and Asia-Pacific." },
];

const values = [
  { icon: Target, title: "Precision First", desc: "Every micron matters. We engineer to tolerances that define industry benchmarks." },
  { icon: Eye, title: "Transparency", desc: "One team, one facility, one contact. No sub-contracting, no hidden handoffs." },
  { icon: Award, title: "Relentless Quality", desc: "Zero defect philosophy backed by in-process controls at every production stage." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foundry py-24 md:py-32">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">About ABC Inc.</span>
            <h1 className="heading-xl text-white mt-4">From Molten Concept<br /><span className="text-aluminum/90">to Machined Masterpiece.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
              ABC Inc. stands at the intersection of metallurgical science and architectural engineering. For over three decades, we have redefined the limits of Aluminum Die Casting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading label="Our Story" title="Built on Three Decades of Disciplined Growth" />
            <p className="body-md mb-6">
              What began as a single high-pressure die casting line in 1994 has evolved into a 75,000 sq. ft. integrated manufacturing ecosystem. Today, ABC Inc. operates as a Tier-1 supplier to global OEMs across automotive, EV, aerospace, and industrial sectors.
            </p>
            <p className="body-md mb-8">
              Our facility isn't just a factory — it's a high-performance ecosystem where ISO 9001:2015 standards meet the agility of Industry 4.0. Every process, from initial DFM review to final dispatch, happens under one roof with one accountable team.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="30+" label="Years of Excellence" />
              <StatCard value="15+" label="Countries Served" />
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={FACILITY_IMG} alt="ABC Inc. manufacturing facility" className="w-full aspect-[4/3] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-engineered">
        <div className="container-custom">
          <SectionHeading label="Our Values" title="The Principles That Drive Every Component" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white border border-slate-200/60 p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-5 bg-engineered flex items-center justify-center"><v.icon className="w-6 h-6 text-precision" /></div>
                <h3 className="text-lg font-semibold text-foundry mb-3">{v.title}</h3>
                <p className="text-sm text-steel/70 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading label="Our Journey" title="Three Decades of Disciplined Growth" />
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-6 md:gap-10 py-6 border-b border-slate-200/60">
                <span className="text-3xl md:text-4xl font-bold text-aluminum w-20 flex-shrink-0">{t.year}</span>
                <div>
                  <h3 className="text-lg font-semibold text-foundry">{t.title}</h3>
                  <p className="text-sm text-steel/70 mt-1">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-foundry">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={OFFICE_IMG} alt="ABC Inc. corporate office" className="w-full aspect-[16/9] object-cover" />
          </motion.div>
          <div>
            <SectionHeading label="Leadership" title="Engineering-Led, Commercially Minded" light />
            <p className="text-white/60 leading-relaxed mb-6">
              ABC Inc. is led by a team of engineers and industry veterans who understand that precision manufacturing is as much about process discipline as it is about machinery. Our leadership has collectively spent over 80 years in die casting, CNC machining, and quality management.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-precision font-semibold text-sm hover:text-sky-400 transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}