import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { products } from '../../data/products'
import { productInquiryUrl } from '../../lib/whatsapp'

export default function ProductsPreview() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="Katalog Produk"
          title={
            <>
              Perangkat Industri dari
              <br /> Merek Terpercaya
            </>
          }
          description="Produk unggulan untuk kebutuhan otomasi, kontrol proses, dan instrumentation industri. Katalog ini bersifat informatif — hubungi kami untuk detail dan penawaran."
          action={
            <Link to="/produk" className="btn btn-outline-dark">
              Lihat Semua Produk <ArrowRight size={16} />
            </Link>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product, index) => (
            <Reveal key={product.slug} delay={index * 70}>
              <article className="card-surface group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg">
                <Link to={`/produk/${product.slug}`} className="relative block bg-steel-100 p-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto h-40 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-sm bg-navy-900 px-2 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-white">
                    {product.category}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-bold leading-snug text-navy-900">{product.name}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-steel-500">{product.summary}</p>
                  <a
                    href={productInquiryUrl(product.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 transition-colors hover:text-brand-500"
                  >
                    <MessageCircle size={14} /> Tanya produk ini
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
