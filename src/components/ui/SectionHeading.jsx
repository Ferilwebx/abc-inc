import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, align = "left", light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
    >
      {label && (
        <span className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 block ${light ? "text-precision/80" : "text-precision"}`}>
          {label}
        </span>
      )}
      <h2 className={`heading-lg ${light ? "text-white" : "text-foundry"}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/60" : "text-steel/70"}`}>{description}</p>
      )}
    </motion.div>
  );
}