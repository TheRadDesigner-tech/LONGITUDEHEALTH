
import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import CollaborativeScale from '../components/CollaborativeScale';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

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
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="group bg-surface/60 backdrop-blur-3xl border border-border rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 md:gap-12 hover:border-primary/40 transition-all duration-700 relative overflow-hidden shadow-lg"
  >
    <div className={`absolute top-0 left-0 w-1.5 h-full ${bgClass} opacity-30 group-hover:opacity-100 transition-all duration-700`} />

    <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-[180px] aspect-square rounded-xl flex items-center justify-center bg-light p-6 shadow-md transition-transform duration-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        <img
          src={logo}
          alt={`${name} official logo`}
          className="w-full h-full object-contain relative z-10 transition-all duration-700"
        />
      </motion.div>

      <div className="mt-6">
        <h3 className="text-xl md:text-2xl font-display font-bold text-light mb-3 leading-[1] tracking-tighter uppercase">
          {name}
        </h3>
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <div className="w-8 h-[2px] bg-primary rounded-full"></div>
          <p className="text-slate-500 font-mono text-[8px] uppercase tracking-[0.3em] font-black italic">
            {ceo}
          </p>
        </div>
      </div>
    </div>

    <div className="lg:w-3/4 flex flex-col justify-center relative">
      <Quote className={`absolute -top-6 -left-6 w-24 h-24 ${colorClass} opacity-5 -z-10 group-hover:opacity-10 transition-opacity duration-700`} />
      <p className="text-lg md:text-2xl text-slate-200 font-light leading-snug italic relative z-10 tracking-tight">
        "{quote}"
      </p>

      <motion.div
        className={`mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-${colorClass.replace('text-', '')} to-transparent opacity-60`}
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.4, duration: 1.2, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const Members: React.FC = () => {
  const members = [
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
    },
  ];

  return (
    <>
      <PageHeader
        title="EXISTING MEMBERS"
        subtitle="Consolidated Power"
        description="Our consortium brings together the nation's leading health systems to solve structural challenges through collective ownership and scaled action."
        pattern="dots"
      />

      <section className="py-32 pattern-plus-ocean relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <CollaborativeScale />

          <div className="flex flex-col gap-12 mt-32">
            {members.map((member, index) => (
              <MemberCard key={index} {...member} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Members;
