import { HiArrowUp } from 'react-icons/hi2';
import { navigation, profile, socialLinks } from '../../data/portfolio';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';
import { Container } from '../common/Container';

export function Footer() {
  const { scrollToSection } = useScrollNavigation();
  const navigate = (event, href) => { event.preventDefault(); scrollToSection(href.slice(1)); };
  return <footer className="site-footer"><Container><div className="footer-top"><a className="brand" href="#home" onClick={(event) => navigate(event, '#home')} aria-label={`${profile.name}, home`}>H<span>.</span></a><nav aria-label="Footer navigation" className="footer-nav">{navigation.map(({ label, href }) => <a href={href} onClick={(event) => navigate(event, href)} key={href}>{label}</a>)}</nav><div className="footer-socials">{socialLinks.map(({ label, href, icon: Icon }) => <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`} key={label}><Icon /></a>)}</div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p><button type="button" onClick={() => scrollToSection('home')}>Back to top <HiArrowUp /></button></div></Container></footer>;
}
