
import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, TrendingUp, Users } from 'lucide-react';

const CaseStudyCard: React.FC<{
  title: string;
  system: string;
  challenge: string;
  solution: string;
  result: string;
  impact: string;
  tags: string[];
  delay: number;
}> = ({ title, system, challenge, solution, result, impact, tags, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="bg-surface border border-border rounded-3xl overflow-hidden group hover:border-primary/40 transition-all duration-500 shadow-2xl"
  >
    <div className="p-8 md:p-12">
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag, i) => (
          <span key={i} className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-slate-400">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="mb-10">
        <p className="text-primary font-mono text-xs uppercase tracking-widest mb-2">{system}</p>
        <h3 className="text-3xl font-display font-bold text-light mb-4">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div>
          <h4 className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-4 border-b border-white/5 pb-2">The Challenge</h4>
          <p className="text-slate-300 font-light leading-relaxed">{challenge}</p>
        </div>
        <div>
          <h4 className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-4 border-b border-white/5 pb-2">The Solution</h4>
          <p className="text-slate-300 font-light leading-relaxed">{solution}</p>
        </div>
      </div>

      <div className="bg-background/50 rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-tighter">Key Result</p>
            <p className="text-2xl font-display font-bold text-light">{result}</p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-slate-400 font-light italic text-sm">{impact}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const CaseStudies: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="CASE STUDIES" 
        subtitle="Impact in Action"
        description="Real-world evidence of how the Longitude Health consortium is transforming clinical operations and patient outcomes."
        pattern="grid"
      />
      
      <section className="py-24 bg-background">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="space-y-12">
            
            <CaseStudyCard 
              system="Memorial Hermann Health System"
              title="Specialty Pharmacy Integration & Adherence"
              challenge="High rates of medication abandonment and delayed therapy initiation for complex oncology and neurology patients."
              solution="Natively integrated specialty pharmacy workflow within the EHR, providing real-time adherence monitoring and automated financial assistance."
              result="24% Adherence Lift"
              impact="Reduced time to therapy by average of 3.2 days for oncology patients."
              tags={["Pharmacy", "Clinical", "EHR Native"]}
              delay={0.1}
            />

            <CaseStudyCard 
              system="Novant Health"
              title="Financial Experience Automation"
              challenge="Administrative friction in point-of-service collections leading to high bad debt and poor patient satisfaction."
              solution="Implemented Longitude FX auto-adjudication core to provide real-time price transparency and instant claim settlement."
              result="30% Admin Savings"
              impact="Patient satisfaction scores regarding financial transparency rose from 62% to 94%."
              tags={["Finance", "Patient Exp", "FX Core"]}
              delay={0.2}
            />

            <CaseStudyCard 
              system="Consortium-Wide Initiative"
              title="Shared Data Utility Pilot"
              challenge="Inability to benchmark clinical efficiency across member systems due to non-standardized data schemas."
              solution="Deployed a shared data layer for real-time benchmarking of surgical utility costs across three founding systems."
              result="12M+ Annual Synergy"
              impact="Identified supply chain optimizations across the collective spend of $1.2B."
              tags={["Data", "Supply Chain", "Consortium"]}
              delay={0.3}
            />

          </div>
        </div>
      </section>

      <Stats stats={[
        { value: "4.2M", label: "Patient Lives" },
        { value: "98%", label: "Deployment Success" },
        { value: "$50M+", label: "Target Synergies" },
        { value: "12min", label: "Mean Onboarding" }
      ]} />
      
      <CTA />
    </>
  );
};

export default CaseStudies;
