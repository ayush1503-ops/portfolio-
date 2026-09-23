import portraitImg from '../assets/images/ayush_portrait_cinematic_1790130485024.jpg';
import pashaImg from '../assets/images/project_the_pasha_atelier_1790130497809.jpg';
import gamesImg from '../assets/images/project_games_studio_1790130515146.jpg';
import onionImg from '../assets/images/project_onion_grader_ai_1790130527776.jpg';
import commerceImg from '../assets/images/project_pulse_commerce_1790130540973.jpg';
import editingBoxImg from '../assets/images/editing_box_preview_1790143319164.jpg';
import skillsHologramImg from '../assets/images/skills_hologram_core_1790143347930.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  img: string;
  tag: string;
  category: 'Web & E-Commerce' | '3D & Interactive' | 'AI & Vision' | 'Creative Studio';
  desc: string;
  techs: string[];
  featured?: boolean;
  metrics?: string;
}

export const AYUSH_PROJECTS: ProjectItem[] = [
  {
    id: 'the-pasha-atelier',
    title: 'The Pasha Atelier',
    url: 'https://thepashaatelier.vercel.app/',
    img: pashaImg,
    tag: 'Luxury E-Commerce',
    category: 'Web & E-Commerce',
    desc: 'Editorial bespoke couture digital atelier celebrating tailored luxury, fluid interactions, and high-conversion client consultations.',
    techs: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
    metrics: 'Live Vercel Production'
  },
  {
    id: 'games-studio',
    title: 'NexStudio Games',
    url: 'https://games-studio-smoky.vercel.app/',
    img: gamesImg,
    tag: 'Interactive & 3D WebGL',
    category: '3D & Interactive',
    desc: 'Avant-garde gaming studio website featuring spatial Three.js viewports, real-time lighting cues, and buttery smooth 60fps animations.',
    techs: ['React', 'Three.js', 'WebGL', 'Tailwind CSS'],
    featured: true,
    metrics: '60fps Spatial WebGL'
  },
  {
    id: 'onion-grader-ai',
    title: 'Onion Grader AI',
    url: 'https://onion-grader-2-pjdu.vercel.app/',
    img: onionImg,
    tag: 'Computer Vision & AI',
    category: 'AI & Vision',
    desc: 'Automated agricultural inspection platform using computer vision heuristics to classify crop quality, surface defects, and batch metrics.',
    techs: ['Python', 'OpenCV', 'React', 'PostgreSQL'],
    featured: true,
    metrics: 'Computer Vision Pipeline'
  },
  {
    id: 'pulse-commerce',
    title: 'Pulse Commerce Store',
    url: 'https://frontented-e-commerce-website-desig.vercel.app/',
    img: commerceImg,
    tag: 'Full-Stack E-Commerce',
    category: 'Web & E-Commerce',
    desc: 'High-conversion modern streetwear apparel marketplace with dynamic category filtering, persistent cart state, and checkout flow.',
    techs: ['HTML5', 'CSS Grid', 'JavaScript ES6+', 'LocalStorage'],
    metrics: 'Optimized Mobile First'
  },
  {
    id: 'editing-box-studio',
    title: 'Editing Box Studio',
    url: 'https://editing-box-j3as.vercel.app/',
    img: editingBoxImg,
    tag: 'Creative & Video Studio',
    category: 'Creative Studio',
    desc: 'High-retention post-production portfolio platform featuring dynamic video showreels, service calculators, and direct consultation booking.',
    techs: ['React', 'Tailwind CSS', 'Framer Motion', 'Video API'],
    metrics: 'Interactive Video Showcase'
  }
];

export const AYUSH_PROJECTS_ROW1 = AYUSH_PROJECTS.slice(0, 3);
export const AYUSH_PROJECTS_ROW2 = AYUSH_PROJECTS.slice(2, 5);

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  deliverables: string[];
}

export const AYUSH_SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'Full-Stack Web Engineering',
    category: 'Core Engineering',
    description: 'Developing high-performance, scalable web applications with React, Next.js, and modern node architectures.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    deliverables: ['Next.js / React SPAs', 'Scalable Architecture', 'TypeScript Type Safety']
  },
  {
    id: '02',
    title: 'Interactive 3D & WebGL',
    category: 'Creative Tech',
    description: 'Crafting spatial geometry viewports, Three.js shaders, 60fps choreographies, and immersive digital brand showcases.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    deliverables: ['Three.js Viewports', 'WebGL Visuals', 'Micro-Interactions']
  },
  {
    id: '03',
    title: 'Luxury UI/UX & Dark Aesthetics',
    category: 'Design Systems',
    description: 'Designing clear, scalable, and premium interfaces with dark glassmorphism, micro-interactions, and editorial layouts.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800',
    deliverables: ['Design Systems', 'Dark Glassmorphism', 'Tactile Typography']
  },
  {
    id: '04',
    title: 'E-Commerce Platforms',
    category: 'Core Engineering',
    description: 'High-conversion streetwear and luxury storefronts with dynamic filtering, persistent carts, and frictionless checkout flows.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    deliverables: ['Cart State Engines', 'Product Catalogs', 'Conversion Pacing']
  },
  {
    id: '05',
    title: 'Computer Vision & AI Systems',
    category: 'AI & Data',
    description: 'Integrating Python inspection models, OpenCV defect detection heuristics, and operator telemetry dashboards.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    deliverables: ['OpenCV Pipelines', 'Inspection Models', 'Real-Time Telemetry']
  },
  {
    id: '06',
    title: 'Cinematic Landing Pages',
    category: 'Creative Tech',
    description: 'High-impact landing experiences engineered with smooth scrolling, kinetic typography, and conversion-focused storytelling.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    deliverables: ['Smooth Scroll', 'Kinetic Animations', 'SEO Optimization']
  },
  {
    id: '07',
    title: 'Digital Media & Showreels',
    category: 'Design Systems',
    description: 'High-retention showreels, video editing agency portals, motion graphics, and interactive multimedia experiences.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
    deliverables: ['Agency Portals', 'Video Showreels', 'Multimedia Assets']
  },
  {
    id: '08',
    title: 'Bespoke Client Solutions',
    category: 'Core Engineering',
    description: 'Delivering end-to-end bespoke solutions with verified 100% 5-star client satisfaction and on-time delivery.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    deliverables: ['5.0★ Client Rating', 'On-Time Delivery', 'Full-Stack Deployment']
  }
];

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: string }[];
}

