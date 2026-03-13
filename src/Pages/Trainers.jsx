import React from 'react';
import { Link } from 'react-router-dom';
import trainer1 from '../assets/trainer1.jpg';
import trainer2 from '../assets/trainer2.jpg';
import trainer3 from '../assets/trainer3.jpg';
import trainer4 from '../assets/trainer4.jpg';
import trainer5 from '../assets/trainer5.jpg';
import trainer6 from '../assets/trainer6.jpg';
import trainer7 from '../assets/trainer7.jpg';
import trainer8 from '../assets/trainer8.jpg';

const VaultSection = ({ title, children, isDark = true }) => (
  <section className={`py-24 px-8 md:px-16 ${isDark ? "bg-black text-white" : "bg-[#050505] text-zinc-300"}`}>
    <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-12 border-l-2 border-[#C5A059] pl-4">
      {title}
    </h2>
    {children}
  </section>
);

const Trainers = () => {
  const trainers = [
    { name: "Alex Mwangi", role: "Head Trainer", img: trainer1, experience: "10+ years", specialization: "Biomechanics", certs: "CSCS, Nutrition" },
    { name: "Linda Kimani", role: "Recovery Expert", img: trainer2, experience: "8 years", specialization: "Injury Prevention", certs: "Physio, Recovery" },
    { name: "James Otieno", role: "Strength Coach", img: trainer3, experience: "7 years", specialization: "Hypertrophy", certs: "Strength, Powerlifting" },
    { name: "Grace Wanjiku", role: "Nutritionist", img: trainer4, experience: "6 years", specialization: "Performance Diet", certs: "Nutrition, Planning" },
    { name: "Brian Njoroge", role: "Cardio Coach", img: trainer5, experience: "5 years", specialization: "Endurance", certs: "HIIT, Cardio" },
    { name: "Sophia Mutheu", role: "Mobility", img: trainer6, experience: "6 years", specialization: "Mobility", certs: "Yoga, Stretching" },
    { name: "Kevin Mwenda", role: "Rehab Coach", img: trainer7, experience: "7 years", specialization: "Functional Movement", certs: "Rehab, PT" },
    { name: "Lydia Kamau", role: "Performance Analyst", img: trainer8, experience: "5 years", specialization: "Biometrics", certs: "Analyst, Tracking" },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans pt-24">
      
      {/* 1. Header */}
      <section className="px-8 md:px-16 py-24 border-b border-zinc-900">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Performance <span className="text-[#C5A059]">Mentors</span></h1>
        <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed">
          Engineered leadership. Our coaching staff utilizes high-fidelity data and science-backed protocols to optimize your individual output.
        </p>
      </section>

      {/* 2. Trainer Grid */}
      <VaultSection title="Staff Roster" isDark={false}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t, i) => (
            <div key={i} className="border border-zinc-900 p-6 group hover:border-[#C5A059] transition-all">
              <img src={t.img} alt={t.name} className="w-full h-64 object-cover mb-6 q group-hover:q-0" />
              <h3 className="text-xl font-bold uppercase tracking-widest">{t.name}</h3>
              <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.2em] mb-6">{t.role}</p>
              <div className="text-[10px] uppercase text-zinc-500 space-y-2 border-t border-zinc-900 pt-4">
                <p><span className="text-white">XP:</span> {t.experience}</p>
                <p><span className="text-white">FOCUS:</span> {t.specialization}</p>
                <p><span className="text-white">CERT:</span> {t.certs}</p>
              </div>
            </div>
          ))}
        </div>
      </VaultSection>

      {/* 3. Methodology */}
      <VaultSection title="Integration Protocols">
        <div className="max-w-3xl">
          <p className="text-zinc-400 leading-relaxed text-lg">
            Our selection process for mentors is rigorous. We prioritize technical competency, longitudinal success, and an unwavering commitment to data-verified athlete progress. Each trainer acts as an engineer of your physical trajectory.
          </p>
        </div>
      </VaultSection>

      {/* 4. CTA */}
      <section className="py-24 px-8 text-center bg-[#C5A059]">
        <h2 className="text-3xl font-black uppercase text-black mb-6 tracking-tighter">Schedule Integration</h2>
        <p className="text-black mb-8 max-w-sm mx-auto">Lock in a consultation with our staff to calibrate your training requirements.</p>
        <Link to="/contact" className="px-12 py-5 bg-black text-white font-black uppercase tracking-[0.3em] hover:bg-zinc-900 transition-all">
          Book Session
        </Link>
      </section>
    </div>
  );
};

export default Trainers;