import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react'
import Container from '../ui/Container'
import { company } from '../../data/company'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

const navItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/tentang' },
  { label: 'Produk', to: '/produk' },
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

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-navy-950 lg:block">
        <Container className="flex h-9 items-center justify-between text-[0.7rem] font-medium tracking-wide text-steel-300">
          <span>Supplier PLC &amp; Solusi Otomasi Industri sejak {company.founded}</span>
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
        <Container className="flex h-[74px] items-center justify-between gap-6">
          <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="PT SPAE — Beranda">
            <span className="rounded bg-white p-1.5 shadow-sm">
              <img src={company.logo} alt="Logo PT SPAE" className="h-9 w-auto max-w-[74px] object-contain" />
            </span>
            <span className="leading-tight">
              <span className="heading-display block text-xl font-bold text-white">PT SPAE</span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-steel-300">
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

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary hidden !min-h-[2.6rem] !text-[0.8rem] sm:inline-flex"
          >
            Hubungi Kami <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/20 text-white transition-colors hover:border-brand-500 lg:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </div>

      {open && (
        <nav className="border-b border-white/10 bg-navy-950 lg:hidden" aria-label="Navigasi seluler">
          <Container className="py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block border-b border-white/5 py-3 text-sm font-semibold ${
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
              className="btn btn-primary mt-4 w-full"
            >
              Hubungi via WhatsApp <ArrowUpRight size={15} />
            </a>
          </Container>
        </nav>
      )}
    </header>
  )
}
