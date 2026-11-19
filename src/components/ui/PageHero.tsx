import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Container from './Container'

export default function PageHero({
  crumb,
  title,
  description,
  children,
}: {
  crumb: string
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy-950 text-white">
      <div className="grid-pattern pointer-events-none absolute inset-0" />
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <Container className="relative py-14 lg:py-20">
        <nav className="flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-wider text-steel-400">
          <Link to="/" className="touch-link transition-colors hover:text-brand-400">
            Beranda
          </Link>
          <ChevronRight size={13} />
          <span className="text-brand-400">{crumb}</span>
        </nav>
        <h1 className="heading-display mt-6 text-5xl font-bold sm:text-6xl lg:text-[4.4rem]">{title}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-steel-300 sm:text-base">{description}</p>
        {children}
      </Container>
    </section>
  )
}
