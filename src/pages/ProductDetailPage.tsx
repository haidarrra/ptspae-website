import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Info,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/sections/CTABanner'
import NotFoundPage from './NotFoundPage'
import { getProductBySlug, products } from '../data/products'
import { productInquiryUrl, generalInquiryUrl } from '../lib/whatsapp'
import { company, supportedBrands } from '../data/company'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) return <NotFoundPage />

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 4)

  return (
    <>
      <PageHero crumb="Detail Produk" title={product.name} description={product.summary}>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <span className="rounded-sm border border-brand-500/50 bg-brand-500/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-brand-400">
            {product.category}
          </span>
          <Link to="/produk" className="inline-flex items-center gap-1.5 text-xs font-semibold text-steel-300 hover:text-brand-400">
            <ArrowLeft size={14} /> Kembali ke katalog
          </Link>
        </div>
      </PageHero>

      <section className="section-pad bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-lg border border-steel-200 bg-steel-100 p-10">
                <div className="grid-pattern-light pointer-events-none absolute inset-0 opacity-60" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative mx-auto h-[380px] w-full object-contain"
                />
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-6">
              <span className="eyebrow">Informasi Produk</span>
              <h2 className="heading-display mt-4 text-4xl font-bold text-navy-900">{product.name}</h2>
              <p className="mt-5 text-sm leading-relaxed text-steel-500">{product.summary}</p>

              <div className="mt-8 border-t border-steel-200 pt-6">
                <h3 className="text-sm font-bold text-navy-900">Kategori</h3>
                <p className="mt-2 text-sm text-steel-500">{product.category}</p>
              </div>

              <div className="mt-5 border-t border-steel-200 pt-6">
                <h3 className="text-sm font-bold text-navy-900">Merek yang didukung</h3>
                <p className="mt-2 text-sm text-steel-500">{supportedBrands.join(', ')}</p>
              </div>

              <div className="mt-6 flex gap-3 rounded border-l-2 border-brand-500 bg-steel-100 p-4">
                <Info size={18} className="mt-0.5 shrink-0 text-brand-600" />
                <p className="text-xs leading-relaxed text-steel-500">
                  Detail teknis, ketersediaan, dan harga tidak ditampilkan di katalog ini. Silakan hubungi
                  tim PT SPAE melalui WhatsApp untuk informasi resmi dan penawaran.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={productInquiryUrl(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <MessageCircle size={17} /> Tanya Produk Ini
                </a>
                <a href={generalInquiryUrl()} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                  Konsultasi Umum <ArrowUpRight size={15} />
                </a>
              </div>

              <a
                href={product.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-steel-500 underline decoration-steel-300 underline-offset-4 transition-colors hover:text-brand-600"
              >
                <ExternalLink size={13} /> Referensi katalog resmi PT SPAE
              </a>
            </Reveal>
          </div>

          {related.length > 0 && (
            <div className="mt-20 border-t border-steel-200 pt-12">
              <div className="flex flex-wrap items-end justify-between gap-5">
                <div>
                  <span className="eyebrow">Produk Terkait</span>
                  <h2 className="heading-display mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">
                    Pilihan Lain di Kategori Ini
                  </h2>
                </div>
                <Link to="/produk" className="btn btn-outline-dark">
                  Semua Produk <ArrowRight size={16} />
                </Link>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((item, index) => (
                  <Reveal key={item.slug} delay={index * 60}>
                    <Link
                      to={`/produk/${item.slug}`}
                      className="card-surface group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg"
                    >
                      <div className="bg-steel-100 p-4">
                        <img src={item.image} alt={item.name} className="mx-auto h-32 w-full object-contain" loading="lazy" />
                      </div>
                      <div className="p-4">
                        <p className="text-xs font-bold leading-snug text-navy-900">{item.name}</p>
                        <p className="mt-2 flex items-center gap-1 text-[0.7rem] font-semibold text-brand-600">
                          Lihat detail <ArrowRight size={12} />
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex items-center gap-3 rounded-lg bg-navy-900 p-5 text-white">
            <ShieldCheck size={20} className="shrink-0 text-brand-500" />
            <p className="text-xs leading-relaxed text-steel-300">
              PT SPAE adalah Gold Member Indotrading sejak {company.indotradingSince} dengan dokumen usaha yang diperiksa.
            </p>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
