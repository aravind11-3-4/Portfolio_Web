
import React, { useState } from 'react';
import styles from './Navigation.module.css';


const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Certificates', href: '#certificates' },
	{ name: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		setIsMenuOpen(false);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles['navbar-logo']}>AnimatorPro</div>
			<div className={styles['navbar-links']}>
				{navItems.map((item) => (
					<button
						key={item.name}
						className={styles['navbar-link']}
						onClick={() => handleNavClick(item.href)}
					>
						{item.name}
					</button>
				))}
			</div>
			<button
				className={styles['menu-toggle']}
				onClick={() => setIsMenuOpen((open) => !open)}
				aria-label="Toggle menu"
			>
				{isMenuOpen ? '✕' : '☰'}
			</button>
			{isMenuOpen && (
				<div className={styles['mobile-menu']}>
					{navItems.map((item) => (
						<button
							key={item.name}
							className={styles['navbar-link']}
							onClick={() => handleNavClick(item.href)}
						>
							{item.name}
						</button>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navigation;