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
          <div className="mt-7 grid grid-cols-2 items-center gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {supportedBrands.map((brand) => (
              <div
                key={brand}
                className="heading-display flex min-h-16 items-center justify-center rounded border border-steel-200 bg-white px-3 text-center text-sm font-bold tracking-wide text-navy-700 sm:text-lg"
              >
                {brand}
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs leading-relaxed text-steel-500">
            Merek disebutkan berdasarkan profil dan informasi resmi PT SAE. Ketersediaan dapat dikonfirmasi
            melalui tim kami.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
