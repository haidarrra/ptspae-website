import { ArrowUpRight, Mail, MapPin, MessageCircle, Package, Phone, Handshake } from 'lucide-react'
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

const provide = ['PLC (Programmable Logic Control)', 'Electrical', 'Equipment Test', 'Instrumentation', 'Software', 'Engineering Service']
const serve = ['PLC', 'Instrumentation', 'Elektrikal', 'Software', 'Equipment Test', 'Engineering Service']

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="Tentang Kami"
        title="Tentang PT SAE"
        description="Berbasis di Jakarta Timur sejak 2006, kami menyediakan solusi instrumentasi, electrical, dan otomasi industri untuk berbagai sektor di Indonesia."
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="overflow-hidden rounded-lg border border-steel-200 bg-steel-100">
                  <img
                    src={asset('/images/profile/cover.jpg')}
                    alt="Profil PT Saekapraya Adhitama Engineering"
                    className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 rounded-lg bg-navy-900 px-5 py-4 text-white lg:absolute lg:-bottom-6 lg:right-0 lg:mt-0 lg:max-w-[240px]">
                  <p className="heading-display text-3xl font-bold text-brand-500">{company.founded}</p>
                  <p className="text-[0.65rem] uppercase tracking-wider text-steel-300">Sejak berdiri</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <SectionHeading eyebrow="Profil Perusahaan" title={company.name} />
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-steel-500">
                <p>{company.about}</p>
                <p>{company.aboutSecondary}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
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

      <section className="section-pad relative overflow-hidden bg-navy-900 text-white">
        <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative">
          <SectionHeading
            light
            eyebrow="Arah Perusahaan"
            title="Visi & Misi"
            description="Disampaikan dalam Company Profile PT Saekapraya Adhitama Engineering."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-7">
                <span className="heading-display text-5xl font-bold text-brand-500/40">01</span>
                <h3 className="heading-display mt-3 text-2xl font-bold">Visi</h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-300">{company.vision}</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-7">
                <span className="heading-display text-5xl font-bold text-brand-500/40">02</span>
                <h3 className="heading-display mt-3 text-2xl font-bold">Misi</h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-300">{company.mission}</p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-8 overflow-hidden rounded-lg">
              <img
                src={asset('/images/profile/vision-mission.jpg')}
                alt="Dokumentasi perusahaan pada Company Profile PT SAE"
                loading="lazy"
                className="aspect-[16/7] w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad grid-pattern-light border-y border-steel-200 bg-steel-100">
        <Container>
          <SectionHeading
            eyebrow="Lingkup Kegiatan"
            title="Fokus Layanan Kami"
            description="Lingkup kegiatan berikut disampaikan langsung dalam profil resmi PT SAE."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card-surface h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded bg-navy-900 text-brand-400">
                  <Package size={22} />
                </span>
                <h3 className="heading-display mt-5 text-2xl font-bold text-navy-900">Kami Menyediakan</h3>
                <ul className="mt-5 space-y-3">
                  {provide.map((item) => (
                    <li key={item} className="flex items-center gap-3 border-b border-steel-200 pb-3 text-sm text-navy-800">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
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
          <SectionHeading eyebrow="Lokasi Kami" title="Kunjungi PT SAE" description={company.address} />
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="card-surface h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded bg-brand-500/15 text-brand-600">
                  <MapPin size={22} />
                </span>
                <h3 className="heading-display mt-5 text-2xl font-bold text-navy-900">Alamat Utama</h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-500">{company.address}</p>
                <div className="mt-6 space-y-3 text-sm text-steel-500">
                  <p className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-brand-500" /> {company.phone}</p>
                  <p className="flex items-start gap-2 break-all"><Mail size={16} className="mt-0.5 shrink-0 text-brand-500" /> {company.email}</p>
                </div>
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
            <Reveal delay={80} className="lg:col-span-8">
              <div className="h-full min-h-[280px] overflow-hidden rounded-lg border border-steel-200 sm:min-h-[360px]">
                <iframe
                  title="Lokasi PT SAE di Jakarta Timur"
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
