import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Capabilities: [
    { label: "High Pressure Die Casting", path: "/capabilities/hpdc" },
    { label: "Gravity Die Casting", path: "/capabilities/gdc" },
    { label: "CNC Machining", path: "/capabilities/cnc" },
    { label: "Precision Engineering", path: "/capabilities/precision-engineering" },
  ],
  Industries: [
    { label: "Automotive & EV", path: "/industries/automotive-ev" },
    { label: "Industrial Equipment", path: "/industries/industrial-equipment" },
    { label: "Aerospace", path: "/industries/aerospace" },
    { label: "Energy", path: "/industries/energy" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Quality", path: "/quality" },
    { label: "Gallery", path: "/gallery" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ],
  Resources: [
    { label: "Download Centre", path: "/downloads" },
    { label: "Blog", path: "/blog" },
    { label: "Request Quote", path: "/rfq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foundry text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="container-custom py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Engineer<br />Your Next Component?</h2>
            <p className="mt-3 text-white/60 text-lg max-w-md">Send us your drawings. Our engineers respond within 72 hours with a technical review and detailed quotation.</p>
          </div>
          <Link to="/rfq" className="bg-precision text-white px-8 py-4 font-semibold hover:bg-sky-700 transition-colors chamfer flex items-center gap-2 whitespace-nowrap">
            Start Your RFQ <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="container-custom py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-5">{group}</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact row */}
      <div className="border-t border-white/10">
        <div className="container-custom py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@abcinc.com</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Pune, Maharashtra, India</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white/10 flex items-center justify-center chamfer">
              <span className="text-white font-bold text-[10px]">ABC</span>
            </div>
            <span className="text-sm text-white/50">© 2026 ABC Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/70 transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-white/70 transition-colors">Refund Policy</Link>
            <Link to="/shipping-policy" className="hover:text-white/70 transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}