# PT SPAE Website (greenfield rebuild)

Website profile untuk **PT Saekapraya Adhitama Engineering (PT SPAE)**, dibangun dari awal di folder yang sebelumnya kosong.

> **Live (GitHub Pages):** https://haidarrra.github.io/ptspae-website/
>
> Repo: https://github.com/haidarrra/ptspae-website · Source di `main`, hasil build di `gh-pages`.
>
> Situs live `ptspae.com` **tidak** diubah — hosting ini hanya untuk preview/publikasi terpisah.

## Tech stack

| Layer | Pilihan |
|---|---|
| Framework | React 19 + Vite 6 + TypeScript (strict) |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Routing | React Router 7 (client-side) |
| Icons | lucide-react |
| Content | Modul data TypeScript lokal (tanpa CMS / admin / e-commerce) |
| Kontak | WhatsApp deep link `wa.me` — tanpa backend |

## Menjalankan proyek

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + build produksi ke dist/
npm run preview    # menyajikan hasil build
```

## Struktur

```
public/images/          Logo & foto produk asli dari image.ptspae.com
src/
  data/                 company.ts, products.ts, services.ts,
                        company-highlights.ts, projects.ts
  types/                antarmuka TypeScript bersama
  lib/whatsapp.ts       builder URL WhatsApp + pesan inquiry
  components/
    ui/                 Container, Button utilities (CSS), SectionHeading,
                        Reveal, PageHero
    layout/             Header, Footer, WhatsAppFloat, Layout (+ ScrollToTop)
    sections/           Hero, AboutPreview, ServicesPreview, Strengths,
                        Workflow, ProductsPreview, Brands, ProjectsPreview,
                        CTABanner
  pages/                Home, About, Products, ProductDetail, Services,
                        Projects, Contact, NotFound
```

## Rute

| Path | Halaman |
|---|---|
| `/` | Beranda |
| `/tentang` | Profil, lingkup kegiatan, keunggulan, alur kerja, lokasi |
| `/produk` | Katalog dengan filter kategori + pencarian |
| `/produk/:slug` | Detail produk (informatif) + CTA WhatsApp |
| `/layanan` | Layanan + alur kerja rekayasa |
| `/proyek` | Portofolio / area dukungan proyek |
| `/kontak` | Formulir yang meneruskan pesan ke WhatsApp + peta |
| `*` | 404 |

## Sumber konten & batasan

Seluruh data perusahaan diambil secara **read-only** dari `ptspae.com` (`/`, `/about`, `/contact`) pada 18 Nov 2026:

- Nama perusahaan, lokasi Jakarta Timur, tahun berdiri 2006
- Lingkup kegiatan (PLC, instrumentation, electrical, equipment test, software, engineering service)
- Merek: Allen Bradley, ABB, Yokogawa, Phoenix Contact, Control Wave Micro
- Alamat: JL. H. Karim No. 46, Setu Cipayung, Jakarta Timur 13880
- WhatsApp: `+62 813-1482-8224`
- Gold Member Indotrading sejak 2014
- Nama & gambar produk dari katalog resmi

**Tidak ada data yang direkayasa:** tidak ada klien, sertifikasi, angka pencapaian, spesifikasi teknis, harga, stok, atau testimoni yang dikarang. Halaman `/service` dan `/project` di situs live tidak memuat detail proyek nyata, sehingga bagian ini dirender sebagai **kategori kapasitas** dengan catatan eksplisit di UI. Desain mengikuti referensi visual `trialogix.id` (tipografi industri, grid gelap, alur kerja, brand strip), bukan konten bisnisnya.

## Deploy ke GitHub Pages

```bash
npm run build
# isi folder dist/ di-push ke branch gh-pages
# GitHub Pages: Settings → Pages → Source: Deploy from branch → gh-pages / (root)
```

Penyesuaian agar SPA bekerja di *project page*:

- `vite.config.ts` → `base: '/ptspae-website/'`
- `main.tsx` → `<BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>`
- `src/lib/assets.ts` → helper `asset()` untuk semua path di `public/images`
- `public/404.html` + script di `index.html` → fallback routing saat akses URL langsung seperti `/produk/:slug`

## Catatan dependensi

`npm audit` melaporkan 4 temuan `high` pada `picomatch@4.0.7` (transitif melalui `fdir` → `tinyglobby` → `vite`). Per Nov 2026 **belum ada rilis patch** (`4.0.7` adalah versi terbaru). Ini hanya dependency **dev/build** (ReDoS pada glob matching), tidak ikut terbundle di produksi. Tidak ada `npm audit fix --force` yang dijalankan karena akan menurunkan Vite ke `6.2.7` dan berisiko merusak kompatibilitas Tailwind 4.
