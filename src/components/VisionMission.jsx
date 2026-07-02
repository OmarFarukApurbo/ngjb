import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, Globe, Target } from 'lucide-react';

const VisionMission = () => {
  const [activeAccordion, setActiveAccordion] = useState('vision');

  const accordions = [
    {
      id: 'vision',
      title: 'Vision',
      icon: <Globe className="w-5 h-5 text-emerald-600" />,
      content: 'A new ethical era empowering the future of Bangladeshi journalism. We envision a landscape where truth and integrity are the cornerstones of every narrative.'
    },
    {
      id: 'mission',
      title: 'Mission',
      icon: <Target className="w-5 h-5 text-emerald-600" />,
      content: 'Building a safe, independent, and supportive community. We provide the tools, network, and protection journalists need to pursue truth without fear.'
    },
    {
      id: 'objectives',
      title: 'Objectives',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      content: 'Training, safety, global networking, and research. Our core focus is on elevating the standards of journalism through continuous education and advocacy.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image & Floating Widgets */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-xl border border-gray-100">
              <img 
                src="/modern_journalism.png" 
                alt="Modern Journalism" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
            </div>

            {/* Floating Widget 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute bottom-4 right-4 sm:-bottom-8 sm:-right-8 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck size={16} className="text-emerald-600" />
                </div>
                <span className="font-bold text-sm text-gray-900">100% Ethical</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span>Accuracy</span>
                  <span className="text-emerald-600">Verified</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-emerald-500 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Widget 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-12 -left-8 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-sm font-bold text-gray-900">Global Network Active</span>
            </motion.div>

          </motion.div>

          {/* Right Column: Accordion */}
          <div className="max-w-xl lg:ml-auto w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Core Foundations</h2>
            <p className="text-lg text-gray-600 mb-10">
              Our principles are built on creating a sustainable, ethical, and highly connected environment for the next generation.
            </p>

            <div className="space-y-4">
              {accordions.map((item) => (
                <div 
                  key={item.id} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    activeAccordion === item.id 
                      ? 'border-emerald-200 bg-emerald-50/30 shadow-sm' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl transition-colors ${
                        activeAccordion === item.id ? 'bg-white shadow-sm' : 'bg-gray-50'
                      }`}>
                        {item.icon}
                      </div>
                      <span className={`text-lg font-bold transition-colors ${
                        activeAccordion === item.id ? 'text-emerald-900' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        activeAccordion === item.id ? 'rotate-180 text-emerald-600' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-0 text-gray-600 leading-relaxed pl-16">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
