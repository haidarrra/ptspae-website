import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Search } from 'lucide-react'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/sections/CTABanner'
import { productCategories, products } from '../data/products'
import type { ProductCategory } from '../types'
import { productInquiryUrl } from '../lib/whatsapp'

export default function ProductsPage() {
  const [category, setCategory] = useState<'Semua' | ProductCategory>('Semua')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchCategory = category === 'Semua' || product.category === category
      const matchQuery =
        normalized.length === 0 ||
        product.name.toLowerCase().includes(normalized) ||
        product.summary.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized)
      return matchCategory && matchQuery
    })
  }, [category, query])

  return (
    <>
      <PageHero
        crumb="Produk"
        title="Katalog Produk"
        description="Jelajahi perangkat PLC, transmitter, dan instrumentation yang kami tawarkan. Katalog ini bersifat informatif; hubungi tim kami untuk detail, ketersediaan, dan penawaran."
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="flex flex-col gap-5 border-b border-steel-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {productCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-sm border px-4 py-2 text-xs font-bold transition-colors ${
                    category === item
                      ? 'border-navy-900 bg-navy-900 text-white'
                      : 'border-steel-200 bg-white text-navy-700 hover:border-brand-500 hover:text-brand-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="relative block w-full lg:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-steel-500" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari produk..."
                className="w-full rounded-sm border border-steel-200 bg-white py-2.5 pl-10 pr-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-steel-400 focus:border-brand-500"
              />
            </label>
          </div>

          <p className="mt-6 text-xs text-steel-500">
            Menampilkan <strong className="text-navy-900">{filtered.length}</strong> dari {products.length} produk
          </p>

          {filtered.length > 0 ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((product, index) => (
                <Reveal key={product.slug} delay={(index % 4) * 60}>
                  <article className="card-surface group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg">
                    <Link to={`/produk/${product.slug}`} className="relative block bg-steel-100 p-5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="mx-auto h-44 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-3 top-3 rounded-sm bg-navy-900 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white">
                        {product.category}
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="text-sm font-bold leading-snug text-navy-900">{product.name}</h2>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-steel-500">{product.summary}</p>
                      <div className="mt-4 flex items-center justify-between gap-2">
                        <Link
                          to={`/produk/${product.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-navy-800 hover:text-brand-600"
                        >
                          Detail <ArrowRight size={13} />
                        </Link>
                        <a
                          href={productInquiryUrl(product.name)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-500"
                        >
                          <MessageCircle size={14} /> Tanya
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-lg border border-dashed border-steel-300 bg-steel-100 p-12 text-center">
              <p className="text-sm font-semibold text-navy-900">Produk tidak ditemukan</p>
              <p className="mt-2 text-xs text-steel-500">Coba kata kunci atau kategori lain.</p>
              <button
                type="button"
                onClick={() => {
                  setCategory('Semua')
                  setQuery('')
                }}
                className="btn btn-outline-dark mt-5"
              >
                Reset Filter
              </button>
            </div>
          )}
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
