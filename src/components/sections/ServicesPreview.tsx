import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'
import { serviceInquiryUrl } from '../../lib/whatsapp'

export default function ServicesPreview() {
  return (
    <section className="section-pad grid-pattern-light border-y border-steel-200 bg-steel-100">
      <Container>
        <SectionHeading
          eyebrow="Layanan Kami"
          title={
            <>
              Dukungan Teknis untuk
              <br /> Setiap Kebutuhan Industri
            </>
          }
          description="Dari pengadaan perangkat hingga integrasi sistem dan dukungan purnajual, PT SPAE menemani proses operasional Anda."
          action={
            <Link to="/layanan" className="btn btn-outline-dark">
              Semua Layanan <ArrowRight size={16} />
            </Link>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="card-surface group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded bg-navy-900 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-navy-950">
                  <service.icon size={23} />
                </span>
                <h3 className="heading-display mt-5 text-2xl font-bold text-navy-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-500">{service.description}</p>
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
                  className="mt-5 inline-flex items-center gap-1.5 border-t border-steel-200 pt-4 text-xs font-bold text-brand-600 transition-colors hover:text-brand-500"
                >
                  <MessageCircle size={14} /> Tanya layanan ini
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
