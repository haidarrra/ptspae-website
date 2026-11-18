import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { workflow } from '../../data/company-highlights'

export default function Workflow() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="Alur Kerja Rekayasa"
          title="Dari Kebutuhan hingga Dukungan Purnajual"
          description="Pendekatan kerja PT SPAE mengikuti lingkup layanan yang kami sampaikan secara resmi: perencanaan, integrasi, pengelolaan proyek, dan pendampingan berkelanjutan."
          align="center"
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-steel-200 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {workflow.map((step, index) => (
              <Reveal key={step.number} delay={index * 90}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white">
                    <span className="heading-display text-lg font-bold text-navy-900">{step.number}</span>
                  </div>
                  <h3 className="heading-display mt-5 text-2xl font-bold text-navy-900">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-steel-500">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
