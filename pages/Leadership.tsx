import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import { motion } from 'framer-motion';

const Leadership: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="OUR LEADERSHIP" 
        subtitle="Vision & Governance"
        description="Guided by healthcare veterans, innovators, and system leaders dedicated to scaling impact."
      />
      
      {/* Board of Directors Section */}
      <section className="py-40 bg-background relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-24">
               <motion.div 
                 initial={{ opacity: 0, x: -15 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex items-center gap-5 mb-8"
               >
                 <div className="w-16 h-px bg-secondary"></div>
                 <h2 className="text-4xl md:text-6xl font-display font-bold text-light uppercase tracking-tighter leading-none">Board of Directors</h2>
               </motion.div>
               <motion.p 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-slate-400 max-w-4xl text-xl font-light leading-relaxed mb-20"
               >
                  Our governing board provides strategic oversight, ensuring every initiative remains aligned with the clinical missions and operational needs of our member systems.
               </motion.p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface/40 p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl group hover:border-secondary/30 transition-all duration-1000 shadow-2xl flex flex-col"
                  >
                    <h4 className="text-primary font-display font-bold text-[10px] mb-5 tracking-[0.4em] uppercase italic group-hover:text-white transition-colors">Governance</h4>
                    <p className="text-slate-400 text-base font-light leading-relaxed flex-grow">Maintaining fiduciary integrity and ensuring strict alignment with the not-for-profit mission of care delivery.</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-surface/40 p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl group hover:border-secondary/30 transition-all duration-1000 shadow-2xl flex flex-col"
                  >
                    <h4 className="text-primary font-display font-bold text-[10px] mb-5 tracking-[0.4em] uppercase italic group-hover:text-white transition-colors">Our Vision</h4>
                    <p className="text-slate-400 text-base font-light leading-relaxed flex-grow">Architecting the long-term roadmap for shared utility development and essential core healthcare infrastructure.</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-surface/40 p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl group hover:border-secondary/30 transition-all duration-1000 shadow-2xl flex flex-col"
                  >
                    <h4 className="text-primary font-display font-bold text-[10px] mb-5 tracking-[0.4em] uppercase italic group-hover:text-white transition-colors">Engagement</h4>
                    <p className="text-slate-400 text-base font-light leading-relaxed flex-grow">Fostering deep, trust-based collaboration between CEOs to untangle systemic bottlenecks across the network.</p>
                  </motion.div>
               </div>
            </div>
            <Team category="board" />
         </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-40 bg-surface/20 border-t border-white/5 relative overflow-hidden">
         <div className="max-w-[1440px] mx-auto px-6">
            <div className="mb-24">
               <motion.div 
                 initial={{ opacity: 0, x: -15 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex items-center gap-5 mb-8"
               >
                 <div className="w-16 h-px bg-primary"></div>
                 <h2 className="text-4xl md:text-6xl font-display font-bold text-light uppercase tracking-tighter leading-none">Leadership Team</h2>
               </motion.div>
               <motion.p 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-slate-400 max-w-4xl text-xl font-light leading-relaxed"
               >
                  Our senior leadership brings together deep expertise from pharmacy, finance, and operations to drive the development of our transformative utilities.
               </motion.p>
            </div>
            <Team category="executive" />
         </div>
      </section>

      <Testimonial 
        quote="We are building the shared infrastructure for the future of care delivery, governed by the very systems that provide that care."
        author="Vishal Agrawal, MD"
        role="CEO, Longitude Health"
      />
      <CTA />
    </>
  );
};

export default Leadership;