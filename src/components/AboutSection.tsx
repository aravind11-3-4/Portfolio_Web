import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              About <span className="text-blue-600">Me</span>
            </motion.h2>
            
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4 text-lg text-gray-600 dark:text-gray-300"
            >
              <motion.p variants={itemVariants}>
                With over 8 years of experience in animation and motion graphics, I specialize in creating 
                compelling visual narratives that captivate audiences and bring brands to life.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                My journey began with a passion for storytelling through visual art. I've worked with 
                Fortune 500 companies, startups, and creative agencies to deliver award-winning 
                animations that drive engagement and results.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                From 3D character animation to explainer videos, I combine technical expertise with 
                creative vision to produce animations that not only look stunning but also serve 
                strategic business objectives.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-3xl font-bold text-blue-600"
                >
                  150+
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-3xl font-bold text-purple-600"
                >
                  50+
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-3xl font-bold text-green-600"
                >
                  8+
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-3xl font-bold text-pink-600"
                >
                  25+
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400">Awards Won</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About me workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80 z-0"
            />
            
            <motion.div
              initial={{ scale: 0, rotate: 45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 45 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full opacity-80 z-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;