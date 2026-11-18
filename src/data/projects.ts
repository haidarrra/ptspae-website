import type { Project } from '../types'

/**
 * IMPORTANT — no fabricated case studies.
 * The live ptspae.com/project page currently contains no published project
 * detail. These entries are neutral capability categories drawn from the
 * verified service scope, and are rendered with an explicit note in the UI.
 * Replace with approved case studies when real data is available.
 */
export const projectsNotice =
  'PT SPAE sedang menyiapkan portofolio proyek terperinci. Kategori berikut mencerminkan lingkup layanan yang tersedia; nama klien, lokasi, dan hasil proyek akan ditambahkan setelah informasi resmi tersedia.'

export const projects: Project[] = [
  {
    title: 'Otomasi & Sistem Kontrol Proses',
    category: 'Otomasi Industri',
    description:
      'Solusi otomasi industri dan sistem kontrol proses untuk sektor manufaktur, energi, dan infrastruktur.',
    placeholder: true,
  },
  {
    title: 'Instrumentasi & Transmitter',
    category: 'Instrumentasi',
    description:
      'Pengadaan dan integrasi perangkat instrumentation, transmitter gauge, serta komponen kontrol proses.',
    placeholder: true,
  },
  {
    title: 'Electrical Automation',
    category: 'Electrical',
    description:
      'Perlengkapan electrical dan komponen electrical automation untuk sistem dan instalasi industri.',
    placeholder: true,
  },
  {
    title: 'Engineering Service',
    category: 'Rekayasa',
    description:
      'Perencanaan teknis, integrasi sistem, project management, dan dukungan purnajual untuk proyek industri.',
    placeholder: true,
  },
]
