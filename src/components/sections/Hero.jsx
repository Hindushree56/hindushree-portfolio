import { motion } from 'framer-motion';
import { HiArrowDownTray, HiArrowRight } from 'react-icons/hi2';
import profileImage from '../../assets/images/Picture.jpg';
import { profile, socialLinks } from '../../data/portfolio';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';
import { Container } from '../common/Container';
import { Section } from '../common/Section';

const rise = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stats = [{ value: '4', label: 'Projects' }, { value: '1', label: 'Internship' }, { value: '1', label: 'IEEE paper' }, { value: '5', label: 'Skill areas' }];

export function Hero() {
  const { scrollToSection } = useScrollNavigation();
  return <Section className="hero hero-redesign" id="home" aria-labelledby="hero-title">
    <div className="hero-aura hero-aura-one" /><div className="hero-aura hero-aura-two" />
    <Container className="hero-layout">
      <motion.div className="hero-left" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        <motion.h1 className="hero-title" id="hero-title" variants={rise}><span>{profile.name}</span><strong>{profile.role}</strong></motion.h1>
        <motion.p className="hero-lede" variants={rise}>I build responsive web applications, integrate reliable backend services, and create thoughtful digital experiences.</motion.p>
        <motion.div className="hero-cta-row" variants={rise}>
          <button className="hero-primary-cta" type="button" onClick={() => scrollToSection('projects')}>Explore My Work <HiArrowRight /></button>
          <a className="hero-secondary-cta" href={profile.resumeUrl} download><HiArrowDownTray /> Download Resume</a>
        </motion.div>
        <motion.div className="hero-stats" variants={rise} aria-label="Portfolio highlights">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}<sup>+</sup></strong><span>{stat.label}</span></div>)}</motion.div>
        <motion.div className="hero-link-row" variants={rise}>{socialLinks.map(({ label, icon: Icon, href }) => <a href={href} target="_blank" rel="noreferrer" key={label} aria-label={`${label} (opens in a new tab)`}><Icon /></a>)}<a className="hero-email" href={`mailto:${profile.email}`}>{profile.email}</a></motion.div>
      </motion.div>
      <motion.div className="hero-right" initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.5 }}>
        <div className="hero-portrait-ring"><div className="hero-portrait"><img className="hero-profile-image" src={profileImage} alt={`${profile.name} profile`} /></div></div>
      </motion.div>
    </Container>
  </Section>;
}
