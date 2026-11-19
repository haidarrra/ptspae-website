import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react'
import Container from '../ui/Container'
import { company } from '../../data/company'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

const navItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/tentang' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Proyek', to: '/proyek' },
  { label: 'Kontak', to: '/kontak' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-navy-950 lg:block">
        <Container className="flex h-9 items-center justify-between text-[0.7rem] font-medium tracking-wide text-steel-300">
          <span>{company.tagline} · Sejak {company.founded}</span>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-400"
          >
            <MessageCircle size={13} /> WhatsApp {company.whatsappDisplay}
          </a>
        </Container>
      </div>

      <div className="border-b border-white/10 bg-navy-900/95 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-3 lg:h-[74px]">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5" aria-label={`${company.shortName} — Beranda`}>
            <span className="shrink-0 rounded bg-white p-1.5 shadow-sm">
              <img
                src={company.logo}
                alt={`Logo ${company.shortName}`}
                className="h-8 w-auto max-w-[64px] object-contain sm:h-9 sm:max-w-[74px]"
              />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="heading-display block text-lg font-bold text-white sm:text-xl">
                {company.shortName}
              </span>
              <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-steel-300 sm:block">
                Saekapraya Adhitama Engineering
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[0.82rem] font-semibold transition-colors ${
                    isActive ? 'text-brand-400' : 'text-steel-200 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden sm:block">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary !min-h-[2.75rem] !text-[0.8rem]"
            >
              Hubungi Kami <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded border border-white/20 text-white transition-colors hover:border-brand-500 lg:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </Container>
      </div>

      {open && (
        <>
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-navy-950/70 backdrop-blur-sm lg:hidden"
          />
          <nav
            id="mobile-navigation"
            className="relative z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-white/10 bg-navy-950 shadow-2xl lg:hidden"
            aria-label="Navigasi seluler"
          >
            <Container className="py-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex min-h-[52px] items-center border-b border-white/5 text-base font-semibold ${
                      isActive ? 'text-brand-400' : 'text-steel-200'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-4 w-full"
              >
                Hubungi via WhatsApp <ArrowUpRight size={15} />
              </a>
            </Container>
          </nav>
        </>
      )}
    </header>
  )
}
