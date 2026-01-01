
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  color: 'primary' | 'accent-blue';
  // Optional URL to the live project or case study
  url?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
}
