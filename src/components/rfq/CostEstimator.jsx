import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Info, ArrowRight } from "lucide-react";

const processes = [
  { id: "hpdc", label: "High Pressure Die Casting", basePerKg: 4.5, toolingBase: 12000 },
  { id: "gdc", label: "Gravity Die Casting", basePerKg: 6.5, toolingBase: 8000 },
  { id: "cnc", label: "CNC Machining", basePerKg: 12, toolingBase: 0 },
  { id: "precision", label: "Precision Engineering", basePerKg: 15, toolingBase: 5000 },
];

const complexityMultipliers = [
  { label: "Simple", value: 0.85 },
  { label: "Moderate", value: 1.0 },
  { label: "Complex", value: 1.3 },
  { label: "Highly Complex", value: 1.6 },
];

const finishOptions = [
  { label: "As-Cast", cost: 0 },
  { label: "Shot Blasted", cost: 0.5 },
  { label: "Powder Coated", cost: 1.8 },
  { label: "Anodized", cost: 2.2 },
];

export default function CostEstimator() {
  const [process, setProcess] = useState(processes[0]);
  const [weight, setWeight] = useState(1);
  const [quantity, setQuantity] = useState(10000);
  const [complexity, setComplexity] = useState(complexityMultipliers[1]);
  const [finish, setFinish] = useState(finishOptions[0]);
  const [showResult, setShowResult] = useState(false);

  const estimate = useMemo(() => {
    const materialCost = weight * 2.8;
    const processingCost = weight * process.basePerKg * complexity.value;
    const finishCost = weight * finish.cost;
    const perUnit = materialCost + processingCost + finishCost;

    const volumeDiscount =
      quantity >= 200000 ? 0.7 :
      quantity >= 50000 ? 0.8 :
      quantity >= 10000 ? 0.9 : 1.0;

    const perUnitDiscounted = perUnit * volumeDiscount;
    const totalProduction = perUnitDiscounted * quantity;
    const tooling = process.toolingBase * complexity.value;
    const totalProject = totalProduction + tooling;

    return {
      perUnit: perUnitDiscounted,
      totalProduction,
      tooling,
      totalProject,
      volumeDiscount,
    };
  }, [process, weight, quantity, complexity, finish]);

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: val < 100 ? 2 : 0 }).format(val);

  return (
    <section className="section-padding bg-engineered border-y border-slate-200/60">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-5 h-5 text-precision" />
            <span className="text-xs uppercase tracking-[0.2em] text-precision font-semibold">Cost Estimator</span>
          </div>
          <h2 className="heading-lg text-foundry">Rough Cost Estimate</h2>
          <p className="mt-3 text-steel/70 text-lg max-w-2xl">
            Adjust the parameters below to get an indicative cost range for your manufacturing project before submitting a full RFQ.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Inputs */}
            <div className="lg:col-span-3 space-y-6">
              {/* Process */}
              <div>
                <label className="text-sm font-medium text-foundry mb-2 block">Manufacturing Process</label>
                <div className="grid grid-cols-2 gap-2">
                  {processes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { setProcess(p); setShowResult(false); }}
                      className={`p-3 border text-xs font-medium text-left transition-colors ${process.id === p.id ? "border-precision bg-precision/5 text-precision" : "border-slate-200 text-steel hover:border-slate-300"}`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Part Weight */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-foundry">Part Weight</label>
                  <span className="text-sm font-semibold text-precision">{weight.toFixed(1)} kg</span>
                </div>
                <input
                  type="range" min="0.1" max="25" step="0.1" value={weight}
                  onChange={(e) => { setWeight(parseFloat(e.target.value)); setShowResult(false); }}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-steel/40 mt-1"><span>0.1 kg</span><span>25 kg</span></div>
              </div>

              {/* Quantity */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-foundry">Annual Volume</label>
                  <span className="text-sm font-semibold text-precision">{quantity.toLocaleString()} units</span>
                </div>
                <input
                  type="range" min="500" max="500000" step="500" value={quantity}
                  onChange={(e) => { setQuantity(parseInt(e.target.value)); setShowResult(false); }}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-steel/40 mt-1"><span>500</span><span>500,000</span></div>
              </div>

              {/* Complexity */}
              <div>
                <label className="text-sm font-medium text-foundry mb-2 block">Part Complexity</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {complexityMultipliers.map((c) => (
                    <button
                      key={c.label}
                      onClick={() => { setComplexity(c); setShowResult(false); }}
                      className={`p-2.5 border text-xs font-medium transition-colors ${complexity.label === c.label ? "border-precision bg-precision/5 text-precision" : "border-slate-200 text-steel hover:border-slate-300"}`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Surface Finish */}
              <div>
                <label className="text-sm font-medium text-foundry mb-2 block">Surface Finish</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {finishOptions.map((f) => (
                    <button
                      key={f.label}
                      onClick={() => { setFinish(f); setShowResult(false); }}
                      className={`p-2.5 border text-xs font-medium transition-colors ${finish.label === f.label ? "border-precision bg-precision/5 text-precision" : "border-slate-200 text-steel hover:border-slate-300"}`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2">
              <div className="bg-foundry text-white p-6 md:p-8 sticky top-24">
                <h3 className="text-sm uppercase tracking-widest text-precision font-semibold mb-5">Estimate Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-baseline justify-between pb-3 border-b border-white/10">
                    <span className="text-sm text-white/60">Per Unit Cost</span>
                    <span className="text-xl font-bold">{formatCurrency(estimate.perUnit)}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-white/60">Tooling / Setup</span>
                    <span className="text-lg font-semibold">{estimate.tooling > 0 ? formatCurrency(estimate.tooling) : "—"}</span>
                  </div>
                  <div className="flex items-baseline justify-between pb-3 border-b border-white/10">
                    <span className="text-sm text-white/60">Production Total</span>
                    <span className="text-lg font-semibold">{formatCurrency(estimate.totalProduction)}</span>
                  </div>
                  {estimate.volumeDiscount < 1 && (
                    <div className="text-xs text-precision font-medium">
                      Includes {Math.round((1 - estimate.volumeDiscount) * 100)}% volume discount
                    </div>
                  )}
                </div>

                <div className="bg-white/5 p-4 mb-5">
                  <span className="text-xs text-white/50 block mb-1">Estimated Project Total</span>
                  <span className="text-2xl md:text-3xl font-bold text-white">{formatCurrency(estimate.totalProject)}</span>
                </div>

                <button
                  onClick={() => setShowResult(true)}
                  className="w-full bg-precision text-white py-3 text-sm font-semibold hover:bg-sky-700 transition-colors chamfer flex items-center justify-center gap-2"
                >
                  {showResult ? "Estimate Recalculated" : "Calculate Estimate"} <ArrowRight className="w-4 h-4" />
                </button>

                <div className="mt-5 flex items-start gap-2 text-xs text-white/40">
                  <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>This is an indicative estimate only. Final pricing depends on detailed DFM analysis, alloy selection, tolerances, and logistics. Submit a full RFQ for a precise quotation.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}