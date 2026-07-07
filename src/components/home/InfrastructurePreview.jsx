import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";

const INFRA_IMG = "https://media.base44.com/images/public/6a4c2ab542175617e8512382/489f3deac_generated_68cf963b.png";

export default function InfrastructurePreview() {
  return (
    <section className="section-padding bg-foundry relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={INFRA_IMG} alt="CNC machining facility interior" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-foundry/80" />
      </div>
      <div className="relative container-custom">
        <SectionHeading
          label="Infrastructure"
          title="75,000 Sq. Ft. of Pure Precision"
          description="Housing 2000T cold chamber HPDC machines, 40+ CNC/VMC centres, and a fully equipped quality lab — all under one roof."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <StatCard value="75,000" suffix=" Sq.Ft" label="Facility Area" light />
          <StatCard value="2000T" label="Max HPDC Capacity" light />
          <StatCard value="40+" label="CNC/VMC Machines" light />
          <StatCard value="5" label="Axis Machining" light />
        </div>

        <Link to="/infrastructure" className="inline-flex items-center gap-2 text-precision font-semibold text-sm hover:text-sky-400 transition-colors">
          Explore Our Facility <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}