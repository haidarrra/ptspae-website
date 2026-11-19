import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { projectSectors, totalProjects } from '../../data/projects'

const featuredIds = [
  'oil-gas',
  'petrochemical',
  'power-plant',
  'control-scada',
  'panel-work',
  'fat-sat',
]

const featured = featuredIds
  .map((id) => projectSectors.find((sector) => sector.id === id))
  .filter((sector): sector is (typeof projectSectors)[number] => Boolean(sector))

export default function ProjectsPreview() {
  return (
    <section className="section-pad grid-pattern-light bg-steel-100">
      <Container>
        <SectionHeading
          eyebrow="Pengalaman Proyek"
          title="Proyek yang Telah Kami Dukung"
          description={`Dokumentasi ${totalProjects} proyek pada ${projectSectors.length} sektor industri, sebagaimana dipublikasikan dalam Company Profile PT SAE.`}
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((sector, index) => (
            <Reveal key={sector.id} delay={(index % 3) * 60}>
              <Link
                to="/proyek"
                className="group block h-full overflow-hidden rounded-lg border border-steel-200 bg-white transition-colors hover:border-brand-500/70"
              >
                <div className="overflow-hidden bg-navy-800">
                  <img
                    src={sector.image}
                    alt={`Dokumentasi proyek ${sector.name}`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-600">
                    {sector.name}
                  </p>
                  <h3 className="mt-2 text-sm font-bold leading-snug text-navy-900">
                    {sector.items[0]?.name}
                  </h3>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600">
                    Lihat detail <ArrowRight size={14} />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/proyek" className="btn btn-dark">
            Lihat Semua Proyek <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
