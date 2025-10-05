"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { GeometricBackground } from "@/components/common/geometric-background";
import { PERSONAL_INFO } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const handleDownloadCV = () => {
    // Create a temporary link to download the CV
    const link = document.createElement("a");
    link.href = PERSONAL_INFO.resume;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    scrollToSection("contact");
  };

  return (
    <Section
      id="accueil"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <GeometricBackground />
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Avatar */}
        <AnimatedSection animation="fadeIn" delay={0.2}>
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl" />
            <Image
              src={PERSONAL_INFO.avatar}
              alt=""
              width={128}
              height={128}
              className="relative rounded-full border-4 border-primary/20 object-cover"
              priority
            />
          </motion.div>
        </AnimatedSection>

        {/* Main Title */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {PERSONAL_INFO.title}
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {PERSONAL_INFO.subtitle}
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection animation="slideUp" delay={0.8}>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                size="lg"
                onClick={handleDownloadCV}
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Télécharger CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactClick}
                className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Me contacter
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
