import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/fb740e4cb_generated_3e8a8187.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-foundry">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Precision die cast aluminum component" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-foundry via-foundry/90 to-foundry/60" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-precision/30 to-transparent animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative container-custom py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-precision" />
            <span className="text-xs uppercase tracking-[0.25em] text-precision font-semibold">ISO 9001:2015 Certified</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl text-white"
          >
            Engineering the Core<br />
            <span className="text-aluminum/90">of Global Mobility.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            Tier-1 Precision Die Casting and CNC Machining Solutions for the EV and Automotive Pioneers. From concept to dispatch — one facility, zero compromises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/infrastructure" className="bg-white text-foundry px-7 py-3.5 font-semibold text-sm hover:bg-aluminum transition-colors chamfer flex items-center gap-2">
              Explore Infrastructure <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/rfq" className="border border-white/20 text-white px-7 py-3.5 font-semibold text-sm hover:bg-white/10 transition-colors chamfer">
              Request Technical Quote
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t border-white/10"
          >
            {[
              { value: "500,000+", label: "Castings / Month" },
              { value: "200+", label: "Active Designs" },
              { value: "30+", label: "Years Experience" },
              { value: "2000T", label: "Max Machine Capacity" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-engineered to-transparent" />
    </section>
  );
}