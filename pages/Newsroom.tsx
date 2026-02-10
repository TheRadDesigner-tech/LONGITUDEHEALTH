import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Play, Video, Search, FileText, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Newsletter from '../components/Newsletter';

const Newsroom: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'articles' | 'webinars'>('articles');
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    { 
      id: 1, 
      title: "Longitude Health Launches with 4 Major Health Systems", 
      date: "January 15, 2025", 
      category: "Press Release",
      excerpt: "A consortium of leading U.S. health systems today announced the launch of Longitude Health, a transformative innovation engine designed to solve healthcare's most persistent challenges.",
      readTime: "5 min read",
      tags: ["Launch", "Network"],
      featured: true
    },
    { 
      id: 2, 
      title: "Longitude Rx Shows 24% Improvement in Adherence in Pilot", 
      date: "March 10, 2025", 
      category: "Impact Report",
      excerpt: "Initial results from the Longitude Rx specialty pharmacy pilot demonstrate significant clinical impact, specifically in patient adherence and cost reduction.",
      readTime: "4 min read",
      tags: ["LRX", "Clinical"],
      featured: false
    },
    { 
      id: 3, 
      title: "The Case for Shared Health System Utilities", 
      date: "March 22, 2025", 
      category: "Perspective",
      excerpt: "Why owning the infrastructure matters more than buying the software. A deep dive into the philosophy behind Longitude Health.",
      readTime: "7 min read",
      tags: ["Strategy", "Ownership"],
      featured: false
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "The Future of Specialty Pharmacy: A Collective Approach",
      date: "Feb 20, 2025",
      duration: "45 mins",
      speaker: "Jigar Thakkar, CEO Longitude Rx",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Unlocking Financial Experience in Complex Systems",
      date: "March 05, 2025",
      duration: "30 mins",
      speaker: "Jim Lester, CEO Longitude FX",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredWebinars = webinars.filter(webinar => 
    webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <PageHeader 
        title="NEWSROOM" 
        subtitle="Insights & Updates"
        description="Explore press releases, industry insights, and recorded webinars from Longitude Health."
        align="left"
        pattern="cross"
      />
      
      <section className="pt-16 pb-40 pattern-plus-ocean relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 border-b border-white/10 pb-10">
            <div className="flex items-center gap-10">
              <button 
                onClick={() => setActiveTab('articles')}
                className={`text-[9px] font-mono tracking-[0.4em] uppercase font-black transition-all relative py-2 ${activeTab === 'articles' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
              >
                Press & Insights
                {activeTab === 'articles' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />}
              </button>
              <button 
                onClick={() => setActiveTab('webinars')}
                className={`text-[9px] font-mono tracking-[0.4em] uppercase font-black transition-all relative py-2 ${activeTab === 'webinars' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
              >
                Webinars
                {activeTab === 'webinars' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />}
              </button>
            </div>

            <div className="relative max-w-sm w-full group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary transition-transform group-focus-within:scale-110" />
              <input 
                type="text" 
                placeholder="Search news & updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border-2 border-primary/40 rounded-full py-3.5 pl-12 pr-6 text-xs text-white focus:border-primary focus:bg-white/10 focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-primary hover:text-white text-[9px] font-mono uppercase font-black"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'articles' ? (
              <motion.div 
                key="articles"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={article.id}
                    >
                      <Link to={`/newsroom/press-release`} className="group block">
                        <div className="glass border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center hover:border-primary/20 hover:bg-white/[0.02] transition-all duration-500 shadow-xl">
                          <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-6 mb-4">
                              <span className="text-primary text-[8px] font-mono font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-primary/10 border border-primary/20">{article.category}</span>
                              <div className="flex items-center gap-2 text-[8px] text-slate-300 font-mono uppercase tracking-widest">
                                <Calendar className="w-3 h-3" /> {article.date}
                              </div>
                            </div>
                            <h3 className="text-lg font-display font-bold text-light group-hover:text-primary transition-colors mb-2 uppercase leading-tight tracking-tighter">
                              {article.title}
                            </h3>
                            <p className="text-slate-100 text-[11px] font-light mb-4 line-clamp-2 max-w-3xl leading-relaxed">{article.excerpt}</p>
                            <div className="flex gap-2">
                               {article.tags.map(t => <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[7px] font-mono text-slate-400 uppercase tracking-widest">#{t}</span>)}
                            </div>
                          </div>
                          <div className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-background transition-all duration-500">
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="py-20 text-center">
                    <FileText className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                    <h4 className="text-base font-display font-bold text-slate-400 uppercase tracking-tighter">No articles matched your search</h4>
                    <p className="text-xs text-slate-500 mt-1">Try different keywords or browse our webinars.</p>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div 
                key="webinars"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredWebinars.length > 0 ? (
                  filteredWebinars.map((webinar) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={webinar.id} 
                      className="group"
                    >
                      <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/10 bg-surfaceHighlight shadow-xl">
                        <img src={webinar.thumbnail} alt={webinar.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                            <Play className="w-4 h-4 fill-background" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-mono text-white uppercase tracking-widest">
                          {webinar.duration}
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-[8px] font-mono text-primary uppercase tracking-[0.2em] font-black">Recorded Session</span>
                          <span className="text-[8px] font-mono text-slate-300 uppercase tracking-widest">{webinar.date}</span>
                        </div>
                        <h3 className="text-base font-display font-bold text-light group-hover:text-primary transition-colors mb-2 uppercase leading-tight tracking-tighter">
                          {webinar.title}
                        </h3>
                        <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em] font-bold group-hover:text-slate-300 transition-colors">{webinar.speaker}</p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center">
                    <Video className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                    <h4 className="text-base font-display font-bold text-slate-400 uppercase tracking-tighter">No webinars matched your search</h4>
                    <p className="text-xs text-slate-500 mt-1">Try different keywords or browse our press insights.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      <Newsletter />
    </>
  );
};

export default Newsroom;