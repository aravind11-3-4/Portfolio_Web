import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { isDarkMode, toggleTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Certificates', href: '#certificates' },
		{ name: 'Contact', href: '#contact' },
	];

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			// Add a small delay to ensure the element is fully rendered
			setTimeout(() => {
				element.scrollIntoView({ 
					behavior: 'smooth',
					block: 'start'
				});
			}, 100);
		} else {
			console.log('Element not found:', href);
		}
		setIsMenuOpen(false);
	};

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
						: 'bg-transparent'
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-3 items-center h-16">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent justify-self-start"
						>
							AnimatorPro
						</motion.div>

						{/* Desktop Navigation - Centered */}
						<div className="hidden md:flex justify-center items-center space-x-8">
							{navItems.map((item) => (
								<motion.button
									key={item.name}
									onClick={() => handleNavClick(item.href)}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
								>
									{item.name}
								</motion.button>
							))}
						</div>

						{/* Right Controls */}
						<div className="flex items-center justify-end space-x-4">
							{/* Theme Toggle (Desktop) */}
							<motion.button
								onClick={toggleTheme}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="hidden md:inline-flex p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
							>
								{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
							</motion.button>

							{/* Mobile Menu Button + Theme Toggle */}
							<div className="md:hidden flex items-center space-x-4">
								<motion.button
									onClick={toggleTheme}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
								>
									{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
								</motion.button>
								
								<motion.button
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="p-2"
								>
									{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
								</motion.button>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700"
						>
							<div className="px-4 py-4 space-y-4">
								{navItems.map((item) => (
									<motion.button
										key={item.name}
										onClick={() => handleNavClick(item.href)}
										whileHover={{ x: 10 }}
										className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
									>
										{item.name}
									</motion.button>
								))}
								<div className="flex space-x-2 pt-4">
									<motion.button
										whileHover={{ scale: 1.05 }}
										className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
									>
										<Eye size={16} />
										<span>View Resume</span>
									</motion.button>
									<motion.button
										whileHover={{ scale: 1.05 }}
										className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
									>
										<Download size={16} />
										<span>Download</span>
									</motion.button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	);
};

export default Navigation;