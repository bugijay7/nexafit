import React from 'react';
import { Link } from 'react-router-dom';
import teamMember1 from '../assets/trainer1.jpg';
import teamMember2 from '../assets/trainer2.jpg';
import teamMember3 from '../assets/trainer3.jpg';
import teamMember4 from '../assets/trainer4.jpg';
import teamMember5 from '../assets/trainer5.jpg';
import teamMember6 from '../assets/trainer6.jpg';
import teamMember7 from '../assets/trainer7.jpg';
import teamMember8 from '../assets/trainer8.jpg';

const VaultSection = ({ title, children, isDark = true }) => (
  <section className={`py-24 px-8 md:px-16 ${isDark ? "bg-black text-white" : "bg-[#050505] text-zinc-300"}`}>
    <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-12 border-l-2 border-[#C5A059] pl-4">
      {title}
    </h2>
    {children}
  </section>
);

const AboutPage = () => {
  const trainers = [
    { name: "Alex Mwangi", role: "Head Trainer", img: teamMember1, bio: "Specialist in biomechanics and strength conditioning with 10+ years experience." },
    { name: "Linda Kimani", role: "Recovery Expert", img: teamMember2, bio: "Certified physiotherapist focused on performance recovery and injury prevention." },
    { name: "James Otieno", role: "Strength Coach", img: teamMember3, bio: "Expert in powerlifting and hypertrophy training for athletes." },
    { name: "Grace Wanjiku", role: "Nutrition Specialist", img: teamMember4, bio: "Certified nutritionist designing performance-focused meal plans." },
    { name: "Brian Njoroge", role: "Cardio Coach", img: teamMember5, bio: "Specialist in endurance and high-intensity interval training." },
    { name: "Sophia Mutheu", role: "Yoga & Mobility", img: teamMember6, bio: "Expert in flexibility, mobility, and injury prevention." },
    { name: "Kevin Mwenda", role: "Rehabilitation Coach", img: teamMember7, bio: "Focuses on recovery, physiotherapy, and post-injury programs." },
    { name: "Lydia Kamau", role: "Performance Analyst", img: teamMember8, bio: "Uses biomechanics and data analysis to optimize athlete performance." },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans pt-24">
      
      {/* 1. HERO */}
      <section className="px-8 md:px-16 py-24 border-b border-zinc-900">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">About <span className="text-[#C5A059]">NEXAFIT</span></h1>
        <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed">
          Welcome to our high-performance training facility. We combine cutting-edge science with proven methodologies in training, recovery, and nutrition.
        </p>
      </section>

      {/* 2, 3, 4. MISSION, VISION, STORY */}
      <VaultSection title="Institutional Mandate" isDark={false}>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase text-white">Mission</h3>
            <p className="text-sm leading-relaxed">Empowering individuals to reach peak performance through data-driven, sustainable progress.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase text-white">Vision</h3>
            <p className="text-sm leading-relaxed">Setting the global standard for innovation in athletic performance and human potential.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase text-white">Origin</h3>
            <p className="text-sm leading-relaxed">Founded in 2020 by sports scientists to build a sanctuary where science meets human achievement.</p>
          </div>
        </div>
      </VaultSection>

      {/* 5. TEAM */}
      <VaultSection title="The Multidisciplinary Unit">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((member, i) => (
            <div key={i} className="border border-zinc-900 hover:border-[#C5A059] transition-colors p-6 group">
              <img src={member.img} alt={member.name} className="w-full h-124 object-cover mb-6  group-hover:q-0 transition-all" />
              <h3 className="text-lg font-bold uppercase tracking-widest">{member.name}</h3>
              <p className="text-[#C5A059] text-[10px] uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-zinc-500 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </VaultSection>

      {/* 6. ACHIEVEMENTS */}
      <VaultSection title="Operational Metrics" isDark={false}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "500+", label: "Elite Athletes" },
            { stat: "35%", label: "Injury Reduction" },
            { stat: "100+", label: "Research Papers" },
            { stat: "GLOBAL", label: "Partnerships" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-black text-white mb-2">{item.stat}</p>
              <p className="text-[10px] uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </VaultSection>

      {/* 7. CTA */}
      <section className="py-24 px-8 text-center bg-[#C5A059]">
        <h2 className="text-4xl font-black uppercase text-black mb-8 tracking-tighter">Initiate Your Integration</h2>
        <Link to="/contact" className="px-12 py-6 bg-black text-white font-black uppercase tracking-[0.3em] hover:bg-zinc-900 transition-all">
          Get in Touch
        </Link>
      </section>

    </div>
  );
};

export default AboutPage;