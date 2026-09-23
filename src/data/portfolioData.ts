import { Project, SkillItem, JourneyMilestone } from '../types/portfolio';

// Local asset paths generated via AI Studio pipeline
import portraitImg from '../assets/images/ayush_portrait_cinematic_1790130485024.jpg';
import pashaImg from '../assets/images/project_the_pasha_atelier_1790130497809.jpg';
import gamesImg from '../assets/images/project_games_studio_1790130515146.jpg';
import onionImg from '../assets/images/project_onion_grader_ai_1790130527776.jpg';
import commerceImg from '../assets/images/project_pulse_commerce_1790130540973.jpg';

export const PERSONAL_INFO = {
  name: 'Ayush Thakur',
  title: 'Full-Stack Developer & Freelance Creator',
  tagline: 'I Build Digital Experiences That Feel Different.',
  subtagline: 'Full-Stack Developer crafting modern, scalable and visually engaging digital experiences.',
  email: 'ayusheditor1503@gmail.com',
  phone: '+91 95996 48246',
  location: 'Delhi, India',
  fiverr: 'https://www.fiverr.com/sellers/ayushthaku_1503/edit',
  portraitImage: portraitImg,
  status: 'Open for Opportunities & High-Impact Contracts',
  stats: [
    { label: 'Client Rating', value: '5.0★' },
    { label: 'Live Deployed Apps', value: '5+' },
    { label: 'Delivery Quality', value: '100%' },
    { label: 'Based In', value: 'Delhi, IN' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'the-pasha-atelier',
    title: 'The Pasha Atelier',
    subtitle: 'Luxury Bespoke Couture & Digital Atelier Experience',
    category: 'ecommerce',
    categoryLabel: 'Luxury E-Commerce',
    role: 'Full-Stack Web Architect',
    year: '2026',
    description: 'An editorial digital atelier celebrating bespoke tailoring, fluid responsive interactions, tactile typography, and frictionless client consultations.',
    longDescription: 'Engineered as a high-end digital flagship for an exclusive tailoring atelier. Features cinematic layout pacing, bespoke catalog showcases, client appointment booking flows, and micro-interactions optimized for luxury brand conversion.',
    technologies: ['React', 'Next.js Architecture', 'Tailwind CSS', 'Framer Motion', 'Responsive UX'],
    liveUrl: 'https://thepashaatelier.vercel.app/',
    githubUrl: '',
    imageUrl: pashaImg,
    keyFeatures: [
      'Bespoke editorial collection presentation with high-res garment showcase',
      'Dynamic styling consultation reservation flow',
      'Fluid mobile navigation with zero-jank transitions',
      'Custom cart state synchronization and order inquiry processing'
    ],
    metrics: '99+ Lighthouse Performance Score · Responsive on 100% of tested devices',
    accentColor: '#d4af37'
  },
  {
    id: 'games-studio',
    title: 'NexStudio Games',
    subtitle: 'Interactive 3D Game Production & WebGL Studio Showcase',
    category: 'creative',
    categoryLabel: 'Interactive & 3D WebGL',
    role: 'Lead Frontend & Spatial Engineer',
    year: '2026',
    description: 'An avant-garde gaming production website featuring spatial geometry viewports, real-time lighting cues, and high-performance dark architecture.',
    longDescription: 'Designed for a next-generation indie gaming collective. Incorporates interactive WebGL scenes, dark carbon textures with neon accents, custom game teasers, and buttery smooth 60fps scroll choreographies.',
    technologies: ['React', 'Three.js', 'WebGL', 'Tailwind CSS', 'Motion'],
    liveUrl: 'https://games-studio-smoky.vercel.app/',
    githubUrl: '',
    imageUrl: gamesImg,
    keyFeatures: [
      'Real-time Three.js spatial geometry and particle shaders',
      'High-impact showcase cards with custom hover depth parallax',
      'Dynamic title release trailers with zero-latency video modals',
      'Streamlined lead generation for game publishing partnerships'
    ],
    metrics: '60 FPS stable WebGL rendering across mobile and desktop',
    accentColor: '#38bdf8'
  },
  {
    id: 'onion-grader-ai',
    title: 'Onion Grader AI',
    subtitle: 'AI Computer Vision & Agricultural Grading Intelligence',
    category: 'ai-data',
    categoryLabel: 'Computer Vision & AI',
    role: 'Full-Stack AI Integration & UI Architect',
    year: '2026',
    description: 'Automated agricultural inspection platform using computer vision heuristics to classify crop quality, surface defects, and batch metrics.',
    longDescription: 'Bridging industrial hardware with real-time web telemetry. Provides an intuitive operator dashboard displaying live image classification, defect distribution charts, grading thresholds, and exportable batch quality compliance logs.',
    technologies: ['Python', 'Computer Vision', 'React', 'PostgreSQL', 'REST APIs', 'Tailwind CSS'],
    liveUrl: 'https://onion-grader-2-pjdu.vercel.app/',
    githubUrl: '',
    imageUrl: onionImg,
    keyFeatures: [
      'Real-time optical defect classification and size-sorting heuristics',
      'Operator telemetry dashboard with tabular accuracy metrics',
      'Batch export in CSV/JSON with automated compliance summaries',
      'Low-latency REST API communication with camera edge feeds'
    ],
    metrics: 'Sub-200ms inference processing · 94% classification precision',
    accentColor: '#10b981'
  },
  {
    id: 'pulse-commerce',
    title: 'Pulse Commerce Store',
    subtitle: 'High-Conversion Modern Streetwear E-Commerce Platform',
    category: 'ecommerce',
    categoryLabel: 'Full-Stack E-Commerce',
    role: 'Full-Stack Developer',
    year: '2025',
    description: 'A responsive clothing store built for high conversion rates with dynamic category filtering, cart state management, and optimized checkout flow.',
    longDescription: 'Created as a production-ready apparel marketplace template. Engineered with semantic HTML5, modern CSS Grid/Flexbox architecture, dynamic client-side filtering, and persistent cart state.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'State Management', 'Fiverr Deliverable'],
    liveUrl: 'https://frontented-e-commerce-website-desig.vercel.app/',
    githubUrl: '',
    imageUrl: commerceImg,
    keyFeatures: [
      'Comprehensive product listing with instant category & price filtering',
      'Interactive sliding cart with persistent local storage',
      'Conversion-focused product detail pages with size selection',
      'Delivered to international clients on freelance platforms'
    ],
    metrics: '100% 5-star ratings on freelance delivery',
    accentColor: '#f59e0b'
  },
  {
    id: 'editing-box-studio',
    title: 'Editing Box Studio',
    subtitle: 'Creative Post-Production & Digital Media Platform',
    category: 'creative',
    categoryLabel: 'Creative & Video Studio',
    role: 'Full-Stack Web Developer',
    year: '2025',
    description: 'Modern post-production agency platform designed for high-retention video showreels, dynamic case studies, and client project inquiries.',
    longDescription: 'Built to showcase high-retention video editing services for creators and commercial brands. Features seamless video embedding, interactive service calculators, and direct consultation booking.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Video Player API', 'Vercel Deployment'],
    liveUrl: 'https://editing-box-j3as.vercel.app/',
    githubUrl: '',
    imageUrl: gamesImg,
    keyFeatures: [
      'Curated video showcase gallery with low-bandwidth poster previews',
      'Service tier interactive pricing and timeline estimator',
      'Client testimonial slider with verifiable project links',
      'Responsive design ensuring rapid loading on mobile networks'
    ],
    metrics: 'High-conversion showreel and client booking',
    accentColor: '#ec4899'
  }
];

