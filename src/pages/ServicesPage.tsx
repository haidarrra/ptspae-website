import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Workflow from '../components/sections/Workflow'
import Brands from '../components/sections/Brands'
import CTABanner from '../components/sections/CTABanner'
import { services } from '../data/services'
import { buildWhatsAppUrl, serviceInquiryUrl } from '../lib/whatsapp'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Layanan"
        title="Layanan Kami"
        description="PT SAE menyediakan pengadaan perangkat, integrasi sistem, dan dukungan rekayasa untuk kebutuhan otomasi industri di Indonesia."
      />

      <section className="section-pad grid-pattern-light bg-steel-100">
        <Container>
          <SectionHeading
            eyebrow="Penawaran Layanan"
            title="Solusi yang Kami Sediakan"
            description="Lingkup layanan berikut disusun berdasarkan profil resmi PT SAE. Detail cakupan pekerjaan dapat didiskusikan lebih lanjut dengan tim kami."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 80}>
                <article className="card-surface group flex h-full flex-col p-7 transition-colors duration-200 hover:border-brand-500 motion-reduce:transition-none">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded bg-navy-900 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-navy-950">
                      <service.icon size={23} />
                    </span>
                    <span className="heading-display text-3xl font-bold text-steel-200">0{index + 1}</span>
                  </div>
                  <h2 className="heading-display mt-6 text-2xl font-bold text-navy-900">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-500">{service.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-steel-200 pt-5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-navy-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={serviceInquiryUrl(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="touch-link mt-5 inline-flex items-center gap-1.5 border-t border-steel-200 pt-5 text-xs font-bold text-brand-600 transition-colors hover:text-brand-500"
                  >
                    <MessageCircle size={14} /> Tanya layanan ini
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-lg bg-navy-900 p-7 text-white sm:flex-row sm:items-center">
              <div>
                <h3 className="heading-display text-2xl font-bold">Butuh penawaran untuk proyek Anda?</h3>
                <p className="mt-2 text-sm text-steel-300">Diskusikan kebutuhan Anda langsung dengan tim PT SAE.</p>
              </div>
              <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn btn-primary shrink-0">
                <MessageCircle size={17} /> Hubungi Kami <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <Workflow />
      <Brands />
      <CTABanner />
    </>
  )
}
