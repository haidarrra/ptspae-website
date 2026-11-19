import { useState, type FormEvent } from 'react'
import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { company } from '../data/company'
import { buildWhatsAppUrl } from '../lib/whatsapp'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = [
      'Halo PT SAE, saya ingin menghubungi tim Anda.',
      'Nama: ' + form.name,
      'No. Handphone: ' + form.phone,
      form.email ? 'Email: ' + form.email : '',
      'Pesan: ' + form.message,
    ]
      .filter(Boolean)
      .join(' | ')

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full rounded-sm border border-steel-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-steel-400 focus:border-brand-500'

  return (
    <>
      <PageHero
        crumb="Kontak"
        title="Hubungi Kami"
        description="Butuh penawaran, informasi layanan, atau jadwal kunjungan? Hubungi tim PT SAE melalui formulir berikut atau langsung via WhatsApp."
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <div className="card-surface p-6 sm:p-9">
                <span className="eyebrow">Formulir Kontak</span>
                <h2 className="heading-display mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">
                  Kirim Pesan kepada Kami
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-steel-500">
                  Formulir ini akan membuka WhatsApp dengan pesan yang sudah terisi. Tidak ada data yang
                  dikirim ke server.
                </p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold text-navy-900">Nama Lengkap *</span>
                      <input
                        required
                        value={form.name}
                        onChange={(event) => setForm({ ...form, name: event.target.value })}
                        placeholder="Nama Anda"
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold text-navy-900">No. Handphone *</span>
                      <input
                        required
                        value={form.phone}
                        onChange={(event) => setForm({ ...form, phone: event.target.value })}
                        placeholder="08xxxxxxxxxx"
                        className={inputClass}
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-navy-900">Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      placeholder="nama@perusahaan.com"
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-navy-900">Pesan / Pertanyaan</span>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(event) => setForm({ ...form, message: event.target.value })}
                      placeholder="Ceritakan kebutuhan Anda..."
                      className={inputClass + ' resize-y'}
                    />
                  </label>
                  <button type="submit" className="btn btn-primary w-full sm:w-auto">
                    <MessageCircle size={17} /> Lanjutkan via WhatsApp <ArrowUpRight size={15} />
                  </button>
                </form>
              </div>
            </Reveal>

            <div className="space-y-6 lg:col-span-5">
              <Reveal delay={100}>
                <div className="rounded-lg bg-navy-900 p-7 text-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded bg-brand-500/15 text-brand-400">
                    <MessageCircle size={21} />
                  </span>
                  <h3 className="heading-display mt-5 text-2xl font-bold">Chat Langsung</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-300">
                    Cara tercepat untuk mendapatkan respons dari tim PT SAE.
                  </p>
                  <p className="mt-5 text-lg font-bold text-white">{company.whatsappDisplay}</p>
                  <div className="mt-3 space-y-2 break-all text-sm text-steel-300">
                    <p>Telepon: {company.phone}</p>
                    <p>Email: {company.email}</p>
                  </div>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-5 w-full"
                  >
                    Buka WhatsApp <ArrowUpRight size={15} />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="card-surface p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded bg-steel-100 text-brand-600">
                    <MapPin size={21} />
                  </span>
                  <h3 className="heading-display mt-5 text-2xl font-bold text-navy-900">Kunjungi Kami</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-500">{company.address}</p>
                  <a
                    href={company.mapsDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="touch-link mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-500"
                  >
                    Buka petunjuk arah <ArrowUpRight size={14} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <Reveal>
            <div className="h-[380px] overflow-hidden rounded-lg border border-steel-200">
              <iframe
                title="Lokasi PT SAE"
                src="https://www.google.com/maps?q=-6.311703557639202,106.91210800334113&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
