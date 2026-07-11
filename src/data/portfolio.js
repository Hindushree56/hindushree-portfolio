import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { HiOutlineEnvelope } from 'react-icons/hi2';

// Content in this file is sourced from Hindushree's supplied resume.
export const profile = {
  name: 'Hindushree H V',
  role: 'Full Stack Developer',
  location: 'Bengaluru, India',
  email: 'hindushreehv46@gmail.com',
  phone: '+91-6361702971',
  summary:
    'MCA graduate with internship experience in full-stack web development and an IEEE-published research paper in AI-based stress detection.',
  availability: 'Open to opportunities',
  resumeUrl: `${import.meta.env.BASE_URL}Hindushree_HV_Resume.pdf`,
};

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

// The resume contains LinkedIn/GitHub labels but no complete public URLs.
export const socialLinks = [
  { label: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/hindushreehv56/' },
  { label: 'GitHub', icon: FaGithub, href: 'https://github.com/Hindushree56' },
  { label: 'Email', icon: HiOutlineEnvelope, href: `mailto:${profile.email}` },
];

export const skills = {
  Languages: ['JavaScript', 'Python', 'Java', 'C', 'C++', 'SQL'],
  Frontend: ['React.js', 'HTML5', 'CSS3', 'AngularJS'],
  Backend: ['Node.js', 'REST APIs', 'Database Design'],
  Databases: ['MySQL', 'Oracle', 'MongoDB'],
  'Developer Tools': ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Postman'],
  Design: ['Figma', 'Canva', 'Adobe XD'],
};

export const projects = [
  { title: 'Sign Language Translator', type: 'Machine Learning Project', description: 'Developed a real-time sign language translator using CNN, MediaPipe and OpenCV.', technologies: ['Python', 'TensorFlow', 'Keras', 'MediaPipe', 'OpenCV', 'NumPy', 'Streamlit'], githubUrl: 'https://github.com/Hindushree56/Sign_Language_Translator' },
  { title: 'Diabetes Prediction Using Machine Learning', type: 'Machine Learning Project', description: 'Developed a machine learning model for diabetes prediction with data preprocessing and visualization.', technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'], githubUrl: 'https://github.com/Hindushree56/diabetes-prediction-django' },
  { title: 'Event Management', type: 'Full Stack Web Development', description: 'Developed an event management application with authentication and event management features.', technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'AngularJS', 'jQuery', 'JavaScript'], githubUrl: 'https://github.com/Hindushree56/event-management' },
  { title: 'Vachana LMS', type: 'Full Stack Developer', description: 'Developed a Learning Management System with a relational schema, REST APIs and role-based modules for learners and administrators.', technologies: ['React.js', 'TypeScript', 'Node.js', 'MySQL'], githubUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7458122848935542784/' },
];

export const experience = { company: 'Abhimo Technologies Private Limited', location: 'Mangalore, India', role: 'Full Stack Developer Intern', dates: 'Jan 2026 – May 2026', highlights: ['Built database-driven web applications using React.js, Node.js and MySQL.', 'Wrote SQL queries for data retrieval, validation and backend integration.', 'Collaborated with developers to troubleshoot application issues and improve database performance.', 'Contributed to a client-facing project approved by an Australian client.'] };

export const education = [
  { institution: 'NMAM Institute of Technology', location: 'Nitte, India', degree: 'Master of Computer Application', dates: 'August 2024 – June 2026' },
  { institution: 'KLE Society’s S Nijalingappa College', location: 'Bengaluru, India', degree: 'Bachelor of Computer Application', dates: 'Oct 2021 – July 2024' },
];

export const certifications = ['Full Stack Development — Coursera, Meta', 'Microsoft Azure, AI and Applied AI Learning Challenges', 'Cloud Computing SDP — Wipfli, Bangalore', 'Introduction to MongoDB — Coursera'];
