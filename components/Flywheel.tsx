import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Globe, Target, RefreshCw } from 'lucide-react';

const Callout: React.FC<{
  title?: string;
  text: string;
  position: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'success';
  delay: number;
}> = ({ title, text, position, variant = 'primary', delay }) => {
  const themes = {
    primary: "border-primary/30 bg-primary/5 text-primary",
    secondary: "border-secondary/30 bg-secondary/5 text-secondary",
    accent: "border-accent/30 bg-accent/5 text-accent",
    success: "border-[#10B981]/30 bg-[#10B981]/5 text-[#10B981]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${position} p-6 rounded-2xl border backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-30 max-w-[280px] group hover:scale-105 transition-transform duration-500 ${themes[variant]}`}
    >
      {title && <h5 className="font-display font-bold text-sm mb-2 text-light uppercase tracking-wider">{title}</h5>}
      <p className="text-xs leading-relaxed font-light text-slate-300 group-hover:text-light transition-colors">{text}</p>
      <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10 bg-gradient-to-br from-transparent via-${variant}/20 to-transparent`}></div>
    </motion.div>
  );
};

const Flywheel: React.FC = () => {
  return (
    <section className="py-40 bg-background relative overflow-hidden border-b border-border">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-secondary/5 blur-[160px] rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/5 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8"
          >
            <RefreshCw className="w-4 h-4 animate-spin-slow" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold">The Strategic Engine</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[6rem] lg:text-[7.5rem] font-display font-bold text-light tracking-tighter leading-none"
          >
            THE <span className="text-primary italic">FLYWHEEL</span>
          </motion.h2>
        </div>

        <div className="relative h-[800px] flex items-center justify-center">
          {/* Animated SVG Ring System */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-[850px] h-[850px] overflow-visible" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E3E438" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#4558A7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#53AACC" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <motion.circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="rgba(255,255,255,0.02)"
                strokeWidth="0.2"
                strokeDasharray="1 6"
                animate={{ rotate: 360 }}
                transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.circle
                cx="50" cy="50" r="32"
                fill="none"
                stroke="url(#ringGradient)"
                strokeWidth="12"
                strokeDasharray="14 3"
                filter="url(#glow)"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {[0, 60, 120, 180, 240, 300].map((rot) => (
                <motion.path
                  key={rot}
                  d="M50 16 A34 34 0 0 1 84 50"
                  fill="none"
                  stroke="#E3E438"
                  strokeWidth="0.75"
                  strokeOpacity="0.6"
                  transform={`rotate(${rot} 50 50)`}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 0.4 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </svg>
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-20 w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full animate-pulse-slow"></div>
            <div className="w-full h-full rounded-full bg-gradient-to-br from-surface to-background border-4 border-white/5 shadow-2xl flex flex-col items-center justify-center text-center p-12 relative overflow-hidden group">
               <Globe className="w-12 h-12 text-primary mb-6 opacity-80" />
               <span className="text-light font-display font-bold text-3xl md:text-5xl leading-tight uppercase tracking-tighter">
                MEMBER<br/><span className="text-primary italic">IMPACT</span>
               </span>
               <div className="mt-6 w-20 h-1 bg-primary/40 rounded-full"></div>
            </div>
          </motion.div>

          <div className="absolute inset-0 pointer-events-none">
             {[
               { label: "Scale Network", pos: "top-[8%] left-1/2 -translate-x-1/2", icon: Globe },
               { label: "Amplify Portfolio", pos: "right-[8%] top-1/2 -translate-y-1/2", icon: Zap },
               { label: "Compound Synergy", pos: "bottom-[8%] left-1/2 -translate-x-1/2", icon: Target },
               { label: "Demonstrate Value", pos: "left-[8%] top-1/2 -translate-y-1/2", icon: Sparkles }
             ].map((phase, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 + i * 0.1 }}
                 className={`absolute ${phase.pos} flex flex-col items-center gap-4`}
               >
                 <div className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center shadow-lg">
                    <phase.icon className="w-5 h-5 text-slate-400" />
                 </div>
                 <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.6em] text-slate-500 whitespace-nowrap bg-background/80 px-4 py-1 backdrop-blur-md rounded-full border border-white/5">
                   {phase.label}
                 </span>
               </motion.div>
             ))}
          </div>

          <Callout variant="accent" position="top-[0%] right-[5%]" title="Credentialing Scale" text="Immediate value proofs attract market leaders, rapidly accelerating collaboration." delay={0.6} />
          <Callout variant="secondary" position="top-1/2 -translate-y-1/2 right-[-2%]" title="Portfolio Density" text="Operational scale drives unit cost reductions, generating required liquidity." delay={0.8} />
          <Callout variant="primary" position="bottom-[0%] right-[5%]" title="Operational Halo" text="Integrated services yield profound efficiency, enabling zero-friction adoption." delay={1.0} />
          <Callout variant="secondary" position="top-[8%] left-[5%]" title="Cycle Acceleration" text="Each successful loop validates ownership, compounding the competitive moat." delay={1.2} />
          <Callout variant="success" title="Strategic Entry" position="bottom-[10%] left-[-2%]" text="We prioritize utilities that deliver high-velocity financial and clinical impact." delay={1.4} />
        </div>
      </div>
    </section>
  );
};

export default Flywheel;