import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const openings = [
  { title: "Senior Die Casting Engineer", department: "Engineering", location: "Pune, India", type: "Full-time" },
  { title: "CNC Programmer", department: "Machining", location: "Pune, India", type: "Full-time" },
  { title: "Quality Control Inspector", department: "Quality", location: "Pune, India", type: "Full-time" },
  { title: "DFM & Tool Design Engineer", department: "Engineering", location: "Pune, India", type: "Full-time" },
  { title: "Production Manager", department: "Operations", location: "Pune, India", type: "Full-time" },
  { title: "Business Development Executive", department: "Sales", location: "Pune, India", type: "Full-time" },
];

const perks = [
  "Industry-competitive compensation",
  "Skill development and certifications",
  "Modern manufacturing environment",
  "Career growth pathways",
  "Health and wellness benefits",
  "Engineering excellence culture",
];

export default function Careers() {
  return (
    <>
      <section className="bg-foundry py-24 md:py-32">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Careers</span>
            <h1 className="heading-xl text-white mt-4">Build Your Future<br /><span className="text-aluminum/90">With Precision.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">Join a team where engineering excellence is the standard, not the exception. We're always looking for skilled professionals who share our commitment to precision.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading label="Why Join Us" title="A Culture of Engineering Excellence" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-3 p-4 bg-engineered">
                <div className="w-1.5 h-1.5 bg-precision flex-shrink-0" />
                <span className="text-sm text-steel/80">{perk}</span>
              </div>
            ))}
          </div>

          <SectionHeading label="Open Positions" title="Current Opportunities" />
          <div className="space-y-3">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border border-slate-200/60 hover:bg-engineered transition-colors group cursor-pointer"
              >
                <div>
                  <h3 className="text-base font-semibold text-foundry group-hover:text-precision transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-steel/60">
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-precision transition-colors flex-shrink-0" />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-engineered border border-slate-200/60 text-center">
            <h3 className="text-lg font-semibold text-foundry mb-2">Don't see the right role?</h3>
            <p className="text-sm text-steel/60 mb-4">Send your resume to <a href="mailto:careers@abcinc.com" className="text-precision hover:text-sky-700 font-medium">careers@abcinc.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}