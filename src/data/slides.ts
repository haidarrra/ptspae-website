import { asset } from '../lib/assets'
import type { HeroSlide } from '../types'

/**
 * Captions are derived from the section headings and captions in the
 * Company Profile PDF. Images are authentic photographs extracted from it.
 */
export const heroSlides: HeroSlide[] = [
  {
    image: asset('/images/profile/cover.jpg'),
    eyebrow: 'Profil Perusahaan',
    title: 'Instrument, Electric & Control System',
    description:
      'PT Saekapraya Adhitama Engineering — mitra rekayasa untuk otomasi industri dan sistem kontrol proses sejak 2006.',
  },
  {
    image: asset('/images/projects/control-system-scada.jpg'),
    eyebrow: 'Project Experience',
    title: 'Control System & SCADA',
    description:
      'Pemantauan instrumentasi, gun monitoring unit, metering, dan sistem SCADA pada fasilitas industri.',
  },
  {
    image: asset('/images/projects/panel-work.jpg'),
    eyebrow: 'Panel Work',
    title: 'Rekayasa Panel Kontrol',
    description:
      'Wiring control panel, pengecekan daya, dan engineering program remote panel yang terdokumentasi.',
  },
  {
    image: asset('/images/projects/calibration-pressure-test.jpg'),
    eyebrow: 'Calibration & Installation',
    title: 'Kalibrasi & Instalasi Instrumentasi',
    description:
      'Calibration pressure test, pressure transmitter, instalasi metering, tubing, dan gas detector.',
  },
  {
    image: asset('/images/profile/office-facilities.jpg'),
    eyebrow: 'Office Facilities',
    title: 'Tim Engineer & Fasilitas Pendukung',
    description:
      'Ruang kerja, staging, dan meeting engineer yang mendukung pelaksanaan proyek di lokasi klien.',
  },
]
