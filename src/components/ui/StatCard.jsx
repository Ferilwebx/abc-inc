import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ value, label, suffix = "", light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`border-l-2 pl-5 py-2 ${light ? "border-precision/50" : "border-precision"}`}
    >
      <div className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-foundry"}`}>
        {value}{suffix}
      </div>
      <div className={`text-sm mt-1 ${light ? "text-white/50" : "text-steel/60"}`}>{label}</div>
    </motion.div>
  );
}