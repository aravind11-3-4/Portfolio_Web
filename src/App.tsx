import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <BackgroundAnimation />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <PortfolioSection />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                AnimatorPro
              </div>
              <p className="text-gray-400 mb-6">
                Bringing imagination to life through stunning visual storytelling
              </p>
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-500">
                  © 2024 Alex Motion. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;