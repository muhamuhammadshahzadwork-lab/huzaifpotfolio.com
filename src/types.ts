export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  year: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  deliverables: string[];
  metrics?: { label: string; value: string }[];
  livePreviewUrl?: string;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  category: 'core' | 'design' | 'animation' | 'tools';
  highlight?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
  iconName: 'search' | 'lightbulb' | 'pen' | 'code' | 'send';
}

export interface InquiryFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
