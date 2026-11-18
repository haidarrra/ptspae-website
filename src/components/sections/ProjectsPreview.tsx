import { Link } from 'react-router-dom'
import { ArrowRight, Factory, Gauge, Settings2, Wrench } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { projects, projectsNotice } from '../../data/projects'

const icons = [Factory, Gauge, Settings2, Wrench]

export default function ProjectsPreview() {
  return (
    <section className="section-pad grid-pattern-light bg-steel-100">
      <Container>
        <SectionHeading
          eyebrow="Portofolio & Proyek"
          title="Bidang Karya Kami"
          description="PT SPAE berpengalaman dalam menyediakan perangkat dan dukungan rekayasa untuk berbagai kebutuhan proses industri."
          action={
            <Link to="/proyek" className="btn btn-outline-dark">
              Lihat Portofolio <ArrowRight size={16} />
            </Link>
          }
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={project.title} delay={index * 70}>
                <article className="card-surface group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg">
                  <div className="relative flex h-32 items-center justify-center overflow-hidden bg-navy-900">
                    <div className="grid-pattern absolute inset-0 opacity-70" />
                    <Icon size={42} className="relative text-brand-500/80 transition-transform duration-300 group-hover:scale-110" />
                    <span className="absolute bottom-3 left-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-steel-400">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold leading-snug text-navy-900">{project.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-steel-500">{project.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <p className="mt-8 max-w-3xl rounded border-l-2 border-brand-500 bg-white/70 px-4 py-3 text-xs leading-relaxed text-steel-500">
          <strong className="text-navy-800">Catatan: </strong>
          {projectsNotice}
        </p>
      </Container>
    </section>
  )
}
