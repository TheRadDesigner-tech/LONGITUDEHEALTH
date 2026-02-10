import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Users, Anchor, Compass, Navigation } from 'lucide-react';

const VisionCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; delay: number }> = ({ title, desc, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="bg-surface/40 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] hover:border-primary/40 transition-all duration-500 group"
  >
    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
      {icon}
    </div>
    <h3 className="text-2xl font-display font-bold text-light mb-4 uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-slate-400 text-base font-light leading-relaxed">{desc}</p>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <>
      <PageHeader
        title="INNOVATION IN THE UNKNOWN"
        subtitle="Our Origin"
        description="The story of our name is a story of breakthrough, navigation, and the courage to solve the unsolvable."
        pattern="dots"
      />

      {/* The Legend Section */}
      <section className="py-24 pattern-plus-ocean relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
          <Navigation className="absolute top-10 right-10 w-96 h-96 -rotate-12" />
          <Compass className="absolute bottom-10 left-10 w-64 h-64 rotate-45" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-3xl space-y-8 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-10 h-[1px] bg-primary" />
                <span className="text-[10px] font-mono tracking-[0.5em] uppercase font-black text-primary">
                  The 1700s Legend
                </span>
                <div className="w-10 h-[1px] bg-primary" />
              </div>

              <h2 className="text-4xl md:text-6xl font-display font-bold text-light uppercase tracking-tighter leading-[0.95]">
                LONGITUDE: <br />
                <span className="text-primary italic">THE GREAT CHALLENGE</span>
              </h2>

              <div className="space-y-5 text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                <p>
                  Our story starts in the 1700s, when the British Parliament launched the{' '}
                  <strong>Longitude Prize</strong> — a competition to solve the greatest challenge in sea navigation:
                  how to measure longitude.
                </p>

                <p className="border-l-2 border-primary pl-8 italic py-3 text-left mx-auto max-w-xl text-light/90">
                  John Harrison, a carpenter and clockmaker, found a new way forward — the marine chronometer.
                </p>

                <p>
                  Our founder Paul Mango believed this story mirrored the challenges of healthcare today — complex,
                  constrained, and demanding new thinking.
                </p>

                <p className="text-light font-display font-bold uppercase tracking-tight text-2xl mt-6">
                  We exist to address the <span className="text-primary">toughest challenges</span> in healthcare.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-28 bg-surface/30 border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <Anchor className="w-3 h-3 text-secondary/40" />
              <span className="text-[9px] font-mono tracking-[0.5em] uppercase font-black text-slate-500">
                Direction & Purpose
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-display font-bold text-light uppercase tracking-tighter leading-none">
              OUR <span className="text-secondary italic">VISION</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VisionCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Transform Business Models"
              desc="Identify and architect new operational frameworks that redefine the business of care."
              delay={0.1}
            />
            <VisionCard
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Improve Performance"
              desc="Confront systemic challenges across cost, quality, access, and experience."
              delay={0.15}
            />
            <VisionCard
              icon={<Users className="w-8 h-8" />}
              title="Empower Healthier Futures"
              desc="Ensure sustainable reinvestment back into the communities we serve."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pattern-plus-ocean opacity-30" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold text-background uppercase tracking-tighter leading-[0.85] mb-6">
              Partnership. <br />
              Ingenuity. <br />
              Action.
            </h2>
            <div className="w-24 h-[1.5px] bg-background/50 mx-auto" />
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default About;
