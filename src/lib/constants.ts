export const NAVIGATION_SECTIONS = [
  { id: "accueil", label: "Accueil", href: "#accueil" },
  { id: "projets", label: "Projets", href: "#projets" },
  { id: "competences", label: "Compétences", href: "#competences" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    platform: "Email",
    url: "mailto:hamadounssdiarra@gmail.com",
    icon: "Mail",
  },
  {
    platform: "GitHub",
    url: "https://github.com/LALPHASS",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/hamadoun-diarra-b69721254/",
    icon: "Linkedin",
  },
];

export const PERSONAL_INFO = {
  name: "Diarra Hamadoun",
  title:
    "Ingénieur en Intelligence Artificielle & Créateur de solutions innovantes",
  subtitle: "Passionné par l'IA, le développement web et le design",
  avatar: "/avatar.png",
  resume: "/cv.pdf",
};

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};
