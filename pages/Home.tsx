import React from 'react';
import Hero from '../components/Hero';
import InvestmentRoadmap from '../components/InvestmentRoadmap';
import NewsTeaser from '../components/NewsTeaser';
import CTA from '../components/CTA';
import Marquee from '../components/Marquee';
import CollaborativeScale from '../components/CollaborativeScale';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemberCard: React.FC<{
  name: string;
  ceo: string;
  quote: string;
  logo: string;
  colorClass: string;
  bgClass: string;
  delay: number;
}> = ({ name, ceo, quote, logo, colorClass, bgClass, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="group bg-surface/60 backdrop-blur-3xl border border-border rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-10 hover:border-primary/40 transition-all duration-700 relative overflow-hidden shadow-lg"
  >
    <div className={`absolute top-0 left-0 w-1 h-full ${bgClass} opacity-30 group-hover:opacity-100 transition-all duration-700`} />

    <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-[140px] aspect-square rounded-xl flex items-center justify-center bg-light p-4 shadow-md transition-transform duration-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        <img
          src={logo}
          alt={`${name} official logo`}
          className="w-full h-full object-contain relative z-10 transition-all duration-700"
        />
      </motion.div>

      <div className="mt-4">
        <h3 className="text-lg font-display font-bold text-light mb-1 leading-[1] tracking-tighter uppercase">
          {name}
        </h3>
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <div className="w-4 h-[2px] bg-primary rounded-full"></div>
          <p className="text-slate-500 font-mono text-[8px] uppercase tracking-[0.2em] font-black italic">
            {ceo}
          </p>
        </div>
      </div>
    </div>

    <div className="lg:w-3/4 flex flex-col justify-center relative">
      <Quote className={`absolute -top-4 -left-4 w-16 h-16 ${colorClass} opacity-5 -z-10 group-hover:opacity-10 transition-opacity duration-700`} />
      <p className="text-base md:text-lg text-slate-200 font-light leading-snug italic relative z-10 tracking-tight">
        "{quote}"
      </p>

      <motion.div
        className={`mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-${colorClass.replace('text-', '')} to-transparent opacity-60`}
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.4, duration: 1.2, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const Home: React.FC = () => {
  const partnersList = [
    {
      name: 'Baylor Scott & White Health',
      ceo: 'Pete McCanna, CEO',
      logo: 'https://i.ibb.co/gZj4HJNY/logo-baylorscottwhite.png',
      quote: 'Longitude Health Solutions will scale the next generation of capabilities faster and more effectively than if individual health systems attempted to do so themselves.',
      colorClass: 'text-primary',
      bgClass: 'bg-primary/5',
    },
    {
      name: 'Providence',
      ceo: 'Erik Wexler, CEO',
      logo: 'https://i.ibb.co/k2f2rjDq/logo-providence.png',
      quote: 'By implementing solutions that benefit multiple health systems, we can drive down costs and ensure the sustainability of health care delivery.',
      colorClass: 'text-secondary',
      bgClass: 'bg-secondary/10',
    },
    {
      name: 'Novant Health',
      ceo: 'Carl S. Armato, President & CEO',
      logo: 'https://i.ibb.co/Q3dnYtSd/logo-novant.png',
      quote: 'As a health care transformation leader, we recognize that the best ideas and our most successful initiatives are often a product of collaboration.',
      colorClass: 'text-primary',
      bgClass: 'bg-primary/5',
    },
    {
      name: 'Memorial Hermann',
      ceo: 'David L. Callender, MD, President & CEO',
      logo: 'https://i.ibb.co/kgSNr2Bp/d5d6645ef152d97a19af2351afcb.png',
      quote: 'Health care requires new approaches. Through this collaborative approach, we aim to take the lead in designing solutions that drive operational transformation.',
      colorClass: 'text-secondary',
      bgClass: 'bg-secondary/10',
    },
    {
      name: 'Michigan Medicine',
      ceo: 'Marschall S. Runge, MD, PhD, CEO',
      logo: 'https://i.ibb.co/Fq8pjbvv/Michigan-Medicine-Logo.png',
      quote: 'Collaborative innovation across leading health systems creates an unparalleled opportunity to reimagine health care—one that is more equitable and impactful.',
      colorClass: 'text-accent',
      bgClass: 'bg-accent/10',
    }
  ];

  return (
    <>
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Marquee />
      </motion.div>

      <CollaborativeScale />

      <InvestmentRoadmap />
      
      <section className="pattern-plus-ocean py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-10">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-primary/40"></div>
              <span className="text-[9px] font-mono tracking-[0.4em] uppercase font-black text-primary">The Collective</span>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-light uppercase tracking-tighter leading-[0.9]"
                >
                  EXISTING <span className="text-primary italic">MEMBERS</span>
                </motion.h2>
              </div>
              <div className="lg:col-span-4">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-slate-400 text-sm md:text-base font-light leading-relaxed"
                >
                  Longitude Health is built on radical collaboration. We bring together the nation's leading health systems to solve structural challenges.
                </motion.p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {partnersList.map((partner, index) => (
              <MemberCard key={index} {...partner} delay={index * 0.1} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/members" className="inline-flex items-center gap-4 px-8 py-3.5 rounded-full border border-white/10 text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-primary hover:text-background hover:border-primary transition-all duration-500 shadow-xl group">
                View Network Impact <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <NewsTeaser />
      <CTA />
    </>
  );
};

export default Home;