
import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import Marquee from '../components/Marquee';
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
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="group bg-surface/60 backdrop-blur-3xl border border-border rounded-[4.5rem] p-12 md:p-28 flex flex-col lg:flex-row gap-28 hover:border-primary/50 transition-all duration-1000 relative overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,0.7)]"
  >
    {/* Dynamic accent line */}
    <div className={`absolute top-0 left-0 w-3 h-full ${bgClass.replace('bg-', 'bg-')} opacity-30 group-hover:opacity-100 transition-all duration-1000`} />

    <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="w-full max-w-[380px] aspect-square rounded-[3.5rem] flex items-center justify-center bg-white p-16 shadow-2xl group-hover:scale-105 transition-transform duration-1000 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
        <img
          src={logo}
          alt={`${name} official logo`}
          className="w-full h-full object-contain relative z-10 transition-all duration-1000 group-hover:drop-shadow-3xl"
        />
      </div>

      <div className="mt-20">
        <h3 className="text-5xl md:text-6xl font-display font-bold text-light mb-10 leading-[0.9] tracking-tighter">
          {name}
        </h3>
        <div className="flex items-center justify-center lg:justify-start gap-8">
          <div className="w-16 h-[4px] bg-primary rounded-full"></div>
          <p className="text-slate-400 font-mono text-xs uppercase tracking-[0.6em] font-black italic">
            {ceo}
          </p>
        </div>
      </div>
    </div>

    <div className="lg:w-2/3 flex flex-col justify-center relative">
      <Quote className={`absolute -top-24 -left-20 w-64 h-64 ${colorClass} opacity-5 -z-10 group-hover:opacity-10 transition-opacity duration-1000`} />
      <p className="text-3xl md:text-6xl text-slate-100 font-light leading-[1.1] italic relative z-10 tracking-tighter">
        "{quote}"
      </p>

      <motion.div
        className={`mt-24 h-2 w-48 rounded-full bg-gradient-to-r from-${colorClass.replace(
          'text-',
          ''
        )} to-transparent opacity-80`}
        initial={{ width: 0 }}
        whileInView={{ width: 192 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.8, duration: 2, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const Members: React.FC = () => {
  const members = [
    {
      name: 'Baylor Scott & White Health',
      ceo: 'Pete McCanna, CEO',
      logo: '/images/logos/baylor-scott-white.png',
      quote: 'Longitude Health Solutions will scale the next generation of capabilities faster and more effectively than if individual health systems attempted to do so themselves.',
      colorClass: 'text-primary',
      bgClass: 'bg-primary/5',
    },
    {
      name: 'Providence',
      ceo: 'Rod Hochman, MD, Former CEO',
      logo: '/images/logos/providence.png',
      quote: 'By implementing solutions that benefit multiple health systems, we can drive down costs and ensure the sustainability of health care delivery.',
      colorClass: 'text-secondary',
      bgClass: 'bg-secondary/10',
    },
    {
      name: 'Novant Health',
      ceo: 'Carl S. Armato, President & CEO',
      logo: '/images/logos/novant-health.png',
      quote: 'As a health care transformation leader, we recognize that the best ideas and our most successful initiatives are often a product of collaboration.',
      colorClass: 'text-primary',
      bgClass: 'bg-primary/5',
    },
    {
      name: 'Memorial Hermann',
      ceo: 'David L. Callender, MD, President & CEO',
      logo: '/images/logos/memorial-hermann.png',
      quote: 'Health care requires new approaches. Through this collaborative approach, we aim to take the lead in designing solutions that drive operational transformation.',
      colorClass: 'text-secondary',
      bgClass: 'bg-secondary/10',
    },
    {
      name: 'University of Michigan Health',
      ceo: 'David C. Miller, MD, MPH, President',
      logo: '/images/logos/michigan-medicine.png',
      quote: 'Collaborative innovation across leading health systems creates an unparalleled opportunity to reimagine health care—one that is more equitable and impactful.',
      colorClass: 'text-accent',
      bgClass: 'bg-accent/10',
    },
  ];

  return (
    <>
      <PageHeader
        title="MEMBER SYSTEMS"
        subtitle="Innovation Without Boundaries"
        description="Our consortium brings together the nation's leading health systems to solve structural challenges through collective ownership and scaled action."
        pattern="dots"
      />

      <div className="bg-background py-10 border-y border-white/5 relative z-20">
        <Marquee />
      </div>

      <section className="py-56 bg-background relative overflow-hidden">
        {/* Cinematic Ambience */}
        <div className="absolute top-0 right-0 w-[1400px] h-[1400px] bg-primary/5 blur-[250px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[1200px] h-[1200px] bg-secondary/5 blur-[220px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="mb-64 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-primary/40 bg-primary/10 text-primary mb-20 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <span className="w-3 h-3 rounded-full bg-primary animate-ping"></span>
              <span className="text-sm font-mono tracking-[0.8em] uppercase font-black">Consortium Identity</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-8xl md:text-[18rem] font-display font-bold text-light tracking-tighter uppercase mb-20 leading-[0.7] drop-shadow-2xl"
            >
              WITHOUT <br/><span className="text-primary italic">BOUNDARIES</span>
            </motion.h2>

            <div className="flex items-center justify-center gap-16">
              <div className="h-[3px] w-48 bg-gradient-to-r from-transparent via-slate-600 to-slate-800" />
              <p className="text-slate-500 font-mono text-sm uppercase tracking-[1.2em] font-black">
                Collective Strength • Scaled Action
              </p>
              <div className="h-[3px] w-48 bg-gradient-to-l from-transparent via-slate-600 to-slate-800" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-48">
            {members.map((member, index) => (
              <MemberCard key={index} {...member} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Members;
