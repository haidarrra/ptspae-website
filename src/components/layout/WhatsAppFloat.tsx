import { MessageCircle } from 'lucide-react'
import { company } from '../../data/company'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Hubungi ${company.shortName} via WhatsApp`}
      className="group fixed bottom-4 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={26} className="relative" fill="currentColor" strokeWidth={1.5} />
    </a>
  )
}
