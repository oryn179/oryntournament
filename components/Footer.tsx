
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="glassmorphism mt-12 py-12 border-t border-neon/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-black text-neon font-mono tracking-tighter">ORYN SERVER</h3>
            <p className="text-gray-500 text-sm font-mono leading-relaxed max-w-sm">
              The premium hub for video editors. Built for those who live frame by frame. Elevate your craft, compete for the crown.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white font-mono tracking-[0.2em] uppercase">Navigation</h4>
            <ul className="space-y-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
              <li><Link to="/" className="hover:text-neon transition-colors">• Home</Link></li>
              <li><Link to="/vote" className="hover:text-neon transition-colors">• Vote</Link></li>
              <li><Link to="/gift-votes" className="hover:text-neon transition-colors">• Gift Votes</Link></li>
              <li><Link to="/prize" className="hover:text-neon transition-colors">• Prize</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white font-mono tracking-[0.2em] uppercase">Support</h4>
            <ul className="space-y-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
              <li><a href="https://t.me/oryn179" className="hover:text-neon transition-colors">• Telegram Admin</a></li>
              <li><Link to="/rate" className="hover:text-neon transition-colors">• Rate Us</Link></li>
              <li><Link to="/admin-secure-portal-0xORYN" className="hover:text-gray-800 transition-colors opacity-20">• Admin</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-700 tracking-[0.4em] uppercase">
          <span>&copy; 2024 ORYN SERVER PORTAL</span>
          <span className="mt-4 md:mt-0">DESIGNED BY ORYN TEAM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
