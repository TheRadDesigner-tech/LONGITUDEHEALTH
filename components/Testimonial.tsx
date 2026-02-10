import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pattern-cross opacity-5"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Quote className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
        <h3 className="text-2xl md:text-4xl font-display font-bold text-light leading-relaxed mb-12">
          "{quote}"
        </h3>
        <div>
          <p className="text-white font-bold text-lg">{author}</p>
          <p className="text-slate-400 text-sm uppercase tracking-widest">{role}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;