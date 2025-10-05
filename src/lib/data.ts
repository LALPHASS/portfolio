import { Project, SkillCategory } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Analyse de Données Cyclistic",
    description:
      "Analyse des données de vélos partagés pour identifier les tendances d'utilisation et optimiser les stratégies marketing.",
    image: "/projects/cyclistic.jpg",
    tags: [
      {
        label: "Python",
        category: "Data",
        color:
          "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
      },
      {
        label: "Pandas",
        category: "Data",
        color:
          "bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30",
      },
      {
        label: "Data Visualization",
        category: "Data",
        color:
          "bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30",
      },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/LALPHASS/Data-analysis/tree/main/Data-Analysis-R/Cyclistic",
      },
      { type: "demo", url: "https://rpubs.com/lalphass/1069186" },
    ],
  },
  {
    id: "2",
    title: "Résumeur d'Articles",
    description:
      "Outil intelligent qui génère des résumés clairs et concis d'articles longs en utilisant l'IA.",
    image: "/projects/Sum.png",
    tags: [
      {
        label: "React",
        category: "Web",
        color:
          "bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30",
      },
      {
        label: "Node.js",
        category: "Web",
        color:
          "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
      },
      {
        label: "Tailwind",
        category: "Web",
        color:
          "bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/30",
      },
      {
        label: "OpenAI",
        category: "IA",
        color:
          "bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/30",
      },
    ],
    links: [
      { type: "github", url: "https://github.com/LALPHASS/" },
      { type: "demo", url: "https://summarizze.netlify.app/" },
    ],
  },
  {
    id: "3",
    title: "Design Agence Services IT",
    description:
      "Interface moderne pour une agence de services IT avec système de design cohérent et composants réutilisables.",
    image: "/projects/it_agensy.png",
    tags: [
      {
        label: "Figma",
        category: "Design",
        color:
          "bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30",
      },
      {
        label: "UI/UX Design",
        category: "Design",
        color:
          "bg-pink-500/20 text-pink-700 dark:text-pink-300 border border-pink-500/30",
      },

      {
        label: "Design System",
        category: "Design",
        color:
          "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30",
      },
    ],
    links: [
      {
        type: "github",
        url: "https://www.figma.com/community/file/1556647547955984988",
      },
      {
        type: "demo",
        url: "https://www.figma.com/community/file/1556647547955984988",
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "IA & Data Science",
    description: "Expertise en intelligence artificielle et analyse de données",
    skills: [
      { name: "Machine Learning", icon: "🤖" },
      { name: "Deep Learning", icon: "🧠" },
      { name: "NLP", icon: "💬" },
      { name: "Computer Vision", icon: "👁️" },
      { name: "Python", icon: "🐍" },
      { name: "PyTorch", icon: "🔥" },
      { name: "TensorFlow", icon: "📊" },
      { name: "MLOps", icon: "⚙️" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Scikit-learn", icon: "📈" },
      { name: "Jupyter", icon: "📓" },
    ],
  },
  {
    title: "Développement & Design",
    description: "Compétences en développement web et design d'interfaces",
    skills: [
      { name: "Next.js", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Node.js", icon: "🟢" },
      { name: "Supabase", icon: "🗄️" },
      { name: "shadcn/ui", icon: "🎯" },
      { name: "Figma", icon: "🎨" },
      { name: "Canva", icon: "🖼️" },
      { name: "Git", icon: "📝" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
    ],
  },
];
