import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ContactSection } from '@/components/sections/contact-section'

// Mock IntersectionObserver
const IntersectionObserverMock = vi.fn()
IntersectionObserverMock.prototype.observe = vi.fn()
IntersectionObserverMock.prototype.disconnect = vi.fn()
IntersectionObserverMock.prototype.unobserve = vi.fn()
IntersectionObserverMock.prototype.takeRecords = vi.fn()

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

describe('ContactSection', () => {
  it('renders the contact options', () => {
    render(<ContactSection />)
    expect(screen.getByText(/Let's Work Together/i)).toBeDefined()
    expect(screen.getByText(/Send an Email/i)).toBeDefined()
    expect(screen.getByText(/Book a Strategy Call/i)).toBeDefined()
    expect(screen.getByText(/Connect on Professional Networks/i)).toBeDefined()
  })

  it('contains correctly formatted links for email and whatsapp', () => {
    render(<ContactSection />)

    const emailLink = screen.getByText(/Send an Email/i).closest('a')
    expect(emailLink?.getAttribute('href')).toContain('mailto:')

    // WhatsApp link check
    const whatsappLink = screen.getByText(/WhatsApp Me/i).closest('a')
    expect(whatsappLink?.getAttribute('href')).toContain('https://wa.me/')
  })
})
