export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'Über mich',
    href: '/about',
  },
  {
    id: 3,
    name: 'Projekte',
    href: '/projects',
  },
  {
    id: 4,
    name: 'Kontakt',
    href: '/contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Patrick was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Patrick’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Patrick. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Patrick was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'KI-Podcast Studio',
    desc: 'Eine revolutionäre Software-as-a-Service Plattform, die die Podcast-Erstellung neu definiert. Mit fortschrittlichen KI-Funktionen wie Text-zu-Mehrfachstimmen-Konvertierung können Ersteller vielfältige Sprachausgaben aus einem einzigen Text generieren.',
    subdesc: 'Entwickelt als einzigartige SaaS-Anwendung mit Next.js 14, Tailwind CSS, TypeScript, Framer Motion und Convex, optimiert für maximale Leistung und Skalierbarkeit.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Echtzeit-Dokumentenbearbeitung',
    desc: 'Eine leistungsstarke kollaborative App, die die Möglichkeiten der Echtzeit-Dokumentenbearbeitung erweitert. Als verbesserte Version von Google Docs unterstützt sie Millionen von Mitarbeitern gleichzeitig und stellt sicher, dass jede Änderung sofort und präzise erfasst wird.',
    subdesc: 'Mit LiveDoc können Benutzer die Zukunft der Zusammenarbeit erleben, bei der mehrere Mitwirkende in Echtzeit ohne Verzögerung zusammenarbeiten können, dank Next.js und den neuesten Liveblocks-Funktionen.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Gesundheitsmanagement-System',
    desc: 'Eine innovative Healthcare-Plattform zur Optimierung essentieller medizinischer Prozesse. Sie vereinfacht die Patientenregistrierung, Terminplanung und Verwaltung von Krankenakten für ein nahtloses Erlebnis sowohl für Gesundheitsdienstleister als auch Patienten.',
    subdesc: 'Mit Fokus auf Effizienz integriert CarePulse komplexe Formulare und SMS-Benachrichtigungen durch die Verwendung von Next.js, Appwrite, Twillio und Sentry zur Verbesserung der betrieblichen Abläufe.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Online-Banking Plattform',
    desc: 'Eine umfassende Online-Banking-Plattform, die Benutzern ein zentrales Finanzmanagement-Dashboard bietet. Sie ermöglicht es Benutzern, mehrere Bankkonten zu verbinden, Transaktionen in Echtzeit zu überwachen und problemlos Geld an andere Benutzer zu überweisen.',
    subdesc: 'Entwickelt mit Next.js 14 Appwrite, Dwolla und Plaid, gewährleistet Horizon ein reibungsloses und sicheres Banking-Erlebnis, maßgeschneidert für die Bedürfnisse moderner Verbraucher.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'KI-Bildbearbeitung App',
    desc: 'Eine bahnbrechende Software-as-a-Service-Anwendung, die es Benutzern ermöglicht, mit KI-Technologie beeindruckende Bildmanipulationen zu erstellen. Mit Funktionen wie KI-gesteuerter Bildbearbeitung, einem Zahlungssystem und einem kreditbasierten Modell.',
    subdesc: 'Entwickelt mit Next.js 14, Cloudinary AI, Clerk und Stripe, kombiniert Imaginify modernste Technologie mit einem benutzerorientierten Ansatz. Es kann zu einem Nebeneinkommen oder sogar zu einem vollwertigen Geschäft ausgebaut werden.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Entwickler',
    duration: '2023 - Heute',
    title: "Framer ist mein bevorzugtes Tool für interaktive Prototypen. Ich nutze es, um Designs zum Leben zu erwecken und Stakeholdern die Möglichkeit zu geben, den Benutzerfluss und die Interaktionen vor der Entwicklung zu erleben.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Entwickler',
    duration: '2022 - 2023',
    title: "Figma ist meine erste Wahl für kollaboratives Design. Ich nutze es für die nahtlose Zusammenarbeit mit Teammitgliedern und Kunden, um Echtzeit-Feedback und Design-Iterationen zu ermöglichen.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Entwickler',
    duration: '2021 - 2022',
    title: "Notion hilft mir, meine Projekte organisiert zu halten. Ich nutze es für Projektmanagement, Task-Tracking und als zentrale Anlaufstelle für Dokumentation.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
