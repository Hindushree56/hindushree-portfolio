import { motion } from 'framer-motion';
import { HiArrowDown, HiArrowDownTray } from 'react-icons/hi2';
import { Container } from '../common/Container';
import { profile, socialLinks } from '../../data/portfolio';
import { Section } from '../common/Section';
import { useScrollNavigation } from '../../context/ScrollContext';

const rise = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

export function Hero() {
  const { scrollToSection } = useScrollNavigation();
  return (
    <Section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <Container className="hero-grid">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p className="eyebrow" variants={rise}><span /> {profile.availability}</motion.p>
          <motion.h1 id="hero-title" variants={rise}>Crafting thoughtful <em>digital</em> experiences.</motion.h1>
          <motion.p className="hero-intro" variants={rise}>
            I’m <strong>{profile.name}</strong>, a {profile.role} focused on building responsive web applications and meaningful software experiences.
          </motion.p>
          <motion.div className="hero-actions" variants={rise}>
            <button className="button button-primary" type="button" onClick={() => scrollToSection('projects')}>Explore my work <HiArrowDown /></button>
            <a className="button button-secondary" href={profile.resumeUrl} download><HiArrowDownTray /> Resume</a>
          </motion.div>
          <motion.div className="hero-socials" variants={rise}>
            {socialLinks.map(({ label, icon: Icon, href }) => <a href={href} target="_blank" rel="noreferrer" key={label} aria-label={`${label} (opens in a new tab)`}><Icon /></a>)}
            <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
          </motion.div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <div className="profile-frame">
            <div className="profile-placeholder" aria-label="Profile image placeholder">HV</div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="experience-chip"><strong>Full Stack</strong><span>Developer</span></div>
          </div>
          <div className="visual-note">Based in <strong>{profile.location}</strong></div>
        </motion.div>
      </Container>
      <button className="scroll-cue" type="button" onClick={() => scrollToSection('about')} aria-label="Scroll to about section"><span>Scroll to discover</span><HiArrowDown /></button>
    </Section>
  );
}
