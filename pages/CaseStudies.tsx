import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, ShieldCheck, Zap, Layers, BarChart3, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pharmacy' | 'finance' | 'clinical'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const studies = [
    { 
      id: 1, 
      title: "Specialty Pharmacy Optimization", 
      subtitle: "Project: Longitude Rx Pilot",
      category: "pharmacy",
      excerpt: "Health systems faced fragmentated specialty medication oversight, leading to script leakage and decreased clinical adherence.",
      challenge: "Health systems faced fragmentated specialty medication oversight, leading to script leakage and decreased clinical adherence for complex care patients.",
      solution: "Implemented a unified clinical coordination platform across four pilot sites, integrating EHR data with centralized pharmacy support teams.",
      impact: [
        { value: "+24%", label: "Adherence Improvement" },
        { value: "$12M+", label: "Annual Savings" }
      ],
      icon: <ShieldCheck className="w-5 h-5" />,
      delay: 0.1
    },
    { 
      id: 2, 
      title: "Financial Experience Transformation", 
      subtitle: "Project: Longitude FX Beta",
      category: "finance",
      excerpt: "Opaque billing processes and multiple fragmented payment portals resulted in patient confusion and administrative collection burdens.",
      challenge: "Opaque billing processes and multiple fragmented payment portals resulted in patient confusion and significant administrative collection burdens.",
      solution: "Deployed a centralized, transparent financial interface that provides real-time cost estimates and consolidated payment options.",
      impact: [
        { value: "-18%", label: "Processing Time" },
        { value: "+32%", label: "Patient Satisfaction" }
      ],
      icon: <Zap className="w-5 h-5" />,
      delay: 0.2
    },
    { 
      id: 3, 
      title: "System-Wide Clinical Scaling", 
      subtitle: "Project: Network Utility 1",
      category: "clinical",
      excerpt: "Individual health systems lacked the scale to efficiently manage rare-disease therapies, leading to high operational overhead.",
      challenge: "Individual health systems lacked the scale to efficiently manage rare-disease therapies, leading to high operational overhead and slow clinical turn-around.",
      solution: "Created a shared clinical utility that centralizes the management of orphan drugs and gene therapies across the network.",
      impact: [
        { value: "100%", label: "Accessibility" },
        { value: "4x", label: "Therapy Activation Speed" }
      ],
      icon: <Layers className="w-5 h-5" />,
      delay: 0.3
    }
  ];

  const filteredStudies = studies.filter(study => {
    const matchesTab = activeTab === 'all' || study.category === activeTab;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          study.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          study.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <PageHeader 
        title="IMPACT & OUTCOMES" 
        subtitle="Evidence of Change"
        description="Our initiatives are currently scaling across our member systems. We measure our success through structural performance improvements and clinical outcomes."
        pattern="grid"
      />
      
      <section className="py-16 bg-background relative overflow-hidden pattern-plus">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 border-b border-white/10 pb-10">
            <div className="flex items-center gap-6 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'pharmacy', label: 'Pharmacy' },
                { id: 'finance', label: 'Finance' },
                { id: 'clinical', label: 'Clinical' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`text-[9px] font-mono tracking-[0.4em] uppercase font-black transition-all relative py-2 whitespace-nowrap ${activeTab === tab.id ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
                >
                  {tab.label}
                  {activeTab === tab.id && <motion.div layoutId="case-tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />}
                </button>
              ))}
            </div>

            <div className="relative max-w-sm w-full group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary transition-transform group-focus-within:scale-110" />
              <input 
                type="text" 
                placeholder="Search case studies..."
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
            <motion.div 
              key={activeTab + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {filteredStudies.length > 0 ? (
                filteredStudies.map((study) => (
                  <div key={study.id} className="glass border border-white/10 p-6 md:p-8 rounded-[2rem] hover:border-primary/20 transition-all duration-500 shadow-xl group">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-4">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-lg group-hover:scale-110 transition-transform">
                            {study.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-display font-bold text-light uppercase tracking-tighter leading-none mb-1">{study.title}</h3>
                            <p className="text-primary font-mono text-[8px] uppercase tracking-[0.4em] font-black italic">{study.subtitle}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-5 border-t border-white/5">
                          {study.impact.map((stat, i) => (
                            <div key={i} className="space-y-1">
                              <div className="text-xl md:text-2xl font-display font-black text-light leading-none">{stat.value}</div>
                              <div className="text-[8px] font-mono text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-8 space-y-6">
                        <div>
                          <h4 className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.4em] font-black mb-2">Analysis</h4>
                          <p className="text-xs text-slate-100 font-light leading-relaxed">{study.excerpt}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                              <h4 className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.4em] font-black mb-2">Challenge</h4>
                              <p className="text-[11px] text-slate-400 font-light leading-relaxed">{study.challenge.substring(0, 100)}...</p>
                           </div>
                           <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                              <h4 className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.4em] font-black mb-2">Solution</h4>
                              <p className="text-[11px] text-slate-400 font-light leading-relaxed">{study.solution.substring(0, 100)}...</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-20 text-center">
                  <BarChart3 className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                  <h4 className="text-base font-display font-bold text-slate-400 uppercase tracking-tighter">No case studies matched your search</h4>
                  <p className="text-xs text-slate-500 mt-1">Try adjusting your filters or search keywords.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-20 border-t border-white/10 mt-16"
          >
            <div className="w-12 h-[1px] bg-primary/30 mx-auto mb-6"></div>
            <h3 className="text-xl md:text-2xl font-display font-black text-light uppercase tracking-tighter leading-none mb-6 italic">
              MEASURING <span className="text-primary">ACTUAL</span> IMPACT
            </h3>
            <p className="text-base text-slate-100 font-light max-w-3xl mx-auto italic mb-10 leading-relaxed">
              "We measure our success not by marketing narratives, but by the tangible operational performance improvements of our member health systems. Every KPI is verified against system-wide clinical and financial outcomes."
            </p>
            <div className="flex items-center justify-center gap-4 text-primary font-mono text-[8px] uppercase tracking-[0.5em] font-black">
              <BarChart3 className="w-4 h-4" /> 
              <span>Comprehensive Impact Audit Scheduled Q3 2025</span>
            </div>
          </motion.div>

        </div>
      </section>

      <CTA />
    </>
  );
};

export default CaseStudies;