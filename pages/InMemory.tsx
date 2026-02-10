import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Quote, Award, Heart, BookOpen } from 'lucide-react';

const InMemory: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="IN MEMORY OF PAUL MANGO" 
        subtitle="Our Founding Visionary"
        description="Honoring the life, leadership, and enduring legacy of our founder and first CEO."
        pattern="dots"
      />
      
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pattern-plus-ocean opacity-[0.03] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
          {/* Portrait Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-background shadow-2xl aspect-[4/5]">
                <img 
                  src="https://i.ibb.co/whjqRgKY/Paul-Mango.png" 
                  alt="Paul Mango" 
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h2 className="text-3xl font-display font-bold text-light mb-1">Paul Mango</h2>
                <p className="text-primary font-mono text-xs uppercase tracking-[0.3em] font-black">Founding CEO & Visionary</p>
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                   <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono uppercase">
                     <Award className="w-3 h-3" /> West Point
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono uppercase">
                     <BookOpen className="w-3 h-3" /> Harvard MBA
                   </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 p-8 bg-background border border-border rounded-3xl relative"
            >
              <Quote className="absolute -top-6 -left-4 w-12 h-12 text-primary opacity-20" />
              <p className="italic text-slate-300 text-lg leading-relaxed mb-6">
                "Paul was a masterful problem solver who played a key role in advancing our public health goals. He became the go-to person for our toughest challenges — because we all knew his unique ability to untangle complex issues and find solutions that others couldn’t."
              </p>
              <p className="text-light font-bold">— Scott Gottlieb</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Former FDA Commissioner</p>
            </motion.div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 prose prose-invert prose-lg max-w-none"
          >
            <p className="text-2xl text-slate-200 font-light leading-relaxed mb-10 border-l-4 border-primary pl-8 italic">
              It is with profound sadness that we announce the recent passing of our friend and the founding CEO of Longitude Health, Paul Mango—an astute leader and healthcare visionary.
            </p>

            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              <p>
                We, who worked closely with him every day, will miss his wisdom, leadership, wry sense of humor and unique ability to drive progress. Once a new direction was agreed upon in a meeting, even before the meeting had ended, Paul often had already sent out a flurry of emails to set the ball in motion. He was a man of integrity and intelligence. With Paul, there was no pretense—what you saw was always what you got.
              </p>
              
              <p>
                Leadership, innovation, and collaboration were the hallmarks of Paul’s life. He received a Bachelor of Science degree in engineering from the United States Military Academy at West Point, and an MBA from Harvard Business School, both with honors. Before launching Longitude Health, he served as Deputy Chief of Staff for Policy in the U.S. Department of Health and Human Services (HHS) and as Chief Principal Deputy Administrator and Chief of Staff at the Centers for Medicare & Medicaid Services. Prior to that, for 20 years he worked at and led the global healthcare practice at McKinsey & Company.
              </p>

              <div className="my-12 p-10 bg-surfaceHighlight/30 rounded-[2.5rem] border border-white/5">
                <p className="m-0 italic text-slate-200">
                  "He was quite simply one of the finest human beings I’ve ever known. He was a servant leader in every respect in the finest tradition of the U.S. Army in which he so proudly served, never seeking personal fame or glory but only caring about the team and the result."
                </p>
                <p className="mt-6 mb-0 font-bold text-light">— Alex Azar</p>
                <p className="m-0 text-xs text-slate-500 uppercase tracking-widest font-mono">Former HHS Secretary</p>
              </div>

              <p>
                At a critical time when the nation faced the coronavirus pandemic, Paul served as HHS‘s formal liaison to Operation Warp Speed where he was involved in nearly all strategic, operational, and financial aspects of the program, and facilitated its day-to-day activities among HHS, the Department of Defense, and the White House. He was instrumental in creating and managing the most successful public-private partnership since World War II to produce and distribute COVID-19 vaccinations nationwide.
              </p>

              <p>
                This enabled 1.6 million Americans to be vaccinated every day and saved countless lives. His documentation of those challenging times is captured in his memoir, <span className="italic font-bold">Warp Speed: Inside the Operation that Beat COVID, the Critics, and the Odds</span> (Republic Book Publishing).
              </p>

              <p>
                As in Operation Warp Speed, Paul was a catalyst for creativity and innovation in the healthcare industry. He naturally mentored talent and was able to bring together leaders across the healthcare ecosystem to find new ways to improve the system. He would often say, <span className="text-light font-medium italic">“We don’t want to create the next version of healthcare, but leapfrog and create something totally new, different and revolutionary.”</span>
              </p>

              <p>
                Paul could have been doing a lot of other things at this point in his life, but he jumped at the chance to transform healthcare for the better—and make the system work better for millions of Americans – by becoming the founding CEO of Longitude Health.
              </p>

              <p>
                True to form, Paul created something special at Longitude Health. His vision and legacy can be found in every area of the company. He nurtured the best and brightest ideas and recruited talented leaders from multiple disciplines in the industry. His legacy will live on in what he created in Longitude Health.
              </p>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-lg text-slate-300 italic">
                  “Paul was an innovator, dedicated to helping create transformational change in our industry. We are deeply saddened by his loss, which is indeed a loss for American healthcare. Because of his instrumental leadership during our founding, Longitude Health’s members and initiatives are positioned for a successful path forward, and we will continue this impactful work that was so important to him.”
                </p>
                <p className="mt-4 font-bold text-light">— Pete McCanna</p>
                <p className="m-0 text-xs text-slate-500 uppercase tracking-widest font-mono">Chairman of Longitude Health</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 pattern-plus-ocean border-t border-border text-center relative">
        <div className="max-w-3xl mx-auto px-6">
          <Heart className="w-12 h-12 text-primary mx-auto mb-8 animate-pulse" />
          <p className="text-2xl text-slate-200 font-display font-bold mb-4">
            May his memory continue to inspire and bless us all.
          </p>
          <p className="text-slate-500 font-light">
            We will always remember Paul and the positive impact he had on our lives and countless others. Our hearts go out to Paul’s family.
          </p>
        </div>
      </section>
    </>
  );
};

export default InMemory;