export const AYUSH_SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    iconName: 'Code2',
    description: 'Modern, component-driven responsive user interfaces built for speed and beauty.',
    skills: [
      { name: 'React.js', level: 'Expert' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'JavaScript ES6+', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Framer Motion', level: 'Advanced' },
      { name: 'HTML5 & CSS3', level: 'Expert' }
    ]
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    description: 'Robust server logic, RESTful API design, authentication, and structured data handling.',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Expert' },
      { name: 'JSON Handling', level: 'Advanced' }
    ]
  },
  {
    title: 'Interactive 3D & AI',
    iconName: 'Brain',
    description: 'Computer vision defect detection, 3D WebGL viewports, and AI workflow integration.',
    skills: [
      { name: 'Three.js / WebGL', level: 'Intermediate' },
      { name: 'OpenCV', level: 'Intermediate' },
      { name: 'Python Scripts', level: 'Advanced' },
      { name: 'AI Workflows', level: 'Advanced' }
    ]
  },
  {
    title: 'Creative Media & Video',
    iconName: 'Palette',
    description: 'High-impact multimedia, digital storytelling, video editing, and motion design.',
    skills: [
      { name: 'Video Editing', level: 'Expert' },
      { name: 'Adobe Premiere Pro', level: 'Advanced' },
      { name: 'After Effects', level: 'Intermediate' },
      { name: 'Digital Storytelling', level: 'Advanced' }
    ]
  }
];

export interface JourneyMilestone {
  year: string;
  role: string;
  company: string;
  tags: string[];
  description: string;
  highlights: string[];
}

export const AYUSH_JOURNEY: JourneyMilestone[] = [
  {
    year: '2026 — Present',
    role: 'Full-Stack Developer & Freelance Creator',
    company: 'Independent Client Delivery & Contracts',
    tags: ['Bespoke Web Dev', 'Client Solutions', '5.0★ Rating'],
    description: 'Delivering end-to-end full-stack web applications, luxury e-commerce platforms, and interactive visual websites for international creators and businesses.',
    highlights: [
      'Maintained 100% 5-star rating on client projects',
      'Engineered and deployed The Pasha Atelier luxury couture web platform on Vercel',
      'Architected NexStudio Games 3D WebGL interactive studio experience'
    ]
  },
  {
    year: '2025 — 2026',
    role: 'AI Computer Vision & Web Telemetry',
    company: 'Applied Project Engineering',
    tags: ['Computer Vision', 'OpenCV', 'React Dashboard'],
    description: 'Researched and built automated crop defect detection systems with real-time web telemetry and operator dashboards.',
    highlights: [
      'Built Onion Grader AI utilizing OpenCV computer vision defect identification',
      'Designed interactive web dashboard displaying batch quality metrics and analysis'
    ]
  },
  {
    year: '2024 — 2025',
    role: 'Modern Frontend & E-Commerce Development',
    company: 'Applied Web Development',
    tags: ['React & Next.js', 'E-Commerce', 'Video Platform'],
    description: 'Engineered high-converting apparel e-commerce platforms with dynamic carts and filter engines, and post-production studio portfolios.',
    highlights: [
      'Engineered Pulse Commerce apparel storefront with persistent cart engine',
      'Built Editing Box post-production agency portal and video showreel',
      'Crafted custom UI interactions using Tailwind CSS and Framer Motion'
    ]
  },
  {
    year: '2023 — 2024',
    role: 'Computer Science & Engineering',
    company: 'B.Tech Pursuit & Foundational Codebases',
    tags: ['Algorithms', 'Web Fundamentals', 'Data Structures'],
    description: 'Pursued B.Tech engineering curriculum with focus on software development, algorithmic problem-solving, and web fundamentals.',
    highlights: [
      'Mastered foundational algorithms, data structures, and core programming paradigms',
      'Developed passion for human-centered digital experiences and cinematic web aesthetics'
    ]
  }
];

export const AYUSH_HERO_ROLES = [
  'Full-Stack Developer',
  'Creative Web Architect',
  'Video Editor & Motion Designer',
  'UI/UX Digital Craftsman',
  'High-Impact Software Engineer'
];

export const AYUSH_STATS = [
  { value: '5.0★', label: 'Client Rating', sub: '100% Satisfied' },
  { value: '5+', label: 'Live Deployed Apps', sub: 'On Vercel' },
  { value: '100%', label: 'Delivery Quality', sub: 'Tested & Polished' },
  { value: 'Delhi', label: 'Based In', sub: 'India' }
];

export const AYUSH_INFO = {
  name: 'Ayush Thakur',
  monogram: 'AT.',
  title: 'Full-Stack Developer & Digital Craftsman',
  tagline: 'I Build Digital Experiences That Feel Different.',
  subtagline: 'Full-Stack Developer crafting modern, scalable, and visually engaging digital experiences.',
  email: 'ayusheditor1503@gmail.com',
  phone: '+91 95996 48246',
  location: 'Delhi, India',
  portraitImage: portraitImg,
  skillsHologramImage: skillsHologramImg
};
