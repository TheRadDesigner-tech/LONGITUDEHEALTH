import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SpeechBubble: React.FC<{
  text: string;
  className?: string;
  tailPos?: 'left' | 'right' | 'bottom';
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  delay?: number;
}> = ({ text, className = "", tailPos = 'left', bgColor = "bg-surfaceHighlight/50", borderColor = "border-white/10", textColor = "text-slate-300", delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`relative p-5 rounded-2xl border ${bgColor} ${borderColor} ${className} backdrop-blur-md shadow-xl`}
    >
      <p className={`${textColor} text-sm font-medium leading-relaxed tracking-tight`}>{text}</p>
      
      {tailPos === 'left' && (
        <svg className="absolute top-1/2 -left-3 -translate-y-1/2 w-3 h-4" viewBox="0 0 12 16">
          <path d="M12 0 L0 8 L12 16 Z" className={`fill-current ${bgColor.replace('bg-', 'text-')}`} />
          <path d="M12 0 L0 8 L12 16" fill="none" className={`stroke-current ${borderColor.replace('border-', 'text-')}`} strokeWidth="1" />
        </svg>
      )}
      {tailPos === 'right' && (
        <svg className="absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-4" viewBox="0 0 12 16">
          <path d="M0 0 L12 8 L0 16 Z" className={`fill-current ${bgColor.replace('bg-', 'text-')}`} />
          <path d="M0 0 L12 8 L0 16" fill="none" className={`stroke-current ${borderColor.replace('border-', 'text-')}`} strokeWidth="1" />
        </svg>
      )}
      {tailPos === 'bottom' && (
        <svg className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-3" viewBox="0 0 24 12">
          <path d="M0 0 L12 12 L24 0 Z" className={`fill-current ${bgColor.replace('bg-', 'text-')}`} />
          <path d="M0 0 L12 12 L24 0" fill="none" className={`stroke-current ${borderColor.replace('border-', 'text-')}`} strokeWidth="1" />
        </svg>
      )}
    </motion.div>
  );
};

