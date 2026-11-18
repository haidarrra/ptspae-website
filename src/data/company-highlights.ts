import { Award, CalendarDays, Layers3, UsersRound } from 'lucide-react'
import type { Strength, WorkflowStep } from '../types'
import { company } from './company'

export const strengths: Strength[] = [
  {
    icon: CalendarDays,
    stat: 'Sejak ' + company.founded,
    title: 'Pengalaman Industri',
    description:
      'Berbasis di Jakarta Timur dan melayani kebutuhan otomasi industri di seluruh Indonesia sejak 2006.',
  },
  {
    icon: Layers3,
    stat: 'End-to-end',
    title: 'Solusi Terintegrasi',
    description:
      'Perencanaan teknis, integrasi sistem, project management, hingga dukungan purnajual dalam satu mitra.',
  },
  {
    icon: UsersRound,
    stat: 'Responsif',
    title: 'Tim Engineer',
    description:
      'Tim engineer berpengalaman dan responsif untuk mendukung produktivitas serta menekan biaya maintenance.',
  },
  {
    icon: Award,
    stat: 'Gold Member',
    title: 'Komitmen & Legalitas',
    description:
      `Gold Member Indotrading sejak ${company.indotradingSince} dengan dokumen usaha yang diperiksa.`,
  },
]

/** Adapted from the verified service scope on ptspae.com/about. */
export const workflow: WorkflowStep[] = [
  {
    number: '01',
    title: 'Perencanaan Teknis',
    description:
      'Mengkaji kebutuhan dan merancang solusi otomasi yang sesuai dengan proses industri Anda.',
  },
  {
    number: '02',
    title: 'Integrasi Sistem',
    description:
      'Mengintegrasikan PLC, instrumentation, dan komponen kontrol ke dalam sistem yang bekerja bersama.',
  },
  {
    number: '03',
    title: 'Project Management',
    description:
      'Mengelola pelaksanaan proyek agar berjalan sesuai ruang lingkup, waktu, dan kebutuhan operasional.',
  },
  {
    number: '04',
    title: 'Dukungan Purnajual',
    description:
      'Menemani operasional setelah instalasi melalui dukungan teknis dan pemeliharaan berkelanjutan.',
  },
]
