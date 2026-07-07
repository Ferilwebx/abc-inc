import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Search, FileCheck, Target } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const QC_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/54627be9d_generated_13284bf2.png";

const points = [
  { icon: Shield, title: "Zero Defect Mindset", desc: "In-process controls to prevent defects at source." },
  { icon: Search, title: "Full Traceability", desc: "Every component traced from raw alloy to final shipment." },
  { icon: FileCheck, title: "First Article Inspection", desc: "Full dimensional and material report before batch release." },
  { icon: Target, title: "Customer Quality Plans", desc: "Tailored control plans for each customer's critical parameters." },
];

export default function QualityPreview() {
  return (
    <section className="section-padding bg-engineered">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              label="Quality Assurance"
              title="ISO 9001:2015 Certified Precision"
              description="Every component traceable from raw material heat number to final shipment. In-process controls and first-article inspection at every production stage."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-white border border-slate-200 flex items-center justify-center">
                    <p.icon className="w-4 h-4 text-precision" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foundry">{p.title}</h4>
                    <p className="text-xs text-steel/60 mt-1">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/quality" className="inline-flex items-center gap-2 text-precision font-semibold text-sm hover:text-sky-700 transition-colors">
              View Quality Systems <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img src={QC_IMG} alt="Quality control measurement" className="w-full aspect-[4/3] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foundry/80 to-transparent p-6 md:p-8">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl font-bold text-white">ISO 9001:2015</div>
                  <div className="text-xs text-white/60">TUV Certified</div>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div>
                  <div className="text-2xl font-bold text-white">IATF 16949</div>
                  <div className="text-xs text-white/60">In Progress</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}