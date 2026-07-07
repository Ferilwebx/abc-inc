import React from "react";
import { motion } from "framer-motion";
import { Shield, Search, FileCheck, Target, Microscope, Gauge, FlaskConical, ScanLine } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";

const QC_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/54627be9d_generated_13284bf2.png";
const QC_LAB = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/5d9410d08_generated_c2b29e3f.png";

const pillars = [
  { icon: Shield, title: "Zero Defect Philosophy", desc: "Defects are prevented at source through statistical process control, automated monitoring, and real-time parameter logging at every production stage." },
  { icon: Search, title: "Complete Traceability", desc: "Every component is traced from raw material heat number through casting, machining, and finishing to final shipment with full documentation." },
  { icon: FileCheck, title: "First Article Inspection", desc: "Comprehensive dimensional and material reports are completed and approved before any production batch is released for ongoing manufacturing." },
  { icon: Target, title: "Customer Quality Plans", desc: "We develop tailored control plans for each customer's critical parameters, ensuring specification compliance at every checkpoint." },
];

const equipment = [
  { icon: Microscope, title: "CMM Inspection", desc: "Coordinate Measuring Machine for full 3D dimensional verification against CAD models." },
  { icon: Gauge, title: "Surface Roughness", desc: "Precision profilometry for surface finish verification to Ra/Rz specifications." },
  { icon: FlaskConical, title: "Spectrometry", desc: "Optical emission spectrometer for real-time alloy composition analysis and verification." },
  { icon: ScanLine, title: "X-Ray & NDT", desc: "Non-destructive testing including X-ray, dye penetrant, and ultrasonic inspection capabilities." },
];

const certs = [
  { name: "ISO 9001:2015", status: "Certified", body: "TUV Nord" },
  { name: "IATF 16949", status: "In Progress", body: "Expected 2027" },
  { name: "ISO 14001", status: "Planned", body: "Environmental" },
  { name: "OHSAS 18001", status: "Compliant", body: "Safety" },
];

export default function Quality() {
  return (
    <>
      <section className="bg-foundry py-24 md:py-32">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Quality Assurance</span>
            <h1 className="heading-xl text-white mt-4">Precision Is Not<br /><span className="text-aluminum/90">an Afterthought.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">ISO 9001:2015 certified quality management with in-process controls at every production stage. Every micron is measured, every batch is documented.</p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading label="Quality Pillars" title="Four Pillars of Manufacturing Integrity" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200/60">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 bg-engineered flex items-center justify-center mb-5"><p.icon className="w-5 h-5 text-precision" /></div>
                <h3 className="text-lg font-semibold text-foundry mb-3">{p.title}</h3>
                <p className="text-sm text-steel/70 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-padding bg-engineered">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading label="Testing Equipment" title="World-Class Metrology Lab" />
            <div className="space-y-6">
              {equipment.map((e, i) => (
                <motion.div key={e.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.1 }} className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-white border border-slate-200 flex items-center justify-center"><e.icon className="w-4 h-4 text-precision" /></div>
                  <div>
                    <h4 className="text-sm font-semibold text-foundry">{e.title}</h4>
                    <p className="text-xs text-steel/60 mt-1">{e.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={QC_LAB} alt="Quality control laboratory" className="w-full aspect-[4/3] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading label="Certifications" title="Standards We Uphold" align="center" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certs.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.1 }} className="border border-slate-200/60 p-6 text-center">
                <div className="text-xl font-bold text-foundry mb-2">{c.name}</div>
                <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${c.status === "Certified" ? "text-green-600" : c.status === "Compliant" ? "text-precision" : "text-amber-600"}`}>{c.status}</div>
                <div className="text-xs text-steel/50">{c.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}