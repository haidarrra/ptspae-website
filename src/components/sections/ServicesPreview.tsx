import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'
import { serviceInquiryUrl } from '../../lib/whatsapp'

export default function ServicesPreview() {
  return (
    <section className="section-pad grid-pattern-light bg-steel-100">
      <Container>
        <SectionHeading
          eyebrow="Lingkup Layanan"
          title="Solusi yang Kami Hadirkan"
          description="Dari pengadaan perangkat hingga integrasi sistem dan dukungan purnajual, PT SAE menemani proses operasional Anda."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 60}>
              <article className="flex h-full flex-col rounded-lg border border-steel-200 bg-white p-6 transition-colors hover:border-brand-500/70">
                <span className="flex h-11 w-11 items-center justify-center rounded bg-navy-900 text-brand-400">
                  <service.icon size={21} />
                </span>
                <h3 className="heading-display mt-5 text-xl font-bold text-navy-900">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-500">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-sm border border-steel-200 bg-steel-100 px-2.5 py-1 text-[0.68rem] font-medium text-navy-700"
                    >
                      {point}
                    </span>
                  ))}
                </div>
                <a
                  href={serviceInquiryUrl(service.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 border-t border-steel-200 pt-4 text-xs font-bold text-brand-600 transition-colors hover:text-brand-500"
                >
                  <MessageCircle size={14} /> Tanya layanan ini
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/layanan" className="btn btn-dark">
            Lihat Semua Layanan <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
