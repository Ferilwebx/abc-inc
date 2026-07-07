import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Building2, Clock, Lightbulb, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "We Own the Whole Job",
    desc: "Casting, machining, finishing, inspection — one facility, one team. No handoffs to third parties, no quality gaps between processes.",
  },
  {
    icon: Clock,
    title: "You Don't Lose Time",
    desc: "With integrated HPDC, GDC, 40+ CNC machines, and in-house finishing, we move rapidly between stages. External delays don't exist here.",
  },
  {
    icon: Lightbulb,
    title: "Design Problems Caught Early",
    desc: "DFM review is part of how we quote — not an add-on. Our engineers flag gate issues, porosity risks, and unnecessary machining before the die is cut.",
  },
  {
    icon: BarChart3,
    title: "Scale With Documentation",
    desc: "500,000+ castings per month with full traceability. In-process controls at every stage — not just a final inspection stamp.",
  },
];

export default function WhyPartner() {
  return (
    <section className="section-padding bg-white border-t border-slate-200/60">
      <div className="container-custom">
        <SectionHeading
          label="Why Partner With Us"
          title="What Working With ABC Inc. Actually Means"
          description="Most casting suppliers hand the component off at the gate. We built our facility so we wouldn't have to."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 bg-engineered border border-slate-200/60 flex items-center justify-center">
                <r.icon className="w-6 h-6 text-precision" />
              </div>
              <h3 className="text-base font-semibold text-foundry mb-3">{r.title}</h3>
              <p className="text-sm text-steel/70 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}