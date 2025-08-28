import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
  color: string;
}

const categorizedSkills: { category: string; items: Skill[] }[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'C', percentage: 70, icon: '💻', color: 'from-blue-500 to-cyan-500' },
      { name: 'Java', percentage: 75, icon: '☕', color: 'from-amber-500 to-orange-500' },
      { name: 'Python', percentage: 80, icon: '🐍', color: 'from-green-500 to-emerald-500' },
    ],
  },
  {
    category: 'Frontend Languages',
    items: [
      { name: 'HTML', percentage: 90, icon: '🌐', color: 'from-red-500 to-orange-500' },
      { name: 'CSS', percentage: 85, icon: '🎨', color: 'from-blue-500 to-indigo-500' },
      { name: 'ReactJS', percentage: 80, icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', percentage: 75, icon: '🗄️', color: 'from-yellow-500 to-amber-600' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', percentage: 85, icon: '🔧', color: 'from-gray-500 to-gray-700' },
      { name: 'GitHub', percentage: 85, icon: '🐙', color: 'from-slate-500 to-gray-700' },
      { name: 'Jenkins', percentage: 70, icon: '⚙️', color: 'from-rose-500 to-pink-600' },
      { name: 'Docker', percentage: 70, icon: '🐳', color: 'from-sky-500 to-blue-600' },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Programming Languages: C, Java, Python. Front End: HTML, CSS, ReactJS. Database: MySQL. Tools: Git, GitHub, Jenkins, Docker.
          </p>
        </motion.div>

        {/* Categorized Skills */}
        {categorizedSkills.map(({ category, items }, catIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {category}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h4>
                  </div>

                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        Proficiency
                      </span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: (catIndex * 0.1) + index * 0.1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute right-0 top-0 h-full w-2 bg-white/30 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Circular Progress */}
                  <div className="mt-6">
                    <div className="relative w-20 h-20 mx-auto">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="url(#gradient)"
                          strokeWidth="8"
                          fill="transparent"
                          strokeLinecap="round"
                          strokeDasharray="251.2"
                          initial={{ strokeDashoffset: 251.2 }}
                          animate={isInView ? { 
                            strokeDashoffset: 251.2 - (251.2 * skill.percentage) / 100 
                          } : { strokeDashoffset: 251.2 }}
                          transition={{ duration: 2, delay: (catIndex * 0.1) + index * 0.1, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Tools grid removed; skills are categorized above */}
      </div>
    </section>
  );
};

export default SkillsSection;