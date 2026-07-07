import React from "react";
import { motion } from "framer-motion";

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using the ABC Inc. website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of the website immediately." },
  { title: "Services", content: "ABC Inc. provides aluminium die casting, CNC machining, and precision engineering services. All services are subject to separate commercial agreements, purchase orders, and technical specifications agreed upon between ABC Inc. and the client." },
  { title: "Quotations", content: "All quotations provided through our RFQ system or direct communication are valid for 30 days from the date of issue unless otherwise specified. Quotations are subject to final technical review and may be adjusted based on material costs, design modifications, or volume changes." },
  { title: "Intellectual Property", content: "All content on this website, including text, images, graphics, and design elements, is the property of ABC Inc. and is protected by applicable intellectual property laws. Customer drawings and specifications submitted through our website remain the intellectual property of the submitting party." },
  { title: "Confidentiality", content: "ABC Inc. treats all customer drawings, specifications, and technical data as confidential information. We will not disclose, reproduce, or use such information for any purpose other than evaluating and fulfilling the customer's requirements." },
  { title: "Limitation of Liability", content: "ABC Inc. shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on information provided herein. Product specifications and capabilities described on this website are for general reference purposes." },
  { title: "Governing Law", content: "These terms are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India." },
  { title: "Modifications", content: "ABC Inc. reserves the right to modify these terms at any time. Changes will be effective upon posting to this website. Continued use of the website constitutes acceptance of modified terms." },
];

export default function Terms() {
  return (
    <>
      <section className="bg-foundry py-24 md:py-28">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="heading-lg text-white">Terms & Conditions</h1>
            <p className="mt-4 text-white/60">Last updated: July 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-10">
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold text-foundry mb-3">{i + 1}. {s.title}</h2>
              <p className="text-sm text-steel/70 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}