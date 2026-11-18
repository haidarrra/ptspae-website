import {
  Boxes,
  CircuitBoard,
  FlaskConical,
  Gauge,
  Settings2,
  Wrench,
} from 'lucide-react'
import type { Service } from '../types'

/** Derived from the verified "Kami menjual / Kami membeli" and service scope on ptspae.com/about. */
export const services: Service[] = [
  {
    icon: CircuitBoard,
    title: 'PLC & Sistem Kontrol',
    description:
      'Pengadaan Programmable Logic Controller (PLC) dan sistem kontrol industri untuk kebutuhan otomasi proses.',
    points: ['PLC', 'Sistem kontrol industri', 'Komponen kontrol'],
  },
  {
    icon: Gauge,
    title: 'Instrumentation & Transmitter',
    description:
      'Perangkat instrumentation dan transmitter gauge untuk pengukuran dan kontrol proses industri.',
    points: ['Transmitters gauge', 'Level & pressure', 'Field instrumentation'],
  },
  {
    icon: Boxes,
    title: 'Electrical & Automation',
    description:
      'Perlengkapan electrical dan komponen electrical automation dari merek ternama untuk sistem industri.',
    points: ['Electrical', 'Electrical automation', 'Komponen sistem'],
  },
  {
    icon: FlaskConical,
    title: 'Equipment Test',
    description:
      'Perangkat dan perlengkapan pengujian untuk mendukung kebutuhan komisioning dan pemeliharaan.',
    points: ['Test equipment', 'Pendukung komisioning'],
  },
  {
    icon: Settings2,
    title: 'Software & Integrasi Sistem',
    description:
      'Software dan dukungan integrasi sistem sebagai bagian dari solusi otomasi industri yang terpadu.',
    points: ['Software', 'Integrasi sistem', 'Digitalisasi industri'],
  },
  {
    icon: Wrench,
    title: 'Engineering Service',
    description:
      'Layanan rekayasa dari perencanaan teknis dan project management hingga dukungan purnajual.',
    points: ['Perencanaan teknis', 'Project management', 'Dukungan purnajual'],
  },
]
