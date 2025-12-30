"use client"

import { useState, useEffect } from "react"
import { Mail, ArrowRight, Calendar } from "lucide-react"
import { useSiteData } from "@/hooks/use-site-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SocialLinks } from "@/components/social-links"
import { useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"

const PopupModal = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupModal),
  { ssr: false }
)

export function ContactSection() {
  const { contact, contactPage } = useSiteData()
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    setMounted(true)
    if (searchParams.get("audit") === "true") {
      setIsCalendlyOpen(true)
    }
  }, [searchParams])

  // Construct WhatsApp URL securely
  const getWhatsappUrl = () => {
    const whatsappNumber = contact.phone.replace(/\D/g, "")
    const finalWhatsappNumber = whatsappNumber.length === 10 ? `1${whatsappNumber}` : whatsappNumber
    return `https://wa.me/${finalWhatsappNumber}`
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 w-full">
        <ScrollReveal>
          <div className="space-y-6 text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              {contactPage.title}
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-lg mx-auto">
              {contactPage.description}
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-md mx-auto">
            {/* Calendly Button */}
            <button 
              onClick={() => setIsCalendlyOpen(true)}
              className="group flex items-center justify-between p-6 bg-background border border-border rounded-2xl hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer w-full"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-lg">Book a Free Strategy Call</span>
                  <span className="text-sm text-muted-foreground">30 min video call</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
            </button>

            <a 
              href={`mailto:${contact.email}`}
              className="group flex items-center justify-between p-6 bg-background border border-border rounded-2xl hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-lg">{contactPage.emailMe}</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
            </a>
            <a 
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-background border border-border rounded-2xl hover:border-green-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-500 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-lg">{contactPage.whatsappMe}</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          <div className="pt-16 text-center">
            <p className="text-muted-foreground mb-6 font-medium">{contactPage.socialConnect}</p>
            <div className="flex justify-center">
              <SocialLinks variant="boxed" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {mounted && (
        <PopupModal
          url={contact.calendly}
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.body}
        />
      )}
    </section>
  )
}
