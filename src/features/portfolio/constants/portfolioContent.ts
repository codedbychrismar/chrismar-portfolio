import type {
  ExperienceItem,
  InfoCard,
  MissionItem,
  NavLink,
  ProfileStat,
  Project,
  SkillGroup,
  SocialLink,
  Technology,
  TechnologyGroup,
} from '../types'

export const SITE_PROFILE = {
  name: 'Chrismar Ilustrisimo',
  brand: 'CHRISMAR.DEV',
  role: 'Full-Stack Web Developer',
  avatarSrc: '/ChrismarPixel.jpg',
  school: 'Bulacan State University',
  location: 'Philippines',
  availability: 'Open to freelance and full-time work',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL ?? '',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
]

export const PROFILE_STATS: ProfileStat[] = [
  { label: 'LVL', value: '04', subtext: 'Years learning' },
  { label: 'CLASS', value: 'DEV', subtext: 'Full-stack path' },
  { label: 'GUILD', value: 'BSU', subtext: 'Bulacan State University' },
  { label: 'RANK', value: 'BSIT', subtext: 'Graduate' },
]

export const PROFILE_TRAITS = ['Gamer', 'Lifter', 'Otaku', 'Builder']

export const TECH_STACK_OVERVIEW = {
  title: '💻 Tech Stack',
  items: [
    '🌐 Languages',
    '⚛️ Frameworks & Libraries',
    '🗄️ Databases',
    '🛠️ Tools',
  ],
}

export const ABOUT_CARDS: InfoCard[] = [
  {
    label: 'Education',
    value: 'BSIT Graduate',
    subtext: 'Bulacan State University',
    tone: 'primary',
  },
  {
    label: 'Core Stack',
    value: 'React + Vite + Node.js',
    subtext: 'Express.js + TypeScript + Tailwind + shadcn/ui',
    tone: 'accent',
  },
  {
    label: 'Data + Deploy',
    value: 'PostgreSQL + Vercel',
    subtext: 'Render + DigitalOcean',
    tone: 'secondary',
  },
]

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: 'C8nnect IT Solution',
    role: 'All-Around Developer',
    period: 'Oct 2025 - Present',
    status: 'Current',
    summary:
      'Focused mainly on full-stack web development across client and product builds, with some mobile work using React Native.',
    highlights: [
      'Handled frontend and backend work for full-stack web projects',
      'Contributed to selected mobile tasks using React Native',
      'Led and supervised interns during project delivery',
      'Managed major Fitness web app and LGU system projects',
    ],
    tone: 'accent',
  },
  {
    company: 'Accenture Philippines',
    role: 'Full Stack Developer Intern',
    period: 'Jan 2025 - May 2025',
    status: 'Internship',
    summary:
      'Built hands-on full-stack experience during my internship, contributing to assigned features and development tasks inside a professional delivery environment.',
    highlights: [
      'Handled project-based modules across assigned tasks',
      'Contributed to module-level implementation within project delivery',
    ],
    tone: 'primary',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    level: 'LVL 01',
    name: 'iRIG - Web App',
    description:
      'A capstone project built as an Inventory Management System with POS and online listing features, focused on practical full-stack delivery.',
    status: 'Shipped',
    difficulty: 'Intermediate',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    href: '#contact',
    ctaLabel: 'Discuss project',
    tone: 'primary',
  },
  {
    id: 2,
    level: 'LVL 02',
    name: 'PT Hub - Gym Appointment System',
    description:
      'A scheduling-focused product concept for gym appointments, balancing booking flow, member visibility, and admin-ready structure.',
    status: 'In Progress',
    difficulty: 'Advanced',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker'],
    href: '#contact',
    ctaLabel: 'Request walkthrough',
    tone: 'accent',
  },
  {
    id: 3,
    level: 'LVL 03',
    name: 'iBulakan - LGU System',
    description:
      'Built dashboard and service pages for an LGU platform, helping shape the admin and public-facing experience across core local government workflows.',
    status: 'Delivered',
    difficulty: 'Advanced',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js'],
    href: '#contact',
    ctaLabel: 'Discuss project',
    tone: 'secondary',
  },
]

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'javascript',
    color: '#F7DF1E',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'typescript',
    color: '#3178C6',
  },
  {
    id: 'php',
    name: 'PHP',
    icon: 'php',
    color: '#777BB4',
  },
  {
    id: 'html5',
    name: 'HTML5',
    icon: 'html5',
    color: '#E34F26',
  },
  {
    id: 'css3',
    name: 'CSS3',
    icon: 'css3',
    color: '#1572B6',
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    icon: 'springBoot',
    color: '#6DB33F',
  },
  {
    id: 'react',
    name: 'React',
    icon: 'react',
    color: '#61DAFB',
  },
  {
    id: 'next',
    name: 'Next.js',
    icon: 'next',
    color: '#FFFFFF',
  },
  {
    id: 'vite',
    name: 'Vite',
    icon: 'vite',
    color: '#646CFF',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: 'tailwind',
    color: '#06B6D4',
  },
  {
    id: 'shadcn',
    name: 'shadcn/ui',
    icon: 'shadcnui',
    color: '#FFFFFF',
  },
  {
    id: 'node',
    name: 'Node.js',
    icon: 'node',
    color: '#5FA04E',
  },
  {
    id: 'express',
    name: 'Express.js',
    icon: 'express',
    color: '#FFFFFF',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: 'bootstrap',
    color: '#7952B3',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: 'mongodb',
    color: '#47A248',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: 'mysql',
    color: '#4479A1',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: 'postgresql',
    color: '#4169E1',
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: 'docker',
    color: '#2496ED',
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'git',
    color: '#F05032',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: 'github',
    color: '#FFFFFF',
  },
  {
    id: 'intellij',
    name: 'IntelliJ IDEA',
    icon: 'intellijidea',
    color: '#FE315D',
  },
  {
    id: 'postman',
    name: 'Postman',
    icon: 'postman',
    color: '#FF6C37',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    icon: 'vscode',
    color: '#007ACC',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    icon: 'vercel',
    color: '#FFFFFF',
  },
  {
    id: 'render',
    name: 'Render',
    icon: 'render',
    color: '#46E3B7',
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    icon: 'digitalocean',
    color: '#0080FF',
  },
]

