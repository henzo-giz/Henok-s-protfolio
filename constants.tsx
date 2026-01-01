
import { Project, Service, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Nate-tech Hub',
    category: 'Web',
    description: 'Nate Teche\'s personal website is a digital portfolio showcasing his projects, skills, and career achievements.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './assets/nate-tech.png',
    color: 'primary',
    url: 'https://natetechet.github.io/nate-tech/'
  },
  {
    id: 2,
    title: 'Dej Azmach',
    category: 'Design & Web',
    description: 'Dejazmach Ads is a business website designed to showcase services, attract clients, and provide key information in a clean, professional layout.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './assets/Dej-Azmach.png',
    color: 'accent-blue',
    url: 'https://dejazmach.netlify.app/'
  },
  {
    id: 3,
    title: 'Staybnb',
    category: 'Web',
    description: 'A simple landing page for a travel agency built using a YouTube tutorial video. This is a landing page for travel agencies.',
    tags: ['HTML', 'CSS'],
    image: './assets/travle.png',
    color: 'primary',
    url: 'https://travleagency.netlify.app/'
  },
  {
    id: 4,
    title: 'ItemTrack',
    category: 'Web',
    description: 'ItemTrack is a campus lost-and-found app for easy reporting, admin connection, and recovery.',
    tags: ['React.js', 'MongoDB', 'Node.js'],
    image: './assets/itemTrack.png',
    color: 'accent-blue',
    url: 'https://itemtrack.example'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Web',
    description: 'A modern portfolio built with HTML, CSS, and JavaScript to showcase skills, projects, and contact info.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './assets/portfolio-1.png',
    color: 'primary',
    url: 'https://stalwart-hamster-a87d70.netlify.app/'
  },
  {
    id: 6,
    title: 'HYA Solutions',
    category: 'Web',
    description: 'A sustainability-focused streaming platform designed to educate users on climate change.',
    tags: ['UI/UX', 'Figma', 'React.js'],
    image: './assets/HYA_solutions.png',
    color: 'accent-blue',
    url: 'https://funny-chimera-392bcb.netlify.app/'
  },
  // {
  //   id: 7,
  //   title: 'Zenith CRM',
  //   category: 'SaaS',
  //   description: 'Sales pipeline management tool optimized for fast-growing remote teams.',
  //   tags: ['TypeScript', 'GraphQL'],
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  //   color: 'primary',
  //   url: 'https://zenith-crm.example'
  // },
  // {
  //   id: 8,
  //   title: 'Velo Social',
  //   category: 'Mobile',
  //   description: 'Hyper-local social network for cycling enthusiasts and commuters.',
  //   tags: ['Flutter', 'Google Maps'],
  //   image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop',
  //   color: 'accent-blue',
  //   url: 'https://velo-social.example'
  // }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Product Design',
    description: 'From wireframes to high-fidelity prototypes, I design user-centric interfaces that solve real problems.',
    icon: 'brush',
    color: 'primary'
  },
  {
    id: 2,
    title: 'Development',
    description: 'Building scalable and performant web applications using modern frameworks like React and Next.js.',
    icon: 'code',
    color: 'accent-blue'
  },
  {
    id: 3,
    title: 'SEO & Marketing',
    description: 'Optimizing websites for search engines and performance to ensure maximum reach and conversion.',
    icon: 'rocket_launch',
    color: 'primary'
  }
];

export const SKILLS: Skill[] = [
  { name: 'UI/UX Design', level: 85 },
  { name: 'Frontend Development', level: 95 },
  { name: 'Backend Engineering', level: 55 }
];

export const HERO_IMAGE = './assets/portrate.jpg';
