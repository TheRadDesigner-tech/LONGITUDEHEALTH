
import React, { useState } from 'react';
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  
  const borderColor = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0.05)", "rgba(227, 228, 56, 0.1)"]);

  const navItems = [
    { label: 'About Us', path: '/about' },
    { label: 'Leadership', path: '/leadership' },
    { label: 'Members', path: '/members' },
    { label: 'Case Studies', path: '/case-studies' }
  ];

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 md:px-12 pointer-events-none">
      <motion.div 
        style={{ 
          backgroundColor: '#000000', 
          borderColor: borderColor 
        }}
        className="pointer-events-auto w-full max-w-[1200px] border border-white/5 rounded-full px-10 h-16 flex items-center justify-between transition-all duration-500 shadow-2xl relative"
      >
        <Link to="/" className="flex items-center group h-full py-4">
          <img 
            src="https://i.ibb.co/F4pgGgXt/logo-white.jpg" 
            alt="Longitude Health" 
            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              to={item.path}
              className={`px-3 py-2 text-[9px] font-display font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] ${location.pathname === item.path ? 'text-primary' : 'text-white/80'}`}
            >
              {item.label}
            </Link>
          ))}

          <div 
            className="relative" 
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button 
              className={`px-3 py-2 text-[9px] font-display font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] flex items-center gap-1 ${location.pathname.includes('/solutions') ? 'text-primary' : 'text-white/80'}`}
            >
              Solutions <ChevronDown className="w-2 h-2" />
            </button>

             <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 w-48 bg-black border border-white/10 rounded-xl shadow-xl overflow-hidden py-2 mt-2"
                >
                  <Link to="/solutions" className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors font-bold tracking-tight uppercase">Overview</Link>
                  <div className="h-[1px] bg-white/5 mx-4 my-1"></div>
                  <Link to="/solutions/rx" className="block px-4 py-2 text-[10px] text-slate-400 hover:text-primary hover:bg-white/5 transition-colors font-bold tracking-wide uppercase">Longitude Rx</Link>
                  <Link to="/solutions/fx" className="block px-4 py-2 text-[10px] text-slate-400 hover:text-secondary hover:bg-white/5 transition-colors font-bold tracking-wide uppercase">Longitude FX</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/newsroom"
            className={`px-3 py-2 text-[9px] font-display font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] ${location.pathname.includes('/newsroom') ? 'text-primary' : 'text-white/80'}`}
          >
            Newsroom
          </Link>

          <Link to="/connect" className="ml-4">
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-2.5 text-[9px] font-display font-black bg-primary text-background rounded-full transition-all uppercase tracking-widest shadow-lg shadow-primary/10"
            >
              Connect
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
