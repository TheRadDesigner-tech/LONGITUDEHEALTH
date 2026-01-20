import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden pattern-grid-yellow">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-background font-display font-bold text-5xl md:text-7xl mb-8 leading-tight">
          READY TO RESHAPE<br/>THE FUTURE?
        </h2>
        <p className="text-background/80 text-xl font-bold mb-12 max-w-2xl mx-auto">
          Join the network of health systems building the next generation of care delivery.
        </p>
        <button className="bg-background text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-surfaceHighlight hover:scale-105 transition-all shadow-2xl tracking-widest uppercase">
          Get Connected
        </button>
      </motion.div>
    </section>
  );
};

export default CTA;