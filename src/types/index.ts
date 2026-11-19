import type { LucideIcon } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

export interface Strength {
  icon: LucideIcon
  stat: string
  title: string
  description: string
}

export interface WorkflowStep {
  number: string
  title: string
  description: string
}

/** A single real project entry as published in the company profile PDF. */
export interface ProjectItem {
  name: string
  customer?: string
  user?: string
  year?: string
  location?: string
}

/** A project sector as published in the company profile PDF. */
export interface ProjectSector {
  id: string
  name: string
  description: string
  image: string
  items: ProjectItem[]
}

/** Photo-led project experience entry (no invented details). */
export interface ProjectGalleryItem {
  title: string
  detail?: string
  image: string
}

export interface HeroSlide {
  image: string
  eyebrow: string
  title: string
  description: string
}
