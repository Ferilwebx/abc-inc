import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Clock, Shield, Check } from "lucide-react";

const points = [
  { icon: Clock, text: "72-hour technical response" },
  { icon: FileText, text: "DFM review included" },
  { icon: Shield, text: "ISO 9001:2015 certified" },
  { icon: Check, text: "STEP, IGES, DWG accepted" },
];

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-foundry p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Send Us Your Drawings
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Our engineers review every enquiry technically — not a sales team. We confirm feasibility, flag DFM concerns, and return a detailed quote within 72 hours.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {points.map((p) => (
                <div key={p.text} className="flex items-center gap-2 text-sm text-white/70">
                  <p.icon className="w-4 h-4 text-precision flex-shrink-0" />
                  {p.text}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/rfq" className="bg-precision text-white px-7 py-3.5 font-semibold text-sm hover:bg-sky-700 transition-colors chamfer flex items-center gap-2 whitespace-nowrap">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="border border-white/20 text-white px-7 py-3.5 font-semibold text-sm hover:bg-white/10 transition-colors chamfer whitespace-nowrap text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}