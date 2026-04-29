export interface NavLink {
  label: string
  href: `#${string}`
}

export interface ProfileStat {
  label: string
  value: string
  subtext: string
}

export interface InfoCard {
  label: string
  value: string
  subtext: string
  tone: 'primary' | 'accent' | 'secondary'
}

export interface Project {
  id: number
  level: string
  name: string
  description: string
  status: string
  difficulty: string
  tech: string[]
  highlights?: string[]
  href: string
  ctaLabel: string
  tone: 'primary' | 'accent' | 'secondary'
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  status: string
  summary: string
  highlights: string[]
  tone: 'primary' | 'accent' | 'secondary'
}

export interface Technology {
  id: string
  name: string
  icon: TechnologyIcon
  color: string
}

export interface TechnologyGroup {
  id: string
  label: string
  technologyIds: string[]
}

export interface SkillGroup {
  id: string
  label: string
  skills: string[]
}

export type TechnologyIcon =
  | 'javascript'
  | 'typescript'
  | 'php'
  | 'html5'
  | 'css3'
  | 'springBoot'
  | 'react'
  | 'next'
  | 'vite'
  | 'tailwind'
  | 'shadcnui'
  | 'node'
  | 'express'
  | 'mongodb'
  | 'mysql'
  | 'postgresql'
  | 'docker'
  | 'bootstrap'
  | 'git'
  | 'github'
  | 'intellijidea'
  | 'postman'
  | 'vscode'
  | 'vercel'
  | 'render'
  | 'digitalocean'

export interface MissionItem {
  label: string
  value: string
  marker: string
}

export interface SocialLink {
  label: string
  href: string
  external: boolean
}

export interface ContactFormState {
  name: string
  email: string
  message: string
}
