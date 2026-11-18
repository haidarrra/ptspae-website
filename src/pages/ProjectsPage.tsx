import { ArrowUpRight, Factory, Gauge, Settings2, Wrench } from 'lucide-react'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'
import { projects, projectsNotice } from '../data/projects'
import { generalInquiryUrl } from '../lib/whatsapp'

const icons = [Factory, Gauge, Settings2, Wrench]

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Proyek"
        title="Portofolio Proyek"
        description="PT SPAE mendukung kebutuhan otomasi, instrumentation, electrical, dan engineering service untuk berbagai aplikasi industri."
      />

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Bidang Karya"
            title="Area Dukungan Proyek"
            description="Kategori berikut menggambarkan lingkup layanan PT SPAE. Detail proyek yang telah disetujui akan ditampilkan pada halaman ini setelah tersedia."
          />

          <div className="mt-8 rounded-lg border-l-2 border-brand-500 bg-steel-100 p-5">
            <p className="text-xs leading-relaxed text-steel-500">
              <strong className="text-navy-900">Catatan informasi: </strong>
              {projectsNotice}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = icons[index]
              return (
                <Reveal key={project.title} delay={(index % 2) * 90}>
                  <article className="card-surface group h-full overflow-hidden transition-all duration-300 hover:border-brand-500 hover:shadow-lg">
                    <div className="relative flex h-44 items-center justify-center overflow-hidden bg-navy-900">
                      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-70" />
                      <Icon size={52} className="relative text-brand-500/80 transition-transform duration-300 group-hover:scale-110" />
                      <span className="absolute left-5 top-5 rounded-sm border border-white/20 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-steel-300">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h2 className="heading-display text-2xl font-bold text-navy-900">{project.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-steel-500">{project.description}</p>
                      <a
                        href={generalInquiryUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-500"
                      >
                        Diskusikan kebutuhan serupa <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
