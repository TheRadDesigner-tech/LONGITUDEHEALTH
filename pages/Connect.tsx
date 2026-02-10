
import React from 'react';
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';

const Connect: React.FC = () => {
  return (
    <>
      <PageHeader 
        title={<><span className="text-primary italic">CONNECT</span> WITH US</>}
        subtitle="Get in Touch"
        description="Ready to join the network or learn more about our solutions? We'd love to hear from you."
        pattern="grid"
      />
      
      <section className="py-32 pattern-plus-ocean">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-light mb-8 uppercase tracking-tighter">Contact Information</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                Whether you are a health system looking to join, a partner interested in collaboration, or a member of the press, our team is ready to assist.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="p-10 bg-surface/40 rounded-3xl border border-white/5 backdrop-blur-xl">
                <h3 className="font-bold text-light mb-4 uppercase tracking-widest text-xs italic">General Inquiries</h3>
                <p className="text-primary font-mono text-xl md:text-2xl uppercase tracking-tighter font-black">info@longitudehealth.com</p>
              </div>
              <div className="p-10 bg-surface/40 rounded-3xl border border-white/5 backdrop-blur-xl">
                <h3 className="font-bold text-light mb-4 uppercase tracking-widest text-xs italic">Media Relations</h3>
                <p className="text-primary font-mono text-xl md:text-2xl uppercase tracking-tighter font-black">media@longitudehealth.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-surface/50 p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-3xl">
             <h2 className="text-3xl font-display font-bold text-light mb-10 uppercase tracking-tighter">Send a Message</h2>
             <form className="space-y-10">
               <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-4">
                   <label className="block text-[9px] font-mono uppercase text-slate-500 mb-2 tracking-[0.3em] font-black">First Name</label>
                   <input type="text" className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:border-primary/50 focus:ring-0 transition-all" />
                 </div>
                 <div className="space-y-4">
                   <label className="block text-[9px] font-mono uppercase text-slate-500 mb-2 tracking-[0.3em] font-black">Last Name</label>
                   <input type="text" className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:border-primary/50 focus:ring-0 transition-all" />
                 </div>
               </div>
               <div className="space-y-4">
                 <label className="block text-[9px] font-mono uppercase text-slate-500 mb-2 tracking-[0.3em] font-black">Email Address</label>
                 <input type="email" className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:border-primary/50 focus:ring-0 transition-all" />
               </div>
               <div className="space-y-4">
                 <label className="block text-[9px] font-mono uppercase text-slate-500 mb-2 tracking-[0.3em] font-black">Message</label>
                 <textarea rows={5} className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:border-primary/50 focus:ring-0 transition-all"></textarea>
               </div>
               <button type="submit" className="w-full bg-primary text-background font-black py-6 rounded-full hover:bg-white transition-all text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-primary/20">
                 Submit Inquiry
               </button>
             </form>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </>
  );
};

export default Connect;
