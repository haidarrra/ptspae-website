import type { LucideIcon } from 'lucide-react'

export type ProductCategory = 'PLC' | 'PLC Allen Bradley' | 'Transmitters Gauge'

export interface Product {
  slug: string
  name: string
  category: ProductCategory
  image: string
  summary: string
  sourceUrl: string
}

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

export interface Project {
  title: string
  category: string
  description: string
  image?: string
  placeholder?: boolean
}
