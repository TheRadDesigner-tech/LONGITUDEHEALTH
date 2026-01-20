import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';

const Leadership: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="OUR LEADERSHIP" 
        subtitle="Vision & Governance"
        description="Guided by healthcare veterans, health system leaders, and innovators dedicated to transforming the operational and clinical landscape."
      />
      
      {/* Board of Directors - Moved to top as requested */}
      <section className="py-20 bg-background border-b border-border">
         <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-light mb-12 border-l-4 border-secondary pl-4">Board of Directors</h2>
            <Team category="board" />
         </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-background">
         <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-light mb-12 border-l-4 border-primary pl-4">Executive Team</h2>
            <Team category="executive" />
         </div>
      </section>

      <Testimonial 
        quote="We are not just building another healthcare company; we are building the infrastructure for the future of care delivery, driven by the systems that deliver it."
        author="Paul Mango"
        role="Founder"
      />
      <CTA />
    </>
  );
};

export default Leadership;