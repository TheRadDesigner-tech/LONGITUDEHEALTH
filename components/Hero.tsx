import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden pattern-dots">
      {/* Background Effect - Right Side Globe */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] z-0 pointer-events-none md:translate-x-[10%] flex items-center justify-center">
        <div className="w-full h-full relative flex items-center justify-center scale-110">
          <div className="absolute inset-0 bg-gradient-radial from-secondary/20 via-primary/5 to-transparent rounded-full blur-3xl scale-125"></div>
          
          {/* Animated Globe SVG */}
          <motion.svg 
            className="w-full h-full max-w-[800px] max-h-[800px] opacity-60" 
            viewBox="0 0 400 400" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
          >
            <defs>
              <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4558A7" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#53AACC" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#E3E438" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Rotating Group */}
            <g className="origin-center animate-spin-slow">
              {/* Outer Rings */}
              <circle cx="200" cy="200" r="190" stroke="#2A404B" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5" />
              <circle cx="200" cy="200" r="160" stroke="#2A404B" strokeWidth="1" fill="none" opacity="0.3" />

              {/* Longitudinal Lines (Ellipses) */}
              <ellipse cx="200" cy="200" rx="60" ry="160" stroke="url(#globeGradient)" strokeWidth="1.5" fill="none" opacity="0.8" />
              <ellipse cx="200" cy="200" rx="100" ry="160" stroke="url(#globeGradient)" strokeWidth="1.5" fill="none" opacity="0.6" />
              <ellipse cx="200" cy="200" rx="140" ry="160" stroke="url(#globeGradient)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <line x1="200" y1="40" x2="200" y2="360" stroke="#E3E438" strokeWidth="2" opacity="0.8" />

              {/* Latitudinal Lines */}
              <path d="M60 200 Q200 280 340 200" fill="none" stroke="#53AACC" strokeWidth="1" opacity="0.4" />
              <path d="M60 200 Q200 120 340 200" fill="none" stroke="#53AACC" strokeWidth="1" opacity="0.4" />
            </g>

            {/* Counter-Rotating Elements */}
             <g className="origin-center" style={{ animation: 'spin 60s linear infinite reverse' }}>
                <circle cx="200" cy="200" r="180" stroke="#E3E438" strokeWidth="1" strokeDasharray="10 20" fill="none" opacity="0.3" />
                {/* Orbital dots */}
                <circle cx="380" cy="200" r="4" fill="#E3E438" />
             </g>
          </motion.svg>

          <div className="absolute inset-0 bg-gradient-to-l from-background/0 via-background/20 to-background"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 h-full items-center">
        <div className="col-span-12 md:col-span-9 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start px-4 py-1.5 mb-8 rounded-full bg-primary text-background shadow-lg shadow-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-background animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Redefining Healthcare</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-7xl md:text-[8rem] lg:text-[10rem] font-bold text-light tracking-tighter leading-[0.85] mb-8"
          >
            LONGITUDE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-light to-accent">HEALTH</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 font-light leading-snug max-w-2xl mb-12 border-l-4 border-primary pl-6"
          >
            A transformation engine built by major U.S. health systems to solve healthcare's biggest challenges together.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-10 py-4 bg-primary text-background font-bold rounded-full hover:bg-white transition-colors text-sm tracking-widest uppercase shadow-xl shadow-primary/10">
              Our Initiatives
            </button>
            <button className="px-10 py-4 bg-transparent border border-primary/30 text-primary font-medium rounded-full hover:bg-primary/10 transition-all text-sm tracking-widest uppercase backdrop-blur-sm">
              Our Vision
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;