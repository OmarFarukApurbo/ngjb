import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Smartphone } from 'lucide-react';

const Membership = () => {
  const tiers = [
    {
      title: 'Student Member',
      icon: <GraduationCap className="w-8 h-8 text-emerald-600" />,
      description: 'For university students pursuing a degree in journalism or media studies.',
      perks: ['Access to Academy Basics', 'Student Networking Events', 'Mentorship Matching']
    },
    {
      title: 'Associate Member',
      icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
      description: 'For early-career journalists with up to 3 years of professional experience.',
      perks: ['Advanced Skill Workshops', 'Job Board Access', 'Legal Advice Hotline']
    },
    {
      title: 'Professional Member',
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      description: 'For established journalists seeking leadership roles and global reach.',
      perks: ['Pro-bono Legal Representation', 'Fellowship Grants', 'Global Press Card Assistance']
    }
  ];

  return (
    <section className="py-24 bg-emerald-50/50 relative border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Governance & Membership</h2>
          <p className="text-lg text-gray-600">
            Join a structured, recognized body that validates your profession and protects your rights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col h-full relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-100 group-hover:bg-emerald-500 transition-colors"></div>

              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                {tier.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{tier.title}</h3>
              <p className="text-gray-600 mb-8 flex-1">{tier.description}</p>
              
              <div className="space-y-3 mb-8">
                {tier.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    {perk}
                  </div>
                ))}
              </div>

              {/* App Access Tag */}
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                  <Smartphone size={14} />
                  App Access Included
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Membership;
