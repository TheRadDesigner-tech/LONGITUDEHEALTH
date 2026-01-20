
import React from 'react';
import { Share2, AtSign, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-light py-20 border-t border-border mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
           <Link to="/" className="flex flex-col leading-none cursor-pointer group mb-6 w-fit">
            <div className="flex items-start">
              <span className="font-display font-bold text-2xl tracking-wide text-light group-hover:text-primary transition-colors">LONGITUDE</span>
              <div className="ml-1 w-2 h-2 border-[2.5px] border-light group-hover:border-primary transition-colors rounded-full mt-1"></div>
            </div>
            <span className="font-display font-bold text-[10px] tracking-[0.3em] text-light group-hover:text-primary transition-colors self-end mr-1">HEALTH</span>
          </Link>
          <p className="text-slate-400 max-w-sm mb-8 font-light">
            Connecting systems, technology, and payors to deliver better care more efficiently through shared innovation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center hover:bg-primary hover:text-background transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center hover:bg-primary hover:text-background transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-mono text-sm text-primary uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-4 font-light text-slate-300">
            <li><Link to="/leadership" className="hover:text-primary transition-colors">Leadership</Link></li>
            <li><Link to="/members" className="hover:text-primary transition-colors">Members</Link></li>
            <li><Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
            <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
            <li><Link to="/newsroom" className="hover:text-primary transition-colors">Newsroom</Link></li>
             <li><Link to="/in-memory-paul-mango" className="hover:text-primary transition-colors text-accent">In Memory of Paul Mango</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-mono text-sm text-primary uppercase tracking-widest mb-6">Legal & Connect</h4>
          <ul className="space-y-4 font-light text-slate-300">
            <li><Link to="/connect" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-mono">
        <p>© 2025 Longitude Health.</p>
        <p>Designed for the Future.</p>
      </div>
    </footer>
  );
};

export default Footer;
