'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/common/theme-toggle'
import { NAVIGATION_SECTIONS } from '@/lib/constants'
import { scrollToSection, cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = NAVIGATION_SECTIONS.map(section => section.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    scrollToSection('accueil')
  }

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="text-2xl font-light text-foreground hover:text-primary transition-colors tracking-wide"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <span className="font-thin">Diarra</span>
            <span className="font-normal ml-2 text-primary">Hamadoun</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  activeSection === section.id
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {section.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="w-9 h-9 p-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {NAVIGATION_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={cn(
                    'block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-accent rounded-md',
                    activeSection === section.id
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground'
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}