# Design Document

## Overview

Le portfolio sera développé comme une Single Page Application (SPA) utilisant Next.js 15 avec l'App Router et TypeScript. L'architecture privilégie la performance, l'accessibilité et une expérience utilisateur fluide avec des animations sophistiquées. Le design suit une approche mobile-first avec un système de design cohérent basé sur shadcn/ui et Tailwind CSS v4.

## Architecture

### Structure du Projet

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── layout/       # Layout components (Navbar, Footer)
│   ├── sections/     # Page sections (Hero, Projects, Skills, Contact)
│   └── common/       # Shared components (ThemeToggle, AnimatedSection)
├── lib/
│   ├── utils.ts      # Utility functions
│   └── constants.ts  # App constants
├── hooks/
│   └── use-theme.ts  # Theme management
└── types/
    └── index.ts      # TypeScript definitions
```

### Technologies Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 avec directives modernes
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme Management:** next-themes
- **Form Handling:** React Hook Form + Zod validation

## Components and Interfaces

### Core Layout Components

#### Navbar Component
```typescript
interface NavbarProps {
  sections: NavSection[]
}

interface NavSection {
  id: string
  label: string
  href: string
}
```

**Fonctionnalités:**
- Navigation fixe avec backdrop blur
- Smooth scroll vers les sections
- Menu hamburger responsive
- Indicateur de section active
- Toggle de thème intégré

#### Footer Component
```typescript
interface FooterProps {
  socialLinks: SocialLink[]
  copyright: string
}

interface SocialLink {
  platform: string
  url: string
  icon: LucideIcon
}
```

### Section Components

#### Hero Section
```typescript
interface HeroProps {
  name: string
  title: string
  subtitle: string
  avatar: string
  ctaButtons: CTAButton[]
}

interface CTAButton {
  label: string
  variant: 'primary' | 'secondary'
  action: () => void
}
```

**Animations:**
- Fade-in séquentiel des éléments
- Parallax subtil sur l'avatar
- Hover effects sur les boutons CTA

#### Projects Section
```typescript
interface ProjectsProps {
  projects: Project[]
}

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: ProjectTag[]
  links: ProjectLink[]
}

interface ProjectTag {
  label: string
  category: 'IA' | 'Web' | 'Design' | 'Mobile'
  color: string
}
```

**Animations:**
- Staggered animation des cartes
- Hover effects avec transform et shadow
- Lazy loading des images

#### Skills Section
```typescript
interface SkillsProps {
  skillCategories: SkillCategory[]
}

interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}

interface Skill {
  name: string
  icon: string | LucideIcon
  proficiency?: number
}
```

**Layout:**
- Grille responsive 2 colonnes (IA & Dev)
- Cards avec glassmorphism effect
- Animations au scroll et hover

#### Contact Section
```typescript
interface ContactProps {
  formConfig: ContactFormConfig
  socialLinks: SocialLink[]
}

interface ContactFormConfig {
  fields: FormField[]
  submitEndpoint: string
}

interface FormField {
  name: string
  type: 'text' | 'email' | 'textarea'
  label: string
  required: boolean
  validation: ZodSchema
}
```

### Animation Components

#### AnimatedSection Component
```typescript
interface AnimatedSectionProps {
  children: React.ReactNode
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight'
  delay?: number
  duration?: number
  threshold?: number
}
```

**Utilisation:**
- Wrapper pour les animations au scroll
- Intersection Observer pour les performances
- Animations personnalisables par section

## Data Models

### Theme Configuration
```typescript
interface ThemeConfig {
  defaultTheme: 'dark' | 'light'
  themes: {
    dark: ThemeColors
    light: ThemeColors
  }
}

interface ThemeColors {
  primary: string
  secondary: string
  background: string
  foreground: string
  muted: string
  accent: string
}
```

### Portfolio Data
```typescript
interface PortfolioData {
  personal: PersonalInfo
  projects: Project[]
  skills: SkillCategory[]
  contact: ContactInfo
}

interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  avatar: string
  bio: string
  resume: string
}
```

## Error Handling

### Form Validation
- Validation côté client avec Zod schemas
- Messages d'erreur contextuels
- États de loading et success/error
- Retry mechanism pour les soumissions

### Image Loading
- Fallback images pour les projets
- Lazy loading avec Next.js Image
- Skeleton loaders pendant le chargement
- Error boundaries pour les composants critiques

### Animation Performance
- Reduced motion support pour l'accessibilité
- GPU acceleration pour les transforms
- Debounced scroll listeners
- Conditional animations basées sur les performances

## Testing Strategy

### Unit Testing
- Tests des composants avec React Testing Library
- Tests des hooks personnalisés
- Tests des utilitaires et helpers
- Mocking des animations Framer Motion

### Integration Testing
- Tests de navigation entre sections
- Tests du formulaire de contact
- Tests du toggle de thème
- Tests de responsivité

### Performance Testing
- Lighthouse CI pour les métriques Core Web Vitals
- Bundle size monitoring
- Animation performance profiling
- Accessibility audits

### Visual Testing
- Screenshot testing pour les différents thèmes
- Cross-browser compatibility
- Responsive design validation
- Animation consistency checks

## Design System

### Color Palette
```css
/* Dark Theme (Default) */
--background: 0 0% 3.9%
--foreground: 0 0% 98%
--primary: 0 0% 98%
--primary-foreground: 0 0% 9%
--secondary: 0 0% 14.9%
--secondary-foreground: 0 0% 98%
--muted: 0 0% 14.9%
--muted-foreground: 0 0% 63.9%
--accent: 0 0% 14.9%
--accent-foreground: 0 0% 98%
```

### Typography Scale
- Headings: Inter font family
- Body: Inter font family
- Code: JetBrains Mono
- Responsive font sizes avec clamp()

### Spacing System
- Base unit: 4px (0.25rem)
- Consistent spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px
- Container max-width: 1200px
- Section padding: responsive avec min/max values

### Animation Principles
- Duration: 200-500ms pour les micro-interactions
- Easing: cubic-bezier(0.4, 0, 0.2, 1) pour la fluidité
- Stagger delay: 100-150ms entre les éléments
- Hover states: 150ms transition duration

### Responsive Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet portrait */
lg: 1024px  /* Tablet landscape */
xl: 1280px  /* Desktop */
2xl: 1536px /* Large desktop */
```

## Performance Optimizations

### Code Splitting
- Dynamic imports pour les sections non-critiques
- Lazy loading des composants d'animation
- Separate bundles pour les différentes features

### Image Optimization
- Next.js Image component avec optimisation automatique
- WebP/AVIF formats avec fallbacks
- Responsive images avec srcset
- Preload des images critiques (avatar, hero)

### Animation Performance
- Transform et opacity uniquement pour les animations
- will-change property pour les éléments animés
- RequestAnimationFrame pour les animations custom
- Intersection Observer pour les animations au scroll

### Bundle Optimization
- Tree shaking pour Framer Motion
- Selective imports pour Lucide icons
- CSS purging avec Tailwind
- Compression gzip/brotli