# Requirements Document

## Introduction

Ce projet consiste à développer un portfolio moderne et professionnel pour un ingénieur en Intelligence Artificielle. Le site web doit présenter de manière élégante les compétences, projets et informations de contact, avec un design moderne utilisant Next.js 15, Tailwind CSS v4 et shadcn/ui. L'accent est mis sur les animations fluides, la responsivité et une expérience utilisateur exceptionnelle.

## Requirements

### Requirement 1

**User Story:** En tant que visiteur du portfolio, je veux naviguer facilement entre les différentes sections du site, afin de découvrir rapidement les informations qui m'intéressent.

#### Acceptance Criteria

1. WHEN je visite le site THEN je SHALL voir une navbar fixe en haut de la page
2. WHEN je clique sur un lien de navigation THEN le site SHALL défiler automatiquement vers la section correspondante
3. WHEN je scroll sur la page THEN la navbar SHALL rester visible et accessible
4. WHEN je suis sur mobile THEN la navbar SHALL s'adapter avec un menu hamburger responsive
5. WHEN je clique sur le logo/nom THEN je SHALL retourner à la section d'accueil

### Requirement 2

**User Story:** En tant que visiteur, je veux voir une présentation claire et attrayante de la personne, afin de comprendre immédiatement son profil et ses compétences principales.

#### Acceptance Criteria

1. WHEN j'arrive sur la page d'accueil THEN je SHALL voir une photo/avatar circulaire
2. WHEN la page se charge THEN je SHALL voir le titre "Ingénieur en Intelligence Artificielle & Créateur de solutions innovantes"
3. WHEN la page se charge THEN je SHALL voir le sous-texte "Passionné par l'IA, le développement web et le design"
4. WHEN je vois la section hero THEN je SHALL avoir accès à deux boutons CTA "Télécharger CV" et "Me contacter"
5. WHEN la section hero apparaît THEN elle SHALL s'animer avec un effet fade-in et slide fluide

### Requirement 3

**User Story:** En tant que recruteur ou client potentiel, je veux découvrir les projets réalisés, afin d'évaluer les compétences techniques et la qualité du travail.

#### Acceptance Criteria

1. WHEN je visite la section projets THEN je SHALL voir des cartes présentant les projets IA et web
2. WHEN je survole une carte projet THEN elle SHALL s'animer avec un zoom léger ou effet de translation
3. WHEN je regarde une carte projet THEN je SHALL voir une image/aperçu, un titre, une description courte et des tags
4. WHEN je vois les tags THEN ils SHALL indiquer clairement le type de projet (IA, Web, Design, etc.)
5. WHEN les cartes apparaissent THEN elles SHALL s'animer de manière échelonnée

### Requirement 4

**User Story:** En tant que visiteur technique, je veux connaître les compétences spécifiques, afin de comprendre l'expertise dans les domaines IA et développement web.

#### Acceptance Criteria

1. WHEN je visite la section compétences THEN je SHALL voir deux blocs distincts
2. WHEN je regarde le premier bloc THEN je SHALL voir les compétences "IA & Data Science" avec Machine Learning, Deep Learning, NLP, Computer Vision, Python, PyTorch, TensorFlow, MLOps
3. WHEN je regarde le second bloc THEN je SHALL voir les compétences "Développement & Design" avec Next.js, React, Tailwind, Supabase, shadcn/ui, Figma, Canva
4. WHEN je survole une compétence THEN elle SHALL s'animer avec un effet visuel
5. WHEN les compétences s'affichent THEN elles SHALL être présentées dans une grille claire avec icônes

### Requirement 5

**User Story:** En tant que visiteur intéressé, je veux pouvoir contacter facilement la personne, afin d'établir une communication professionnelle.

#### Acceptance Criteria

1. WHEN je visite la section contact THEN je SHALL voir un formulaire avec les champs nom, email et message
2. WHEN je remplis le formulaire THEN les champs SHALL être stylisés avec shadcn/ui
3. WHEN je clique sur envoyer THEN le bouton SHALL afficher un état "loading" animé
4. WHEN je regarde la section contact THEN je SHALL voir des liens directs vers email, GitHub et LinkedIn
5. WHEN je clique sur un lien social THEN il SHALL s'ouvrir dans un nouvel onglet

### Requirement 6

**User Story:** En tant qu'utilisateur, je veux pouvoir basculer entre les modes clair et sombre, afin d'adapter l'affichage à mes préférences et conditions de lecture.

#### Acceptance Criteria

1. WHEN je visite le site THEN le mode sombre SHALL être activé par défaut
2. WHEN je clique sur le toggle de thème THEN le site SHALL basculer entre mode clair et sombre
3. WHEN je change de thème THEN la transition SHALL être fluide et animée
4. WHEN je recharge la page THEN mon choix de thème SHALL être conservé
5. WHEN je suis en mode sombre THEN tous les éléments SHALL avoir une palette sombre élégante

### Requirement 7

**User Story:** En tant qu'utilisateur sur différents appareils, je veux que le site s'adapte parfaitement à ma taille d'écran, afin d'avoir une expérience optimale sur mobile, tablette et desktop.

#### Acceptance Criteria

1. WHEN je visite le site sur mobile THEN tous les éléments SHALL s'adapter à la taille d'écran
2. WHEN je suis sur tablette THEN la mise en page SHALL s'ajuster automatiquement
3. WHEN je redimensionne ma fenêtre THEN le contenu SHALL rester lisible et bien organisé
4. WHEN je suis sur mobile THEN les animations SHALL rester fluides sans impacter les performances
5. WHEN je navigue sur différents appareils THEN l'expérience utilisateur SHALL rester cohérente

### Requirement 8

**User Story:** En tant que visiteur, je veux bénéficier d'animations fluides et élégantes, afin d'avoir une expérience immersive et moderne.

#### Acceptance Criteria

1. WHEN les éléments apparaissent à l'écran THEN ils SHALL s'animer avec des effets fade-in et slide-up
2. WHEN je survole des éléments interactifs THEN ils SHALL réagir avec des animations subtiles
3. WHEN je scroll sur la page THEN les éléments SHALL apparaître progressivement avec des animations échelonnées
4. WHEN les animations se déclenchent THEN elles SHALL être fluides et ne pas impacter les performances
5. WHEN je navigue THEN toutes les transitions SHALL être cohérentes avec le design global