
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const NewsTeaser: React.FC = () => {
  const posts = [
    { title: "Longitude Health Launches with 4 Major Health Systems", date: "Jan 15, 2025", tag: "Press Release" },
    { title: "Strategic Roadmap: The Next 24 Months of Innovation", date: "Feb 02, 2025", tag: "Insights" },
    { title: "Why Health System Ownership Matters for Patient Care", date: "Feb 10, 2025", tag: "Thought Piece" }
  ];

  return (
    <section className="py-32 pattern-plus-ocean border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary mb-6">
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold">News & Insights</span>
            </div>
            <h2 className="text-5xl font-display font-bold text-light uppercase tracking-tighter">Latest Perspectives</h2>
          </div>
          <Link to="/newsroom" className="hidden md:block text-primary font-bold text-xs uppercase tracking-[0.3em] hover:text-white transition-colors">
            Full Newsroom →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-surface/40 border border-border p-8 rounded-3xl hover:border-primary/30 transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono text-primary uppercase font-black tracking-widest">{post.tag}</span>
                <span className="text-[10px] text-slate-500 font-mono flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-light mb-8 flex-grow leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <Link to="/newsroom" className="inline-flex items-center gap-2 text-slate-400 group-hover:text-white transition-all text-xs font-bold uppercase tracking-widest">
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsTeaser;
