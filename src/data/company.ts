import { asset } from '../lib/assets'

/**
 * Verified company information.
 * Sources: Company Profile PDF (primary) + ptspae.com (about/contact) — read only.
 * The official abbreviation is PT SAE. The official domain remains ptspae.com.
 * Do not add claims, clients, certifications or figures that are not verified.
 */
export const company = {
  name: 'PT Saekapraya Adhitama Engineering',
  shortName: 'PT SAE',
  founded: '2006',
  tagline: 'Instrument, Electric & Control System',
  about:
    'Berbasis di Jakarta Timur sejak tahun 2006, PT Saekapraya Adhitama Engineering (PT SAE) menyediakan solusi otomasi industri dan sistem kontrol proses untuk berbagai sektor manufaktur, energi, dan infrastruktur di Indonesia. Fokus kami pada layanan control system dan automation serta instrumentation sebagaimana disampaikan dalam Company Profile PT SAE.',
  aboutSecondary:
    'Lingkup kami mencakup PLC, electrical, equipment test, instrumentation, software, dan engineering service. Didukung tim engineer berpengalaman, kami menghadirkan layanan profesional dengan mengutamakan kualitas, keselamatan kerja, dan keberlanjutan operasional jangka panjang.',
  vision:
    'Leading towards being an excellent company in providing high-ends services in automatization and instrumentation.',
  mission:
    'Provides facilities for the customer in preparing upgrade existing plant and implement the most efficient upgrading from conventional to digital base control system for optimizing the performance of customer’s automation asset.',
  address:
    'Jl. H. Karim No. 46, Setu, Cipayung, Kota Jakarta Timur, DKI Jakarta 13880, Indonesia',
  addressShort: 'Jl. H. Karim No. 46, Setu, Cipayung, Jakarta Timur 13880',
  city: 'Jakarta Timur, DKI Jakarta',
  phone: '021 8551 0424',
  email: 'Sales@ptspae.com',
  whatsapp: '6281314828224',
  whatsappDisplay: '+62 813-1482-8224',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-6.311703557639202%2C106.91210800334113',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=JL.%20H.%20Karim%20No.%2046%20%2C%20Setu%20Cipayung%20%2C%20Jakarta%20timur%2013880',
  indotradingUrl: 'https://www.indotrading.com/saekaprayaadhitamaengineering',
  indotradingSince: '2014',
  logo: asset('/images/logo-spae.jpg'),
  website: 'https://www.ptspae.com/',
} as const

export const supportedBrands = [
  'Allen Bradley',
  'ABB',
  'Yokogawa',
  'Phoenix Contact',
  'Control Wave Micro',
] as const
