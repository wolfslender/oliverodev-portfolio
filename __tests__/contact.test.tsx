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
    expect(screen.getByText(/Email Me/i)).toBeDefined()
    expect(screen.getByText(/WhatsApp Me/i)).toBeDefined()
    expect(screen.getByText(/Or connect with me on social media/i)).toBeDefined()
  })

  it('contains secure links for email and whatsapp', () => {
    // Mock window.open
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    
    render(<ContactSection />)
    
    const emailLink = screen.getByText(/Email Me/i).closest('a')
    // Should be obfuscated in DOM
    expect(emailLink?.getAttribute('href')).toBe('#')
    
    const whatsappLink = screen.getByText(/WhatsApp Me/i).closest('a')
    // Should be obfuscated in DOM
    expect(whatsappLink?.getAttribute('href')).toBe('#')
    
    // Verify click triggers WhatsApp open
    if (whatsappLink) {
      fireEvent.click(whatsappLink)
      expect(openSpy).toHaveBeenCalledWith(expect.stringContaining('https://wa.me/'), '_blank')
    }
    
    openSpy.mockRestore()
  })
})
