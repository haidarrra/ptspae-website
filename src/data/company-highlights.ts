import { Award, CalendarDays, ClipboardList, Layers3 } from 'lucide-react'
import type { Strength, WorkflowStep } from '../types'
import { company } from './company'
import { projectSectors } from './projects'

export const strengths: Strength[] = [
  {
    icon: CalendarDays,
    stat: 'Sejak ' + company.founded,
    title: 'Pengalaman Industri',
    description:
      'Berbasis di Jakarta Timur dan melayani kebutuhan instrumentasi, electrical, dan otomasi industri di Indonesia.',
  },
  {
    icon: ClipboardList,
    stat: `${projectSectors.length} Sektor`,
    title: 'Portofolio Proyek',
    description:
      'Dokumentasi proyek pada sektor food & beverage, oil & gas, petrochemical, power plant, dan sistem kontrol.',
  },
  {
    icon: Layers3,
    stat: 'End-to-end',
    title: 'Solusi Terintegrasi',
    description:
      'Dari perencanaan teknis dan panel work hingga FAT/SAT, instalasi, kalibrasi, dan dukungan operasional.',
  },
  {
    icon: Award,
    stat: 'Gold Member',
    title: 'Komitmen & Legalitas',
    description:
      `Gold Member Indotrading sejak ${company.indotradingSince} dengan dokumen usaha yang diperiksa.`,
  },
]

/** Stages are taken from the workflow and documentation shown in the company profile PDF. */
export const workflow: WorkflowStep[] = [
  {
    number: '01',
    title: 'Engineering Design',
    description:
      'Perencanaan teknis dan penyiapan solusi untuk sistem kontrol, instrumentasi, dan panel sesuai kebutuhan proses.',
  },
  {
    number: '02',
    title: 'Panel & Fabrication',
    description:
      'Wiring control panel, engineering program remote panel, serta pengecekan daya pada peralatan dan pompa.',
  },
  {
    number: '03',
    title: 'Factory Acceptance Test',
    description:
      'Pengujian panel dan sistem di workshop sebelum pengiriman, terdokumentasi sebagai FAT pada profil perusahaan.',
  },
  {
    number: '04',
    title: 'Installation & Calibration',
    description:
      'Instalasi perangkat electrical dan instrumentasi, termasuk grounding, tubing, metering, serta kalibrasi pressure dan flow meter.',
  },
  {
    number: '05',
    title: 'Site Acceptance Test',
    description:
      'Pengujian dan verifikasi sistem di lokasi proyek, terdokumentasi sebagai SAT pada profil perusahaan.',
  },
  {
    number: '06',
    title: 'Dukungan Operasional',
    description:
      'Maintenance contract dan support technician untuk mendukung keandalan operasional setelah instalasi.',
  },
]
