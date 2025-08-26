import React from 'react';
import { motion } from 'framer-motion';

const EducationSection: React.FC = () => {
  const education = [
    {
      school: 'Master of Computer Applications',
      institution: 'Your University Name',
      period: '2023 – 2025',
      details: 'Focus on full‑stack development, algorithms, and cloud fundamentals.'
    },
    {
      school: 'Bachelor of Science in Computer Science',
      institution: 'Your College Name',
      period: '2020 – 2023',
      details: 'Core CS subjects, data structures, OOP, and web technologies.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Education
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A snapshot of my academic background and areas of specialization.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block" />
          <div className="space-y-10">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={`md:text-right ${index % 2 === 0 ? '' : 'md:order-2'}`}>
                  <div className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                    {item.period}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {item.school}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{item.institution}</div>
                </div>
                <div className={`${index % 2 === 0 ? '' : 'md:order-1'}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300">{item.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;


