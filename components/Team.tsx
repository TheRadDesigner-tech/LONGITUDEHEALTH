import React from 'react';

const Team: React.FC<{ category: 'executive' | 'board' }> = ({ category }) => {
  const teamMembers = category === 'executive' ? [
    { name: "Executive One", role: "Chief Executive Officer" },
    { name: "Executive Two", role: "Chief Operating Officer" },
    { name: "Executive Three", role: "Chief Medical Officer" }
  ] : [
    { name: "Director One", role: "Board Chair" },
    { name: "Director Two", role: "Member Representative" },
    { name: "Director Three", role: "Independent Director" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] bg-surfaceHighlight rounded-xl mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                 {/* Placeholder for Headshot */}
                 <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="w-12 h-1 bg-primary mb-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
              </div>
              <h3 className="text-xl font-display font-bold text-light">{member.name}</h3>
              <p className="text-slate-400 font-mono text-sm uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;