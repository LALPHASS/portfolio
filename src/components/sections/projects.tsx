"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="projets" className="bg-muted/30">
      <div className="text-center mb-16">
        <AnimatedSection animation="slideUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations en IA et développement
            web
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <AnimatedSection
            key={project.id}
            animation="slideUp"
            delay={index * 0.1}
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 h-full shadow-lg hover:shadow-2xl hover:shadow-primary/10 rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden p-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white text-black"
                        onClick={() => handleLinkClick(link.url)}
                      >
                        {link.type === "github" ? (
                          <Github className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </Button>
                    ))}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={cn(
                          "px-3 py-1 text-xs font-medium rounded-full",
                          tag.color
                        )}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* View More Button */}
      <AnimatedSection animation="fadeIn" delay={0.8}>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-3 rounded-2xl transition-all duration-300"
            onClick={() => handleLinkClick("https://github.com/LALPHASS")}
          >
            <span className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              Voir plus sur GitHub
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </AnimatedSection>
    </Section>
  );
}
