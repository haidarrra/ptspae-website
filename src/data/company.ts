import { asset } from '../lib/assets'

/**
 * Verified company information.
 * Source: ptspae.com (home, /about, /contact) — read-only, no live site changes.
 * Do not add claims, clients, certifications or figures that are not verified here.
 */
export const company = {
  name: 'PT Saekapraya Adhitama Engineering',
  shortName: 'PT SPAE',
  founded: '2006',
  tagline: 'Solusi Otomasi Industri & Sistem Kontrol Proses',
  about:
    'Berbasis di Jakarta Timur sejak tahun 2006, PT Saekapraya Adhitama Engineering (PT SPAE) telah berkembang sebagai Supplier PLC Jakarta terpercaya yang menyediakan solusi otomasi industri dan sistem kontrol proses untuk berbagai sektor manufaktur, energi, dan infrastruktur di Indonesia. Dengan pengalaman bertahun-tahun di bidang electrical, instrumentation, dan automation, kami berkomitmen membantu perusahaan meningkatkan efisiensi operasional, keamanan sistem, serta keandalan proses produksi melalui teknologi industri modern yang terintegrasi.',
  aboutSecondary:
    'Layanan kami mencakup perencanaan teknis, integrasi sistem, project management, hingga dukungan purnajual untuk berbagai kebutuhan otomasi industri. PT SPAE menyediakan produk unggulan seperti Programmable Logic Controller (PLC), sistem kontrol industri, instrumentation devices, serta komponen electrical automation dari merek ternama. Didukung oleh tim engineer berpengalaman dan responsif, kami siap menjadi mitra strategis dalam mendukung digitalisasi industri, meningkatkan produktivitas, dan menekan biaya maintenance untuk berbagai proyek industri di seluruh Indonesia.',
  address:
    'JL. H. Karim No. 46, Setu Cipayung, Jakarta Timur 13880, DKI Jakarta, Indonesia',
  addressShort: 'JL. H. Karim No. 46, Setu Cipayung, Jakarta Timur 13880',
  city: 'Jakarta Timur, DKI Jakarta',
  whatsapp: '6281314828224',
  whatsappDisplay: '+62 813-1482-8224',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-6.311703557639202%2C106.91210800334113',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=JL.%20H.%20Karim%20No.%2046%20%2C%20Setu%20Cipayung%20%2C%20Jakarta%20timur%2013880',
  indotradingUrl: 'https://www.indotrading.com/saekaprayaadhitamaengineering',
  indotradingSince: '2014',
  logo: asset('/images/logo-spae.jpg'),
  website: 'https://ptspae.com',
} as const

export const supportedBrands = [
  'Allen Bradley',
  'ABB',
  'Yokogawa',
  'Phoenix Contact',
  'Control Wave Micro',
] as const
