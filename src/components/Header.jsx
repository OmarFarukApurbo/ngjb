import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AppleIcon, GooglePlayIcon } from './icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [appDropdownOpen, setAppDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 cursor-pointer z-50">
          <img src="/Logo.png" alt="NGJB Logo" className="h-10 w-auto object-contain" />
          <span className="font-bold text-xl tracking-tight text-gray-900 hidden sm:block">NGJB</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#solutions" className="hover:text-emerald-600 transition-colors">Solutions</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#resources" className="hover:text-emerald-600 transition-colors">Resources</a>
          <a href="#partners" className="hover:text-emerald-600 transition-colors">Partners</a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button 
              onMouseEnter={() => setAppDropdownOpen(true)}
              onMouseLeave={() => setAppDropdownOpen(false)}
              className="flex items-center gap-1 text-gray-600 hover:text-emerald-600 font-medium py-2"
            >
              Get the App <ChevronDown size={16} />
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {appDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setAppDropdownOpen(true)}
                  onMouseLeave={() => setAppDropdownOpen(false)}
                  className="absolute top-full right-0 mt-1 w-48 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden"
                >
                  <div className="flex flex-col py-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group">
                      <div className="bg-gray-100 p-2 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                        <AppleIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Download on the</div>
                        <div className="text-sm font-semibold text-gray-900">App Store</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group">
                      <div className="bg-gray-100 p-2 rounded-full group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <GooglePlayIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">GET IT ON</div>
                        <div className="text-sm font-semibold text-gray-900">Google Play</div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#join" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm flex items-center gap-2 group">
            Join Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-gray-900" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white z-40 md:hidden overflow-y-auto pt-24 pb-8 px-4"
          >
            <div className="flex flex-col gap-6 text-xl font-medium text-gray-900">
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</a>
              <a href="#partners" onClick={() => setMobileMenuOpen(false)}>Partners</a>
              <div className="h-px bg-gray-100 my-2"></div>
              <div className="flex gap-4">
                <a href="#" className="flex items-center justify-center flex-1 gap-2 bg-gray-100 p-3 rounded-xl hover:bg-gray-200">
                   <AppleIcon className="w-5 h-5" />
                </a>
                <a href="#" className="flex items-center justify-center flex-1 gap-2 bg-gray-100 p-3 rounded-xl hover:bg-gray-200">
                   <GooglePlayIcon className="w-5 h-5" />
                </a>
              </div>
              <a href="#join" onClick={() => setMobileMenuOpen(false)} className="bg-emerald-600 text-white p-4 rounded-xl text-center font-bold">
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
