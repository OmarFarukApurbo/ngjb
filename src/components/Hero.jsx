import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { AppleIcon, GooglePlayIcon } from './icons';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Community First
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Empowering the future of <span className="text-emerald-600">Bangladeshi</span> journalism.
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Boost performance with a unified hybrid journalism community that supports ethical, real-time decisions across the value chain.
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center flex-wrap gap-3 sm:gap-6 mb-10">
              <a href="#join" className="group relative inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold rounded-full text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-[0_8px_25px_-8px_rgba(16,185,129,0.6)] transition-all hover:-translate-y-0.5 overflow-hidden w-auto">
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                  Join Us
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </a>

              <button className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-emerald-600 font-semibold transition-colors group text-sm sm:text-base shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                See how it works
              </button>
            </div>

            {/* App Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <a href="#" className="flex items-center gap-3 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
                <AppleIcon className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider leading-none opacity-80">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
                <GooglePlayIcon className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider leading-none opacity-80">Get it on</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>

            {/* Trust Indicator with Avatars */}
            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="User" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <div className="text-sm text-gray-500 font-medium mt-0.5">
                  Trusted by 15,000+ regional journalists
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] hidden md:flex items-center justify-center lg:justify-end"
          >
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="/hero_app_v2.png"
              alt="NGJB App Mockup"
              className="w-full max-w-lg object-contain drop-shadow-2xl rounded-3xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
