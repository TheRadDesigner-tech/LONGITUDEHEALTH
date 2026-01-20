import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import Testimonial from '../components/Testimonial';
import Timeline from '../components/Timeline';
import { Lightbulb, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="ABOUT US" 
        subtitle="Our Story"
        description="We are building a new model for healthcare innovation—one that is driven by health systems, for health systems, to serve patients better."
        pattern="cross"
      />
      
      {/* Origin Story Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/10 text-secondary mb-8">
               <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
               <span className="text-xs font-mono tracking-widest uppercase font-bold">The Origin Story</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-light mb-10 leading-tight">
              A shared realization,<br/>a collective action.
            </h2>
            <div className="space-y-8 text-slate-300 font-light text-xl leading-relaxed">
              <p>
                In 2024, a group of visionary leaders from some of the nation's largest non-profit health systems came together with a common frustration: the healthcare innovation landscape was fragmented, vendor-driven, and often disconnected from the realities of patient care.
              </p>
              <p>
                Led by Paul Mango, these systems realized that they shared the same operational challenges—from pharmacy supply chain inefficiencies to financial administrative burdens. Individually, these problems were costly distractions. Together, they represented an opportunity to build something transformative.
              </p>
              <p>
                Longitude Health was founded not as another vendor, but as a <strong className="text-white font-medium">shared utility</strong>. A place where health systems could pool their resources, data, and expertise to build the infrastructure of the future, reclaiming control over the critical functions that enable care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />
      
      {/* Guiding Principles */}
      <section className="py-20 bg-surface">
         <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-light mb-16 text-center">Our Guiding Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-background p-8 rounded-xl border border-border hover:border-primary transition-colors group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-colors text-primary">
                     <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-light mb-3">Innovation from Within</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                     We believe the best solutions come from those closest to the problem. We build what health systems actually need, not what the market thinks they want.
                  </p>
               </div>
               
               <div className="bg-background p-8 rounded-xl border border-border hover:border-secondary transition-colors group">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                     <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-light mb-3">Radical Collaboration</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                     We replace competition with cooperation. By sharing data, best practices, and investment, we achieve scale and efficiency that no single system could match.
                  </p>
               </div>

               <div className="bg-background p-8 rounded-xl border border-border hover:border-accent transition-colors group">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                     <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-light mb-3">Impact at Scale</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                     Our goal isn't just to improve one hospital, but to create scalable platforms that can be deployed across the entire network, raising the standard of care for millions.
                  </p>
               </div>
            </div>
         </div>
      </section>

      <Testimonial 
        quote="We are proving that when health systems align their interests and pool their capabilities, they become the most powerful engine for change in the industry."
        author="Paul Mango"
        role="Founder"
      />
      
      <CTA />
    </>
  );
};

export default About;