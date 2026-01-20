import React from 'react';
import PageHeader from '../components/PageHeader';
import Initiatives from '../components/Initiatives';
import Flywheel from '../components/Flywheel';
import CTA from '../components/CTA';
import Marquee from '../components/Marquee';

const Solutions: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="OUR SOLUTIONS" 
        subtitle="System-Level Scale"
        description="We build platforms that solve the fragmentation of healthcare. From pharmacy to finance, our solutions are designed to be deployed once and scaled everywhere."
      />
      
      {/* Horizontal Partner Scrolling Bar - Added for consistent branding and trust */}
      <Marquee />

      {/* The Shortened/Redesigned Strategic Flywheel */}
      <Flywheel />
      
      <Initiatives />
      <CTA />
    </>
  );
};

export default Solutions;