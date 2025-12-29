import { client } from "@/lib/sanity/client"
import { groq } from "next-sanity"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteConfig } from "@/lib/config"

export const metadata = {
  title: "Web Development Glossary & FAQ - Alexis Olivero",
  description: "Common questions about web development, SEO, performance, and frontend architecture explained clearly.",
  alternates: {
    canonical: `${siteConfig.url}/glossary`,
  },
}

export default function GlossaryPage() {
  const faqs = [
    {
      question: "What is Headless CMS and why should I use it?",
      answer: "A Headless CMS (like Sanity or Strapi) decouples the backend content management from the frontend presentation. This allows you to use the same content across multiple channels (web, mobile app, smartwatches) and gives developers the freedom to use modern frameworks like Next.js for better performance and security."
    },
    {
      question: "How does Core Web Vitals impact my SEO?",
      answer: "Core Web Vitals are Google's standardized metrics for user experience. They measure loading speed (LCP), interactivity (INP), and visual stability (CLS). A poor score can significantly lower your search rankings because Google prioritizes sites that offer a smooth user experience."
    },
    {
      question: "Why migrate from WordPress to Next.js?",
      answer: "While WordPress is great for simple blogs, Next.js offers superior performance through server-side rendering (SSR) and static site generation (SSG). It provides better security (no direct database exposure), instant page transitions, and complete design flexibility without being constrained by themes."
    },
    {
      question: "What is Technical SEO?",
      answer: "Technical SEO refers to website and server optimizations that help search engine spiders crawl and index your site more effectively. It includes sitemaps, robots.txt, schema markup, canonical tags, site speed, and mobile-friendliness."
    },
    {
      question: "How do you ensure web accessibility (WCAG)?",
      answer: "I follow WCAG 2.1 AA standards by using semantic HTML, proper ARIA labels, sufficient color contrast, keyboard navigation support, and screen reader testing. This ensures your digital product is usable by everyone, including people with disabilities."
    }
  ]

  return (
    <div className="container py-24 mx-auto max-w-4xl px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
          Web Development Glossary
        </h1>
        <p className="text-muted-foreground text-lg">
          Clear answers to complex technical questions.
        </p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
              }
            }))
          }),
        }}
      />
    </div>
  )
}
