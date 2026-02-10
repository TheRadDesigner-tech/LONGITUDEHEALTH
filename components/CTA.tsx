import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-surface relative overflow-hidden border-t border-white/5">
      {/* Cinematic subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 pattern-dots opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[9px] font-mono tracking-[0.5em] uppercase font-black text-primary mb-6 block italic">Connect With Us</span>
          <h2 className="text-light font-display font-bold text-3xl md:text-5xl mb-6 leading-tight tracking-tighter uppercase">
            READY TO RESHAPE <br/>
            <span className="text-primary italic">THE FUTURE?</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Join the network of health systems building the next generation of healthcare utility.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/connect">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-primary text-background font-black rounded-full transition-all text-[10px] tracking-[0.3em] uppercase shadow-xl shadow-primary/10 flex items-center gap-3"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;