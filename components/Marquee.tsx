
import React from 'react';

const partners = [
  { name: "Baylor Scott & White Health", logo: "/images/logos/baylor-scott-white.png" },
  { name: "Providence", logo: "/images/logos/providence.png" },
  { name: "Novant Health", logo: "/images/logos/novant-health.png" },
  { name: "Memorial Hermann", logo: "/images/logos/memorial-hermann.png" },
  { name: "Michigan Medicine", logo: "/images/logos/michigan-medicine.png" }
];

const MarqueeItem: React.FC<{ name: string; logo: string }> = ({ name, logo }) => (
  <div className="mx-12 flex items-center justify-center group cursor-pointer">
    <div className="h-32 px-16 border border-white/5 rounded-[3rem] flex items-center justify-center bg-surfaceHighlight/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-700 backdrop-blur-3xl group relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/10 transition-all duration-700"></div>
      <img 
        src={logo} 
        alt={name} 
        className="h-16 w-auto object-contain brightness-0 invert opacity-40 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700 filter grayscale group-hover:grayscale-0 scale-90 group-hover:scale-110" 
      />
    </div>
  </div>
);

const Marquee: React.FC = () => {
  return (
    <section className="bg-background py-20 overflow-hidden relative z-20">
      {/* Premium edge masking */}
      <div className="absolute inset-y-0 left-0 w-96 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-96 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex items-center w-full overflow-hidden">
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max py-8">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <MarqueeItem key={index} name={partner.name} logo={partner.logo} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
