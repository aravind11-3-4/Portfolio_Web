import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";


const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Education', href: '#education' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Certificates', href: '#certificates' },
	{ name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		setIsOpen(false);
	};

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Aravindhasamy R
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <ul className="flex gap-8">
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1, color: "#2563eb" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="cursor-pointer text-gray-800 dark:text-gray-200"
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
          <button onClick={toggleTheme} className="text-gray-800 dark:text-gray-200">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>


        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="text-gray-800 dark:text-gray-200">
            {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-white dark:bg-gray-800 shadow-lg p-8 flex flex-col gap-8 text-xl z-50"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 dark:text-gray-200"
                >
                  <X size={32} />
                </button>
              </div>
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.2, ease: "easeInOut" }}
                  className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}