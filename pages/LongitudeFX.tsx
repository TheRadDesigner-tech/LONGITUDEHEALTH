import React from 'react';
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import Timeline from '../components/Timeline';
import CTA from '../components/CTA';

const LongitudeFX: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="LONGITUDE FX" 
        subtitle="Financial Experience"
        description="Reimagining the financial lifecycle of care. We remove friction between payers, providers, and patients to create a transparent, predictable, and seamless financial experience."
        pattern="grid"
        align="left"
      />
      
       <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Unified Wallet", desc: "One place for patients to view estimates, pay bills, and manage plans across the system." },
              { title: "Real-Time Adjudication", desc: "Settling claims at the point of service to provide instant financial certainty." },
              { title: "Admin Automation", desc: "Reducing back-office burden by automating reconciliation and billing workflows." }
            ].map((item, i) => (
              <div key={i} className="bg-surface p-8 rounded-xl border border-border hover:border-secondary transition-colors group">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                  <span className="font-bold text-xl">{i+1}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-light mb-2">{item.title}</h3>
                <p className="text-slate-400 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      
      <Stats stats={[
        { value: "30%", label: "Admin Cost Reduction" },
        { value: "100%", label: "Price Transparency" },
        { value: "Real-Time", label: "Claim Settlement" },
        { value: "Q4 2025", label: "Target Launch" }
      ]} />

      <CTA />
    </>
  );
};

export default LongitudeFX;