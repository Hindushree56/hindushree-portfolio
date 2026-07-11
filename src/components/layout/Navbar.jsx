import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { HiBars3BottomRight, HiMoon, HiSun, HiXMark } from 'react-icons/hi2';
import { navigation } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';
import { Container } from '../common/Container';

export function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navigation.map(({ href }) => href.slice(1)).join('|'));
  const { scrollToSection } = useScrollNavigation();
  const closeMenu = () => setIsOpen(false);
  const handleNavigation = (event, href) => { event.preventDefault(); scrollToSection(href.slice(1)); closeMenu(); };

  return (
    <header className="navbar-wrap">
      <Container className="navbar">
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(({ label, href }) => (
            <a className={activeSection === href.slice(1) ? 'active' : ''} aria-current={activeSection === href.slice(1) ? 'page' : undefined} href={href} onClick={(event) => handleNavigation(event, href)} key={href}>{label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </button>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation menu">
            {isOpen ? <HiXMark /> : <HiBars3BottomRight />}
          </button>
        </div>
      </Container>
      <AnimatePresence>
        {isOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} aria-label="Mobile navigation">
            {navigation.map(({ label, href }) => <a href={href} key={href} onClick={(event) => handleNavigation(event, href)}>{label}</a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
