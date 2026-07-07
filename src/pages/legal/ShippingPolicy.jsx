import React from "react";
import { motion } from "framer-motion";

const sections = [
  { title: "Domestic Shipping", content: "ABC Inc. ships finished components across India through established logistics partners. Standard delivery timelines are communicated at the time of order confirmation. Shipping costs are calculated based on weight, volume, and destination and are included in the final quotation." },
  { title: "International Shipping", content: "We export precision aluminium components to manufacturers across Europe, North America, and Asia-Pacific. International shipments are handled through experienced freight forwarders with full customs documentation, certificates of origin, and compliance with destination country requirements." },
  { title: "Packaging", content: "All components are packed in customer-specified or mutually agreed dunnage designed to prevent damage during transit. Special packaging requirements (anti-corrosion treatment, vacuum packing, custom crating) are accommodated and costed at quotation stage." },
  { title: "Shipping Terms", content: "Unless otherwise agreed, domestic shipments are dispatched Ex Works (EXW) from our facility in Pune. International shipments can be arranged on FOB, CIF, or DDP terms as agreed in the purchase order. Incoterms 2020 apply." },
  { title: "Delivery Timelines", content: "Delivery schedules are agreed at order confirmation and maintained through our production planning system. Any potential delays are communicated proactively with revised timelines. Our on-time delivery rate exceeds 95%." },
  { title: "Shipment Tracking", content: "Tracking information is provided for all shipments. A dedicated logistics coordinator is assigned to each account to ensure smooth communication throughout the shipping process." },
  { title: "Damage Claims", content: "Any damage during transit must be reported within 48 hours of delivery with photographic evidence and transporter documentation. ABC Inc. will work with the logistics provider to resolve claims promptly." },
];

export default function ShippingPolicy() {
  return (
    <>
      <section className="bg-foundry py-24 md:py-28">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="heading-lg text-white">Shipping Policy</h1>
            <p className="mt-4 text-white/60">Last updated: July 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-10">
          <p className="body-md">ABC Inc. delivers precision aluminium components domestically and internationally with reliable logistics, professional packaging, and full documentation compliance.</p>
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