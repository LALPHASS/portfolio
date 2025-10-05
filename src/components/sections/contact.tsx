'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedSection } from '@/components/common/animated-section'
import { Section } from '@/components/common/section'
import { SOCIAL_LINKS } from '@/lib/constants'
import type { ContactFormData } from '@/types'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <Section id="contact" className="bg-muted/30">
      <div className="text-center mb-16">
        <AnimatedSection animation="slideUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour en discuter
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <AnimatedSection animation="slideLeft" delay={0.2}>
          <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Input
                    placeholder="Votre nom"
                    {...register('name')}
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    {...register('email')}
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Votre message"
                    rows={6}
                    {...register('message')}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </span>
                  )}
                </Button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-center"
                  >
                    Message envoyé avec succès !
                  </motion.p>
                )}

                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-center"
                  >
                    Erreur lors de l&apos;envoi. Veuillez réessayer.
                  </motion.p>
                )}
              </form>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Contact Info & Social Links */}
        <AnimatedSection animation="slideRight" delay={0.4}>
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Autres moyens de contact
                </h3>
                
                <div className="space-y-6">
                  {SOCIAL_LINKS.map((link) => {
                    const IconComponent = getIconComponent(link.icon)
                    return (
                      <motion.button
                        key={link.platform}
                        onClick={() => handleSocialClick(link.url)}
                        className="flex items-center gap-4 w-full p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group shadow-md hover:shadow-lg hover:shadow-primary/10"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {link.platform}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {link.platform === 'Email' ? 'hamadounssdiarra@gmail.com' : 
                             link.platform === 'GitHub' ? 'github.com/LALPHASS' : 
                             'linkedin.com/in/hamadoun-diarra-b69721254'}
                          </p>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Disponibilité
                </h3>
                <p className="text-muted-foreground">
                  Je suis actuellement disponible pour de nouveaux projets et collaborations. 
                  N&apos;hésitez pas à me contacter pour discuter de vos besoins.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  )
}