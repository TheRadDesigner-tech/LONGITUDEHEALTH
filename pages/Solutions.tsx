import React from 'react';
import PageHeader from '../components/PageHeader';
import WhatWeAreBuilding from '../components/WhatWeAreBuilding';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="OUR SOLUTIONS" 
        subtitle="System-Level Scale"
        description="We build platforms that solve the fragmentation of healthcare. From pharmacy to finance, our solutions are designed to be deployed once and scaled everywhere."
      />
      
      {/* Portfolio section using the 4-column tombstone grid */}
      <WhatWeAreBuilding />

      <CTA />
    </>
  );
};

export default Solutions;