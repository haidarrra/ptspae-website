# HANDOFF — Sesi 2: Revisi Website PT SAE

Diperbarui 19 Nov 2026. Dokumen ini melanjutkan sesi 1 setelah revisi diminta. Untuk riwayat sesi 1, lihat git commit `183cfc7` dan README lama.

---

## 1. Status saat ini

| Item | Nilai |
|---|---|
| Folder proyek | `D:\Haidar\SPAE` |
| Working tree | clean (setelah commit dokumentasi terakhir) |
| Commit `main` terakhir | `7a19b7d Revise PT SAE site: PDF-sourced content, photo slideshow, mobile-first UX, remove products` |
| Branch `gh-pages` | `86ecd0d Deploy revised PT SAE site (PDF content, slideshow, mobile-first)` |
| **Live preview** | **https://haidarrra.github.io/ptspae-website/** — sudah bisa diakses dari handphone |
| Situs live `ptspae.com` | **TIDAK diubah** |
| DNS | **TIDAK diubah** |
| Preview lokal | `http://127.0.0.1:4174/ptspae-website/` |

Deploy dilakukan setelah owner meminta situs bisa dicoba dari handphone. GitHub Pages saja — tidak menyentuh `ptspae.com`.

---

## 2. Keputusan & constraint

- **Stack dipertahankan:** React 19 + Vite 6 + TypeScript strict + Tailwind CSS 4 + React Router 7 + lucide-react. Tidak ada alasan teknis mengganti.
- **Identitas:** nama lengkap `PT Saekapraya Adhitama Engineering`; singkatan **`PT SAE`** (bukan PT SPAE); domain tetap `https://www.ptspae.com/`.
- **Produk dihapus total:** rute, nav, katalog, kartu, detail, tipe `Product`, `products.ts`, dan folder `public/images/products/`.
- **Tidak ada** admin/CMS/e-commerce/backend.
- **No-fabrication:** semua konten & foto berasal dari PDF; tidak mengarang klien, sertifikat, angka, testimoni, atau detail proyek.
- **Desain:** mengikuti `trialogix.id` (struktur, tipografi, animasi, interaksi), bukan konten bisnisnya.
- **Production safety:** lokal/staging saja sampai ada persetujuan.

---

## 3. Sumber konten

**Primer:** `C:\Users\M S I\Downloads\Company Profile PT. Saekapraya Adhitama Engineering.pdf` (22 halaman).

- Hal. 4 → visi & misi (bahasa Inggris apa adanya)
- Hal. 5–9 → tabel proyek: Food & Beverage, Oil & Gas, Petrochemical, Power Plant
- Hal. 9–17 → Control System & SCADA, Electrical, Calibration & Installation, Panel Work, FAT/SAT, HSE + foto asli
- Hal. 18–21 → sertifikat (tidak dijadikan klaim teks)
- Hal. 22 → alamat & hak cipta

**Sekunder (read-only):** `ptspae.com` → alamat, telepon `021 8551 0424`, email `Sales@ptspae.com`, WhatsApp `+62 813-1482-8224`, koordinat map, Gold Member Indotrading sejak 2014.

**Ekstraksi gambar:** 33 foto asli diekstrak dengan PyMuPDF ke `public/images/profile/` (3) dan `public/images/projects/` (30). Semua dinamai `.jpg`; helper `asset()` tetap dipakai untuk prefix base path.

---

## 4. Arsitektur & file kunci

```
src/
  data/
    company.ts              identitas, kontak, visi/misi
    company-highlights.ts   4 strengths + 6 workflow step
    services.ts             6 layanan
    projects.ts             10 sektor + item proyek + 12 galeri foto
    slides.ts               5 slide HeroSlideshow
  lib/
    assets.ts               asset() → prefix BASE_URL
    whatsapp.ts             buildWhatsAppUrl, serviceInquiryUrl,
                            projectInquiryUrl, generalInquiryUrl
  types/                    Service, Strength, WorkflowStep, ProjectSector,
                            ProjectItem, ProjectGalleryItem, HeroSlide
  components/
    ui/                     Container, SectionHeading, Reveal, PageHero
    layout/                 Header, Footer, WhatsAppFloat, Layout
    sections/               HeroSlideshow, AboutPreview, ServicesPreview,
                            Strengths, Workflow, Brands, ProjectsPreview, CTABanner
  pages/                    Home, About, Services, Projects, Contact, NotFound
```

