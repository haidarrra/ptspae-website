import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, MessageCircle, ShieldCheck } from 'lucide-react'
import Container from '../ui/Container'
import { company } from '../../data/company'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

const quickLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '/tentang' },
  { label: 'Katalog Produk', to: '/produk' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Proyek', to: '/proyek' },
  { label: 'Kontak', to: '/kontak' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 text-white">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="rounded bg-white p-1.5">
                <img src={company.logo} alt="Logo PT SPAE" className="h-10 w-auto max-w-[82px] object-contain" />
              </span>
              <div>
                <p className="heading-display text-xl font-bold">{company.shortName}</p>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-steel-400">
                  {company.name}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-400">
              Supplier PLC dan penyedia solusi otomasi industri, instrumentation, serta sistem kontrol
              proses di Jakarta sejak {company.founded}.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-6"
            >
              <MessageCircle size={16} /> Konsultasi via WhatsApp
            </a>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="heading-display text-lg font-bold tracking-wide">Navigasi</h3>
            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-steel-400 transition-colors hover:text-brand-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="heading-display text-lg font-bold tracking-wide">Layanan Kami</h3>
            <div className="mt-5 space-y-3 text-sm text-steel-400">
              <p>PLC &amp; Sistem Kontrol</p>
              <p>Instrumentation &amp; Transmitter</p>
              <p>Electrical &amp; Automation</p>
              <p>Equipment Test</p>
              <p>Engineering Service</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="heading-display text-lg font-bold tracking-wide">Hubungi Kami</h3>
            <div className="mt-5 space-y-4 text-sm text-steel-400">
              <div className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-500" />
                <p className="leading-relaxed">{company.address}</p>
              </div>
              <div className="flex gap-3">
                <MessageCircle size={17} className="mt-0.5 shrink-0 text-brand-500" />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-brand-400"
                >
                  {company.whatsappDisplay}
                </a>
              </div>
              <a
                href={company.mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-brand-400 hover:text-brand-300"
              >
                Petunjuk arah <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-steel-500">
            © {new Date().getFullYear()} {company.name}. Seluruh hak dilindungi.
          </p>
          <a
            href={company.indotradingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs text-steel-400 transition-colors hover:text-brand-400"
          >
            <ShieldCheck size={15} className="text-brand-500" />
            Gold Member Indotrading sejak {company.indotradingSince}
          </a>
        </div>
      </Container>
    </footer>
  )
}
