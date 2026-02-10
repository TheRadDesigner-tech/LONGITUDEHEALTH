
import React from 'react';
import { ArrowRight, Layers, Pill, Compass, Briefcase, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SolutionDomainCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  description: string;
  utilities: { name: string; link?: string; status: string }[];
  color: string;
  delay: number;
}> = ({ title, icon, description, utilities, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`relative group bg-surface border border-border rounded-2xl p-8 hover:border-${color} transition-all duration-500 overflow-hidden h-full flex flex-col shadow-xl`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-700`}></div>
      
      <div className="mb-6 relative">
        <div className={`w-12 h-12 rounded-xl bg-${color}/10 flex items-center justify-center text-${color} mb-6 border border-${color}/20`}>
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold text-light leading-tight uppercase tracking-tight">{title}</h3>
      </div>
      
      <p className="text-slate-400 mb-8 text-sm leading-relaxed font-light flex-grow">
        {description}
      </p>

      <div className="space-y-3 relative z-10">
        <p className="text-[8px] font-mono uppercase text-slate-500 tracking-[0.3em] mb-2 border-b border-white/5 pb-2">Utilities</p>
        {utilities.map((util, i) => (
          <div key={i}>
            {util.link ? (
               <Link to={util.link} className="flex items-center justify-between group/link p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                <span className={`text-xs font-bold text-${color} group-hover/link:text-white transition-colors`}>{util.name}</span>
                <ArrowRight className={`w-4 h-4 text-slate-500 group-hover/link:text-${color} transition-transform group-hover/link:translate-x-1`} />
              </Link>
            ) : (
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/10 border border-white/5 opacity-60">
                 <span className="text-xs font-medium text-slate-500">{util.name}</span>
                 <span className="text-[8px] uppercase border border-slate-700 rounded px-1.5 py-0.5 text-slate-500 font-bold tracking-tighter">{util.status}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Initiatives: React.FC = () => {
  return (
    <section className="py-24 pattern-plus-ocean relative z-0" id="solutions">
      <div className="max-w-[1200px] mx-auto px-6 mb-24 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary mb-6">
              <Compass className="w-3 h-3" />
              <span className="text-[9px] font-mono tracking-[0.4em] uppercase font-bold">Solution Domains</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-light mb-4 tracking-tighter uppercase">Our Portfolio</h2>
            <p className="text-slate-400 max-w-2xl text-base font-light leading-relaxed">
               Addressing the most significant structural bottlenecks in health system operations through 4 core solution domains.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SolutionDomainCard 
            title="Pharmaceuticals & Therapeutics"
            icon={<Pill className="w-6 h-6" />}
            description="Owned platforms designed to improve medication access, adherence, and clinical outcomes for complex care."
            color="primary"
            delay={0.1}
            utilities={[
              { name: "Longitude Rx", link: "/solutions/rx", status: "Live" },
              { name: "Therapy Integration Hub", status: "Roadmap" }
            ]}
          />
          
          <SolutionDomainCard 
            title="Enterprise Shared Services"
            icon={<Layers className="w-6 h-6" />}
            description="Simplifying back-office and shared operations through real-time adjudication and automated core infrastructure."
            color="secondary"
            delay={0.15}
            utilities={[
              { name: "Longitude FX", link: "/solutions/fx", status: "Development" },
              { name: "Billing Automation", status: "Concept" }
            ]}
          />

          <SolutionDomainCard 
            title="Population Health & Managed Care"
            icon={<HeartPulse className="w-6 h-6" />}
            description="Developing collective tools for risk management, value-based care, and community health integration."
            color="accent"
            delay={0.2}
            utilities={[
              { name: "Risk Analytics Utility", status: "Roadmap" }
            ]}
          />

          <SolutionDomainCard 
            title="Workforce & Clinical Ops"
            icon={<Briefcase className="w-6 h-6" />}
            description="Optimizing clinical labor and operational resilience through cross-system resource sharing."
            color="primary"
            delay={0.25}
            utilities={[
              { name: "Workforce Dynamics", status: "Discovery" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
