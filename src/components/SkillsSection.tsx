import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const categorizedSkills: { category: string; items: Skill[] }[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'C', icon: 'https://icon.icepanel.io/Technology/svg/C.svg', color: 'shadow-blue-500/50' },
      { name: 'Java', icon: 'https://icon.icepanel.io/Technology/svg/Java.svg', color: 'shadow-orange-500/50' },
      { name: 'Python', icon: 'https://icon.icepanel.io/Technology/svg/Python.svg', color: 'shadow-green-500/50' },
    ],
  },
  {
    category: 'Frontend Languages',
    items: [
      { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26', color: 'shadow-red-500/50' },
      { name: 'CSS', icon: 'https://icon.icepanel.io/Technology/svg/CSS3.svg', color: 'shadow-blue-500/50' },
      { name: 'ReactJS', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: 'shadow-cyan-500/50' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', color: 'shadow-yellow-500/50' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: 'shadow-gray-500/50' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717', color: 'shadow-slate-500/50' },
      { name: 'Jenkins', icon: 'https://icon.icepanel.io/Technology/svg/Jenkins.svg', color: 'shadow-rose-500/50' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', color: 'shadow-sky-500/50' },
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
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`bg-white dark:bg-gray-900 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:${skill.color}`}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16 mb-4" />
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
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