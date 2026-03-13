import React from "react";
import { Link } from "react-router-dom";
import { Award, Zap, Heart, ChevronRight, Check, Activity, Calendar, Users } from "lucide-react";

// Imports
import heroImage from "../assets/hero.png";
import program1 from "../assets/program1.png";
import program2 from "../assets/program2.png";
import trainer1 from "../assets/trainer1.png";
import trainer2 from "../assets/trainer2.png";

import gymFloor from '../assets/gymFloor.jpg';
import recoverySuite from '../assets/recoverySuite.jpg';
import biometricLab from '../assets/biometricLab.jpg';
import functionalZone from '../assets/functionalZone.jpg';  

const VaultSection = ({ title, children, isDark = true }) => (
  <section className={`py-24 px-8 md:px-16 transition-all duration-700 ${isDark ? "bg-black text-white" : "bg-[#050505] text-zinc-300"}`}>
    <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-12 border-l-2 border-[#C5A059] pl-4">{title}</h2>
    {children}
  </section>
);

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* 1. HERO */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-16 pt-24 overflow-hidden">
        <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-7xl md:text-[10rem] font-black uppercase leading-[0.9] tracking-tighter mb-8">ENGINEER <br /><span className="text-[#C5A059]">YOUR PEAK.</span></h1>
          <Link to="/contact" className="inline-block px-12 py-6 bg-[#C5A059] text-black font-black uppercase tracking-[0.3em] hover:bg-white transition-all transform hover:-translate-y-1">Initiate Consultation</Link>
        </div>
      </section>

      {/* 2. FACILITY */}
<VaultSection title="The Sanctuary">
  <div className="grid md:grid-cols-2 gap-16">
    {/* Left: Text */}
    <div className="space-y-6">
      <h3 className="text-4xl font-bold uppercase tracking-tight">Ultra-Performance Environment</h3>
      <p className="text-zinc-500">
        Precision-calibrated equipment, climate-controlled recovery suites, and biometric tracking. 
        Experience an environment designed for elite performance and recovery.
      </p>
    </div>

    {/* Right: Facility Images */}
    <div className="grid grid-cols-2 gap-4">
      {[
        { img: gymFloor, label: "Gym Floor" },
        { img: recoverySuite, label: "Recovery Suite" },
        { img: biometricLab, label: "Biometric Lab" },
        { img: functionalZone, label: "Functional Zone" },
      ].map((zone, i) => (
        <div key={i} className="relative h-40 overflow-hidden border border-zinc-800 rounded-lg cursor-pointer group shadow-lg">
          <img
            src={zone.img}
            alt={zone.label}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-white uppercase text-[12px] tracking-widest font-bold">{zone.label}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</VaultSection>

      {/* 3. PROGRAMS */}
      <VaultSection title="Disciplines" isDark={false}>
        <div className="grid md:grid-cols-2 gap-8">
          {[ { img: program1, title: "Hypertrophy", desc: "Volume-based adaptation." }, { img: program2, title: "Metabolic", desc: "Energy system optimization." } ].map((p, i) => (
            <div key={i} className="group border border-zinc-900 p-8 hover:border-[#C5A059] transition-all">
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover mb-6 q group-hover:q-0 transition-all" />
              <h4 className="text-2xl font-bold uppercase">{p.title}</h4>
            </div>
          ))}
        </div>
      </VaultSection>

      {/* 4. TRAINERS */}
      <VaultSection title="Mentors">
        <div className="grid md:grid-cols-2 gap-12">
          {[trainer1, trainer2].map((t, i) => (
            <div key={i} className="flex gap-8 border-b border-zinc-900 pb-8 hover:bg-zinc-900/30 p-4 transition-all">
              <img src={t} alt="Trainer" className="w-32 h-32 object-cover q hover:q-0 transition-all" />
              <div className="flex flex-col justify-center">
                <h4 className="text-xl font-bold uppercase tracking-widest">Elite Instructor</h4>
                <p className="text-zinc-500 text-sm">Specialization: Biomechanics & Recovery</p>
              </div>
            </div>
          ))}
        </div>
      </VaultSection>

      {/* 5. MEMBERSHIP */}
      <VaultSection title="Tiers" isDark={false}>
         <div className="grid md:grid-cols-3 gap-8">
            {["ELITE", "PRO", "CORE"].map((t) => (
              <div key={t} className="border border-zinc-800 p-10 text-center hover:bg-zinc-900 transition-all">
                <h5 className="text-[10px] uppercase tracking-[0.5em] mb-4">{t}</h5>
                <Link to="/membership" className="border border-[#C5A059] px-6 py-3 uppercase text-[10px] hover:bg-[#C5A059] hover:text-black">View Protocol</Link>
              </div>
            ))}
         </div>
      </VaultSection>

      {/* 6. TESTIMONIALS */}
      <VaultSection title="Verification">
        <div className="grid md:grid-cols-3 gap-8">
           {["The absolute peak of athletic integration.", "Unmatched attention to detail.", "Results were immediate."].map((q, i) => (
             <blockquote key={i} className="border-l border-[#C5A059] pl-6 italic text-zinc-400">"{q}"</blockquote>
           ))}
        </div>
      </VaultSection>

      {/* 7. CTA / 8. SUCCESS STORIES */}
      <VaultSection title="Transformations" isDark={false}>
         <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4"><Award className="text-[#C5A059]"/> <p>+35% Performance Output</p></div>
            <div className="flex items-center gap-4"><Zap className="text-[#C5A059]"/> <p>100+ Elite Transformations</p></div>
            <div className="flex items-center gap-4"><Heart className="text-[#C5A059]"/> <p>Data-Driven Recovery</p></div>
         </div>
      </VaultSection>

      {/* 9. SCHEDULE */}
      <VaultSection title="Timetable">
         <div className="bg-zinc-900 border border-zinc-800 p-4">
            <table className="w-full text-left uppercase text-[10px]">
               <thead><tr><th className="p-4 border-b border-zinc-800">Time</th><th className="p-4 border-b border-zinc-800">Class</th><th className="p-4 border-b border-zinc-800">Mentor</th></tr></thead>
               <tbody>
                  <tr className="hover:bg-black transition-all cursor-pointer"><td className="p-4">06:00</td><td className="p-4">Hypertrophy</td><td className="p-4">A. Mwangi</td></tr>
                  <tr className="hover:bg-black transition-all cursor-pointer"><td className="p-4">18:00</td><td className="p-4">Metabolic</td><td className="p-4">B. Njoroge</td></tr>
               </tbody>
            </table>
         </div>
      </VaultSection>

      {/* 10. BLOG / 11. FAQ / 12. PARTNERS / 13. SOCIAL */}
      <VaultSection title="Intelligence" isDark={false}>
         <div className="grid md:grid-cols-2 gap-12">
            <div><h4 className="font-bold mb-4">FAQ Protocols</h4><p className="text-zinc-600">Access our database of training protocols and membership guidelines.</p></div>
            <div><h4 className="font-bold mb-4">Affiliations</h4><p className="text-zinc-600">Certified by Global Performance Boards & Medical Institutes.</p></div>
         </div>
      </VaultSection>

      {/* 14. FOOTER / 15. NEWSLETTER */}
      <footer className="py-24 border-t border-zinc-900 px-8 bg-black">
        <div className="grid md:grid-cols-2 gap-16">
            <div>
               <h4 className="text-[#C5A059] uppercase tracking-widest mb-4">Contact Coordinates</h4>
               <p className="text-zinc-500">Nairobi, Kenya</p>
            </div>
            <div className="flex items-center border-b border-zinc-800">
               <input type="email" placeholder="SUBSCRIBE TO INTELLIGENCE" className="bg-transparent p-2 w-full focus:outline-none" />
               <ChevronRight className="text-[#C5A059] hover:translate-x-2 transition-transform cursor-pointer"/>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;