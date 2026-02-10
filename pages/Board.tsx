import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';

const Board: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="BOARD OF DIRECTORS" 
        subtitle="Governance"
        description="Our governing board ensures that Longitude Health remains true to its mission of serving health systems and patients, providing strategic oversight and direction."
      />
      <section className="py-20 bg-light text-background pattern-dots">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Governance", desc: "Ensuring fiscal responsibility and ethical standards." },
              { title: "Strategy", desc: "Setting the long-term vision for system-level transformation." },
              { title: "Engagement", desc: "Facilitating deep collaboration between member systems." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary">
                <h3 className="font-display font-bold text-2xl mb-2">{item.title}</h3>
                <p className="text-slate-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Team category="board" />
      <Testimonial 
        quote="The governance model of Longitude Health is unique—it puts the health systems in the driver's seat, ensuring that every solution we build solves a real, pressing problem."
        author="Board Member Name"
        role="Director"
      />
      <CTA />
    </>
  );
};

export default Board;