
import React from 'react';
import { ArrowUpRight, Target, Rocket, Activity, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const GoalItem: React.FC<{ 
  number: string; 
  title: string; 
  desc: string; 
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'accent' 
}> = ({ number, title, desc, icon, color }) => {
  const colorMap = {
    primary: 'group-hover:text-primary',
    secondary: 'group-hover:text-secondary',
    accent: 'group-hover:text-accent',
  };

  const bgIconMap = {
    primary: 'bg-primary/5 group-hover:bg-primary/20',
    secondary: 'bg-secondary/5 group-hover:bg-secondary/20',
    accent: 'bg-accent/5 group-hover:bg-accent/20',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative min-h-[450px] w-full bg-white overflow-hidden border-r border-slate-200 transition-all duration-700 flex flex-col"
    >
      <div className="p-12 md:p-16 flex flex-col justify-between flex-grow z-10">
        <div className="flex justify-between items-start mb-16">
           <span className={`text-9xl font-display font-bold text-slate-100/50 ${colorMap[color]} transition-colors duration-1000 leading-none tracking-tighter`}>
            {number}
          </span>
          <div className={`w-16 h-16 rounded-[2rem] flex items-center justify-center transition-all duration-700 ${bgIconMap[color]} shadow-lg group-hover:rotate-12`}>
            <div className={`${colorMap[color]} text-slate-400 transition-colors duration-500`}>
              {icon}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-4xl text-background font-display font-bold mb-6 group-hover:translate-x-2 transition-transform duration-700 tracking-tighter uppercase leading-tight">
            {title}
          </h3>
          <p className="text-xl text-slate-500 font-light leading-relaxed group-hover:text-slate-900 transition-colors duration-700">
            {desc}
          </p>
        </div>
      </div>
      
      <div className={`absolute bottom-0 left-0 w-full h-2 bg-${color === 'primary' ? 'primary' : color === 'secondary' ? 'secondary' : 'accent'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}></div>
    </motion.div>
  );
};

const Vision: React.FC = () => {
  return (
    <section className="py-48 bg-light text-background clip-diagonal relative z-10 -mb-20 pb-80">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-start">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[8rem] md:text-[14rem] font-display font-bold tracking-tighter uppercase leading-[0.75] text-background mb-12">
                OUR<br/><span className="text-secondary italic">VISION</span>
              </h2>
              <div className="flex items-center gap-6">
                <div className="h-px w-24 bg-secondary/30"></div>
                <span className="font-mono text-xs uppercase tracking-[0.8em] text-slate-400 font-black">Building the Utility</span>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-6 lg:pl-16 border-l border-slate-200">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <p className="text-3xl md:text-5xl text-background font-display font-bold leading-[1.1] tracking-tighter">
                Longitude Health is revolutionizing the way health systems operate by delivering impactful change for patients and their communities.
              </p>
              <p className="text-2xl text-slate-500 font-light leading-relaxed italic border-l-4 border-primary pl-10">
                We are committed to partnership, ingenuity, investment and bold action – for the good of all health systems, their patients and communities.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-0 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.15)] border border-slate-200 rounded-3xl overflow-hidden">
          <GoalItem 
            number="01" 
            title="Transform business models" 
            desc="Identify, develop and implement innovative solutions to health systems’ most complex challenges and opportunities."
            icon={<Rocket className="w-8 h-8" />}
            color="primary"
          />
          <GoalItem 
            number="02" 
            title="Improve health performance" 
            desc="Successfully confronting these challenges enhances performance across cost, quality, access, and experience."
            icon={<Activity className="w-8 h-8" />}
            color="secondary"
          />
          <GoalItem 
            number="03" 
            title="Empower healthier futures" 
            desc="Retain more equity value to achieve sustainable change and invest back into patients and communities."
            icon={<Target className="w-8 h-8" />}
            color="accent"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
