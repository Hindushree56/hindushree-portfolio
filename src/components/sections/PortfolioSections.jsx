import { HiArrowTopRightOnSquare, HiBriefcase, HiCircleStack, HiDocumentText, HiEnvelope, HiLanguage, HiMapPin, HiPaintBrush, HiPhone, HiServerStack, HiWindow, HiWrenchScrewdriver } from 'react-icons/hi2';
import { certifications, education, experience, profile, projects, skills, socialLinks } from '../../data/portfolio';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { SectionHeading } from '../common/SectionHeading';
import { ContactForm } from './ContactForm';

export function AboutSection() { return <Section id="about"><Container><div className="about-grid"><SectionHeading eyebrow="About me" title="Curious by nature. Focused by craft." /><div className="about-copy"><p>{profile.summary}</p><p>My experience combines full-stack application development with research in vision-based stress detection using facial expressions and convolutional neural networks.</p><div className="mini-facts"><span><HiBriefcase /> Full-stack internship</span><span><HiDocumentText /> IEEE-published research</span></div></div></div></Container></Section>; }

const skillIcons = {
  Languages: HiLanguage,
  Frontend: HiWindow,
  Backend: HiServerStack,
  Databases: HiCircleStack,
  'Developer Tools': HiWrenchScrewdriver,
  Design: HiPaintBrush,
};

export function SkillsSection() { return <Section id="skills" className="section-tint"><Container><SectionHeading eyebrow="Technical toolkit" title="Tools I use to bring ideas to life." description="Technologies and tools I use to design, build, and deliver modern web applications." /><div className="skills-grid">{Object.entries(skills).map(([category, entries]) => { const Icon = skillIcons[category]; return <article className={`skill-card skill-card-${category.toLowerCase()}`} key={category}><div className="skill-card-heading"><span className="skill-icon"><Icon /></span><h3>{category}</h3></div><div className="skill-badges">{entries.map((skill) => <span key={skill}>{skill}</span>)}</div></article>; })}</div></Container></Section>; }

export function ExperienceSection() { return <Section id="experience"><Container><SectionHeading eyebrow="Experience" title="Learning by building in the real world." /><article className="timeline-card"><span className="timeline-dot" /><div className="timeline-meta"><p>{experience.dates}</p><p>{experience.location}</p></div><div><h3>{experience.role}</h3><h4>{experience.company}</h4><ul>{experience.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div></article></Container></Section>; }

export function ProjectsSection() { return <Section id="projects" className="section-tint"><Container><SectionHeading eyebrow="Selected work" title="A selection of things I’ve built." description="Projects spanning machine learning and full-stack web development." /><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className={`project-number project-tone-${index % 4}`}>0{index + 1}</div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-actions"><a href={project.githubUrl} target="_blank" rel="noreferrer">{project.title === 'Vachana LMS' ? 'Project update' : 'GitHub'} <HiArrowTopRightOnSquare /></a><button type="button" disabled aria-disabled="true" title="A live demo is not available for this project">Live demo unavailable</button></div></article>)}</div></Container></Section>; }

export function PublicationsSection() { return <Section id="publications"><Container><SectionHeading eyebrow="Publication" title="Research grounded in practical impact." /><article className="publication-card"><p>IEEE International Conference on Artificial Intelligence and Data Engineering (AIDE 2026)</p><h3>A System and Method for Vision-Based Stress Detection Using Facial Expressions and Convolutional Neural Networks</h3><p>Published in IEEE Xplore Digital Library and presented at AIDE 2026.</p><a href="https://doi.org/10.1109/AIDE69088.2026.11544791" target="_blank" rel="noreferrer">View official IEEE paper <HiArrowTopRightOnSquare /></a></article></Container></Section>; }

export function EducationSection() { return <Section id="education" className="section-tint"><Container><SectionHeading eyebrow="Education & learning" title="A foundation for continual growth." /><div className="education-grid"><div>{education.map((item) => <article className="education-item" key={item.institution}><p>{item.dates}</p><h3>{item.degree}</h3><h4>{item.institution}</h4><span>{item.location}</span></article>)}</div><div className="certification-list">{certifications.map((certification) => <div key={certification}><HiDocumentText />{certification}</div>)}</div></div></Container></Section>; }

export function ContactSection() { return <Section id="contact"><Container><div className="contact-grid"><div><SectionHeading eyebrow="Get in touch" title="Let’s build something meaningful." description="I’m open to discussing opportunities, projects, and collaborations." /><div className="contact-details"><a href={`mailto:${profile.email}`}><HiEnvelope />{profile.email}</a><a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}><HiPhone />{profile.phone}</a><span><HiMapPin />{profile.location}</span></div><div className="contact-socials">{socialLinks.slice(0, 2).map(({ label, icon: Icon, href }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}><Icon /></a>)}</div></div><ContactForm /></div></Container></Section>; }

export function PortfolioSections() { return <><AboutSection /><SkillsSection /><ExperienceSection /><ProjectsSection /><PublicationsSection /><EducationSection /><ContactSection /></>; }
