import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-surfaceHighlight/30 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-display font-bold text-light mb-4">Stay Connected</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Get the latest updates on our initiatives, new member announcements, and industry insights delivered to your inbox.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow bg-background border border-border rounded-full px-6 py-4 text-white placeholder:text-slate-500 focus:border-primary focus:ring-0"
          />
          <button className="bg-white text-background font-bold px-8 py-4 rounded-full hover:bg-primary transition-colors uppercase tracking-wide">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-slate-600 mt-4">
          By subscribing, you agree to our Privacy Policy. We respect your inbox.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;