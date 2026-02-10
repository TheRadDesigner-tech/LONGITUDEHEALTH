import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const driftY = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-start pt-24 pb-16 overflow-hidden pattern-plus">
      {/* Cinematic subtle glow background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full pointer-events-none -z-10" />
      
      {/* Technical Globe */}
      <motion.div 
        style={{ y: driftY, opacity }}
        className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] z-0 pointer-events-none perspective-[2000px]"
      >
        <div className="relative w-full h-full flex items-center justify-center transform rotate-x-[65deg] rotate-y-[-25deg]">
          <div className="absolute inset-0 border-[1px] border-primary/30 rounded-full shadow-[0_0_120px_rgba(227,228,56,0.1)]"></div>
          
          <motion.div 
            animate={{ rotateZ: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {[0.1, 0.3, 0.5, 0.7, 0.9].map((scale) => (
              <div key={`long-${scale}`} className="absolute inset-0 border-[0.5px] border-primary/40 rounded-full" style={{ transform: `scaleX(${scale})` }}></div>
            ))}
            {[0.1, 0.3, 0.5, 0.7, 0.9].map((scale) => (
              <div key={`lat-${scale}`} className="absolute inset-0 border-[0.5px] border-primary/40 rounded-full" style={{ transform: `scaleY(${scale})` }}></div>
            ))}
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2/3 h-2/3 bg-primary/20 blur-[150px] rounded-full"
          ></motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-primary"></div>
              <span className="text-[9px] font-mono tracking-[0.5em] uppercase font-black text-primary">Latitude for Healthcare</span>
            </div>
            
            <h1 className="font-display font-black tracking-tight leading-[0.9] mb-8">
              <span className="block text-light text-3xl md:text-5xl lg:text-6xl uppercase">
                REVOLUTIONIZING
              </span>
              <span className="block text-primary italic text-3xl md:text-5xl lg:text-6xl uppercase -mt-1 md:-mt-2">
                HEALTH CARE
              </span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-start gap-6 mb-12"
          >
            <div className="w-[1px] h-14 bg-primary/40 shrink-0 mt-2"></div>
            <p className="text-sm md:text-base text-slate-300 font-light leading-snug max-w-lg tracking-tight">
              We build health system-backed solutions to solve health care's most complex challenges.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            <Link to="/solutions">
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary text-background font-black rounded-full transition-all text-[9px] tracking-[0.3em] uppercase shadow-xl shadow-primary/10"
              >
                Explore Portfolio
              </motion.button>
            </Link>
            
            <Link to="/about">
              <motion.button 
                whileHover={{ scale: 1.02, borderColor: '#E3E438', color: '#E3E438' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-white/20 text-white font-black rounded-full transition-all text-[9px] tracking-[0.3em] uppercase"
              >
                Our Origin Story
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;