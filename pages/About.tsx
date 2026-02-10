import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Compass, 
  Clock, 
  Navigation, 
  Target,
  ArrowDown,
  Activity,
  Zap,
  Shield,
  Circle
} from 'lucide-react';

const StrategicVisionCard: React.FC<{ 
  number: string; 
  title: string; 
  desc: string; 
  delay: number;
  icon: React.ReactNode;
}> = ({ number, title, desc, delay, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative group bg-surfaceHighlight/10 border border-white/5 rounded-2xl p-6 md:p-8 overflow-hidden h-full flex flex-col hover:border-primary/40 hover:bg-surfaceHighlight/20 transition-all duration-700 shadow-xl"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pattern-plus-ocean pointer-events-none" />
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-500">
          {icon}
        </div>
        <span className="text-3xl font-display font-black text-white/5 group-hover:text-primary/10 transition-colors duration-700 leading-none">
          {number}
        </span>
      </div>
      
      <h3 className="text-lg md:text-xl font-display font-bold text-light uppercase tracking-tighter mb-3 leading-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-400 text-[12px] font-light leading-relaxed tracking-tight group-hover:text-slate-200 transition-colors">
        {desc}
      </p>
    </div>
    
    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent via-primary/5 to-primary/20 translate-x-8 translate-y-8 rotate-45 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
  </motion.div>
);

const TimelineMarker: React.FC<{ scrollProgress: any; rotate?: any }> = ({ scrollProgress, rotate }) => (
  <motion.div 
    style={{ rotate: rotate || 0 }}
    className="absolute left-1/2 -translate-x-1/2 w-24 h-24 hidden lg:flex items-center justify-center z-20"
  >
    <div className="relative">
      <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(227,228,56,0.8)] z-10 relative" />
      <motion.div 
        animate={{ scale: [1, 2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -m-2 w-6 h-6 rounded-full border border-primary/40" 
      />
      <div className="absolute inset-0 -m-6 w-14 h-14 border border-white/10 rounded-full" />
    </div>
  </motion.div>
);

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotateCompass = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pattern-plus-ocean">
        <div className="absolute inset-0 pattern-plus-ocean opacity-[0.03] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary mb-6">
              <span className="text-[8px] font-mono tracking-[0.4em] uppercase font-black italic">Innovation & Purpose</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-light uppercase tracking-tighter leading-[0.9] mb-6">
              OUR <span className="text-primary italic">ORIGIN</span> <br/> STORY
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-light max-w-lg mx-auto leading-relaxed italic opacity-80">
              A story of breakthrough, navigation, and the courage to solve the unsolvable.
            </p>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-10 flex justify-center"
          >
            <ArrowDown className="text-primary w-5 h-5 opacity-30" />
          </motion.div>
        </div>
      </section>
      
      {/* The Story - Timeline Style */}
      <section className="py-20 pattern-plus-ocean relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Central Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0 hidden lg:block" />

          {/* Episode 1: 1714 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 relative">
            <TimelineMarker scrollProgress={scrollYProgress} rotate={rotateCompass} />

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-16 text-right"
            >
              <span className="text-5xl md:text-7xl font-display font-black text-primary/5 block mb-2 leading-none">1714</span>
              <h2 className="text-xl md:text-3xl font-display font-black text-light uppercase tracking-tighter leading-tight mb-4">
                Innovation in <br/><span className="text-primary italic">The Unknown</span>
              </h2>
              <p className="text-[12px] md:text-sm text-slate-400 font-light leading-relaxed max-w-sm ml-auto">
                Our story starts in the 1700s, when the British Parliament launched the Longitude Prize — a competition to spark innovation and new thinking to solve the greatest challenge faced by navigation at sea: how to measure longitude.
              </p>
            </motion.div>
            <div className="hidden lg:block"></div>
          </div>

          {/* Episode 2: The Breakthrough */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 relative">
            <div className="hidden lg:block"></div>
            <TimelineMarker scrollProgress={scrollYProgress} />
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-16"
            >
              <span className="text-5xl md:text-7xl font-display font-black text-secondary/5 block mb-2 leading-none">SOLVED</span>
              <h2 className="text-xl md:text-3xl font-display font-black text-light uppercase tracking-tighter leading-tight mb-4">
                Breakthrough <br/><span className="text-secondary italic">Solutions</span>
              </h2>
              <p className="text-[12px] md:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
                John Harrison, a carpenter and clockmaker, found a new way forward - the marine chronometer, a breakthrough innovation that changed the course of navigation and opened the world to safe exploration.
              </p>
            </motion.div>
          </div>

          {/* Episode 3: The Visionary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 relative">
            <TimelineMarker scrollProgress={scrollYProgress} />
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-16 text-right"
            >
              <span className="text-5xl md:text-7xl font-display font-black text-accent/5 block mb-2 leading-none">LEGACY</span>
              <h2 className="text-xl md:text-3xl font-display font-black text-light uppercase tracking-tighter leading-tight mb-4">
                Healthcare’s <br/><span className="text-accent italic">Future</span>
              </h2>
              <p className="text-[12px] md:text-sm text-slate-400 font-light leading-relaxed max-w-sm ml-auto">
                Our founder Paul Mango loved this story and believed it mirrored the challenges of healthcare today — full of complexity, barriers and in need of fresh solutions.
              </p>
            </motion.div>
            <div className="hidden lg:block"></div>
          </div>

        </div>
      </section>

      {/* The Definition Banner */}
      <section className="py-16 bg-surface/20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pattern-plus-ocean opacity-[0.02]" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold text-light uppercase tracking-tighter leading-[1.1] mb-6">
              That is why we chose the name <br/>
              <span className="text-primary italic">Longitude Health:</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed opacity-80">
              We exist to develop new ideas, new innovations and new solutions to address some of the toughest challenges of healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section - High Tech Grid */}
      <section className="py-20 pattern-plus-ocean relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-px bg-primary/40"></div>
                <span className="text-[8px] font-mono tracking-[0.5em] uppercase font-black text-primary italic">Operational Intent</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-light uppercase tracking-tighter leading-[0.85]">
                OUR <span className="text-primary italic">VISION</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StrategicVisionCard 
              number="01"
              title="Transforming business models, together"
              desc="We collaboratively design and implement innovative solutions that tackle healthcare’s most pressing challenges."
              icon={<Zap className="w-5 h-5" />}
              delay={0.1}
            />
            <StrategicVisionCard 
              number="02"
              title="Improving health system performance, collectively"
              desc="We enhance performance across cost, quality, access, and patient experience through shared insight."
              icon={<Activity className="w-5 h-5" />}
              delay={0.2}
            />
            <StrategicVisionCard 
              number="03"
              title="Empowering healthier futures, collaboratively"
              desc="We build member and community value by scaling new capabilities and reinvesting in better care, together."
              icon={<Shield className="w-5 h-5" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
};

export default About;