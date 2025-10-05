"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/common/animated-section";
import { Section } from "@/components/common/section";
import { SKILL_CATEGORIES } from "@/lib/data";

export function Skills() {
  return (
    <Section id="competences">
      <div className="text-center mb-16">
        <AnimatedSection animation="slideUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise technique dans les domaines de l&apos;IA et du développement
            web
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {SKILL_CATEGORIES.map((category, categoryIndex) => (
          <AnimatedSection
            key={category.title}
            animation="slideUp"
            delay={categoryIndex * 0.2}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-0 hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/5">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                  {category.title}
                </CardTitle>
                <p className="text-muted-foreground">{category.description}</p>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{
                        scale: 1.05,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      }}
                      transition={{
                        delay: skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex flex-col items-center p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20 shadow-md hover:shadow-lg hover:shadow-primary/10">
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                          {typeof skill.icon === "string" ? (
                            skill.icon
                          ) : (
                            <skill.icon className="w-8 h-8" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {/* Additional Skills Info */}
      <AnimatedSection animation="fadeIn" delay={0.6}>
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Toujours en apprentissage
            </h3>
            <p className="text-muted-foreground">
              Passionné par les nouvelles technologies, je me forme
              continuellement aux dernières innovations en IA et développement
              web pour rester à la pointe de mon domaine.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
