import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { num: "01", title: "RFQ & Technical Review", desc: "Submit your drawing or specification. Our engineering team delivers a technical and commercial response within 72 hours — not a generic sales pitch." },
  { num: "02", title: "DFM & Die Design", desc: "We review geometry for manufacturability before the die is designed. Gate location, draft angles, wall thickness — caught at the drawing stage." },
  { num: "03", title: "Tooling & Prototyping", desc: "In-house die design with flow simulation. Rapid tool qualification and prototype-to-production transition with full dimensional validation." },
  { num: "04", title: "Production & In-Process QC", desc: "Process parameters monitored and logged at casting, machining, and finishing stages. In-process controls prevent defects at source." },
  { num: "05", title: "Final Inspection & CoC", desc: "100% visual and dimensional inspection. Certificate of Conformance issued with every shipment. Full traceability from alloy to dispatch." },
  { num: "06", title: "Packed & Dispatched", desc: "Custom dunnage, labelling, and on-schedule dispatch. One dedicated contact throughout — not a different person at each stage." },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          label="How We Work"
          title="From RFQ to Dispatch"
          description="A disciplined, stage-gated process with no surprises. Every enquiry becomes a precisely tracked component."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200/60">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white p-8"
            >
              <span className="text-4xl font-bold text-aluminum tracking-tight">{step.num}</span>
              <h3 className="text-lg font-semibold text-foundry mt-4 mb-3">{step.title}</h3>
              <p className="text-sm text-steel/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/rfq" className="inline-flex items-center gap-2 bg-foundry text-white px-7 py-3.5 font-semibold text-sm hover:bg-steel transition-colors chamfer">
            Start With a Quote Request <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}