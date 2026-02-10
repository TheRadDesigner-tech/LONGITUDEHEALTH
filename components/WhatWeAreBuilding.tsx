import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  Settings2, 
  Smartphone, 
  Share2 
} from 'lucide-react';

const SolutionCard: React.FC<{
  title: string;
  subtitle: string;
  challenge: string;
  items: string[];
  footer: string;
  icon: React.ReactNode;
  domainColor: string;
  delay: number;
  link?: string;
}> = ({ title, subtitle, challenge, items, footer, icon, domainColor, delay, link }) => {
  const CardContent = (
    <div className="relative h-full flex flex-col bg-surfaceHighlight/20 backdrop-blur-3xl border border-white/[0.05] rounded-[2.5rem] overflow-hidden group-hover:border-white/10 transition-colors">
      <div className="px-8 pt-8 pb-4">
        <p className="text-slate-400 text-[13px] leading-relaxed font-light group-hover:text-slate-200 transition-colors">
          {challenge}
        </p>
      </div>

      <div className="p-8 py-6 flex gap-5 items-start relative overflow-hidden bg-white/[0.02] border-y border-white/[0.03]">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${domainColor}/10 blur-3xl rounded-full -mr-16 -mt-16`} />
        
        <div className={`bg-${domainColor}/10 p-3 rounded-2xl border border-${domainColor}/20 shrink-0`}>
          {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { className: `w-7 h-7 text-${domainColor}` }) : icon}
        </div>
        
        <div className="space-y-1 relative z-10">
          <h3 className="text-lg font-display font-black text-light leading-tight uppercase tracking-tight group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 text-[11px] italic leading-snug font-light group-hover:text-slate-300 transition-colors">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="p-8 pt-6 flex-grow flex flex-col justify-between">
        <ul className="space-y-3 mb-8">
          {items.map((item, idx) => (
            <li key={idx} className="text-slate-400 text-[13px] font-medium leading-snug flex items-start gap-3 group-hover:text-slate-300 transition-colors">
              <span className={`w-1 h-1 rounded-full bg-${domainColor}/40 mt-1.5 shrink-0 group-hover:bg-${domainColor}`} />
              <span>
                {item.includes('[Live]') ? (
                  <>
                    <span className="text-primary font-black">[Live]</span> {item.replace('[Live]', '')}
                  </>
                ) : item}
              </span>
            </li>
          ))}
        </ul>

        <div className={`w-full py-3 rounded-full bg-${domainColor}/10 border border-${domainColor}/20 flex items-center justify-center shadow-lg transition-all group-hover:bg-${domainColor} group-hover:text-background cursor-pointer`}>
          <span className={`text-${domainColor} font-display font-black text-[9px] uppercase tracking-[0.2em] whitespace-nowrap group-hover:text-background transition-colors`}>
            {footer}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col h-full rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:scale-[1.02] relative group"
    >
      <div className={`absolute -inset-1 bg-gradient-to-b from-${domainColor}/20 to-transparent opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700`} />
      
      {link ? (
        <Link to={link} className="h-full block">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </motion.div>
  );
};

const WhatWeAreBuilding: React.FC = () => {
  const domains = [
    {
      title: "Pharmacy & Therapeutics",
      subtitle: "Strengthen the Rx continuum from development to delivery",
      challenge: "Health systems own a narrow slice of the Rx value chain (dispensing), leaving value unrealized",
      items: ["Pharmacy optimization", "Rx dispensing", "Clinical trials enablement", "Infusion", "DME"],
      footer: "Explore Longitude Rx",
      icon: <Pill />,
      domainColor: "primary",
      link: "/solutions/rx"
    },
    {
      title: "Enterprise Shared Services Hub",
      subtitle: "Modernize through offshoring, automation, and shared services",
      challenge: "Admin. workflows are inconsistent, merger-built patchworks, making automation alone insufficient",
      items: ["BPO (Contact Center, RCM, Finance / Accounting, HR, IT, Supply Chain)", "Automation & workflow optimization", "Procurement GPO"],
      footer: "Explore Longitude FX",
      icon: <Settings2 />,
      domainColor: "secondary",
      link: "/solutions/fx"
    },
    {
      title: "Specialty-as-a-Service",
      subtitle: "Deliver integrated care through an asset-light, scalable model",
      challenge: "Specialty care is fragmented and unevenly distributed, leaving patients and systems without access",
      items: ["Teleconsult infrastructure", "Specialist network", "Reference lab", "AI navigation, scheduling, and coordination", "Specialty value-based care"],
      footer: "Pipeline",
      icon: <Smartphone />,
      domainColor: "accent"
    },
    {
      title: "Payor-Provider Solutions",
      subtitle: "Enable connected data to drive coordinated care and financing",
      challenge: "Data silos and misaligned incentives fuel an escalating arms race btwn. payors and providers",
      items: ["Data interoperability (Claims, denials, quality, enrollment)", "Patient collections", "Direct-to-employer", "Value-based enablement"],
      footer: "Industry Transformation",
      icon: <Share2 />,
      domainColor: "primary"
    }
  ];

  return (
    <section className="py-16 pattern-plus-ocean relative overflow-hidden" id="solutions">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pattern-plus-ocean opacity-5 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-slate-500 mb-6"
          >
            <span className="text-[9px] font-mono tracking-[0.4em] uppercase font-black italic">Strategic Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-light uppercase tracking-tighter leading-none mb-6">
            WHAT WE ARE <span className="text-primary italic">BUILDING</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            A portfolio of health system–owned utilities designed to scale across the network.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {domains.map((domain, index) => (
            <SolutionCard 
              key={index}
              {...domain}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreBuilding;