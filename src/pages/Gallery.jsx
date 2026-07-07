import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const images = [
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/fb740e4cb_generated_3e8a8187.png", title: "Precision Die Cast Component", category: "Products" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/489f3deac_generated_68cf963b.png", title: "CNC Machining Facility", category: "Facility" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/54627be9d_generated_13284bf2.png", title: "Quality Inspection", category: "Quality" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/2fb40dd05_generated_2395a659.png", title: "Die Casting Process", category: "Process" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/3fd4b8e53_generated_d8b82805.png", title: "Product Portfolio", category: "Products" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/cc8558b95_generated_3df3835c.png", title: "EV Components", category: "Products" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/9012d5cf3_generated_1cd1da07.png", title: "Facility Exterior", category: "Facility" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/b09dc23bf_generated_4fcbcbd8.png", title: "GDC Tooling", category: "Process" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/1f730838c_generated_d945ed5d.png", title: "CNC Precision Machining", category: "Process" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/5d9410d08_generated_c2b29e3f.png", title: "Quality Lab Equipment", category: "Quality" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/4102596f3_generated_4a7a9689.png", title: "Aerospace Components", category: "Products" },
  { src: "https://media.base44.com/images/public/6a4c2ab542175617e8512382/b4082232c_generated_332f78ae.png", title: "Energy Components", category: "Products" },
];

const categories = ["All", "Products", "Facility", "Process", "Quality"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <section className="bg-foundry py-24 md:py-32">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Gallery</span>
            <h1 className="heading-xl text-white mt-4">Precision<br /><span className="text-aluminum/90">in Every Frame.</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-sm font-medium transition-colors ${filter === cat ? "bg-foundry text-white" : "bg-engineered text-steel hover:bg-aluminum"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="cursor-pointer group overflow-hidden"
                onClick={() => setSelected(img)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="py-3">
                  <h3 className="text-sm font-medium text-foundry">{img.title}</h3>
                  <span className="text-xs text-steel/50">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-white/60 hover:text-white"><X className="w-6 h-6" /></button>
            <img src={selected.src} alt={selected.title} className="max-w-full max-h-[85vh] object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}