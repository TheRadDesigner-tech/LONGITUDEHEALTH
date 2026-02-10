
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Building2, TrendingUp, Anchor } from 'lucide-react';

const StatBox: React.FC<{ 
  value: string; 
  label: string; 
  sublabel: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ value, label, sublabel, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="bg-surface/30 backdrop-blur-3xl border border-white/[0.03] p-6 rounded-2xl hover:border-primary/20 transition-all duration-700 group h-full flex flex-col justify-between relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-2 opacity-[0.03]">
      <div className="text-[10px] font-mono">31.22° N</div>
    </div>
    <div className="flex items-start justify-between mb-8">
      <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center text-primary/60 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-500 border border-white/[0.05]">
        {icon}
      </div>
    </div>
    <div className="space-y-2">
      <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-light tracking-tighter uppercase leading-none group-hover:text-primary transition-colors duration-500">
        {value}
      </div>
      <div className="pt-2 border-t border-white/[0.03]">
        <div className="text-xs font-display font-bold text-slate-300 uppercase tracking-[0.1em]">{label}</div>
        <div className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.1em] mt-0.5">{sublabel}</div>
      </div>
    </div>
  </motion.div>
);

const CollaborativeScale: React.FC = () => {
  return (
    <section className="py-24 pattern-plus-ocean relative overflow-hidden border-y border-white/[0.02]">
      {/* Chart Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(#F9F4EA 0.5px, transparent 0.5px), linear-gradient(90deg, #F9F4EA 0.5px, transparent 0.5px)`,
          backgroundSize: '150px 150px'
        }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-5/12 relative">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <Anchor className="w-3 h-3 text-primary/40" />
                <span className="text-[9px] font-mono tracking-[0.4em] uppercase font-black text-slate-500">Established Reach</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-light uppercase tracking-tighter leading-[0.9] mb-8">
                NAVIGATING <br/><span className="text-primary italic">SCALE</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-md mb-12">
                Longitude Health aggregates the reach of the nation's premier systems to build infrastructure that no single entity can create alone.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4 self-center">
            <StatBox 
              icon={<TrendingUp className="w-5 h-5" />}
              value="$60B"
              label="Annual Revenue"
              sublabel="Net Patient Service Revenue"
              delay={0.1}
            />
            <StatBox 
              icon={<Building2 className="w-5 h-5" />}
              value="140+"
              label="Hospitals"
              sublabel="Spanning 10 States"
              delay={0.15}
            />
            <StatBox 
              icon={<Users className="w-5 h-5" />}
              value="280K"
              label="Employees"
              sublabel="Unified Workforce"
              delay={0.2}
            />
            <StatBox 
              icon={<Globe className="w-5 h-5" />}
              value="3100+"
              label="Care Sites"
              sublabel="Access Points Nationwide"
              delay={0.25}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborativeScale;
