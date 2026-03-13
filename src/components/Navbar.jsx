import React from "react";
import { Link } from "react-router-dom";

/**
 * NEXAFIT PREMIUM NAVIGATION
 * Concept: The "Vault" - High contrast, sharp geometry, technical luxury.
 */
const Navbar = () => {
  // Utility for the specific high-end link aesthetic
  const navItem = "group relative flex items-center justify-center h-full px-6 transition-all duration-500 ease-in-out";
  const linkText = "text-[10px] uppercase tracking-[0.4em] font-black text-zinc-500 group-hover:text-white group-hover:tracking-[0.5em] transition-all duration-500";
  const accentBar = "absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left";

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-black border-b border-zinc-900">
      {/* Upper Utility Bar: Subtle Branding/Status */}
      <div className="hidden md:flex justify-between items-center px-12 py-2 border-b border-zinc-900/50 bg-[#050505]">
        <span className="text-[9px] text-zinc-600 tracking-[0.5em] uppercase font-medium">Est. 2026 — London / NY / Dubai</span>
        <span className="text-[9px] text-[#C5A059] tracking-[0.3em] uppercase font-bold">Members Only Access</span>
      </div>

      <nav className="flex items-center justify-between h-24 px-8 lg:px-16">
        
        {/* Brand: Technical Sharpness */}
        <div className="relative group cursor-pointer">
          <h2 className="text-white text-3xl font-black tracking-[-0.05em] uppercase leading-none">
            NEXA<span className="text-[#C5A059]">FIT</span>
            <span className="block text-[8px] tracking-[0.8em] text-zinc-500 mt-1 ml-1 group-hover:text-[#C5A059] transition-colors duration-700">ULTRA-PERFORMANCE</span>
          </h2>
        </div>

        {/* Navigation: The Grid System */}
        <ul className="hidden xl:flex items-center h-full">
          {[
            { label: "Home", path: "/" },
            { label: "The Club", path: "/about" },
            { label: "Tiers", path: "/membership" },
            { label: "Disciplines", path: "/programs" },
            { label: "Mentors", path: "/trainers" }
          ].map((item) => (
            <li key={item.label} className={navItem}>
              <Link to={item.path} className={linkText}>
                {item.label}
              </Link>
              <div className={accentBar}></div>
            </li>
          ))}
        </ul>

        {/* Call to Action: The "Gold Ingot" */}
        <div className="flex items-center h-full py-4">
          <Link 
            to="/contact" 
            className="h-full flex items-center px-10 border-2 border-[#C5A059] bg-[#C5A059] text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-[#C5A059] transition-all duration-500"
          >
            Request Invite
          </Link>
        </div>

      </nav>

      {/* Progress Line Decor */}
      <div className="absolute bottom-0 left-0 w-[15%] h-[2px] bg-[#C5A059]"></div>
    </header>
  );
};

export default Navbar;