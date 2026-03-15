import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, ArrowUpRight, ChevronRight } from "lucide-react";

/**
 * NEXAFIT PREMIUM FOOTER
 * Concept: The "Terminal" - Structural data, geographical anchors, and high-fidelity finish.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerHeading = "text-[10px] uppercase tracking-[0.4em] font-black text-[#C5A059] mb-8";
  const footerLink = "text-[11px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-300 flex items-center group";

  return (
    <footer className="bg-black border-t border-zinc-900 pt-24 pb-12 px-8 lg:px-16 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        
        {/* Brand & Mission */}
        <div className="space-y-6">
          <h2 className="text-white text-2xl font-black tracking-tighter uppercase">
            NEXA<span className="text-[#C5A059]">FIT</span>
          </h2>
          <p className="text-zinc-600 text-xs leading-relaxed tracking-wide max-w-xs">
            The world’s most advanced physical optimization facility. Engineering 
            elite performance through biometric data and clinical recovery protocols.
          </p>
          <div className="flex space-x-6 pt-4">
            <Instagram className="text-zinc-600 hover:text-[#C5A059] cursor-pointer transition-colors" size={18} />
            <Twitter className="text-zinc-600 hover:text-[#C5A059] cursor-pointer transition-colors" size={18} />
            <Linkedin className="text-zinc-600 hover:text-[#C5A059] cursor-pointer transition-colors" size={18} />
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className={footerHeading}>Navigation</h4>
          <ul className="space-y-4">
            {[
              { label: "The Club", path: "/about" },
              { label: "Tiers", path: "/membership" },
              { label: "Disciplines", path: "/programs" },
              { label: "Mentors", path: "/trainers" },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.path} className={footerLink}>
                  {link.label} <ArrowUpRight size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coordinates */}
        <div>
          <h4 className={footerHeading}>Coordinates</h4>
          <ul className="space-y-4 text-zinc-500 text-[11px] tracking-widest uppercase leading-loose">
            <li>Vault 01 — Nakuru, Kenya</li>
            <li>Vault 02 — Eldoret, Kenya</li>
            <li>Vault 03 — Nairobi, Kenya</li>
            <li>Vault 04 — Mombasa, Kenya</li>
          </ul>
        </div>

        {/* Newsletter / Intelligence */}
        <div>
          <h4 className={footerHeading}>Intelligence</h4>
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-6">
            Subscribe for performance protocols.
          </p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full bg-transparent border-b border-zinc-800 py-3 text-[10px] tracking-widest text-white focus:border-[#C5A059] outline-none transition-colors"
            />
            <button className="absolute right-0 bottom-3 text-[#C5A059] hover:text-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Status Bar */}
      <div className="border-t border-zinc-900/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex space-x-8 text-[9px] text-zinc-700 tracking-[0.3em] uppercase">
          <span>© {currentYear} NEXAFIT SYSTEMS</span>
          <span className="cursor-pointer hover:text-zinc-400 transition-colors">Privacy Protocol</span>
          <span className="cursor-pointer hover:text-zinc-400 transition-colors">Terms of Access</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></div>
          <span className="text-[9px] text-zinc-500 tracking-[0.4em] uppercase font-bold">Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;