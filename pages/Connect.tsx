import React from 'react';
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';

const Connect: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="CONNECT WITH US" 
        subtitle="Get in Touch"
        description="Ready to join the network or learn more about our solutions? We'd love to hear from you."
        pattern="grid"
      />
      
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-display font-bold text-light mb-6">Contact Information</h2>
            <p className="text-slate-400 mb-8">
              Whether you are a health system looking to join, a partner interested in collaboration, or a member of the press, our team is ready to assist.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-bold text-light mb-2">General Inquiries</h3>
                <p className="text-primary">info@longitudehealth.com</p>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-bold text-light mb-2">Media Relations</h3>
                <p className="text-primary">media@longitudehealth.com</p>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-bold text-light mb-2">Headquarters</h3>
                <p className="text-slate-400">Austin, TX</p>
              </div>
            </div>
          </div>
          
          <div className="bg-surface p-8 rounded-2xl border border-border">
             <h2 className="text-2xl font-display font-bold text-light mb-6">Send a Message</h2>
             <form className="space-y-6">
               <div className="grid grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-mono uppercase text-slate-400 mb-2">First Name</label>
                   <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-0" />
                 </div>
                 <div>
                   <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Last Name</label>
                   <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-0" />
                 </div>
               </div>
               <div>
                 <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Email Address</label>
                 <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-0" />
               </div>
               <div>
                 <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Message</label>
                 <textarea rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-0"></textarea>
               </div>
               <button type="submit" className="w-full bg-primary text-background font-bold py-4 rounded-full hover:bg-white transition-colors uppercase tracking-widest">
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