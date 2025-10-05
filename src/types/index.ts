import { LucideIcon } from 'lucide-react'

export interface NavSection {
  id: string
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  avatar: string
  bio?: string
  resume: string
}

export interface CTAButton {
  label: string
  variant: 'primary' | 'secondary'
  action: () => void
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: ProjectTag[]
  links: ProjectLink[]
}

export interface ProjectTag {
  label: string
  category: 'IA' | 'Web' | 'Design' | 'Mobile' | 'Data'
  color: string
}

export interface ProjectLink {
  type: 'demo' | 'github' | 'website'
  url: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}

export interface Skill {
  name: string
  icon: string | LucideIcon
  proficiency?: number
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight'
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export interface ThemeConfig {
  defaultTheme: 'dark' | 'light'
  themes: {
    dark: ThemeColors
    light: ThemeColors
  }
}

export interface ThemeColors {
  primary: string
  secondary: string
  background: string
  foreground: string
  muted: string
  accent: string
}