import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Upload, Check, FileText, Clock, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import CostEstimator from "@/components/rfq/CostEstimator";

const steps = ["Process", "Details", "Volume", "Contact"];

export default function RFQ() {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    process: "", alloy: "", partDescription: "", quantity: "", timeline: "",
    name: "", email: "", company: "", phone: "", notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setSubmitting(false);
    toast({ title: "RFQ Submitted", description: "Our engineering team will respond within 72 hours." });
  };

  if (submitted) {
    return (
      <>
        <section className="bg-foundry py-24 md:py-32">
          <div className="container-custom text-center">
            <div className="w-16 h-16 bg-green-500/20 flex items-center justify-center mx-auto mb-6 rounded-full">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="heading-lg text-white">RFQ Submitted Successfully</h1>
            <p className="mt-4 text-white/60 text-lg max-w-md mx-auto">Our engineering team will review your requirements and respond with a technical assessment within 72 hours.</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-foundry py-20 md:py-24">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Request for Quote</span>
            <h1 className="heading-lg text-white mt-4">Configure Your Technical Quote</h1>
            <p className="mt-4 text-white/60 max-w-xl">Complete the steps below. Our engineers respond within 72 hours with a full technical and commercial assessment.</p>
          </motion.div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-6">
            {[{ icon: Clock, text: "72-hour response" }, { icon: FileText, text: "DFM review included" }, { icon: Shield, text: "ISO certified" }].map((f) => (
              <div key={f.text} className="flex items-center gap-2 text-sm text-white/50">
                <f.icon className="w-4 h-4 text-precision" /> {f.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CostEstimator />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {/* Progress */}
          <div className="flex items-center gap-1 mb-12">
            {steps.map((s, i) => (
              <React.Fragment key={s}>
                <div className={`flex items-center gap-2 text-sm font-medium ${i <= step ? "text-precision" : "text-slate-300"}`}>
                  <div className={`w-8 h-8 flex items-center justify-center text-xs font-bold ${i <= step ? "bg-precision text-white" : "bg-slate-100 text-slate-400"}`}>
                    {i < step ? <Check className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className="hidden sm:inline">{s}</span>
                </div>
                {i < steps.length - 1 && <div className={`flex-1 h-px mx-2 ${i < step ? "bg-precision" : "bg-slate-200"}`} />}
              </React.Fragment>
            ))}
          </div>

          {/* Step 0: Process */}
          {step === 0 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="heading-md text-foundry">Select Manufacturing Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["High Pressure Die Casting", "Gravity Die Casting", "CNC Machining", "Precision Engineering", "Multiple Processes"].map((p) => (
                  <button key={p} onClick={() => updateField("process", p)} className={`p-4 border text-left text-sm font-medium transition-colors ${form.process === p ? "border-precision bg-precision/5 text-precision" : "border-slate-200 text-steel hover:border-slate-300"}`}>
                    {p}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium text-foundry mb-2 block">Preferred Alloy</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["ADC12", "A380", "LM24", "LM25", "LM6", "Other / Unsure"].map((a) => (
                    <button key={a} onClick={() => updateField("alloy", a)} className={`p-3 border text-sm transition-colors ${form.alloy === a ? "border-precision bg-precision/5 text-precision" : "border-slate-200 text-steel hover:border-slate-300"}`}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 1: Details */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="heading-md text-foundry">Part Details</h2>
              <Textarea placeholder="Describe your part and requirements..." rows={4} value={form.partDescription} onChange={(e) => updateField("partDescription", e.target.value)} />
              <div className="border-2 border-dashed border-slate-200 p-10 text-center">
                <Upload className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                <p className="text-sm text-steel/60">Drag & drop CAD files here or click to browse</p>
                <p className="text-xs text-steel/40 mt-1">STEP, IGES, DWG, PDF accepted</p>
              </div>
            </motion.div>
          )}

          {/* Step 2: Volume */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="heading-md text-foundry">Volume & Timeline</h2>
              <div>
                <label className="text-sm font-medium text-foundry mb-2 block">Annual Volume</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["< 10,000", "10,000–50,000", "50,000–200,000", "200,000+"].map((q) => (
                    <button key={q} onClick={() => updateField("quantity", q)} className={`p-3 border text-sm transition-colors ${form.quantity === q ? "border-precision bg-precision/5 text-precision" : "border-slate-200 text-steel hover:border-slate-300"}`}>
                      {q}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foundry mb-2 block">Required Timeline</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Urgent (< 4 weeks)", "Standard (4–8 weeks)", "Flexible (8+ weeks)"].map((t) => (
                    <button key={t} onClick={() => updateField("timeline", t)} className={`p-3 border text-sm transition-colors ${form.timeline === t ? "border-precision bg-precision/5 text-precision" : "border-slate-200 text-steel hover:border-slate-300"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="heading-md text-foundry">Your Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name *" required value={form.name} onChange={(e) => updateField("name", e.target.value)} />
                <Input type="email" placeholder="Email *" required value={form.email} onChange={(e) => updateField("email", e.target.value)} />
                <Input placeholder="Company Name" value={form.company} onChange={(e) => updateField("company", e.target.value)} />
                <Input placeholder="Phone Number" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
              </div>
              <Textarea placeholder="Additional notes or specifications..." rows={3} value={form.notes} onChange={(e) => updateField("notes", e.target.value)} />
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-200/60">
            {step > 0 ? (
              <Button variant="ghost" onClick={() => setStep(step - 1)} className="text-steel">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
            ) : <div />}
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)} className="bg-foundry hover:bg-steel text-white chamfer">
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={submitting} className="bg-precision hover:bg-sky-700 text-white chamfer">
                {submitting ? "Submitting..." : "Submit RFQ"} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}