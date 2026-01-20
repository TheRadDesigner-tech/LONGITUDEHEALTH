import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ValueProp from '../components/ValueProp';
import Vision from '../components/Vision';
import Initiatives from '../components/Initiatives';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProp />
      <Marquee />
      <Initiatives />
      <Vision />
      <FAQ />
      <Newsletter />
      <CTA />
    </>
  );
};

export default Home;