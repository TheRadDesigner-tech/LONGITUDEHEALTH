import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Settings2, Smartphone, Share2, CheckCircle2, ArrowRight, Activity } from 'lucide-react';

const RoadmapStep: React.FC<{
  title: string;
  status: 'Live' | 'In Development' | 'Pipeline' | 'Concept';
  items: string[];
  icon: React.ReactNode;
  delay: number;
}> = ({ title, status, items, icon, delay }) => {
  const statusColors = {
    'Live': 'bg-primary text-background',
    'In Development': 'bg-secondary text-white',
    'Pipeline': 'bg-accent text-white',
    'Concept': 'bg-white/10 text-slate-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col h-full group"
    >
      {/* Visual Marker */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 bg-surfaceHighlight border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:scale-110">
          {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6 text-primary" }) : icon}
        </div>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent hidden lg:block"></div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-black uppercase tracking-wider ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        
        <h3 className="text-2xl font-display font-bold text-light uppercase tracking-tighter leading-none min-h-[3rem] group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <ul className="space-y-3 pt-4 border-t border-white/5">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm font-light leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-primary/40 shrink-0 group-hover:text-primary transition-colors" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const InvestmentRoadmap: React.FC = () => {
  const steps = [
    {
      title: "Pharmacy & Therapeutics",
      status: "Live" as const,
      items: ["Pharmacy optimization", "Rx dispensing", "Clinical trials enablement"],
      icon: <Pill />
    },
    {
      title: "Enterprise Shared Services Hub",
      status: "In Development" as const,
      items: ["BPO Solutions", "Automation & workflow", "Procurement GPO"],
      icon: <Settings2 />
    },
    {
      title: "Specialty-as-a-Service",
      status: "Pipeline" as const,
      items: ["Teleconsult infrastructure", "Specialist network", "Reference lab utility"],
      icon: <Smartphone />
    },
    {
      title: "Payor–Provider Solutions",
      status: "Concept" as const,
      items: ["Data interoperability", "Patient collections", "Direct-to-employer"],
      icon: <Share2 />
    }
  ];

  return (
    <section className="py-24 pattern-plus-ocean relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 pattern-plus-ocean opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent hidden lg:block -z-10 mt-[-60px]"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-[1px] bg-primary"></div>
              <span className="text-[10px] font-mono tracking-[0.6em] uppercase font-black text-primary italic">Our Vision</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-light uppercase tracking-tighter leading-none mb-6">
              SYSTEM <br/><span className="text-primary italic">EVOLUTION</span>
            </h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed">
              We deploy utilities sequentially, ensuring foundational success before scaling into increasingly complex ecosystem challenges.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <RoadmapStep key={index} {...step} delay={index * 0.1} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-10 rounded-[3rem] bg-surfaceHighlight/30 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-display font-black text-light uppercase tracking-tight">Active Portfolio Growth</h4>
              <p className="text-slate-500 font-light">Join the founding systems in directing the next wave of healthcare infrastructure.</p>
            </div>
          </div>
          <button className="group flex items-center gap-4 px-10 py-4 bg-primary text-background font-black rounded-full text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-white hover:scale-105 active:scale-95">
            Partner with us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentRoadmap;