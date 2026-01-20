
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';

const Newsroom: React.FC = () => {
  const articles = [
    { 
      id: 1, 
      title: "Longitude Health Launches with 4 Major Health Systems", 
      date: "January 15, 2025", 
      category: "Press Release",
      excerpt: "A consortium of leading U.S. health systems today announced the launch of Longitude Health, a transformative innovation engine designed to solve healthcare's most persistent challenges.",
      readTime: "5 min read",
      featured: true
    },
    { 
      id: 2, 
      title: "Longitude Rx Shows 24% Improvement in Adherence in Pilot", 
      date: "March 10, 2025", 
      category: "Impact Report",
      excerpt: "Initial results from the Longitude Rx specialty pharmacy pilot demonstrate significant clinical impact.",
      readTime: "4 min read",
      featured: false
    },
    { 
      id: 3, 
      title: "New Board Members Appointed to Drive Strategic Vision", 
      date: "April 05, 2025", 
      category: "Announcement",
      excerpt: "Longitude Health welcomes three industry veterans to its governing board to steer future initiatives.",
      readTime: "3 min read",
      featured: false
    },
    { 
      id: 4, 
      title: "Collaborative Data: The New Currency of Value-Based Care", 
      date: "May 12, 2025", 
      category: "Thought Leadership",
      excerpt: "Exploring how shared data protocols between health systems can unlock unprecedented efficiency.",
      readTime: "6 min read",
      featured: false
    }
  ];

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <>
      <PageHeader 
        title="NEWSROOM" 
        subtitle="Insights & Announcements"
        description="Explore the latest perspectives, press releases, and breakthroughs from the heart of the health system transformation."
        align="left"
        pattern="cross"
      />
      
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          
          {/* Featured Article Hero */}
          {featuredArticle && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <Link to={`/newsroom/press-release`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl hover:border-primary/40 transition-all duration-500">
                  <div className="h-[300px] lg:h-auto bg-surfaceHighlight/50 relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-32 h-32 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center animate-pulse">
                          <Tag className="w-12 h-12 text-primary/40" />
                       </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
                        {featuredArticle.category}
                      </span>
                      <span className="text-slate-500 text-xs flex items-center gap-1 font-mono uppercase tracking-tighter">
                        <Calendar className="w-3 h-3" /> {featuredArticle.date}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-light mb-6 group-hover:text-primary transition-colors leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 font-light line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                        <Clock className="w-4 h-4" /> {featuredArticle.readTime}
                      </span>
                      <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid of Other Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/newsroom/press-release`} className="group block h-full">
                  <div className="bg-surface border border-border p-8 rounded-2xl h-full flex flex-col hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-primary text-[10px] font-mono font-bold uppercase tracking-[0.2em]">{article.category}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-light group-hover:text-primary transition-colors mb-4 flex-grow">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-8 font-light line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <span className="text-xs text-slate-600 flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </span>
                      <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More Button - Decorative */}
          <div className="mt-20 text-center">
            <button className="px-12 py-4 bg-transparent border border-white/10 text-slate-400 rounded-full font-mono uppercase tracking-widest text-xs hover:bg-white/5 hover:text-white transition-all">
              View All Insights
            </button>
          </div>

        </div>
      </section>
      
      <Newsletter />
    </>
  );
};

export default Newsroom;
