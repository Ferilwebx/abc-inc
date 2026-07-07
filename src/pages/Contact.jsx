import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message Sent", description: "Our team will respond within 24 hours." });
    setForm({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    setSending(false);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Mail, label: "Email", value: "info@abcinc.com", href: "mailto:info@abcinc.com" },
    { icon: MapPin, label: "Address", value: "Plot No. 42, MIDC Industrial Area, Chakan, Pune, Maharashtra 410501, India" },
    { icon: Clock, label: "Working Hours", value: "Monday – Saturday, 9:00 AM – 6:00 PM IST" },
  ];

  return (
    <>
      <section className="bg-foundry py-24 md:py-32">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Contact Us</span>
            <h1 className="heading-xl text-white mt-4">Let's Build<br /><span className="text-aluminum/90">Something Exceptional.</span></h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">Our engineering team reviews every enquiry. Expect a substantive response — not a sales call — within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="heading-md text-foundry">Get In Touch</h2>
            {contactInfo.map((c) => (
              <div key={c.label} className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-engineered flex items-center justify-center"><c.icon className="w-4 h-4 text-precision" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-steel/50 font-semibold mb-1">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-foundry hover:text-precision transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-sm text-steel/80">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-engineered border border-slate-200/60 p-8 md:p-10 space-y-5">
              <h3 className="text-lg font-semibold text-foundry mb-2">Send a Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <Input placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <Input placeholder="Subject *" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              <Textarea placeholder="Your Message *" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <Button type="submit" disabled={sending} className="bg-foundry hover:bg-steel text-white chamfer">
                <Send className="w-4 h-4 mr-2" /> {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}