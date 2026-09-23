export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'ai-data' | 'ecommerce' | 'creative';
  categoryLabel: string;
  role: string;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  keyFeatures: string[];
  metrics?: string;
  accentColor?: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  categoryLabel: string;
  level: string;
  experience: string;
  iconName: string;
  highlight: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  role: string;
  organization: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
