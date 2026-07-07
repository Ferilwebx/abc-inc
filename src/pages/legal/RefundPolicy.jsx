import React from "react";
import { motion } from "framer-motion";

const sections = [
  { title: "Custom Manufacturing", content: "As a custom manufacturing facility, all products are made to order based on customer-provided drawings and specifications. Due to the bespoke nature of die cast and machined components, standard refund policies applicable to retail products do not apply." },
  { title: "Non-Conforming Products", content: "If delivered products do not conform to the agreed specifications, dimensional requirements, or quality standards defined in the purchase order, ABC Inc. will replace the non-conforming items at no additional cost. Claims must be submitted within 15 business days of delivery with supporting documentation including inspection reports and photographs." },
  { title: "Tooling", content: "Tooling and die costs are non-refundable once die design has been approved and manufacturing has commenced. If a die fails to produce parts within agreed specifications, ABC Inc. will rectify or replace the tooling at its own expense." },
  { title: "Advance Payments", content: "Advance payments made for tooling development or production orders are credited against final invoices. In the event of order cancellation by the customer after production has commenced, ABC Inc. will refund the advance less costs already incurred for materials, tooling, and production." },
  { title: "Resolution Process", content: "All refund or replacement requests should be directed to our quality team at quality@abcinc.com. Each case is reviewed individually, and we aim to provide a resolution within 10 business days of receiving a complete claim." },
];

export default function RefundPolicy() {
  return (
    <>
      <section className="bg-foundry py-24 md:py-28">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="heading-lg text-white">Refund Policy</h1>
            <p className="mt-4 text-white/60">Last updated: July 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-10">
          <p className="body-md">ABC Inc. is committed to delivering products that meet your exact specifications. This policy outlines our approach to refunds and replacements for custom-manufactured components.</p>
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