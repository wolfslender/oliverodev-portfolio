"use client"

import { MessageCircle } from "lucide-react"
import { useSiteData } from "@/hooks/use-site-data"

export function FloatingWhatsApp() {
  const { contact, common } = useSiteData()
  // Sanitize phone number for WhatsApp API
  // Removes non-numeric characters
  // Assuming the phone number in data.ts is local, we might need to add country code.
  // For DR, it's +1.
  const getWhatsappUrl = () => {
    const rawPhone = contact.phone.replace(/\D/g, "")
    const whatsappNumber = rawPhone.length === 10 ? `1${rawPhone}` : rawPhone
    
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      common.whatsappMessage
    )}`
  }

  return (
    <a
      href={getWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 group cursor-pointer animate-in fade-in zoom-in duration-300 hover:scale-110 active:scale-90"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
        {common.whatsappChat}
      </span>
    </a>
  )
}
