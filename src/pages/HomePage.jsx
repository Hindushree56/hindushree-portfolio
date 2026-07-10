import { Hero } from '../components/sections/Hero';
import { AboutSection, ContactSection, EducationSection, ExperienceSection, ProjectsSection, PublicationsSection, SkillsSection } from '../components/sections/PortfolioSections';

export function HomePage() {
  return <><Hero /><AboutSection /><SkillsSection /><ExperienceSection /><ProjectsSection /><PublicationsSection /><EducationSection /><ContactSection /></>;
}
