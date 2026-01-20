import React from 'react';
import { ArrowRight, Layers, Pill, Compass } from 'lucide-react';
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`relative group bg-surface border border-border rounded-2xl p-8 md:p-10 hover:border-${color} transition-all duration-500 overflow-hidden h-full flex flex-col shadow-2xl`}
    >
      <div className={`absolute top-0 right-0 w-40 h-40 bg-${color}/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-125 duration-700`}></div>
      
      <div className="mb-8 relative">
        <div className={`w-16 h-16 rounded-2xl bg-${color}/10 flex items-center justify-center text-${color} mb-6 border border-${color}/20`}>
          {icon}
        </div>
        <h3 className="text-3xl font-display font-bold text-light leading-tight min-h-[4rem]">{title}</h3>
      </div>
      
      <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light flex-grow">
        {description}
      </p>

      <div className="space-y-4 relative z-10">
        <p className="text-xs font-mono uppercase text-slate-500 tracking-[0.3em] mb-4 border-b border-white/5 pb-3">Operational Utilities</p>
        {utilities.map((util, i) => (
          <div key={i}>
            {util.link ? (
               <Link to={util.link} className="flex items-center justify-between group/link p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                <span className={`text-lg font-bold text-${color} group-hover/link:text-white transition-colors`}>{util.name}</span>
                <ArrowRight className={`w-5 h-5 text-slate-500 group-hover/link:text-${color} transition-transform group-hover/link:translate-x-1`} />
              </Link>
            ) : (
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 opacity-70">
                 <span className="font-medium text-slate-400">{util.name}</span>
                 <span className="text-[10px] uppercase border border-slate-700 rounded-md px-2 py-1 text-slate-500 font-bold tracking-tighter">{util.status}</span>
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
    <section className="py-32 bg-background relative z-0" id="solutions">
      <div className="max-w-[1440px] mx-auto px-6 mb-24 relative z-10">
        
        {/* Detailed Solutions Section - Portfolio Domains focus */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary mb-6">
                  <Compass className="w-4 h-4" />
                  <span className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold">The Portfolio</span>
                </div>
                <h2 className="text-6xl font-display font-bold text-light mb-4 tracking-tighter uppercase">Portfolio Domains</h2>
                <p className="text-slate-400 max-w-2xl text-xl font-light leading-relaxed">
                   Our current platforms address the most significant structural bottlenecks in modern health system operations: <span className="text-primary font-medium">Pharmacy</span> and <span className="text-secondary font-medium">Finance</span>.
                </p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SolutionDomainCard 
              title="Longitude Rx: Specialty Pharmacy"
              icon={<Pill className="w-8 h-8" />}
              description="A health-system-owned specialty pharmacy platform designed to improve medication access, adherence, and clinical outcomes for complex patients."
              color="primary"
              delay={0.1}
              utilities={[
                { name: "Longitude Rx", link: "/solutions/rx", status: "Live" },
                { name: "Clinical Dispensing Hub", status: "Roadmap" }
              ]}
            />
            
            <SolutionDomainCard 
              title="Longitude FX: Financial Operations"
              icon={<Layers className="w-8 h-8" />}
              description="Simplifying the financial lifecycle of care by removing friction between providers, payers, and patients through real-time adjudication."
              color="secondary"
              delay={0.2}
              utilities={[
                { name: "Longitude FX", link: "/solutions/fx", status: "Development" },
                { name: "Auto-Adjudication Core", status: "Concept" }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;