export const CORE_STACK_IDS = [
  'typescript',
  'react',
  'vite',
  'tailwind',
  'shadcn',
  'node',
  'express',
]

export const TECH_STACK_GROUPS: TechnologyGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    technologyIds: ['javascript', 'typescript', 'php', 'html5', 'css3'],
  },
  {
    id: 'frameworks-libraries',
    label: 'Frameworks & Libraries',
    technologyIds: [
      'react',
      'next',
      'node',
      'express',
      'spring-boot',
      'vite',
      'tailwind',
      'shadcn',
      'bootstrap',
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    technologyIds: ['mongodb', 'mysql', 'postgresql'],
  },
  {
    id: 'tools',
    label: 'Tools',
    technologyIds: ['docker', 'git', 'github', 'intellij', 'postman', 'vscode', 'vercel', 'render', 'digitalocean'],
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'HTML5', 'CSS3'],
  },
  {
    id: 'frameworks-libraries',
    label: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Bootstrap'],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'DigitalOcean'],
  },
]

export const MISSION_ITEMS: MissionItem[] = [
  { marker: 'SLA', label: 'Response time', value: 'Within 24 hours' },
  { marker: 'STACK', label: 'Working with', value: 'React, Vite, TypeScript, Tailwind CSS, Node.js, Express.js, shadcn/ui' },
  { marker: 'STATE', label: 'Status', value: SITE_PROFILE.availability },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: import.meta.env.VITE_GITHUB_URL ?? '#contact',
    external: Boolean(import.meta.env.VITE_GITHUB_URL),
  },
  {
    label: 'LinkedIn',
    href: import.meta.env.VITE_LINKEDIN_URL ?? '#contact',
    external: Boolean(import.meta.env.VITE_LINKEDIN_URL),
  },
]
