import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, MessageCircle, ShieldCheck, MapPin } from 'lucide-react'
import Container from '../ui/Container'
import { company } from '../../data/company'
import { generalInquiryUrl } from '../../lib/whatsapp'
import { asset } from '../../lib/assets'

const facts = [
  { icon: CalendarDays, label: 'Berkarya sejak', value: company.founded },
  { icon: MapPin, label: 'Basis operasi', value: 'Jakarta Timur' },
  { icon: ShieldCheck, label: 'Gold Member', value: `Indotrading ${company.indotradingSince}` },
  { icon: MessageCircle, label: 'Konsultasi', value: 'Via WhatsApp' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="grid-pattern pointer-events-none absolute inset-0" />
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-navy-700/40 blur-3xl" />

      <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <span className="eyebrow !text-brand-400">Supplier PLC Jakarta · Sejak {company.founded}</span>
          <h1 className="heading-display mt-6 text-5xl font-bold sm:text-6xl lg:text-[5.1rem]">
            Otomasi Industri
            <br />
            <span className="text-brand-500"> yang Andal</span>
            <br />
            untuk Setiap Proses
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
            PT Saekapraya Adhitama Engineering menghadirkan solusi otomasi industri, instrumentation,
            dan sistem kontrol proses yang terintegrasi untuk manufaktur, energi, dan infrastruktur.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={generalInquiryUrl()} target="_blank" rel="noreferrer" className="btn btn-primary">
              <MessageCircle size={17} /> Konsultasi Proyek
            </a>
            <Link to="/produk" className="btn btn-outline">
              Lihat Katalog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-2.5">
                <fact.icon size={18} className="mt-0.5 shrink-0 text-brand-500" />
                <div>
                  <p className="text-[0.65rem] uppercase tracking-wider text-steel-400">{fact.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 rounded-xl border border-white/10" />
          <div className="absolute -right-3 -top-3 h-20 w-20 border-r-2 border-t-2 border-brand-500/70" />
          <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b-2 border-l-2 border-brand-500/70" />

          <div className="relative overflow-hidden rounded-lg border border-white/15 bg-navy-800 shadow-2xl shadow-black/40">
            <img
              src={asset('/images/hero-engineering.jpg')}
              alt="Ilustrasi lingkungan kerja rekayasa dan otomasi industri"
              className="h-[340px] w-full object-cover opacity-90 sm:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-400">
                Electrical · Instrumentation · Automation
              </p>
              <p className="heading-display mt-2 text-2xl font-bold text-white">
                Mitra Teknik untuk Industri Anda
              </p>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-4 hidden max-w-[230px] rounded-lg border border-white/10 bg-navy-900/95 p-4 shadow-xl backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-brand-500/15 text-brand-400">
                <ShieldCheck size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">Gold Member sejak 2014</p>
                <p className="text-[0.65rem] text-steel-400">Terverifikasi oleh Indotrading</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10 bg-navy-900/60">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-steel-400">
          <span>PLC &amp; Control Systems</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-500 sm:block" />
          <span>Instrumentation</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-500 sm:block" />
          <span>Electrical Automation</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-500 sm:block" />
          <span>Engineering Service</span>
        </Container>
      </div>
    </section>
  )
}
