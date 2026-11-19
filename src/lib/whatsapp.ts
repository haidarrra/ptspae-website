import { company } from '../data/company'

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${company.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function serviceInquiryUrl(serviceName: string): string {
  return buildWhatsAppUrl(
    `Halo PT SAE, saya ingin bertanya tentang layanan ${serviceName}. Mohon informasinya. Terima kasih.`,
  )
}

export function projectInquiryUrl(projectName: string): string {
  return buildWhatsAppUrl(
    `Halo PT SAE, saya ingin bertanya tentang proyek ${projectName}. Mohon informasinya. Terima kasih.`,
  )
}

export function generalInquiryUrl(): string {
  return buildWhatsAppUrl(
    'Halo PT SAE, saya ingin berkonsultasi mengenai solusi otomasi industri. Terima kasih.',
  )
}
