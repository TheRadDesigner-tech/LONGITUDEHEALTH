import React from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { CheckCircle2, Quote, ExternalLink, Linkedin } from 'lucide-react';

const LongitudeFX: React.FC = () => {
  return (
    <>
      <PageHeader 
        title={<>LONGITUDE <span className="text-secondary italic">FX</span></>}
        subtitle="Initiative in development"
        description="Revolutionizing the financial experience in healthcare."
        pattern="grid"
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
                <div className="w-8 h-[1px] bg-secondary"></div>
                <span className="text-[9px] font-mono tracking-[0.4em] uppercase font-black text-secondary">About Longitude FX</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-light uppercase tracking-tighter leading-none mb-6">
                ABOUT <span className="text-secondary italic">LONGITUDE FX</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-slate-300 font-light leading-relaxed">
              <p>
                Longitude FX (financial experience) is dedicated to improving the financial landscape for both patients and providers through key initiatives, including enhanced transparency, streamlined billing, increased accessibility and reduced friction.
              </p>
              <p>
                The financial experience is often frustrating for patients and providers alike and Longitude FX is a direct response to one of the most challenging processes in healthcare today. Longitude FX will develop innovative solutions that leverage next-generation capabilities to address the issues and create a seamless and transparent financial experience.  
              </p>
              <p>
                The current and future member systems of Longitude FX will be involved in the development of the diverse solutions that will involve partnering, integrating, and building strategies.
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
              <h3 className="text-lg font-display font-bold text-light mb-8 uppercase tracking-tight">Longitude FX Core Solutions:</h3>
              <div className="space-y-6">
                {[
                  { title: "Enhanced transparency", desc: "Patients receive clear and timely guidance on their financial responsibilities, alleviating confusion and frustration." },
                  { title: "Proactive engagement", desc: "Patients receive financial estimates before appointments, and follow-up support post-discharge to clarify any remaining balances." },
                  { title: "Streamlined billing", desc: "A centralized platform empowers patients to easily access their bills, simplifying payment management." },
                  { title: "Increased accessibility", desc: "Innovative financing options are available to support patients in effectively managing their financial obligations." },
                  { title: "Friction reduction", desc: "Simplified payment processes enhance overall patient satisfaction and improve the financial experience." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                       <p className="text-light font-bold text-xs uppercase tracking-wide mb-1">{item.title}</p>
                       <p className="text-slate-400 text-[13px] font-light leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verbatim Provider Impact Section */}
      <section className="py-24 bg-surface/20 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-light uppercase tracking-tighter leading-none mb-12">
              FOR HEALTHCARE <span className="text-secondary italic">PROVIDERS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 bg-surfaceHighlight/30 rounded-3xl border border-white/5">
                  <h4 className="text-secondary font-display font-black text-xs uppercase tracking-widest mb-4">Patient Satisfaction</h4>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">Enhanced overall patient experience to foster loyalty and trust.</p>
               </div>
               <div className="p-8 bg-surfaceHighlight/30 rounded-3xl border border-white/5">
                  <h4 className="text-secondary font-display font-black text-xs uppercase tracking-widest mb-4">Operational Efficiency</h4>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">Streamlined internal processes reduce costs while enhancing revenue cycle management.</p>
               </div>
               <div className="p-8 bg-surfaceHighlight/30 rounded-3xl border border-white/5">
                  <h4 className="text-secondary font-display font-black text-xs uppercase tracking-widest mb-4">Payment Options</h4>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">Improved collection of balances by providing patients with an array of payment options.</p>
               </div>
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
                Longitude Health Appoints Jim Lester to Lead Financial Experience Initiative
              </h2>
              <p className="text-secondary font-mono text-[10px] uppercase tracking-[0.4em] font-black italic">[FEB 25, 2025]</p>
            </div>
            
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-base md:text-lg">
              <p>
                Longitude Health has named Jim Lester as Chief Executive Officer of Longitude FX, an innovative initiative focused on revolutionizing the patient financial experience in healthcare. 
              </p>
              
              <div className="my-12 p-10 bg-surfaceHighlight/30 rounded-[2.5rem] border border-white/5 relative">
                <Quote className="absolute -top-6 -left-4 w-12 h-12 text-secondary opacity-20" />
                <p className="m-0 italic text-slate-200">
                  “Longitude FX is a direct response to one of the most challenging processes in healthcare today. The financial experience is often frustrating for patients and providers alike. Our Longitude Health members have identified this initiative as a top priority.”
                </p>
                <p className="mt-6 mb-0 font-bold text-light">— Brett Moraski</p>
                <p className="m-0 text-xs text-slate-500 uppercase tracking-widest font-mono">Interim CEO, Longitude Health</p>
              </div>

              <p>
                “We aspire to create a future where healthcare customers are empowered with a seamless financial experience for their healthcare which means better cost transparency, a seamless billing and payment process, and easily accessible financial resources,” said Jim Lester, chief executive officer of Longitude FX.
              </p>
              <p>
                Jim Lester is a proven healthcare technology executive leader with experience driving top line growth, transformation, and innovation initiatives at companies across the healthcare technology, payments, and financial technology industries. Most recently, he was the President and Chief Operating Officer at BitPay.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verbatim Jim Bio */}
      <section className="py-24 bg-surfaceHighlight/10 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-[1px] bg-secondary"></div>
            <h2 className="text-2xl font-display font-bold text-light uppercase tracking-tighter">LEADERSHIP</h2>
          </div>

          <div className="bg-surface/40 rounded-[3rem] border border-white/5 overflow-hidden p-8 md:p-14 flex flex-col lg:flex-row gap-12 shadow-2xl">
            <div className="lg:w-1/4">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-white/5">
                <img 
                  src="https://i.ibb.co/0jDnK3Rv/lester-1.webp" 
                  alt="Jim Lester" 
                  className="w-full h-full object-cover transition-all duration-700" 
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-display font-bold text-light mb-1 uppercase tracking-tighter">JIM LESTER</h3>
                <p className="text-secondary font-mono text-[9px] uppercase tracking-[0.3em] font-black">Chief Executive Officer, Longitude FX</p>
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
                  Jim Lester is a proven C-level executive leader with experience driving top line growth, transformation, and innovation initiatives at SaaS companies across the healthcare technology, payments, and financial technology industries. Jim’s experience spans both Fortune 500 enterprises as well as VC/PE backed growth-oriented companies. 
                </p>
                <p>
                  In his role as Chief Executive Officer of Longitude FX, Jim is developing solutions to enhance the financial experience in healthcare. Most recently, he was the President and Chief Operating Officer at BitPay, a PE backed pioneer in blockchain payments. Previously, he was the Chief Product and Marketing Officer (CPO/CMO) for a $425m payments division of Fiserv. 
                </p>
                <p>
                  Jim held multiple senior executive positions within McKesson’s $3B medical technology business focused on revenue cycle, patient engagement, and payer solutions. After graduating from Georgia Tech, he began his career as a software developer and subsequently received an MBA from Emory University.
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

export default LongitudeFX;