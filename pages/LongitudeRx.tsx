import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { CheckCircle2, Quote, ExternalLink, Linkedin } from 'lucide-react';

const LongitudeRx: React.FC = () => {
  return (
    <>
      <PageHeader 
        title={<>LONGITUDE <span className="text-primary italic">Rx</span></>}
        subtitle="Our solution"
        description="A specialty pharmacy solution delivering better access, adherence and patient outcomes."
        pattern="cross"
        align="left"
      />
      
      {/* Verbatim About Section */}
      <section className="py-24 pattern-plus-ocean relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-primary"></div>
                <span className="text-[9px] font-mono tracking-[0.4em] uppercase font-black text-primary">About Longitude Rx</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-light uppercase tracking-tighter leading-none mb-6">
                ABOUT <span className="text-primary italic">LONGITUDE Rx</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-slate-300 font-light leading-relaxed">
              <p>
                Longitude Rx is the first launched solution from Longitude Health, selected and co-developed by our founding member health systems. It is now operational and on course — with our first health system customer onboarded and implementation actively underway.
              </p>
              <p>
                Hospital specialty pharmacies serve patients with complex conditions who often require high-touch clinical intervention, strict medication protocols and seamless care coordination. 
              </p>
              <p>
                Navigating specialty therapies can be challenging for patients, providers, and health systems — with high costs, payer barriers and administrative burden limiting access and impact.
              </p>
              <p>
                Longitude Rx addresses these challenges head-on through a health system–owned model that combines deep clinical insight, integrated services and next-generation technology.
              </p>
              <p className="text-light font-bold">
                The result: scalable infrastructure and smarter workflows that improve patient outcomes, drive revenue growth and enhance system-wide performance.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-surfaceHighlight/20 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-lg font-display font-bold text-light mb-8 uppercase tracking-tight">Our solution helps health systems:</h3>
              <div className="space-y-6">
                {[
                  "Capture more prescriptions and revenue by increasing internal provider script retention",
                  "Streamline access and adherence through coordinated clinical workflows and integrated care teams",
                  "Optimize 340B performance and compliance with embedded strategy and support",
                  "Expand access and influence with payer networks, PBMs and manufacturers — including rare/orphan and gene therapies",
                  "Leverage next-gen technology to unify data, predict access challenges and improve care delivery upstream",
                  "Strengthen system sustainability by aligning specialty pharmacy strategy with long-term operational and financial goals"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm font-light leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verbatim Partnership Section */}
      <section className="py-24 bg-surface/20 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-light uppercase tracking-tighter leading-none mb-8">
              A TRUE <span className="text-primary italic">PARTNERSHIP MODEL</span>
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-10">
              Longitude Rx is more than a platform — it is a purpose-built partner for specialty pharmacy transformation. Our specialized teams integrate directly within health systems, bringing operational experience, strategic infrastructure and dedicated support to build pharmacy models that work for patients, clinicians and health systems alike.
            </p>
            <div className="pt-4 flex flex-col md:flex-row gap-6 items-center">
              <a 
                href="https://longituderx.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-4 bg-primary text-background font-black rounded-full text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
              >
                Visit LongitudeRx.org <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-slate-500 font-mono text-[9px] uppercase tracking-widest">Learn more about our insights & details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verbatim Press Release Section */}
      <section className="py-24 pattern-plus-ocean">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="prose prose-invert prose-lg max-w-none"
          >
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-light uppercase tracking-tighter leading-tight mb-8">
                Longitude Health Names Jigar Thakkar to Lead Longitude Rx, a new Specialty Pharmacy Initiative
              </h2>
              <p className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] font-black italic">[NOV. 11, 2024]</p>
            </div>
            
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-base md:text-lg">
              <p>
                Today, Longitude Health announced the hiring of Jigar Thakkar, PharmD, MBA, MHCDS, FACHE as the chief executive officer of Longitude Rx, a next-generation specialty pharmacy initiative.
              </p>
              <p>
                Enhancing specialty pharmacy capabilities is the first initiative for Longitude Health, identified and selected by the founding members including Baylor Scott & White Health, Memorial Hermann Health System, Novant Health and Providence. Longitude Rx will aim to improve patient access and adherence to specialty medications by providing solutions that support health systems in managing their specialty pharmacies.
              </p>
              
              <div className="my-12 p-10 bg-surfaceHighlight/30 rounded-[2.5rem] border border-white/5 relative">
                <Quote className="absolute -top-6 -left-4 w-12 h-12 text-primary opacity-20" />
                <p className="m-0 italic text-slate-200">
                  “As more and more limited distribution drugs enter the marketplace, often in the form of spectacular new cell and gene therapies, health systems need to develop new capabilities and approaches to better support patients. Our vision is for patients to have access to these specialty medications accompanied by the guidance and support from highly specialized pharmacists.”
                </p>
                <p className="mt-6 mb-0 font-bold text-light">— Paul Mango</p>
                <p className="m-0 text-xs text-slate-500 uppercase tracking-widest font-mono">Former CEO, Longitude Health</p>
              </div>

              <p>
                Thakkar will lead the effort to create a next-generation specialty pharmacy offering that is tailored to the specific needs of health systems. While some offerings provide management tools for specialty pharmacy, Longitude Rx will address the coordination requirements and barriers that patients and providers face with accessing and adhering to specialty medications.
              </p>
              
              <div className="my-12 p-10 border-l-2 border-primary/40 bg-white/5 rounded-r-3xl">
                <h3 className="text-light uppercase tracking-tight text-xl mb-4">Utility Leadership</h3>
                <p>
                  “Improving outcomes for patients through better medication adherence, clinical, and financial oversight is our goal,” said Thakkar. “We know that we can improve the patient experience and reduce the clinical burden by creating a specialty pharmacy offering that can serve unmet needs for patients and communities.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verbatim Jigar Bio */}
      <section className="py-24 bg-surfaceHighlight/10 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-[1px] bg-primary"></div>
            <h2 className="text-2xl font-display font-bold text-light uppercase tracking-tighter">LEADERSHIP</h2>
          </div>

          <div className="bg-surface/40 rounded-[3rem] border border-white/5 overflow-hidden p-8 md:p-14 flex flex-col lg:flex-row gap-12 shadow-2xl">
            <div className="lg:w-1/4">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-white/5">
                <img 
                  src="https://i.ibb.co/QjXnDnSg/jiggar-1.webp" 
                  alt="Jigar Thakkar" 
                  className="w-full h-full object-cover transition-all duration-700" 
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-display font-bold text-light mb-1 uppercase tracking-tighter">JIGAR THAKKAR, PharmD, MBA, MHCDS, FACHE</h3>
                <p className="text-primary font-mono text-[9px] uppercase tracking-[0.3em] font-black">Chief Executive Officer of Longitude Rx</p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center gap-3 text-secondary hover:text-white transition-colors text-[10px] font-mono uppercase font-black tracking-widest">
                    <Linkedin className="w-4 h-4" /> Linkedin Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4 flex flex-col justify-center">
              <div className="space-y-6 text-slate-300 font-light leading-relaxed text-base">
                <p>
                  Jigar Thakkar, PharmD, MBA, MHCDS, FACHE joined Longitude Health as CEO of Specialty Pharmacy OpCo, an inaugural role for the newly created organization to transform the development and delivery of health care solutions. Jigar has extensive experience in academic healthcare, as well as large integrated delivery networks, with a successful track record of leading hospital operations, strategic growth, and revenue diversification.
                </p>
                <p>
                  Previously, Jigar served as the enterprise chief administrative officer (CAO) for clinical services and growth integration at OU Health. Thakkar notably built a specialty pharmacy program for OU Health that grew to $470M in less than four years, leading to greater integration of care delivery and clinical growth within the health system. Prior to joining OU Health, Jigar was a managing director at FTI Consulting, where he served as U.S. lead for pharmacy services with a focus on leading vision, strategy, and implementation phases of engagements.
                </p>
                <p>
                  Jigar earned his PharmD from Midwestern University, Master of Health Care Delivery Science from Dartmouth College, and an MBA from Northwestern University.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
};

export default LongitudeRx;