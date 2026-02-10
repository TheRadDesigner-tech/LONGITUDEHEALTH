import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ExternalLink, Linkedin, X } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  bio: string;
  image?: string;
  associatedWith?: string;
  linkedin?: string;
}

const TeamMember: React.FC<{ member: Member; index: number; onSelect: (m: Member) => void }> = ({ member, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group h-full flex flex-col cursor-pointer"
      onClick={() => onSelect(member)}
    >
      <div 
        className="relative bg-surface/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-700 h-full flex flex-col hover:border-primary/40 hover:bg-surface/60 shadow-2xl group"
      >
        <div className="p-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-10">
            <div className="w-28 h-28 rounded-3xl overflow-hidden border border-white/10 bg-surfaceHighlight flex items-center justify-center shadow-xl">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-700" 
                />
              ) : (
                <span className="text-primary font-display font-bold text-4xl">
                  {member.name.split(' ').filter(n => n.length > 2).map(n => n[0]).join('') || member.name[0]}
                </span>
              )}
            </div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-500">
              <ExternalLink className="w-5 h-5" />
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-display font-bold text-light mb-2 uppercase tracking-tighter leading-none min-h-[4rem] flex items-center">{member.name}</h3>
            <p className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] font-black italic min-h-[2rem] flex items-start">{member.role}</p>
          </div>

          <div className="flex-grow">
            {member.associatedWith && (
              <div className="mb-6 py-4 border-y border-white/[0.04]">
                 <p className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.3em] font-medium block mb-1">Previously:</p>
                 <p className="text-slate-100 font-mono text-[10px] uppercase tracking-[0.1em] font-bold">{member.associatedWith}</p>
              </div>
            )}
          </div>
          
          <div className="mt-8 flex items-center gap-3 text-[10px] font-mono text-slate-300 uppercase tracking-widest italic group-hover:text-primary transition-all duration-700">
            View Executive Bio
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team: React.FC<{ category: 'executive' | 'board' }> = ({ category }) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const executives: Member[] = [
    { 
      name: "DR. VISHAL AGRAWAL", 
      role: "Chief Executive Officer, Longitude Health", 
      associatedWith: "Humana, McKinsey",
      image: "https://i.ibb.co/Qv6VWQzq/Vishal.png",
      bio: "Vishal Agrawal, M.D. joins Longitude Health from Humana, where he served as the Chief Strategy and Corporate Development Officer. He has over 25 years of extensive health care services technology, business development and acquisition leadership experience. Dr. Agrawal previously worked for The Carlyle Group L.P., having held the position of Senior Advisor from October 2017 to December 2018. In his capacity of Senior Advisor, Dr. Agrawal reviewed potential health care services and technology acquisitions with the company’s investment team. Previously, Dr. Agrawal was President and Chief Growth Officer of Ciox Health, the largest health information exchange and release of information services organization in the U.S. As President of Harris Healthcare Solutions, Dr. Agrawal successfully grew a global health care IT business that developed advanced technologies to drive physician experience, interoperability and business intelligence across the continuum of care. Earlier in his career, Dr. Agrawal spent 12 years with McKinsey & Company, where he was elected Partner and led both the North American Healthcare Systems & Services Practice and the Private Equity & Principal Investors Practice.\n\nHe has a bachelor’s degree in molecular biophysics and biochemistry, a master’s degree in molecular biophysics, and a Doctor of Medicine degree, all from Yale University."
    },
    { 
      name: "LAUREN BRUNO", 
      role: "Chief Strategy & Operations Officer", 
      image: "https://i.ibb.co/5Xxy8jB1/lauren-1-1.webp",
      bio: "Lauren is driving operational efficiency across the organization and leading new membership efforts. Previously, she was an investment banker at Citi and J.P. Morgan advising not-for-profit healthcare providers across the country. She earned an MHA from Columbia University’s Mailman School of Public Health and a BA from Villanova University."
    },
    { 
      name: "BRETT MORASKI", 
      role: "Chief Financial Officer, Longitude Health", 
      image: "https://i.ibb.co/j9Z83SZM/Bre-mor.jpg",
      bio: "Brett played a key role in founding Longitude Health. A seasoned health care investor and executive, he has held leadership roles at SEMCAP Health, Frazier Healthcare, Matrix Medical Network, and WellPoint (now Elevance Health). He holds an MBA from Harvard Business School and a BA from the University of Notre Dame."
    },
    { 
      name: "JIM LESTER", 
      role: "Chief Executive Officer, Longitude FX", 
      associatedWith: "McKesson, Fiserv, BitPay",
      image: "https://i.ibb.co/0jDnK3Rv/lester-1.webp",
      bio: "Jim is leading the development of Longitude FX, a next-generation workforce platform. Previously, he served as President and Chief Operating Officer of BitPay and held roles at Fiserv and McKesson. He began his career as a software developer and earned an MBA from Emory University."
    },
    { 
      name: "JIGAR THAKKAR, PharmD, MBA", 
      role: "Chief Executive Officer, Longitude Rx", 
      associatedWith: "OU Health, FTI Consulting",
      image: "https://i.ibb.co/QjXnDnSg/jiggar-1.webp",
      bio: "Jigar is leading Longitude Rx, our first launched solution. Previously, he built a $470 million specialty pharmacy at OU Health, served as Managing Director at FTI Consulting, and led engagements with health systems and Fortune 100 companies. He holds advanced degrees from Midwestern University, Dartmouth College, and Northwestern University."
    },
    { 
      name: "NOOR NAHAVANDI", 
      role: "VP, Strategic Initiatives", 
      associatedWith: "Strategy Consulting",
      image: "https://i.ibb.co/XZQh2g9M/noor-1-1.webp",
      bio: "Noor is leading the development and launch of new solutions at Longitude Health. Previously, he led the diligence and advisory efforts at The Academy’s Strategic Partnership Alliance and advised Fortune 500 companies as a strategic consultant in Deloitte’s M&A practice. He holds a BA from Penn State University."
    }
  ];

  const board: Member[] = [
    { 
      name: "PETE MCCANNA", 
      role: "Board Chair, CEO Baylor Scott & White Health", 
      image: "https://i.ibb.co/yFrQ71DD/Pete-Mc-Canna-sm.jpg",
      bio: "Pete McCanna: Baylor Scott & White is dedicated to delivering experiences that go beyond customers’ traditional expectations of health care—making it more accessible, easier to navigate and more personalized. \n\nThrough 51 hospitals and more than 1,200 access points, including flagship academic medical centers in Dallas, Fort Worth, and Temple, the system offers the full continuum of care, from primary to award-winning specialty care, as well as an array of virtual and in-home services. The system’s integrated delivery network also includes the Baylor Scott & White Health Plan, Baylor Scott & White Research Institute, Baylor Scott & White Quality Alliance, and its leading digital health platform, MyBSWHealth.\n\nBefore becoming CEO, he served as Baylor Scott & White’s president, where he advanced clinical alignment, accelerated the development of its digital health strategy, and expanded academic affiliations to help address the critical need for clinicians in Texas. Previously, McCanna served as executive vice president and chief operating officer at Northwestern Medicine. During his tenure, operating revenue, quality, patient experience, and employee engagement exceeded targets. He was instrumental in Northwestern’s expansion as it maintained its AA+ bond rating. McCanna has nearly 35 years of experience in health care management and consulting.\n\nPrior to joining Northwestern, he served as chief financial officer (CFO) at Presbyterian Healthcare Services in New Mexico and CFO at the University of Colorado Hospital in Denver. Earlier in his career, he worked for Denver Health and as a health care consultant for The Lewin Group.\n\nHe currently serves on the boards of University of Michigan Health, the Texas Hospital Association, and Catholic Extension. McCanna holds a master’s degree from the Lyndon B. Johnson School of Public Affairs at the University of Texas at Austin and a bachelor’s degree in English from the University of Michigan."
    },
    { 
      name: "DR. VISHAL AGRAWAL", 
      role: "Board Member, CEO Longitude Health", 
      associatedWith: "Humana, McKinsey",
      image: "https://i.ibb.co/Qv6VWQzq/Vishal.png",
      bio: "Vishal Agrawal, M.D. joins Longitude Health from Humana, where he served as the Chief Strategy and Corporate Development Officer. He has over 25 years of extensive health care services technology, business development and acquisition leadership experience. Dr. Agrawal previously worked for The Carlyle Group L.P., having held the position of Senior Advisor from October 2017 to December 2018. In his capacity of Senior Advisor, Dr. Agrawal reviewed potential health care services and technology acquisitions with the company’s investment team. Previously, Dr. Agrawal was President and Chief Growth Officer of Ciox Health, the largest health information exchange and release of information services organization in the U.S. As President of Harris Healthcare Solutions, Dr. Agrawal successfully grew a global health care IT business that developed advanced technologies to drive physician experience, interoperability and business intelligence across the continuum of care. Earlier in his career, Dr. Agrawal spent 12 years with McKinsey & Company, where he was elected Partner and led both the North American Healthcare Systems & Services Practice and the Private Equity & Principal Investors Practice. He has a bachelor’s degree in molecular biophysics and biochemistry, a master’s degree in molecular biophysics, and a Doctor of Medicine degree, all from Yale University."
    },
    { 
      name: "ERIK WEXLER", 
      role: "Board Member, President & CEO, Providence", 
      image: "https://i.ibb.co/999pHDWt/wexler-erik-1.jpg",
      bio: "Erik Wexler is president and CEO of Providence. He is responsible for a diverse, seven-state family of organizations focused on delivering health for a better world by ensuring access to high-quality, compassionate care through 51 hospitals, 1,000 clinics, a global operations center in Hyderabad, India, 129,000 caregivers, and innovative programs in the communities Providence serves and beyond.\n\nSince joining the organization in 2016, Erik has held several executive leadership positions, including Providence’s chief operating officer; president of operations and strategy for Providence’s South Division; and regional chief executive for Providence Southern California. Earlier in his career, Erik served as chief executive for Tenet Healthcare’s Northeast Region, overseeing operations in three states. He also worked for Vanguard Health Systems, and prior to that was senior vice president of LifeBridge Health System.\n\nErik is a member of the Board of Directors of the UCLA Fielding School of Public Health; a board member of R1 (NASDAQ:RCM); and serves on the FBI Healthcare Advisory Council.\n\nErik holds a bachelor’s degree in sociology and an MBA from the University of Hartford in Connecticut. He also was awarded an Honorary Doctorate of Sciences from the Massachusetts College of Pharmacy and Health Sciences."
    },
    { 
      name: "DAVID L. CALLENDER, MD", 
      role: "Board Member, President and CEO, Memorial Hermann", 
      image: "https://i.ibb.co/qqM2rwt/callender.jpg",
      bio: "David L. Callender, MD, joined Memorial Hermann Health System in 2019 as President and CEO. In his role, Dr. Callender is responsible for leading the System’s more than 34,000 employees and 6,400 affiliated physicians across 250 care delivery sites, including 17 hospitals and numerous specialty programs and services.\n\nSince his appointment, he has established a multi-year strategy for Memorial Hermann aimed at enabling the entire health system to create more value for patients and populations; this includes delivering the greatest outcomes at an optimal cost, creating exceptional experiences for patients and a fulfilling work environment for its workforce, and improving health equity in the communities Memorial Hermann serves. \n\nThrough a focus on high-value care, recruitment of highly experienced leadership, service line transformation, facility expansions, strategic investments and partnerships, and philanthropic initiatives, Dr. Callender is leading a robust effort – together with community stakeholders – to help address barriers to health care and overall wellbeing for all Houstonians. \n\nMost recently, Dr. Callender was recognized by the Houston Business Journal as one of Houston’s “Most Admired CEOs” and, for the second consecutive year, was named by Modern Healthcare as one of “The 100 Most Influential People in Healthcare.” Dr. Callender is a tenured Professor of Otolaryngology at the University of Texas Medical Branch (UTMB Health). He serves on the Board of The United Way of Greater Houston and is a member of the University of Houston’s Board of Visitors.\n\nBefore joining Memorial Hermann, Dr. Callender served as President of UTMB Health for 12 years. Other previous roles include Associate Vice Chancellor and Chief Executive Officer for the UCLA Hospital System and Executive Vice President and Chief Operating Officer for The University of Texas MD Anderson Cancer Center. Dr. Callender received his medical degree and completed his residency at Baylor College of Medicine. He also completed an oncology fellowship with The University of Texas MD Anderson Cancer Center and earned an MBA from the University of Houston."
    },
    { 
      name: "CARL S. ARMATO", 
      role: "Board Member, President and CEO, Novant Health", 
      image: "https://i.ibb.co/HLQg0Qbq/Carl-Armato.jpg",
      bio: "As president and CEO of Novant Health, Carl Armato leads our thriving integrated health care system of physician clinics, outpatient centers, and hospitals across two states, generating over $7.5 billion in revenue and employing a dedicated workforce of more than 37,000 team members. Recognized as one of the safest health care systems in the U.S. by The Leapfrog Group, Armato transformed Novant Health into one of the top integrated health care delivery networks in the country. While delivering an unprecedented response to the COVID-19 pandemic in 2020, Armato led the $5.3B acquisition of New Hanover Regional Medical Center, establishing a third major operational hub in N.C.\n\nEmbracing a people-centric approach, Armato has fostered an inclusive and supportive corporate culture that prioritizes the diverse needs of its employees. This commitment to inclusivity led to Novant Health being honored on Forbes’ esteemed 2021 America’s Best Employers for Diversity list.\n\nIn addition to serving on the board of directors of Vizient, the largest health care performance improvement company in the U.S., he holds board positions on the American Heart Association’s Southeast chapter, the Juvenile Diabetes Research Foundation Charlotte Chapter Advisory Council, and the Healthcare Institute. He has been recognized as the Most Admired CEO by both the Charlotte Business Journal and the Triad Business Journal. Author of “A Future with Hope: An Inspiring Guide to Overcoming Diabetes,” he was awarded a Lifetime Achievement Award by the American Diabetes Association, Charlotte Chapter. Armato holds a Master of Business Administration from Norwich University and a Bachelor of Science in business administration and accounting from the University of Louisiana at Lafayette."
    },
    { 
      name: "DAVID C. MILLER, MD, MPH", 
      role: "Board Member, CEO Michigan Medicine", 
      associatedWith: "University of Michigan",
      image: "https://i.ibb.co/prPLMvR7/Dave-M.webp",
      bio: "David C. Miller, MD, MPH, assumed the role of executive vice president for medical affairs and CEO of Michigan Medicine on July 1, 2025.\n\nDr. Miller currently serves as executive vice dean for clinical affairs for the University of Michigan Medical School and president of U-M Health. Since 2021, he has led the strategic, operational, clinical, and financial performance of U-M Health, a $8 billion clinical enterprise with nearly 20,000 employees.\n\nUnder his leadership, U-M Health and Michigan Medicine have been recognized among the top hospitals in Michigan and the U.S. by Newsweek and U.S. News & World Report, and as a leading health care employer by Forbes. His strategic BASE framework—Belonging & Inclusion, Access, Safety & Quality, and Experience—has advanced patient and employee experience, improved health equity, and helped align statewide operations across Ann Arbor, Lansing, and Grand Rapids.\n\nDr. Miller has championed innovations to expand access and drive high-reliability care, including optimizing inpatient capacity, enhancing patient flow, and launching Hospital Care at Home. He also led Michigan Medicine’s COVID-19 response and oversaw continued growth in NIH research funding. Dr. Miller is a key advocate for the upcoming D. Dan and Betty Kahn Health Care Pavilion, opening in late 2025.\n\nA Professor of Urology, Dr. Miller maintains a clinical practice focused on prostate cancer. He previously served as chief clinical officer for University Hospital and the Frankel Cardiovascular Center, and from 2011 to 2020, he directed the Michigan Urological Surgery Improvement Collaborative (MUSIC), a network of over 40 practices improving urologic care across Michigan."
    }
  ];

  const members = category === 'executive' ? executives : board;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr">
        {members.map((member, i) => (
          <TeamMember key={i} member={member} index={i} onSelect={setSelectedMember} />
        ))}
      </div>

      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-surface border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-1/3 bg-surfaceHighlight p-12 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/5">
                <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl mb-8 border border-white/10">
                   <img src={selectedMember.image} className="w-full h-full object-cover" alt={selectedMember.name} />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-light uppercase mb-2 tracking-tighter leading-tight">{selectedMember.name}</h3>
                  <p className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] font-black">{selectedMember.role}</p>
                </div>
                {selectedMember.linkedin && (
                   <a href={selectedMember.linkedin} target="_blank" className="mt-8 text-slate-100 hover:text-secondary transition-colors">
                     <Linkedin className="w-6 h-6" />
                   </a>
                )}
              </div>

              <div className="md:w-2/3 p-12 md:p-16 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-primary/40"></div>
                  <span className="text-[10px] font-mono tracking-[0.4em] uppercase font-black text-slate-300 italic">Executive Bio</span>
                </div>
                <div className="text-slate-100 text-[14px] font-light leading-relaxed space-y-6">
                   {selectedMember.bio.split('\n\n').map((para, i) => (
                     <p key={i}>{para}</p>
                   ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E3E438;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Team;