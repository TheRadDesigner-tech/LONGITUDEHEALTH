import React from 'react';

const Timeline: React.FC = () => {
  const milestones = [
    { year: "2024", title: "Founded", desc: "Consortium established by founding members." },
    { year: "2025", title: "Rx Launch", desc: "Longitude Rx goes live in 4 markets." },
    { year: "2026", title: "Expansion", desc: "Projected expansion to FX platform." }
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-16 text-light">Our Journey</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-surfaceHighlight -translate-y-1/2 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {milestones.map((m, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-primary mb-6 ring-8 ring-background"></div>
                <div className="font-display font-bold text-6xl text-surfaceHighlight mb-4">{m.year}</div>
                <h3 className="font-bold text-xl text-light mb-2">{m.title}</h3>
                <p className="text-slate-400 max-w-xs">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;