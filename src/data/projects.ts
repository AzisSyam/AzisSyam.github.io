export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  role: string;
  tech: string[];
  image: string;
  screenshots: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: "dashboard-monitoring-spjm",
    title: "Dashboard Monitoring SPJM ",
    category: "Full-Stack Web App",
    description: "An automated library platform featuring real-time availability tracking, barcode scanning, and automated overdue email alerts.",
    longDescription: "Smart Library Management is an enterprise-grade automation system developed to streamline library operations, digital cataloging, and user interaction. The system integrates barcode-scanning capabilities for swift checkout and return, database telemetry to monitor usage statistics, and automated background jobs to process overdue alerts. It replaces traditional manual logging with high-performance real-time data synchronizations.",
    role: "Full-Stack Developer",
    tech: ["Laravel", "jQuery", "Bootsrap", "MySQL"],
    image: "/images/dashboard_spjm/1.png",
    screenshots: [
      "/images/dashboard_spjm/1.png",
      "/images/dashboard_spjm/2.png"
    ],
    link: "#"
  },
  {
    id: "smartlib",
    title: "Smartlib",
    category: "Full-Stack Web App",
    description: "An automated library platform featuring real-time availability tracking, barcode scanning, and automated overdue email alerts.",
    longDescription: "Smart Library Management is an enterprise-grade automation system developed to streamline library operations, digital cataloging, and user interaction. The system integrates barcode-scanning capabilities for swift checkout and return, database telemetry to monitor usage statistics, and automated background jobs to process overdue alerts. It replaces traditional manual logging with high-performance real-time data synchronizations.",
    role: "Full-Stack Developer",
    tech: ["Laravel", "Alpine.js", "Tailwind CSS", "PostgreSQL", "Open AI API"],
    image: "/images/smartlib/1.png",
    screenshots: [
      "/images/smartlib/1.png",
      "/images/smartlib/2.png",
      "/images/smartlib/3.jpg",
    ],
    link: "#"
  },
  {
    id: "fitsync",
    title: "FitSync",
    category: "SaaS Dashboard",
    description: "Real-time carbon footprint monitoring platform for large scale organizations with detailed exports and data visualizations.",
    longDescription: "EcoSphere Analytics is a SaaS dashboard tailored for corporate environmental impact tracking. By aggregating consumption data across offices and operations, the platform computes Scope 1, 2, and 3 greenhouse gas emissions. The system provides executive-level visualizations, predictive analytics on offset schedules, and instant PDF/CSV reporting to comply with modern corporate sustainability disclosures.",
    role: "Android Developer",
    tech: ["Kotlin", "Tensorflow Lite", ],
    image: "/images/fitsync/1.jpeg",
    screenshots: [
      
    ],
    link: "#"
  },
  {
    id: "aura-commerce",
    title: "Aura Commerce",
    category: "E-Commerce",
    description: "A headless, high-performance storefront with lightning-fast static generation and instant search filters.",
    longDescription: "Aura Commerce is a state-of-the-art headless digital commerce storefront. Engineered with Astro's zero-JS-by-default architecture, it uses selective React island hydration for search, cart functionality, and secure Stripe payment checkouts. It ensures loading times under 1 second by statically pre-building catalog pages and dynamically updating inventory at the edge.",
    role: "Lead Full-Stack Developer",
    tech: ["Astro", "React", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    screenshots: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
    ],
    link: "#"
  },
  {
    id: "vibesync-studio",
    title: "VibeSync Studio",
    category: "Audio Platform",
    description: "Collaborative music creation environment directly in the browser with MIDI support and real-time audio synthesis.",
    longDescription: "VibeSync Studio is an interactive web-based digital audio workstation (DAW) that enables collaborative composition in real time. It uses the Web Audio API for synthetic tone generation and low-latency playback, WebSockets to broadcast MIDI inputs and track modifications across client sessions, and Svelte for an extremely responsive timeline and mixer UI.",
    role: "Full-Stack Web Architect",
    tech: ["Web Audio API", "WebSockets", "Svelte", "Node.js"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    screenshots: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800"
    ],
    link: "#"
  }
];
