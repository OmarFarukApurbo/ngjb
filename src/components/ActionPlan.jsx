import React from 'react';
import { motion } from 'framer-motion';

const ActionPlan = () => {
  const planSteps = [
    {
      quarter: 'Q1',
      title: 'Foundation & App Beta',
      desc: 'Launch of the core community platform and beta release of the NGJB mobile app.'
    },
    {
      quarter: 'Q2',
      title: 'Academy Rollout',
      desc: 'First cohort of the Digital Journalism Masterclass begins across 3 major cities.'
    },
    {
      quarter: 'Q3',
      title: 'Legal Network Activation',
      desc: 'Partnering with top tier law firms to launch the 24/7 legal protection hotline.'
    },
    {
      quarter: 'Q4',
      title: 'National Summit',
      desc: 'Hosting the inaugural NGJB Summit, bringing together 500+ journalists.'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Backed by a clear roadmap and sustainable model.</h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-24 max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-100"></div>
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {planSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative pl-16 md:pl-0"
              >
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 bg-white rounded-full border-4 border-emerald-50 shadow-sm flex items-center justify-center font-bold text-emerald-600 text-sm z-10">
                  {step.quarter}
                </div>
                
                {/* Connecting Line (Mobile) */}
                <div className="md:hidden absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-gray-100"></div>
                
                {/* Content */}
                <div className="pt-2 md:pt-16 md:text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Big Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto py-12"
        >
          <div className="w-16 h-1 bg-emerald-500 mx-auto mb-10 rounded-full"></div>
          <h3 className="text-3xl md:text-5xl font-serif italic text-gray-900 leading-tight">
            "NGJB is not a union—"<br className="hidden md:block" />it's a Movement."
          </h3>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-10 rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default ActionPlan;
