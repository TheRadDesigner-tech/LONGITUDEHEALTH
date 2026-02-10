
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-light py-20 border-t border-white/5 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-2"
        >
           <Link to="/" className="flex items-center group mb-8 h-8 w-fit">
              <img 
                src="https://i.ibb.co/F4pgGgXt/logo-white.jpg" 
                alt="Longitude Health" 
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
          </Link>
          <p className="text-slate-500 max-w-sm mb-8 font-light text-base leading-relaxed">
            Connecting systems, technology, and payers to deliver better care more efficiently through shared innovation and system-level scale.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="font-mono text-[9px] text-primary uppercase tracking-[0.3em] mb-8 font-black italic">Explore</h4>
          <ul className="space-y-4 font-light text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/leadership" className="hover:text-primary transition-colors">Leadership</Link></li>
            <li><Link to="/members" className="hover:text-primary transition-colors">Members</Link></li>
            <li><Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
             <li><Link to="/in-memory-paul-mango" className="hover:text-primary transition-colors text-accent/80">In Memory</Link></li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-mono text-[9px] text-primary uppercase tracking-[0.3em] mb-8 font-black italic">Contact</h4>
          <ul className="space-y-4 font-light text-slate-400 text-sm">
            <li><Link to="/connect" className="hover:text-primary transition-colors">Connect</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors text-slate-600">© 2026 Longitude</a></li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
