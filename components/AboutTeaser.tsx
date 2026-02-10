import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutTeaser: React.FC = () => {
  return (
    <section className="py-40 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full pattern-dots opacity-[0.03] pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-light mb-10 tracking-tighter uppercase italic">
            Revolutionizing healthcare through <span className="text-primary">radical collaboration.</span>
          </h2>
          <p className="text-xl text-slate-100 font-light leading-relaxed mb-12">
            Longitude Health is a first-of-its-kind innovation engine. We are governed by the systems we serve, ensuring that every dollar invested and every line of code written is dedicated to clinical and operational excellence.
          </p>
          <Link to="/about">
            <button className="px-12 py-5 bg-background border border-white/10 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-background transition-all hover:scale-105">
              Learn More About Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeaser;