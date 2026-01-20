import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description: string;
  pattern?: 'dots' | 'cross' | 'grid';
  align?: 'center' | 'left';
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description, pattern = 'dots', align = 'center' }) => {
  return (
    <section className={`relative pt-40 pb-20 overflow-hidden ${pattern === 'dots' ? 'pattern-dots' : pattern === 'cross' ? 'pattern-cross' : 'pattern-grid-yellow'}`}>
       {pattern === 'grid' && <div className="absolute inset-0 bg-primary/90 mix-blend-multiply pointer-events-none"></div>}
       <div className={`relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
        {subtitle && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-block px-4 py-1 mb-6 rounded-full border ${pattern === 'grid' ? 'border-black/20 bg-black/5 text-black' : 'border-primary/20 bg-primary/10 text-primary'} backdrop-blur-sm`}
          >
            <span className="text-xs font-mono tracking-widest uppercase font-bold">{subtitle}</span>
          </motion.div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight ${pattern === 'grid' ? 'text-background' : 'text-light'}`}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-lg md:text-xl font-light max-w-3xl leading-relaxed ${pattern === 'grid' ? 'text-surface' : 'text-slate-300'}`}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHeader;