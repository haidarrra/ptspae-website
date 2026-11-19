# PT SAE Website — revisi korporat

Website profil untuk **PT Saekapraya Adhitama Engineering (PT SAE)** — hasil revisi dari versi sesi 1. Singkatan resmi adalah **PT SAE**; domain resmi tetap `https://www.ptspae.com/`.

> **Status:** perubahan **lokal / uncommitted**. Belum di-push dan belum di-deploy.
>
> Situs live `ptspae.com` dan `haidarrra.github.io/ptspae-website` **tidak diubah**.
>
> Preview lokal: `http://127.0.0.1:4174/ptspae-website/` (jalankan `npm run preview -- --host 127.0.0.1 --port 4174`).

## Tech stack (dipertahankan)

| Layer | Pilihan |
|---|---|
| Framework | React 19 + Vite 6 + TypeScript (strict) |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Routing | React Router 7 (client-side) |
| Icons | lucide-react |
| Konten | Modul data TypeScript lokal — tanpa CMS / admin / backend / e-commerce |
| Kontak | WhatsApp deep link `wa.me` |

## Perubahan pada revisi ini

- **Identitas:** seluruh `PT SPAE` → `PT SAE` (nama lengkap, domain, email, dan WhatsApp tetap).
- **Scope produk dihapus:** rute `/produk` & `/produk/:slug`, nav, katalog, kartu, detail, dan `public/images/products/` tidak ada lagi.
- **Sumber konten utama:** `Company Profile PT. Saekapraya Adhitama Engineering.pdf` (22 halaman) → visi/misi, 10 sektor & daftar proyek nyata, foto asli.
- **Slideshow beranda:** 5 slide foto asli PDF dengan crossfade + zoom halus, swipe, dot, prev/next, pause saat hover/focus, dan perilaku statis pada `prefers-reduced-motion`.
- **Halaman:** 5 halaman wajib + 404.
- **Mobile-first:** layout satu kolom di layar kecil, tipografi `clamp()`, target sentuh ≥ 44px, tanpa overflow/teks terpotong pada 360/375/390/414px.

## Menjalankan proyek

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + build produksi ke dist/
npm run preview    # menyajikan hasil build
```

## Struktur

```
public/images/
  logo-spae.jpg
  profile/          cover, office-facilities, vision-mission
  projects/         30 foto asli dari PDF
src/
  data/
    company.ts              identitas, alamat, kontak, visi & misi (PDF)
    company-highlights.ts   strengths + 6 tahap alur kerja (PDF)
    services.ts             6 layanan (ikon lucide)
    projects.ts             10 sektor + daftar proyek + galeri foto (PDF)
    slides.ts               konten 5 slide beranda (PDF)
  lib/
    assets.ts               asset() → prefix import.meta.env.BASE_URL
    whatsapp.ts             buildWhatsAppUrl + builder pesan inquiry
  types/                    tipe bersama (tanpa Product)
  components/
    ui/                     Container, SectionHeading, Reveal, PageHero
    layout/                 Header, Footer, WhatsAppFloat, Layout (ScrollToTop)
    sections/               HeroSlideshow, AboutPreview, ServicesPreview,
                            Strengths, Workflow, Brands, ProjectsPreview, CTABanner
  pages/                    Home, About, Services, Projects, Contact, NotFound
```

## Rute

| Path | Halaman |
|---|---|
| `/` | Beranda + slideshow foto asli |
| `/tentang` | Profil, visi & misi, lingkup kegiatan, keunggulan, alur kerja, lokasi |
| `/layanan` | Layanan + C WhatsApp per kartu + alur kerja |
| `/proyek` | 10 sektor proyek nyata + 12 foto dokumentasi dari PDF |
| `/kontak` | Formulir WhatsApp + telepon/email + peta |
| `*` | 404 |

## Sumber konten & batasan

Sumber primer: **PDF company profile** di
`C:\Users\M S I\Downloads\Company Profile PT. Saekapraya Adhitama Engineering.pdf`.
Sumber sekunder (read-only): `ptspae.com` (`/`, `/about`, `/contact`) untuk alamat, telepon, email, WhatsApp, koordinat peta, dan status Gold Member Indotrading.

Data tercantum apa adanya dari PDF: nama proyek, customer, user, lokasi, dan tahun. **Tidak ada data yang direkayasa** — tidak ada klien, sertifikasi, angka pencapaian, harga, atau testimoni yang dikarang. Sertifikat memang ada di PDF (hal. 18–21) tetapi tidak dijadikan klaim teks.

Desain mengikuti bahasa visual `trialogix.id` (tipografi industri, grid gelap, alur kerja bernomor, brand strip, CTA), bukan konten bisnisnya.

## Verifikasi revisi

- `npm run build` ✅
- Audit headless Chrome pada **360 / 375 / 390 / 414px** × 5 rute (20 kombinasi): overflow 0, elemen di luar viewport 0, teks terpotong 0, target sentuh < 44px = 0.
- 6 rute (termasuk 404) → HTTP 200, `h1` benar, 0 gambar rusak, 0 referensi produk/PT SPAE.
- Semua aset gambar → `200 image/jpeg`.
- Slideshow berhasil berganti slide (0 → 1 dari 5 slide).
- Console error runtime: 0 di semua rute.
- File audit sementara sudah dihapus dari `dist/`.

## Deploy (tertunda — butuh persetujuan owner)

```bash
npm run build
# setelah disetujui: commit source ke main, lalu isi dist/ di-push ke gh-pages
```

Konfigurasi khusus GitHub Pages yang **harus dipertahankan**:

- `vite.config.ts` → `base: '/ptspae-website/'`
- `main.tsx` → `<BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>`
- `src/lib/assets.ts` → helper `asset()` untuk semua path gambar
- `public/404.html` + script di `index.html` → fallback SPA (path per **segmen**, `pathSegmentsToKeep = 1`)

## Catatan dependensi

`npm audit` melaporkan 4 temuan `high` pada `picomatch@4.0.7` (transitif via `fdir` → `tinyglobby` → `vite`). Dev/build-only, tidak ikut bundle produksi, dan belum ada patch. `npm audit fix --force` sengaja tidak dijalankan karena akan menurunkan Vite ke `6.2.7`.
