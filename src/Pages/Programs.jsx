import React from 'react';
import { Link } from 'react-router-dom';
import program1 from '../assets/program1.jpg';
import program2 from '../assets/program2.jpg';
import program3 from '../assets/program3.jpg';
import program4 from '../assets/program4.jpg';

const VaultSection = ({ title, children, isDark = true }) => (
  <section className={`py-24 px-8 md:px-16 ${isDark ? "bg-black text-white" : "bg-[#050505] text-zinc-300"}`}>
    <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-12 border-l-2 border-[#C5A059] pl-4">
      {title}
    </h2>
    {children}
  </section>
);

const Programs = () => {
  const programs = [
    { title: "Hypertrophy Training", image: program1, description: "Volume-based adaptation focused on muscle fiber recruitment and structural definition.", benefits: ["Resistance Systems", "Progressive Overload", "Strength Gains"] },
    { title: "Metabolic Conditioning", image: program2, description: "High-intensity optimization of energy systems for elite cardiovascular output.", benefits: ["HIIT Integration", "Stamina Density", "Fat Oxidation"] },
    { title: "Functional Strength", image: program3, description: "Engineering daily movement patterns through core stability and joint integrity.", benefits: ["Core Integration", "Movement Balance", "Injury Mitigation"] },
    { title: "Recovery & Regeneration", image: program4, description: "Protocol-driven restoration utilizing biometric data for peak performance sustainability.", benefits: ["Mobility Protocols", "Biometric Tracking", "Overtraining Prevention"] }
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans pt-24">
      
      {/* 1. Header */}
      <section className="px-8 md:px-16 py-24 border-b border-zinc-900">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Training <span className="text-[#C5A059]">Disciplines</span></h1>
        <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed">
          Our programs are engineered to optimize human potential. Select your architectural path to peak performance.
        </p>
      </section>

      {/* 2. Program List */}
      <VaultSection title="System Architecture" isDark={false}>
        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <div key={index} className="group border border-zinc-900 p-8 hover:border-[#C5A059] transition-all">
              <img src={program.image} alt={program.title} className="w-full h-130 object-cover mb-8 q group-hover:q-0 transition-all" />
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">{program.title}</h2>
              <p className="text-zinc-500 mb-8 leading-relaxed">{program.description}</p>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] mb-4">Key Metrics:</h3>
              <ul className="grid grid-cols-2 gap-4">
                {program.benefits.map((benefit, i) => (
                  <li key={i} className="text-xs uppercase border border-zinc-900 p-3 text-center">{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </VaultSection>

      {/* 3. CTA */}
      <section className="py-24 px-8 text-center bg-[#C5A059]">
        <h2 className="text-3xl font-black uppercase text-black mb-6 tracking-tighter">Initiate Your Path</h2>
        <p className="text-black mb-8 max-w-sm mx-auto">Request a formal consultation to align our programs with your specific performance requirements.</p>
        <Link to="/contact" className="px-12 py-5 bg-black text-white font-black uppercase tracking-[0.3em] hover:bg-zinc-900 transition-all">
          Consult Expert
        </Link>
      </section>

      {/* 4. Success Stories */}
      <VaultSection title="Operational Results">
        <div className="grid md:grid-cols-2 gap-8">
           <blockquote className="border-l border-[#C5A059] pl-6 italic text-zinc-400">"Hypertrophy integration yielded an 8kg gain in lean mass within 90 days."</blockquote>
           <blockquote className="border-l border-[#C5A059] pl-6 italic text-zinc-400">"Metabolic conditioning metrics exceeded all previous endurance thresholds."</blockquote>
        </div>
      </VaultSection>
    </div>
  );
};

export default Programs;