const Flywheel: React.FC = () => {
  return (
    <section className="py-32 pattern-plus-ocean relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 pattern-plus-ocean opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-light text-accent lowercase tracking-tighter leading-[0.9] max-w-5xl mx-auto"
          >
            Building out the portfolio: <br/>
            <span className="text-light font-normal">Momentum begins with quick wins and compounds as the flywheel turns</span>
          </motion.h2>
        </div>

        <div className="relative min-h-[800px] flex items-center justify-center">
          
          <div className="absolute left-0 lg:left-12 top-0 z-20 w-full max-w-[320px] space-y-12">
            <SpeechBubble 
              text="Longitude Rx (Live) validates the model, proving that systems can own the value chain."
              bgColor="bg-primary/10"
              borderColor="border-primary/30"
              textColor="text-primary"
              tailPos="right"
              delay={0.2}
            />
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-3xl border-2 border-primary/40 bg-primary/5 backdrop-blur-xl relative shadow-2xl"
            >
              <h4 className="text-primary font-black text-xs mb-4 uppercase tracking-[0.1em]">
                Quick wins jump-start the cycle. <br/>
                <span className="font-light text-slate-400 normal-case italic">In the near-term, we prioritize utilities that are:</span>
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <span className="font-black text-primary uppercase text-[10px] tracking-tighter">Fast to activate</span> with immediate clinical impact (Rx)
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <span className="font-black text-primary uppercase text-[10px] tracking-tighter">Scalable Efficiency</span> through shared services (FX)
                  </p>
                </li>
              </ul>
              <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-4" viewBox="0 0 32 16">
                <path d="M0 0 L16 16 L32 0 Z" fill="rgba(227, 228, 56, 0.05)" />
                <path d="M0 0 L16 16 L32 0" fill="none" stroke="rgba(227, 228, 56, 0.4)" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>

          <div className="absolute right-0 lg:right-12 top-10 z-20 w-full max-w-[320px] space-y-10">
            <SpeechBubble 
              text="Expand Network: Connecting Payors & Providers via integrated data."
              tailPos="left"
              delay={0.6}
            />
            <SpeechBubble 
              text="Amplify Portfolio: Specialty-as-a-Service scales clinical access."
              tailPos="left"
              delay={0.8}
            />
            <SpeechBubble 
              text="Compound Synergies: Enterprise Services Hub (FX) drives multi-system efficiency."
              tailPos="left"
              delay={1.0}
            />
          </div>

          <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-60px] border-[1.5px] border-dashed border-secondary/20 rounded-full flex items-center justify-center pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2">
                 <svg width="24" height="24" viewBox="0 0 24 24" className="text-secondary opacity-40">
                   <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                 </svg>
              </div>
            </motion.div>

            <svg className="w-full h-full transform -rotate-45" viewBox="0 0 400 400">
              <g className="fill-surface/80 stroke-white/5 stroke-[2]">
                {/* Segment 1: Expand Network -> Payor-Provider */}
                <path 
                  d="M200,20 A180,180 0 0,1 380,200 L320,200 A120,120 0 0,0 200,80 Z" 
                  className="hover:fill-primary/20 transition-colors duration-500 cursor-pointer"
                />
                {/* Segment 2: Amplify Portfolio -> Specialty-as-a-Service */}
                <path 
                  d="M380,200 A180,180 0 0,1 200,380 L200,320 A120,120 0 0,0 320,200 Z" 
                  className="hover:fill-accent/20 transition-colors duration-500 cursor-pointer"
                />
                {/* Segment 3: Compound Synergies -> Enterprise FX */}
                <path 
                  d="M200,380 A180,180 0 0,1 20,200 L80,200 A120,120 0 0,0 200,320 Z" 
                  className="hover:fill-secondary/20 transition-colors duration-500 cursor-pointer"
                />
                {/* Segment 4: Demonstrate Value -> Pharmacy Rx */}
                <path 
                  d="M20,200 A180,180 0 0,1 200,20 L200,80 A120,120 0 0,0 80,200 Z" 
                  className="hover:fill-primary/40 transition-colors duration-500 cursor-pointer"
                />
              </g>
              
              <g fill="#4558A7" opacity="0.6">
                <polygon points="200,20 215,35 215,5" transform="rotate(45, 200, 200)" />
                <polygon points="380,200 365,185 395,185" transform="rotate(45, 200, 200)" />
                <polygon points="200,380 185,365 185,395" transform="rotate(45, 200, 200)" />
                <polygon points="20,200 35,215 35,185" transform="rotate(45, 200, 200)" />
              </g>
            </svg>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="absolute top-[14%] text-slate-400 font-display font-bold text-[10px] md:text-sm uppercase tracking-widest text-center">Payor-Provider <br/> Network</div>
              <div className="absolute right-[8%] rotate-90 text-slate-400 font-display font-bold text-[10px] md:text-sm uppercase tracking-widest text-center">Specialty <br/> Care</div>
              <div className="absolute bottom-[14%] text-slate-400 font-display font-bold text-[10px] md:text-sm uppercase tracking-widest text-center">Enterprise <br/> FX Hub</div>
              <div className="absolute left-[8%] -rotate-90 text-slate-400 font-display font-bold text-[10px] md:text-sm uppercase tracking-widest text-center">Pharmacy <br/> (Rx)</div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-surfaceHighlight to-background border-4 border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] flex items-center justify-center text-center p-8 relative z-10 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <h4 className="text-light text-2xl md:text-3xl font-display font-black leading-none uppercase tracking-tighter relative z-10">
                  Member <br/> <span className="text-primary italic">Impact</span>
                </h4>
              </motion.div>
            </div>

            <div className="absolute bottom-0 -left-20 md:-left-32 z-30">
               <motion.div 
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                className="relative"
               >
                 <div className="relative flex items-center">
                    <div className="bg-primary h-16 md:h-20 px-12 md:px-20 flex items-center shadow-[20px_20px_60px_rgba(0,0,0,0.4)] clip-ribbon">
                       <span className="text-background font-display font-black text-lg md:text-2xl uppercase tracking-[0.2em] whitespace-nowrap">Pursue Quick Wins</span>
                    </div>
                    <svg className="h-16 md:h-20 w-12 md:w-16 -ml-1 text-primary drop-shadow-xl" viewBox="0 0 40 80">
                       <path d="M0 0 L40 40 L0 80 Z" fill="currentColor" />
                    </svg>
                    <div className="absolute -left-4 bottom-[-16px] w-4 h-4 bg-primary/50 skew-x-[45deg] -z-10" />
                 </div>
               </motion.div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .clip-ribbon {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 8% 50%);
        }
      `}</style>
    </section>
  );
};

export default Flywheel;