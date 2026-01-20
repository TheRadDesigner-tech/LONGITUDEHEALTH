import React from 'react';
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import { CheckCircle } from 'lucide-react';

const LongitudeRx: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="LONGITUDE RX" 
        subtitle="Specialty Pharmacy"
        description="A health-system-owned specialty pharmacy platform designed to improve access, adherence, and clinical outcomes for complex medication needs."
        pattern="cross"
        align="left"
      />
      
      <section className="py-20 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-light mb-6">Seamless Clinical Integration</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Unlike traditional specialty pharmacies, Longitude Rx integrates directly with the health system's EHR and care teams. This ensures that pharmacists have the full clinical picture, and providers stay informed about adherence and side effects in real-time.
            </p>
            <ul className="space-y-4">
              {[
                "Direct EHR Integration",
                "Real-time Adherence Monitoring",
                "Patient Financial Assistance Support",
                "24/7 Clinical Pharmacist Access"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="text-white font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surfaceHighlight rounded-xl p-1 border border-border h-96 w-full relative overflow-hidden">
             <div className="absolute inset-0 pattern-grid-yellow opacity-10"></div>
             {/* Abstract UI representation */}
             <div className="absolute inset-4 bg-background rounded-lg border border-white/10 p-6">
                <div className="h-8 w-1/3 bg-white/10 rounded mb-6 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/5 rounded"></div>
                  <div className="h-2 w-full bg-white/5 rounded"></div>
                  <div className="h-2 w-2/3 bg-white/5 rounded"></div>
                </div>
                <div className="mt-8 flex gap-4">
                   <div className="h-24 w-1/2 bg-primary/20 border border-primary/30 rounded flex items-center justify-center text-primary font-bold text-2xl">98%</div>
                   <div className="h-24 w-1/2 bg-secondary/20 border border-secondary/30 rounded flex items-center justify-center text-secondary font-bold text-2xl">24/7</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Stats stats={[
        { value: "24%", label: "Adherence Improvement" },
        { value: "<2 Days", label: "Time to Therapy" },
        { value: "$12M", label: "System Savings" },
        { value: "99%", label: "Patient Satisfaction" }
      ]} />
      
      <CTA />
    </>
  );
};

export default LongitudeRx;