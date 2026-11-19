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
          title="Dari Perencanaan hingga Dukungan Operasional"
          description="Tahapan kerja berikut mengikuti dokumentasi yang disampaikan dalam Company Profile PT SAE."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((step, index) => (
            <Reveal key={step.number} delay={(index % 3) * 60}>
              <div className="h-full border-l-2 border-brand-500 pl-5">
                <span className="heading-display text-3xl font-bold text-steel-300">{step.number}</span>
                <h3 className="heading-display mt-2 text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-500">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
