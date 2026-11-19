import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { generalInquiryUrl } from '../../lib/whatsapp'

export default function CTABanner() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-navy-900 px-6 py-12 text-white sm:px-10 lg:px-16">
            <div className="grid-pattern pointer-events-none absolute inset-0 opacity-70" />
            <div className="hero-glow pointer-events-none absolute inset-0" />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow !text-brand-400">Hubungi Tim Kami</span>
                <h2 className="heading-display mt-4 text-[clamp(2rem,6vw,3.6rem)] font-bold leading-tight">
                  Ready to Discuss Your Solution?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-steel-300 sm:text-base">
                  Konsultasikan kebutuhan otomasi, instrumentation, atau sistem kontrol proses Anda.
                  Tim PT SAE siap membantu melalui WhatsApp.
                </p>
              </div>
              <a
                href={generalInquiryUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full shrink-0 !px-6 !py-4 sm:w-auto"
              >
                <MessageCircle size={18} /> Konsultasi Proyek <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
