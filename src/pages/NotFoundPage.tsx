import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../components/ui/Container'

export default function NotFoundPage() {
  return (
    <section className="grid-pattern-light flex min-h-[60vh] items-center bg-steel-100 py-20">
      <Container className="text-center">
        <p className="heading-display text-8xl font-bold text-navy-900/10 sm:text-9xl">404</p>
        <h1 className="heading-display mt-2 text-4xl font-bold text-navy-900 sm:text-5xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-steel-500">
          Halaman yang Anda cari tidak tersedia. Kembali ke beranda untuk menjelajahi situs PT SAE.
        </p>
        <Link to="/" className="btn btn-dark mt-8">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>
      </Container>
    </section>
  )
}
