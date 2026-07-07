import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Capabilities",
    children: [
      { label: "High Pressure Die Casting", path: "/capabilities/hpdc" },
      { label: "Gravity Die Casting", path: "/capabilities/gdc" },
      { label: "CNC Machining", path: "/capabilities/cnc" },
      { label: "Precision Engineering", path: "/capabilities/precision-engineering" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Automotive & EV", path: "/industries/automotive-ev" },
      { label: "Industrial Equipment", path: "/industries/industrial-equipment" },
      { label: "Aerospace", path: "/industries/aerospace" },
      { label: "Energy", path: "/industries/energy" },
    ],
  },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Quality", path: "/quality" },
  { label: "About", path: "/about" },
  {
    label: "Resources",
    children: [
      { label: "Gallery", path: "/gallery" },
      { label: "Download Centre", path: "/downloads" },
      { label: "Blog", path: "/blog" },
      { label: "Careers", path: "/careers" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-foundry text-white/80 text-xs">
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> info@abcinc.com</span>
          </div>
          <span>ISO 9001:2015 Certified | Global Shipping</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60" : "bg-white border-b border-slate-200/40"}`}>
        <div className="container-custom flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-foundry flex items-center justify-center chamfer">
              <span className="text-white font-bold text-sm">ABC</span>
            </div>
            <div className="leading-none">
              <span className="font-bold text-foundry text-lg tracking-tight">ABC Inc.</span>
              <span className="hidden sm:block text-[10px] uppercase tracking-widest text-steel/60 font-medium">Precision Engineering</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-steel hover:text-foundry transition-colors">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 bg-white border border-slate-200 shadow-lg min-w-[240px] py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-steel hover:bg-engineered hover:text-foundry transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === item.path ? "text-precision" : "text-steel hover:text-foundry"}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/rfq" className="bg-foundry text-white px-5 py-2.5 text-sm font-semibold hover:bg-steel transition-colors chamfer">
              Request Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foundry"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden bg-white border-t border-slate-200"
            >
              <div className="container-custom py-4 space-y-1">
                {navLinks.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        className="w-full flex items-center justify-between py-3 text-sm font-medium text-steel"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-1 pb-2">
                          {item.children.map((child) => (
                            <Link key={child.path} to={child.path} className="block py-2 text-sm text-steel/80 hover:text-foundry">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link key={item.path} to={item.path} className="block py-3 text-sm font-medium text-steel hover:text-foundry">
                      {item.label}
                    </Link>
                  )
                )}
                <Link to="/rfq" className="block bg-foundry text-white text-center px-5 py-3 text-sm font-semibold mt-4 chamfer">
                  Request Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}