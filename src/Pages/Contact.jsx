import React from 'react';

const VaultSection = ({ title, children, isDark = true }) => (
  <section className={`py-24 px-8 md:px-16 ${isDark ? "bg-black text-white" : "bg-[#050505] text-zinc-300"}`}>
    <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-12 border-l-2 border-[#C5A059] pl-4">
      {title}
    </h2>
    {children}
  </section>
);

function Contact() {
  const inputStyle = "w-full bg-transparent border-b border-zinc-800 p-4 text-white placeholder-zinc-600 focus:border-[#C5A059] outline-none transition-colors";

  return (
    <div className="bg-black min-h-screen text-white font-sans pt-24">
      
      {/* 1. Header */}
      <section className="px-8 md:px-16 py-24 border-b border-zinc-900">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Initiate <span className="text-[#C5A059]">Contact</span></h1>
        <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed">
          Establish a secure connection with our operations team to begin your performance integration.
        </p>
      </section>

      {/* 2. Location & Contact */}
      <VaultSection title="Secure Coordinates" isDark={false}>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "ADDRESS", value: "NAIROBI, KENYA" },
            { label: "EMAIL", value: "INFO@NEXAFIT.COM" },
            { label: "OPERATIONS", value: "+254 700 000 000" }
          ].map((item, i) => (
            <div key={i} className="border border-zinc-900 p-8">
              <p className="text-[10px] tracking-[0.3em] text-[#C5A059] mb-4">{item.label}</p>
              <p className="text-xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </VaultSection>

      {/* 3. Form & Map */}
      <VaultSection title="Transmission">
        <div className="grid md:grid-cols-2 gap-16">
          <form className="space-y-6">
            <input type="text" placeholder="FULL NAME" className={inputStyle} />
            <input type="email" placeholder="EMAIL ADDRESS" className={inputStyle} />
            <textarea placeholder="INQUIRY DETAILS" rows="6" className={inputStyle}></textarea>
            <button type="submit" className="w-full py-6 bg-[#C5A059] text-black font-black uppercase tracking-[0.3em] hover:bg-white transition-all">
              Transmit Inquiry
            </button>
          </form>
          
          <div className="border border-zinc-900 h-full min-h-[400px] flex items-center justify-center bg-[#050505]">
            <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 italic">Facility Map Data Encrypted</p>
          </div>
        </div>
      </VaultSection>

      {/* 4. Support */}
      <section className="py-24 px-8 text-center bg-[#C5A059]">
        <h2 className="text-3xl font-black uppercase text-black mb-6 tracking-tighter">Emergency Support</h2>
        <p className="text-black mb-8 max-w-sm mx-auto">For immediate assistance, contact the operations desk via secure voice line.</p>
        <a href="tel:+254700000000" className="px-12 py-5 bg-black text-white font-black uppercase tracking-[0.3em] hover:bg-zinc-900 transition-all">
          Call Operations
        </a>
      </section>
    </div>
  );
}

export default Contact;