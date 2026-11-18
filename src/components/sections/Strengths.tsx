import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { strengths } from '../../data/company-highlights'

export default function Strengths() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-900 text-white">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Keunggulan Kami"
          title="Mengapa PT SPAE"
          description="Komitmen kami pada kualitas, keamanan kerja, dan keberlanjutan operasional jangka panjang menjadi dasar setiap layanan yang kami berikan."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength, index) => (
            <Reveal key={strength.title} delay={index * 80}>
              <div className="group h-full rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-brand-500/60 hover:bg-white/[0.07]">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded bg-brand-500/15 text-brand-400">
                    <strength.icon size={21} />
                  </span>
                  <span className="heading-display text-2xl font-bold text-white/20">0{index + 1}</span>
                </div>
                <p className="heading-display mt-6 text-2xl font-bold text-brand-400">{strength.stat}</p>
                <h3 className="mt-2 text-base font-bold text-white">{strength.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-400">{strength.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
