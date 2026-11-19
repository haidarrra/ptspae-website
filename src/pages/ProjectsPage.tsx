import { useState } from 'react'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/CTABanner'
import { projectGallery, projectSectors, totalProjects } from '../data/projects'
import { projectInquiryUrl } from '../lib/whatsapp'

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState(projectSectors[0].id)
  const active = projectSectors.find((sector) => sector.id === activeId) ?? projectSectors[0]

  return (
    <>
      <PageHero
        crumb="Pengalaman Proyek"
        title="Project Experience"
        description={`Dokumentasi ${totalProjects} proyek pada ${projectSectors.length} sektor industri, sebagaimana dipublikasikan dalam Company Profile PT Saekapraya Adhitama Engineering.`}
      />

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Portofolio"
            title="Daftar Proyek per Sektor"
            description="Pilih sektor untuk melihat daftar proyek, customer, user, dan tahun yang tercantum dalam profil perusahaan."
          />

          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Sektor proyek">
            {projectSectors.map((sector) => (
              <button
                key={sector.id}
                type="button"
                role="tab"
                aria-selected={sector.id === activeId}
                onClick={() => setActiveId(sector.id)}
                className={`min-h-11 rounded-sm border px-4 py-2 text-xs font-bold transition-colors ${
                  sector.id === activeId
                    ? 'border-navy-900 bg-navy-900 text-white'
                    : 'border-steel-200 bg-white text-navy-700 hover:border-brand-500 hover:text-brand-600'
                }`}
              >
                {sector.name}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-steel-200 bg-navy-800">
                <img
                  src={active.image}
                  alt={`Dokumentasi proyek ${active.name}`}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <p className="heading-display mt-5 text-2xl font-bold text-navy-900">{active.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-steel-500">{active.description}</p>
              <a
                href={projectInquiryUrl(active.name)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-500"
              >
                Diskusikan proyek serupa <ArrowUpRight size={14} />
              </a>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <div className="overflow-hidden rounded-lg border border-steel-200">
                <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-steel-200 bg-navy-900 px-4 py-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-steel-300 sm:px-6">
                  <span>Proyek</span>
                  <span>Tahun</span>
                </div>
                <ul>
                  {active.items.map((item, itemIndex) => (
                    <li
                      key={`${item.name}-${itemIndex}`}
                      className="grid grid-cols-1 gap-2 border-b border-steel-200 px-4 py-4 last:border-0 sm:grid-cols-[1fr_auto] sm:gap-4 sm:px-6"
                    >
                      <div className="min-w-0">
                        <p className="break-words text-sm font-semibold leading-snug text-navy-900">
                          {item.name}
                        </p>
                        {(item.customer || item.user || item.location) && (
                          <p className="mt-1.5 break-words text-xs leading-relaxed text-steel-500">
                            {[item.customer && `Customer: ${item.customer}`, item.user && `User: ${item.user}`, item.location && item.location]
                              .filter(Boolean)
                              .join(' · ')}
                          </p>
                        )}
                      </div>
                      <span className="text-xs font-bold text-brand-600 sm:text-right">
                        {item.year ?? '—'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-pad grid-pattern-light bg-steel-100">
        <Container>
          <SectionHeading
            eyebrow="Dokumentasi"
            title="Foto Proyek"
            description="Foto-foto asli yang diekstrak dari Company Profile PT SAE."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {projectGallery.map((item, index) => (
              <Reveal key={item.image} delay={(index % 4) * 50}>
                <figure className="h-full overflow-hidden rounded-lg border border-steel-200 bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="p-3 sm:p-4">
                    <p className="break-words text-xs font-bold leading-snug text-navy-900">{item.title}</p>
                    <p className="mt-1 break-words text-[0.65rem] leading-relaxed text-steel-500">
                      {item.detail}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-steel-500">
            <ImageIcon size={14} /> Seluruh foto bersumber dari Company Profile PT SAE.
          </p>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
