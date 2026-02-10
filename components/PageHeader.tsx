
import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  pattern?: 'dots' | 'cross' | 'grid';
  align?: 'center' | 'left';
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description, pattern = 'dots', align = 'center' }) => {
  const patternClasses = {
    dots: 'pattern-dots',
    cross: 'pattern-cross',
    grid: 'pattern-grid-yellow'
  };

  return (
    <section className={`relative pt-40 pb-24 overflow-hidden bg-background ${patternClasses[pattern]}`}>
       <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"></div>
       
       <div className={`relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
        {subtitle && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary backdrop-blur-md"
          >
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase font-black italic">{subtitle}</span>
          </motion.div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[0.95] text-light uppercase"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-lg md:text-xl font-light max-w-2xl leading-snug text-slate-300 tracking-tight"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHeader;
