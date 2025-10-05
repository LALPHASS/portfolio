'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return Mail
      case 'Github':
        return Github
      case 'Linkedin':
        return Linkedin
      default:
        return Mail
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {SOCIAL_LINKS.map((link, index) => {
              const IconComponent = getIconComponent(link.icon)
              return (
                <motion.button
                  key={link.platform}
                  onClick={() => handleSocialClick(link.url)}
                  className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.button>
              )
            })}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            © {currentYear} – Diarra Hamadoun. Tous droits réservés.
          </motion.p>


        </div>
      </div>
    </footer>
  )
}