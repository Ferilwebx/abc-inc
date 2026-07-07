import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Car, Factory, Plane, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const EV_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/cc8558b95_generated_3df3835c.png";
const INDUSTRIAL_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/3fd4b8e53_generated_d8b82805.png";
const AERO_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/4102596f3_generated_4a7a9689.png";
const ENERGY_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/b4082232c_generated_332f78ae.png";

const industries = [
  {
    icon: Car,
    title: "Automotive & EV",
    description: "Powertrain housings, structural brackets, motor casings, and battery enclosure components for global automotive and electric vehicle OEMs.",
    image: EV_IMG,
    path: "/industries/automotive-ev",
  },
  {
    icon: Factory,
    title: "Industrial Equipment",
    description: "Gearbox housings, bearing carriers, pump bodies, and precision castings for heavy machinery and industrial automation systems.",
    image: INDUSTRIAL_IMG,
    path: "/industries/industrial-equipment",
  },
  {
    icon: Plane,
    title: "Aerospace",
    description: "High-integrity structural components, turbine housings, and precision brackets meeting the most demanding aerospace specifications.",
    image: AERO_IMG,
    path: "/industries/aerospace",
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Generator housings, heat dissipation components, and renewable energy equipment castings built for extreme performance conditions.",
    image: ENERGY_IMG,
    path: "/industries/energy",
  },
];

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-engineered">
      <div className="container-custom">
        <SectionHeading
          label="Industries"
          title="Trusted Across Four High-Demand Sectors"
          description="ABC Inc. supplies precision aluminium components to manufacturers across the world's most demanding industrial verticals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link to={ind.path} className="group block bg-white border border-slate-200/60 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={ind.image} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <ind.icon className="w-5 h-5 text-precision" />
                      <h3 className="text-lg font-semibold text-foundry">{ind.title}</h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-precision transition-colors" />
                  </div>
                  <p className="text-sm text-steel/70 leading-relaxed">{ind.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}