export const SKILLS: SkillItem[] = [
  // Frontend
  {
    name: 'React',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Advanced',
    experience: '2+ Years',
    iconName: 'Code',
    highlight: 'Component lifecycle, hooks architecture, high-performance re-renders, and modular state.'
  },
  {
    name: 'Next.js',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Proficient',
    experience: '1+ Years',
    iconName: 'Layers',
    highlight: 'Server-side rendering (SSR), App router, metadata SEO, and dynamic route optimization.'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Advanced',
    experience: '3+ Years',
    iconName: 'FileCode',
    highlight: 'Asynchronous event loops, DOM manipulation, functional paradigms, and Web APIs.'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Advanced',
    experience: '2+ Years',
    iconName: 'Palette',
    highlight: 'Utility-first architecture, custom design tokens, responsive breakpoints, and animations.'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Expert',
    experience: '3+ Years',
    iconName: 'Layout',
    highlight: 'Semantic markup, accessibility (a11y), CSS Grid, Flexbox, and fluid typography math.'
  },
  {
    name: 'Three.js / WebGL',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Proficient',
    experience: '1+ Years',
    iconName: 'Box',
    highlight: 'PBR materials, studio lighting, camera lerping, and 3D spatial geometry optimization.'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    categoryLabel: 'Backend',
    level: 'Proficient',
    experience: '2+ Years',
    iconName: 'Server',
    highlight: 'Non-blocking I/O event handling, RESTful service architecture, and NPM ecosystem.'
  },
  {
    name: 'Express',
    category: 'backend',
    categoryLabel: 'Backend',
    level: 'Proficient',
    experience: '2+ Years',
    iconName: 'Cpu',
    highlight: 'API route controllers, authentication middlewares, error pipelines, and JSON serialization.'
  },
  {
    name: 'Python',
    category: 'backend',
    categoryLabel: 'Backend',
    level: 'Advanced',
    experience: '2+ Years',
    iconName: 'Terminal',
    highlight: 'Backend logic, data handling, and computer vision scripting with OpenCV.'
  },
  {
    name: 'REST APIs',
    category: 'backend',
    categoryLabel: 'Backend',
    level: 'Advanced',
    experience: '2+ Years',
    iconName: 'Network',
    highlight: 'HTTP semantics, token auth, rate limiting, and structured client-server contracts.'
  },

  // Tools & Video
  {
    name: 'Adobe Premiere Pro',
    category: 'tools',
    categoryLabel: 'Creative Media',
    level: 'Advanced',
    experience: '3+ Years',
    iconName: 'Sparkles',
    highlight: 'High-retention storytelling, pacing, audio mastering, and color grading.'
  },
  {
    name: 'After Effects',
    category: 'tools',
    categoryLabel: 'Creative Media',
    level: 'Proficient',
    experience: '2+ Years',
    iconName: 'Palette',
    highlight: 'Motion typography, visual effects, tracking, and promotional teasers.'
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: '2026 — Present',
    title: 'Full-Stack Developer & Freelance Creator',
    role: 'Bespoke Web Development & Freelance Delivery',
    organization: 'Freelance & Independent Projects (Fiverr 5.0★)',
    description: 'Delivering end-to-end full-stack web applications, luxury e-commerce platforms, and interactive visual websites for creators and international businesses.',
    achievements: [
      'Designed and deployed The Pasha Atelier, NexStudio Games, and Onion Grader AI',
      'Maintained 100% 5-star client ratings on Fiverr across web development and template deliverables'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'PostgreSQL']
  },
  {
    year: '2025 — 2026',
    role: 'AI Computer Vision & Web Telemetry',
    title: 'Computer Vision & Web Systems',
    organization: 'Applied Project Engineering',
    description: 'Developed automated agricultural inspection algorithms and deep exploratory data analysis studies uncovering business-critical patterns.',
    achievements: [
      'Built Onion Grader AI utilizing optical defect recognition models and operator dashboard telemetry',
      'Engineered interactive telemetry dashboard for real-time defect analysis'
    ],
    technologies: ['Python', 'OpenCV', 'React', 'Tailwind CSS']
  },
  {
    year: '2024 — 2025',
    title: 'Modern Full-Stack Architecture Mastery',
    role: 'Frontend & Backend Software Engineer',
    organization: 'Applied Web Development',
    description: 'Mastered modern web development fundamentals: asynchronous JavaScript, React component state trees, Express API patterns, and database design.',
    achievements: [
      'Built and deployed high-converting apparel e-commerce platforms with dynamic carts and filter engines',
      'Engineered Editing Box Studio post-production portfolio platform',
      'Authored reusable UI component libraries prioritizing accessibility and performance'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Node.js', 'Express']
  },
  {
    year: '2023 — 2024',
    title: 'The Inception & First Codebases',
    role: 'Aspiring Engineer',
    organization: 'Computer Science & Engineering (B.Tech Pursuit)',
    description: 'Began the deep dive into algorithmic problem-solving, foundational programming, and the mechanics of the internet.',
    achievements: [
      'Started B.Tech engineering curriculum with focus on software development and data structures',
      'Built initial responsive web pages and core algorithm implementations',
      'Developed passion for human-centered digital experiences and cinematic web aesthetics'
    ],
    technologies: ['C / C++', 'HTML', 'CSS', 'JavaScript', 'Algorithms']
  }
];
