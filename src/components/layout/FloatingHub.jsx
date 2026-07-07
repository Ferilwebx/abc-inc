import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, MessageCircle, ClipboardList, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingHub() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 flex flex-row-reverse md:flex-col items-end md:items-center gap-2">
      {/* Toggle (mobile) */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="md:hidden w-12 h-12 bg-precision text-white rounded-full shadow-lg flex items-center justify-center"
      >
        {expanded ? <X className="w-5 h-5" /> : <ClipboardList className="w-5 h-5" />}
      </button>

      {/* Actions */}
      <AnimatePresence>
        {(expanded || typeof window !== "undefined") && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`${expanded ? "flex" : "hidden"} md:flex flex-row-reverse md:flex-col gap-2`}
          >
            <Link
              to="/downloads"
              title="Download Catalogue"
              className="w-11 h-11 bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-engineered transition-colors group"
            >
              <FileText className="w-4.5 h-4.5 text-steel group-hover:text-foundry transition-colors" />
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Engineering"
              className="w-11 h-11 bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-engineered transition-colors group"
            >
              <MessageCircle className="w-4.5 h-4.5 text-steel group-hover:text-foundry transition-colors" />
            </a>
            <Link
              to="/rfq"
              title="Start RFQ"
              className="w-11 h-11 bg-precision text-white shadow-lg flex items-center justify-center hover:bg-sky-700 transition-colors"
            >
              <ClipboardList className="w-4.5 h-4.5" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}