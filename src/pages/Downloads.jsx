import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Award, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const downloads = [
  { icon: BookOpen, title: "Company Profile", desc: "Overview of ABC Inc. capabilities, infrastructure, and quality systems.", size: "4.2 MB", type: "PDF" },
  { icon: FileText, title: "HPDC Capability Brochure", desc: "Detailed specifications for our High Pressure Die Casting services.", size: "3.1 MB", type: "PDF" },
  { icon: FileText, title: "CNC Machining Catalogue", desc: "Machine list, tolerances, and capacity details for CNC operations.", size: "2.8 MB", type: "PDF" },
  { icon: Award, title: "ISO 9001:2015 Certificate", desc: "Current ISO certification from TUV Nord.", size: "0.5 MB", type: "PDF" },
  { icon: FileText, title: "Material Specifications", desc: "Alloy grades, mechanical properties, and composition data sheets.", size: "1.9 MB", type: "PDF" },
  { icon: FileText, title: "Quality Manual", desc: "Overview of our quality management system and inspection procedures.", size: "3.4 MB", type: "PDF" },
];

export default function Downloads() {
  return (
    <>
      <section className="bg-foundry py-24 md:py-32">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Download Centre</span>
            <h1 className="heading-xl text-white mt-4">Technical<br /><span className="text-aluminum/90">Resources.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">Access our catalogues, certifications, and technical documentation.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {downloads.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-center gap-5 p-6 border border-slate-200/60 hover:bg-engineered transition-colors group"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-engineered group-hover:bg-precision/10 flex items-center justify-center transition-colors">
                  <item.icon className="w-5 h-5 text-precision" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foundry">{item.title}</h3>
                  <p className="text-sm text-steel/60 mt-0.5">{item.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs text-steel/40 block">{item.type} · {item.size}</span>
                  <button className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-precision hover:text-sky-700 transition-colors">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}