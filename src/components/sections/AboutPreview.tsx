import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { company } from '../../data/company'
import { asset } from '../../lib/assets'

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-steel-200 bg-steel-100">
                <img
                  src={asset('/images/profile/office-facilities.jpg')}
                  alt="Fasilitas kantor PT Saekapraya Adhitama Engineering"
                  className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                />
              </div>
              <div className="mt-4 rounded-lg bg-navy-900 px-5 py-4 text-white sm:absolute sm:-bottom-6 sm:right-0 sm:mt-0 sm:max-w-[260px]">
                <p className="heading-display text-2xl font-bold text-brand-400">Sejak {company.founded}</p>
                <p className="mt-1 text-xs leading-relaxed text-steel-300">
                  Berbasis di Jakarta Timur, melayani kebutuhan industri di seluruh Indonesia.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Tentang PT SAE"
              title="Mitra Rekayasa untuk Sistem Industri Anda"
              description={company.about}
            />
            <p className="mt-5 text-sm leading-relaxed text-steel-500">{company.aboutSecondary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/tentang" className="btn btn-dark">
                Tentang Kami <ArrowRight size={16} />
              </Link>
              <Link to="/proyek" className="btn btn-outline-dark">
                Pengalaman Proyek
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
