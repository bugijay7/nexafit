import React from 'react';
import { Link } from 'react-router-dom';

const VaultSection = ({ title, children, isDark = true }) => (
  <section className={`py-24 px-8 md:px-16 ${isDark ? "bg-black text-white" : "bg-[#050505] text-zinc-300"}`}>
    <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-12 border-l-2 border-[#C5A059] pl-4">
      {title}
    </h2>
    {children}
  </section>
);

const Membership = () => {
  const tiers = [
    {
      name: "CORE",
      price: "KSH 4,000",
      features: ["Gym equipment access", "1 training session/mo", "Basic recovery", "Group classes"]
    },
    {
      name: "PRO",
      price: "KSH 6,000",
      features: ["Unlimited gym access", "Weekly training", "Advanced recovery", "Nutrition consult", "Priority booking"]
    },
    {
      name: "ELITE",
      price: "KSH 9,000",
      features: ["All PRO benefits", "Daily personal training", "Biometric tracking", "Custom meal plans", "Mentor access", "VIP events"]
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans pt-24">
      
      {/* 1. Header / Hero */}
      <section className="px-8 md:px-16 py-24 border-b border-zinc-900">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Membership <span className="text-[#C5A059]">Tiers</span></h1>
        <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed">
          Select your level of integration. Our tiers are engineered to facilitate progress from entry-level refinement to elite-tier optimization.
        </p>
      </section>

      {/* 2. Membership Plans */}
      <VaultSection title="Access Protocols" isDark={false}>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className="border border-zinc-900 p-10 hover:border-[#C5A059] transition-all group flex flex-col">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-2">{tier.name}</h2>
              <p className="text-3xl font-black mb-8">{tier.price}<span className="text-xs text-zinc-600 block">/MONTH</span></p>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-xs uppercase tracking-widest text-zinc-500 flex items-center">
                    <span className="mr-2 text-[#C5A059]">◆</span> {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="border border-[#C5A059] py-4 text-center uppercase text-[10px] tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all">
                Initiate Access
              </Link>
            </div>
          ))}
        </div>
      </VaultSection>

      {/* 3. Social Proof */}
      <VaultSection title="Member Verification">
        <div className="grid md:grid-cols-2 gap-12">
           <blockquote className="text-zinc-400 italic border-l-2 border-zinc-800 pl-8">"Joining the ELITE tier completely transformed my training experience. The personalized coaching is unmatched."</blockquote>
           <blockquote className="text-zinc-400 italic border-l-2 border-zinc-800 pl-8">"The PRO plan provided the precise structure required to reach my peak physical output."</blockquote>
        </div>
      </VaultSection>

      {/* 4. Call to Action */}
      <section className="py-24 px-8 text-center bg-[#C5A059]">
        <h2 className="text-3xl font-black uppercase text-black mb-6 tracking-tighter">Requires Guidance?</h2>
        <p className="text-black mb-8 max-w-sm mx-auto">Our consultants are available to analyze your requirements and assign the optimal tier.</p>
        <Link to="/contact" className="px-12 py-5 bg-black text-white font-black uppercase tracking-[0.3em] hover:bg-zinc-900 transition-all">
          Consult Expert
        </Link>
      </section>
    </div>
  );
};

export default Membership;