**Rute:** `/`, `/tentang`, `/layanan`, `/proyek`, `/kontak`, `*`

**Spesifik deployment (jangan dihapus):**
- `vite.config.ts` → `base: '/ptspae-website/'`
- `src/main.tsx` → `<BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>`
- `public/404.html` + script `index.html` → SPA fallback per segmen (`pathSegmentsToKeep = 1`)
- `src/lib/assets.ts` → semua path gambar lewat helper ini

---

## 5. Masalah yang ditemukan & diatasi

1. **PT SPAE** (38 kemunculan) → `PT SAE`.
2. **8 rute dengan produk** → 5 rute; file & aset produk dihapus.
3. **Proyek placeholder** → 10 sektor & daftar proyek nyata dari PDF.
4. **Hero statis + dekorasi overflow** → `HeroSlideshow` dengan swipe/dot/pause/reduced-motion; offset negatif dihilangkan di mobile.
5. **Header CTA tetap tampil di 360px** → `.btn { display: inline-flex }` (CSS unlayered) meng-override Tailwind `hidden`; diperbaiki dengan wrapper `<div className="hidden sm:block">`.
6. **Foto tidak load (content-type `text/html`)** → file hasil ekstraksi berekstensi `.jpeg`, sementara kode memakai `.jpg`; semua file direname ke `.jpg`. `hero-engineering.jpg` lama dihapus (tidak dipakai).
7. **Target sentuh < 44px** → class `.touch-link` ditambahkan ke breadcrumb, CTA layanan, link kontak, dan seluruh link footer.

---

## 6. Verifikasi yang sudah dilakukan (19 Nov 2026)

- `npm run build` ✅ — type-check + bundle (JS 335 kB / 100,5 kB gzip, CSS 37,6 kB / 7,5 kB gzip).
- **Audit headless Chrome 360/375/390/414px × 5 rute = 20 kombinasi:**
  - horizontal overflow: **0**
  - elemen keluar viewport: **0**
  - teks terpotong: **0**
  - target sentuh < 44px: **0**
- 6 rute (`/`, `/tentang`, `/layanan`, `/proyek`, `/kontak`, `/tidak-ada`) → HTTP 200, `h1` sesuai, 0 gambar rusak, 0 sisa "Produk"/"PT SPAE".
- 9 path gambar diuji → semua `200 image/jpeg`.
- Slideshow → slide aktif berubah `0 → 1` dari 5 slide.
- Console error runtime → **0** di semua rute.
- File audit sementara (`__audit.html`, `__verify.html`, `__console.html`) sudah dihapus dari `dist/`.

---

## 7. Cara update berikutnya

```bash
cd D:\Haidar\SPAE
npm run build

# 1) commit source
git add -A && git commit -m "..." && git push origin main

# 2) deploy hasil build: clone sementara branch gh-pages,
#    replace isinya dengan dist/, commit, lalu push origin gh-pages

# 3) Jangan ubah DNS / situs ptspae.com tanpa instruksi eksplisit.
```

Server preview lokal yang benar adalah port **4174** (dengan base `/ptspae-website/`).

Verifikasi live setelah deploy (19 Nov 2026): 6 rute langsung (termasuk 404) render benar di viewport 390px dengan headless Chrome, 34/34 gambar `200 image/jpeg`, title `PT SAE`, dan 0 sisa referensi "PT SPAE"/"Produk".

---

## 8. Catatan

- `npm audit`: 4 temuan `high` pada `picomatch@4.0.7` (dev-only via fdir → tinyglobby → vite). `npm audit fix --force` tidak dijalankan (downgrade Vite ke 6.2.7).
- Jika PDF perlu diperbarui, ekstrak ulang foto dengan PyMuPDF dan **pastikan ekstensi file `.jpg`** sesuai referensi di `src/data/`.
- Bagian yang paling perlu review owner: konten proyek & foto dari PDF, dan dengan siapa CTA WhatsApp diarahkan.
