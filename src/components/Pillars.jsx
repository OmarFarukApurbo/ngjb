import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Scale, Shield, Users, LineChart } from 'lucide-react';

const Pillars = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'academy',
      title: 'NGJB Academy',
      icon: <BookOpen className="w-6 h-6" />,
      image: '/pillar_academy.png',
      content: {
        title: 'Continuous Professional Development',
        description: 'Empowering journalists with modern skills, digital literacy, and fact-checking methodologies through structured online and offline courses.',
        bullets: ['Masterclasses with industry veterans', 'Digital safety and cybersecurity training', 'Data journalism and visualization workshops']
      }
    },
    {
      id: 'ethics',
      title: 'Ethics & Accountability',
      icon: <Scale className="w-6 h-6" />,
      image: '/pillar_ethics.png',
      content: {
        title: 'Upholding the Highest Standards',
        description: 'Creating a framework for unbiased, transparent, and strictly ethical reporting that builds public trust.',
        bullets: ['Standardized code of conduct', 'Peer review and accountability boards', 'Misinformation combat strategies']
      }
    },
    {
      id: 'safety',
      title: 'Safety & Legal Support',
      icon: <Shield className="w-6 h-6" />,
      image: '/pillar_safety.png',
      content: {
        title: 'Protecting the Truth-Tellers',
        description: 'Providing a safety net for journalists facing physical, digital, or legal threats in their pursuit of the truth.',
        bullets: ['24/7 legal aid hotline', 'Pro-bono representation network', 'Physical and digital security protocols']
      }
    },
    {
      id: 'mentorship',
      title: 'Mentorship & Fellowship',
      icon: <Users className="w-6 h-6" />,
      image: '/pillar_mentorship.png',
      content: {
        title: 'Bridging the Generational Gap',
        description: 'Connecting young, aspiring reporters with seasoned veterans to foster knowledge transfer and career growth.',
        bullets: ['1-on-1 career guidance', 'Funded reporting fellowships', 'Cross-border collaboration opportunities']
      }
    },
    {
      id: 'research',
      title: 'Research & Publication',
      icon: <LineChart className="w-6 h-6" />,
      image: '/pillar_research.png',
      content: {
        title: 'Data-Driven Insights',
        description: 'Publishing deep-dive research into the state of media, audience behavior, and the economics of journalism in Bangladesh.',
        bullets: ['Annual media landscape reports', 'Audience trust indices', 'Revenue model case studies']
      }
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Intelligent Journalism Community</h2>
          <p className="text-lg text-gray-600">
            A comprehensive ecosystem designed to elevate every aspect of a journalist's career, from training to legal protection.
          </p>
        </div>

        {/* Tab Selector - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto pb-4 mb-8 justify-start md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex bg-white rounded-full p-1.5 shadow-sm border border-gray-100 min-w-max">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(index)}
                className={`relative px-6 py-3 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${
                  activeTab === index 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-emerald-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{pillar.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-12 min-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
            >
              <div className="order-2 md:order-1">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                  {pillars[activeTab].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillars[activeTab].content.title}</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {pillars[activeTab].content.description}
                </p>
                <ul className="space-y-4">
                  {pillars[activeTab].content.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                      <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative order-1 md:order-2 h-64 md:h-full w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <motion.img 
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={pillars[activeTab].image} 
                  alt={pillars[activeTab].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Pillars;
