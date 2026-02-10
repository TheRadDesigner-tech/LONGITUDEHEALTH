import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Baylor Scott & White Health", logo: "https://i.ibb.co/gZj4HJNY/logo-baylorscottwhite.png" },
  { name: "Providence", logo: "https://i.ibb.co/k2f2rjDq/logo-providence.png" },
  { name: "Michigan Medicine", logo: "https://i.ibb.co/Fq8pjbvv/Michigan-Medicine-Logo.png" },
  { name: "Novant Health", logo: "https://i.ibb.co/Q3dnYtSd/logo-novant.png" },
  { name: "Memorial Hermann", logo: "https://i.ibb.co/kgSNr2Bp/d5d6645ef152d97a19af2351afcb.png" }
];

const Marquee: React.FC = () => {
  return (
    <section className="relative w-full py-10 overflow-hidden border-y border-white/[0.05] bg-black/20 backdrop-blur-md">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl pointer-events-none" />
      
      <div className="relative w-full overflow-hidden py-4">
        {/* Cinematic Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-[300px] bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-[300px] bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />
        
        {/* The scrolling container */}
        <div className="flex w-fit items-center whitespace-nowrap">
          <motion.div 
            className="flex items-center gap-16 md:gap-32 lg:gap-48 px-12 md:px-24 shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`p1-${index}`} 
                className="flex-shrink-0 flex items-center h-10 md:h-12 lg:h-14 w-auto transition-all duration-700 cursor-pointer hover:scale-105"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full w-auto object-contain" 
                />
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-16 md:gap-32 lg:gap-48 px-12 md:px-24 shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`p2-${index}`} 
                className="flex-shrink-0 flex items-center h-10 md:h-12 lg:h-14 w-auto transition-all duration-700 cursor-pointer hover:scale-105"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full w-auto object-contain" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Moving Highlight Line */}
      <motion.div 
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-40"
      />
    </section>
  );
};

export default Marquee;