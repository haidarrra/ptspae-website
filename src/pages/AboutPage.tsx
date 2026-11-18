import { ArrowUpRight, MapPin, MessageCircle, Package, Handshake } from 'lucide-react'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import PageHero from '../components/ui/PageHero'
import Strengths from '../components/sections/Strengths'
import Workflow from '../components/sections/Workflow'
import Brands from '../components/sections/Brands'
import CTABanner from '../components/sections/CTABanner'
import { company } from '../data/company'
import { buildWhatsAppUrl } from '../lib/whatsapp'
import { asset } from '../lib/assets'

const sell = ['PLC Programable Logic Controller', 'Transmitters Gauge', 'PLC']
const serve = ['PLC', 'Instrumentation', 'Elektrikal', 'Software', 'Equipment Test', 'Engineering Service']

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="Tentang Kami"
        title="Tentang PT SPAE"
        description="Berbasis di Jakarta Timur sejak 2006, kami menyediakan solusi otomasi industri dan sistem kontrol proses untuk berbagai sektor di Indonesia."
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-brand-500" />
                <img
                  src={asset('/images/hero-engineering.jpg')}
                  alt="Lingkungan kerja engineering PT SPAE"
                  className="h-[460px] w-full rounded-lg object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 right-4 rounded-lg bg-navy-900 px-6 py-4 text-white shadow-xl">
                  <p className="heading-display text-3xl font-bold text-brand-500">{company.founded}</p>
                  <p className="text-[0.65rem] uppercase tracking-wider text-steel-300">Sejak berdiri</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-7">
              <SectionHeading eyebrow="Profil Perusahaan" title={company.name} />
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-steel-500">
                <p>{company.about}</p>
                <p>{company.aboutSecondary}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <MessageCircle size={16} /> Hubungi Kami
                </a>
                <a
                  href={company.indotradingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  Verifikasi Indotrading <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-pad grid-pattern-light border-y border-steel-200 bg-steel-100">
        <Container>
          <SectionHeading
            eyebrow="Lingkup Kegiatan"
            title="Fokus Layanan Kami"
            description="Lingkup kegiatan berikut disampaikan langsung dalam profil resmi PT SPAE."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card-surface h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded bg-navy-900 text-brand-400">
                  <Package size={22} />
                </span>
                <h3 className="heading-display mt-5 text-2xl font-bold text-navy-900">Kami Menyediakan</h3>
                <ul className="mt-5 space-y-3">
                  {sell.map((item) => (
                    <li key={item} className="flex items-center gap-3 border-b border-steel-200 pb-3 text-sm text-navy-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-surface h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded bg-navy-900 text-brand-400">
                  <Handshake size={22} />
                </span>
                <h3 className="heading-display mt-5 text-2xl font-bold text-navy-900">Kami Melayani</h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {serve.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-steel-200 bg-steel-100 px-3 py-2 text-sm font-medium text-navy-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Strengths />
      <Workflow />
      <Brands />

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading eyebrow="Lokasi Kami" title="Kunjungi PT SPAE" description={company.address} />
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="card-surface h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded bg-brand-500/15 text-brand-600">
                  <MapPin size={22} />
                </span>
                <h3 className="heading-display mt-5 text-2xl font-bold text-navy-900">Alamat Utama</h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-500">{company.address}</p>
                <div className="mt-6 space-y-3">
                  <a
                    href={company.mapsDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark w-full"
                  >
                    Petunjuk Arah <ArrowUpRight size={15} />
                  </a>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark w-full"
                  >
                    <MessageCircle size={16} /> Chat WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-8">
              <div className="h-full min-h-[360px] overflow-hidden rounded-lg border border-steel-200">
                <iframe
                  title="Lokasi PT SPAE di Jakarta Timur"
                  src="https://www.google.com/maps?q=-6.311703557639202,106.91210800334113&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
