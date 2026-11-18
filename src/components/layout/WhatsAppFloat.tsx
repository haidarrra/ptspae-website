import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi PT SPAE via WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
      <MessageCircle size={26} className="relative" fill="currentColor" strokeWidth={1.5} />
    </a>
  )
}
