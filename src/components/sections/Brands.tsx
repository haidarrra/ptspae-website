import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { supportedBrands } from '../../data/company'

export default function Brands() {
  return (
    <section className="border-y border-steel-200 bg-steel-100 py-12">
      <Container>
        <Reveal>
          <p className="text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-steel-500">
            Merek yang Kami Dukung
          </p>
          <div className="mt-7 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {supportedBrands.map((brand) => (
              <div
                key={brand}
                className="heading-display flex h-16 items-center justify-center rounded border border-steel-200 bg-white px-3 text-lg font-bold tracking-wide text-navy-700 transition-colors hover:border-brand-500 hover:text-brand-600"
              >
                {brand}
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-steel-500">
            Merek disebutkan berdasarkan informasi resmi PT SPAE. Ketersediaan produk dapat dikonfirmasi
            melalui tim kami.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
