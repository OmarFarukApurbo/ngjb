import React from 'react';
import { MessageSquare, Globe, Mail } from 'lucide-react';
import { AppleIcon, GooglePlayIcon } from './icons';

const Footer = () => {
  return (
    <div className="relative pt-32">
      {/* Overlapping Pre-Footer CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 sm:px-6 lg:px-8 z-20">
        <div className="bg-emerald-600 rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(5,150,105,0.5)] flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let's make journalism work smarter.
            </h2>
            <p className="text-emerald-100 text-lg">
              Download the mobile app or join the movement today to get unprecedented support and resources.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3.5 rounded-full font-bold transition-colors shadow-sm">
              Join as Member
            </button>
            <button className="bg-transparent text-white border-2 border-emerald-400 hover:bg-emerald-500 hover:border-emerald-500 px-8 py-3.5 rounded-full font-bold transition-all">
              Request a Proposal
            </button>
          </div>

        </div>
      </div>

      {/* Main Dark Footer */}
      <footer className="bg-[#0A192F] pt-80 sm:pt-64 lg:pt-40 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6 bg-white/5 inline-flex p-2 rounded-xl">
                <img src="/Logo.png" alt="NGJB Logo" className="h-8 w-auto object-contain brightness-0 invert" />
                <span className="font-bold text-xl tracking-tight text-white hidden sm:block">NGJB</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Empowering the future of Bangladeshi journalism through community, ethics, and technology.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Partners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Solutions</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Academy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Legal Support</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Research</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-4 lg:col-span-1 mt-8 lg:mt-0">
              <h4 className="text-white font-semibold mb-6">Get the App</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 px-4 py-2 border border-slate-700 rounded-xl hover:border-emerald-500 hover:bg-slate-800 transition-all text-white group">
                  <AppleIcon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider text-slate-400">Download on the</div>
                    <div className="text-xs font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 border border-slate-700 rounded-xl hover:border-emerald-500 hover:bg-slate-800 transition-all text-white group">
                  <GooglePlayIcon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider text-slate-400">Get it on</div>
                    <div className="text-xs font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Next Generation Journalists of Bangladesh. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
