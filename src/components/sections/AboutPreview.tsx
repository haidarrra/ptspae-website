import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { company } from '../../data/company'
import { asset } from '../../lib/assets'

const highlights = [
  'Electrical, instrumentation & automation',
  'Solusi terintegrasi dari perencanaan hingga purnajual',
  'Tim engineer berpengalaman dan responsif',
]

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-brand-500" />
              <div className="overflow-hidden rounded-lg">
                <img
                  src={asset('/images/hero-engineering.jpg')}
                  alt="Suasana kerja engineering di PT SPAE"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-lg bg-navy-900 px-6 py-5 text-white shadow-xl">
                <p className="heading-display text-4xl font-bold text-brand-500">{company.founded}</p>
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-steel-300">
                  Melayani industri di Indonesia
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Tentang PT SPAE"
              title={
                <>
                  Mitra Otomasi Industri
                  <br /> yang Berpengalaman
                </>
              }
              description={company.about}
            />
            <ul className="mt-7 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/tentang" className="btn btn-dark mt-9">
              Kenali Lebih Dekat <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
