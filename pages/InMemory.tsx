import React from 'react';
import PageHeader from '../components/PageHeader';
import Testimonial from '../components/Testimonial';

const InMemory: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="IN MEMORY OF PAUL MANGO" 
        subtitle="Legacy"
        description="Honoring the vision, leadership, and enduring impact of our founder."
        pattern="dots"
      />
      
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-slate-700 to-slate-600 rounded-full mb-12 shadow-2xl border-4 border-surfaceHighlight"></div>
          <h2 className="text-3xl font-display font-bold text-light mb-6">A Visionary Leader</h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed mb-12">
            Paul Mango dedicated his life to improving the healthcare system for patients and providers alike. His vision for Longitude Health was born out of a deep belief that collaboration, integrity, and bold innovation were the keys to a better future. His legacy lives on in every solution we build and every patient we impact.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
         <div className="max-w-[1440px] mx-auto px-6">
           <h3 className="text-2xl font-display font-bold text-center mb-16 text-light">Tributes</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-surfaceHighlight/20 p-8 rounded-xl border border-border">
               <p className="italic text-slate-300 mb-6">"Paul challenged us to think bigger, to act faster, and to never lose sight of the human element in healthcare. We will miss him dearly."</p>
               <p className="font-bold text-primary">- Board Member</p>
             </div>
             <div className="bg-surfaceHighlight/20 p-8 rounded-xl border border-border">
               <p className="italic text-slate-300 mb-6">"A true statesman of the industry. His work paved the way for the transformation we are seeing today."</p>
               <p className="font-bold text-secondary">- Colleague</p>
             </div>
           </div>
         </div>
      </section>
      
      <Testimonial 
        quote="The best way we can honor Paul is to continue the work he started with the same passion and dedication he showed every day."
        author="Longitude Health Team"
        role=""
      />
    </>
  );
};

export default InMemory;