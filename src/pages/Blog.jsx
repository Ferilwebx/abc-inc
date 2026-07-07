import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const CASTING_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/2fb40dd05_generated_2395a659.png";
const CNC_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/1f730838c_generated_d945ed5d.png";
const EV_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/cc8558b95_generated_3df3835c.png";
const QC_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/54627be9d_generated_13284bf2.png";

const posts = [
  { title: "HPDC vs GDC: Choosing the Right Die Casting Process", excerpt: "A technical comparison of high pressure and gravity die casting — when each process delivers optimal results for OEM components.", image: CASTING_IMG, date: "June 2026", readTime: "8 min", category: "Technical" },
  { title: "The Role of 5-Axis CNC Machining in Modern Die Casting", excerpt: "How multi-axis machining capabilities reduce secondary operations and improve dimensional accuracy in cast components.", image: CNC_IMG, date: "May 2026", readTime: "6 min", category: "Technology" },
  { title: "Aluminum Die Casting for the EV Revolution", excerpt: "Why lightweight aluminum castings are critical to electric vehicle range, thermal management, and structural integrity.", image: EV_IMG, date: "April 2026", readTime: "7 min", category: "Industry" },
  { title: "DFM Analysis: Catching Design Problems Before the Die", excerpt: "How Design for Manufacturability review prevents costly tooling modifications and reduces time-to-production.", image: QC_IMG, date: "March 2026", readTime: "5 min", category: "Engineering" },
];

export default function Blog() {
  return (
    <>
      <section className="bg-foundry py-24 md:py-32">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Insights</span>
            <h1 className="heading-xl text-white mt-4">Engineering<br /><span className="text-aluminum/90">Intelligence.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">Technical insights, industry analysis, and manufacturing expertise from the ABC Inc. engineering team.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group border border-slate-200/60 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-precision">{post.category}</span>
                    <span className="text-xs text-steel/40">·</span>
                    <span className="flex items-center gap-1 text-xs text-steel/50"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-foundry group-hover:text-precision transition-colors mb-2">{post.title}</h2>
                  <p className="text-sm text-steel/70 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-steel/40">{post.date}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-precision transition-colors" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}