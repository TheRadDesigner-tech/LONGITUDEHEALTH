import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const PressRelease: React.FC = () => {
  return (
    <>
      <div className="pt-32 pb-12 bg-surface border-b border-border">
         <div className="max-w-3xl mx-auto px-6">
            <Link to="/newsroom" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-8 text-sm font-mono uppercase tracking-wide">
              <ArrowLeft className="w-4 h-4" /> Back to Newsroom
            </Link>
            <div className="flex items-center gap-4 mb-6">
               <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">Press Release</span>
               <span className="text-slate-400 text-sm flex items-center gap-2"><Calendar className="w-4 h-4" /> January 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-light leading-tight mb-8">
              Longitude Health Launches with 4 Major Health Systems
            </h1>
         </div>
      </div>
      
      <article className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 prose prose-invert prose-lg">
          <p className="lead text-xl text-slate-300 font-light mb-8">
            A consortium of leading U.S. health systems today announced the launch of Longitude Health, a transformative innovation engine designed to solve healthcare's most persistent challenges through collective action and system-level scale.
          </p>
          <p>
            Longitude Health represents a new model of collaboration. Rather than acting as a traditional vendor or investment fund, the organization is governed by its members—Baylor Scott & White Health, Memorial Hermann Health System, Novant Health, and Providence. This unique structure ensures that solutions are built by health systems, for health systems.
          </p>
          <p>
            "We are not waiting for external disruptors to fix healthcare," said Paul Mango, Founder. "We are pooling our resources, data, and expertise to build the infrastructure the industry needs."
          </p>
          <h3>Addressing Critical Gaps</h3>
          <p>
            The organization's initial portfolio focuses on two key areas:
          </p>
          <ul>
            <li><strong>Longitude Rx:</strong> A system-owned specialty pharmacy platform.</li>
            <li><strong>Longitude FX:</strong> A financial experience platform simplifying billing and payments.</li>
          </ul>
          <p>
            Both initiatives are designed to improve patient outcomes while reducing administrative waste and cost.
          </p>
          <hr className="border-border my-12" />
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-sm m-0">Media Contact: media@longitudehealth.com</p>
            <button className="flex items-center gap-2 text-primary hover:text-white transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </article>
      
      <Newsletter />
    </>
  );
};

export default PressRelease;