import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MapPin, MessageCircle } from 'lucide-react'
import Container from '../ui/Container'
import { company } from '../../data/company'
import { heroSlides } from '../../data/slides'
import { generalInquiryUrl } from '../../lib/whatsapp'

const INTERVAL = 6000

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const goTo = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, INTERVAL)
    return () => window.clearInterval(timer)
  }, [paused, reducedMotion])

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current
    if (Math.abs(delta) > 40) goTo(index + (delta < 0 ? 1 : -1))
    touchStartX.current = null
  }

  const slide = heroSlides[index]

  return (
    <section
      className="relative overflow-hidden bg-navy-950 text-white"
      aria-roledescription="carousel"
      aria-label="Profil dan proyek PT SAE"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="grid-pattern pointer-events-none absolute inset-0 hidden opacity-60 sm:block" />
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <Container className="relative py-10 sm:py-14 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <span className="eyebrow !text-brand-400">
              {company.shortName} · Sejak {company.founded}
            </span>

            <div key={index} className={reducedMotion ? '' : 'slide-text-in'} aria-live="polite">
              <h1 className="heading-display mt-5 text-[clamp(2.1rem,8vw,4.6rem)] font-bold leading-[1.02] text-balance">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-steel-300 sm:text-base">
                {slide.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={generalInquiryUrl()} target="_blank" rel="noreferrer" className="btn btn-primary">
                <MessageCircle size={17} /> Konsultasi Proyek
              </a>
              <Link to="/proyek" className="btn btn-outline">
                Lihat Proyek <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs text-steel-400">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={15} className="text-brand-500" /> Berkarya sejak {company.founded}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-brand-500" /> {company.city}
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={15} className="text-brand-500" /> WhatsApp {company.whatsappDisplay}
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Slide sebelumnya"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-white/20 text-white transition-colors hover:border-brand-500 hover:text-brand-400"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Slide berikutnya"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-white/20 text-white transition-colors hover:border-brand-500 hover:text-brand-400"
              >
                <ChevronRight size={20} />
              </button>
              <div className="ml-2 flex items-center gap-1" role="tablist" aria-label="Pilih slide">
                {heroSlides.map((item, dotIndex) => (
                  <button
                    key={item.image}
                    type="button"
                    role="tab"
                    aria-selected={dotIndex === index}
                    aria-label={`Slide ${dotIndex + 1}`}
                    onClick={() => goTo(dotIndex)}
                    className={`flex h-11 w-7 items-center justify-center ${dotIndex === index ? 'text-brand-500' : 'text-steel-500'}`}
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all ${dotIndex === index ? 'w-6 bg-brand-500' : 'w-2 bg-steel-500'}`}
                    />
                  </button>
                ))}
              </div>
              <span className="ml-auto text-xs font-semibold tracking-widest text-steel-400">
                {String(index + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 lg:col-span-6"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/15 bg-navy-800 shadow-2xl shadow-black/30 sm:aspect-[16/9] lg:aspect-[4/5]">
              {heroSlides.map((item, imageIndex) => (
                <img
                  key={item.image}
                  src={item.image}
                  alt={item.title}
                  aria-hidden={imageIndex !== index}
                  loading={imageIndex === 0 ? 'eager' : 'lazy'}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    imageIndex === index ? 'opacity-100' : 'opacity-0'
                  } ${imageIndex === index && !reducedMotion ? 'slide-image-zoom' : ''}`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-brand-400">
                  {slide.eyebrow}
                </p>
                <p className="heading-display mt-2 text-xl font-bold text-white sm:text-2xl">
                  {company.shortName} — {company.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
