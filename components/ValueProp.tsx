import React from 'react';
import { ShieldCheck, Zap, Globe, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const InfrastructureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
  color: string;
}> = ({ icon, title, desc, delay, color }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="group relative bg-surface/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl hover:bg-surface/60 transition-all duration-500 hover:border-white/10"
  >
    <div className={`w-12 h-12 rounded-lg bg-${color}/10 flex items-center justify-center text-${color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold text-light mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed font-light">
      {desc}
    </p>
  </motion.div>
);

const ValueProp: React.FC = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-b border-border">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(#F9F4EA 1px, transparent 1px), linear-gradient(90deg, #F9F4EA 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Content: The Narrative */}
        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8">
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold">System Level Scale</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-8 text-light uppercase tracking-tighter">
            NOT A VENDOR,<br/>
            <span className="text-primary italic">A PARTNER.</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12 font-light">
            We operate as a shared utility owned and governed by health systems. This isn't software you buy; it's infrastructure you co-own, designed to solve the structural inefficiencies of modern care delivery.
          </p>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-12 h-12 border border-border rounded-full flex items-center justify-center text-primary font-mono font-bold">01</div>
              <div>
                <h4 className="text-light font-bold mb-1">Aligned Incentives</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">Unlike vendors focused on quarterly earnings, our success is measured by the operational efficiency of our member systems.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-12 h-12 border border-border rounded-full flex items-center justify-center text-secondary font-mono font-bold">02</div>
              <div>
                <h4 className="text-light font-bold mb-1">Joint Ownership</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">Member systems sit at the center of innovation, directing the roadmap and sharing in the economic upside of scale.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content: The Infrastructure Visual */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="space-y-6 md:translate-y-12">
            <InfrastructureCard 
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Health System Governed"
              desc="Full transparency and control. Our board is comprised of the leaders who run the nation's top health systems."
              color="primary"
              delay={0.1}
            />
            <InfrastructureCard 
              icon={<Zap className="w-6 h-6" />}
              title="Native Integration"
              desc="We don't sit on top of your workflow; we integrate into it, leveraging existing EHR investments to drive real-time results."
              color="secondary"
              delay={0.3}
            />
          </div>
          
          <div className="space-y-6">
            <InfrastructureCard 
              icon={<Globe className="w-6 h-6" />}
              title="Collaborative Network"
              desc="Scale that benefits everyone. Knowledge and data from one system improve the utility for all members."
              color="accent"
              delay={0.2}
            />
            <InfrastructureCard 
              icon={<BarChart3 className="w-6 h-6" />}
              title="Economic Stability"
              desc="Predictable pricing and shared returns ensure that clinical missions are supported, not drained by vendor margins."
              color="primary"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;