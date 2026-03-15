import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for mobile toggle

/**
 * NEXAFIT PREMIUM NAVIGATION (Updated for Mobile)
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop styles
  const navItem = "group relative flex items-center justify-center h-full px-6 transition-all duration-500 ease-in-out";
  const linkText = "text-[10px] uppercase tracking-[0.4em] font-black text-zinc-500 group-hover:text-white group-hover:tracking-[0.5em] transition-all duration-500";
  const accentBar = "absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left";

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "The Club", path: "/about" },
    { label: "Tiers", path: "/membership" },
    { label: "Disciplines", path: "/programs" },
    { label: "Mentors", path: "/trainers" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-black border-b border-zinc-900">
      {/* Upper Utility Bar */}
      <div className="hidden md:flex justify-between items-center px-12 py-2 border-b border-zinc-900/50 bg-[#050505]">
        <span className="text-[9px] text-zinc-600 tracking-[0.5em] uppercase font-medium">Est. 2026 — London / NY / Dubai</span>
        <span className="text-[9px] text-[#C5A059] tracking-[0.3em] uppercase font-bold">Members Only Access</span>
      </div>

      <nav className="flex items-center justify-between h-20 md:h-24 px-6 lg:px-16">
        
        {/* Brand */}
        <Link to="/" className="relative group cursor-pointer">
          <h2 className="text-white text-2xl md:text-3xl font-black tracking-[-0.05em] uppercase leading-none">
            NEXA<span className="text-[#C5A059]">FIT</span>
            <span className="block text-[7px] md:text-[8px] tracking-[0.8em] text-zinc-500 mt-1 ml-1 group-hover:text-[#C5A059] transition-colors duration-700">ULTRA-PERFORMANCE</span>
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center h-full">
          {navLinks.map((item) => (
            <li key={item.label} className={navItem}>
              <Link to={item.path} className={linkText}>
                {item.label}
              </Link>
              <div className={accentBar}></div>
            </li>
          ))}
        </ul>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center h-full space-x-4">
          <Link 
            to="/contact" 
            className="hidden sm:flex h-12 md:h-14 items-center px-6 md:px-10 border-2 border-[#C5A059] bg-[#C5A059] text-black text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-[#C5A059] transition-all duration-500"
          >
            Request Invite
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-white p-2 hover:text-[#C5A059] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Progress Line Decor */}
      <div className="absolute bottom-0 left-0 w-[15%] h-[2px] bg-[#C5A059]"></div>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 top-20 bg-black z-[9998] transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out xl:hidden border-t border-zinc-900`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-10 p-8">
          {navLinks.map((item) => (
            <li key={item.label} className="w-full text-center">
              <Link 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-[#C5A059] transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="w-full pt-6">
             <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full py-5 border-2 border-[#C5A059] text-[#C5A059] font-black uppercase tracking-[0.3em]"
              >
                Request Invite
              </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;