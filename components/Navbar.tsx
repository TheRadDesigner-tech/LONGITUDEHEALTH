
import React, { useState, useEffect } from 'react';
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  
  const borderColor = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0.05)", "rgba(227, 228, 56, 0.2)"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
      <motion.div 
        style={{ 
          backgroundColor: isScrolled ? 'rgba(22, 37, 44, 0.95)' : 'rgba(22, 37, 44, 0.7)', 
          borderColor: borderColor 
        }}
        className="pointer-events-auto w-full max-w-[1440px] backdrop-blur-md border rounded-full px-6 h-20 flex items-center justify-between transition-all duration-300 shadow-2xl relative"
      >
        <Link to="/" className="flex flex-col leading-none cursor-pointer group">
          <div className="flex items-start">
            <span className="font-display font-bold text-2xl tracking-wide text-light group-hover:text-primary transition-colors">LONGITUDE</span>
            <div className="ml-1 w-2 h-2 border-[2.5px] border-light group-hover:border-primary transition-colors rounded-full mt-1"></div>
          </div>
          <span className="font-display font-bold text-[10px] tracking-[0.3em] text-light group-hover:text-primary transition-colors self-end mr-1">HEALTH</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          <Link 
            to="/about"
            className={`px-4 py-2 text-xs font-mono font-medium hover:text-primary transition-colors uppercase tracking-wider relative group ${location.pathname.includes('/about') ? 'text-primary' : 'text-slate-300'}`}
          >
            About Us
            <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-primary transition-transform origin-left ${location.pathname.includes('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <Link 
            to="/leadership"
            className={`px-4 py-2 text-xs font-mono font-medium hover:text-primary transition-colors uppercase tracking-wider relative group ${location.pathname.includes('/leadership') ? 'text-primary' : 'text-slate-300'}`}
          >
            Leadership
            <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-primary transition-transform origin-left ${location.pathname.includes('/leadership') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <Link 
            to="/members"
            className={`px-4 py-2 text-xs font-mono font-medium hover:text-primary transition-colors uppercase tracking-wider relative group ${location.pathname.includes('/members') ? 'text-primary' : 'text-slate-300'}`}
          >
            Members
            <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-primary transition-transform origin-left ${location.pathname.includes('/members') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <div 
            className="relative" 
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button 
              className={`px-4 py-2 text-xs font-mono font-medium hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1 ${location.pathname.includes('/solutions') ? 'text-primary' : 'text-slate-300'}`}
            >
              Solutions <ChevronDown className="w-3 h-3" />
            </button>

             <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 bg-surface border border-border rounded-xl shadow-xl overflow-hidden py-2 mt-2"
                >
                  <Link to="/solutions" className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors font-bold">Overview</Link>
                  <div className="h-[1px] bg-white/5 my-1"></div>
                  <Link to="/solutions/rx" className="block px-4 py-2 text-xs text-slate-400 hover:text-primary hover:bg-white/5 transition-colors font-bold">Longitude Rx</Link>
                  <Link to="/solutions/fx" className="block px-4 py-2 text-xs text-slate-400 hover:text-secondary hover:bg-white/5 transition-colors font-bold">Longitude FX</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/case-studies"
            className={`px-4 py-2 text-xs font-mono font-medium hover:text-primary transition-colors uppercase tracking-wider relative group ${location.pathname.includes('/case-studies') ? 'text-primary' : 'text-slate-300'}`}
          >
            Case Studies
            <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-primary transition-transform origin-left ${location.pathname.includes('/case-studies') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <Link 
            to="/newsroom"
            className={`px-4 py-2 text-xs font-mono font-medium hover:text-primary transition-colors uppercase tracking-wider relative group ${location.pathname.includes('/newsroom') ? 'text-primary' : 'text-slate-300'}`}
          >
            Newsroom
            <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-primary transition-transform origin-left ${location.pathname.includes('/newsroom') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <Link to="/connect">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-3 text-xs font-bold bg-primary text-background rounded-full hover:bg-white transition-colors uppercase tracking-wide"
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
