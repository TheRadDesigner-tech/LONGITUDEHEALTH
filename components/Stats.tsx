import React from 'react';

interface Stat {
  value: string;
  label: string;
}

const Stats: React.FC<{ stats: Stat[] }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border bg-surfaceHighlight/20">
      {stats.map((stat, i) => (
        <div key={i} className="text-center px-4">
          <div className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">{stat.value}</div>
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;