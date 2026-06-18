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
    description: "Developed an operational monitoring website for PT Pelindo Jasa Maritim to track key activities, including dredging projects, vessel docking, and fuel management approvals. The platform features dynamic dashboards that display company operational data alongside management tools to seamlessly update and modify records.",
    longDescription: "Developed an operational monitoring website for PT Pelindo Jasa Maritim to track key activities, including dredging projects, vessel docking, and fuel management approvals. The platform features dynamic dashboards that display company operational data alongside management tools to seamlessly update and modify records.",
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
    description: "Developed Smartlib, an intelligent library management platform featuring a comprehensive administration dashboard that provides data insights, including favorite books, recent borrowings, newly added books, popular categories, book counts per category, and tallies of borrowed or overdue books. The platform integrates OCR technology for efficient data management (CRUD) of books, borrowing records, and categories, while enhancing visitor experience through standard keyword searches and an advanced AI-powered prompting search system.",
    longDescription: "Developed Smartlib, an intelligent library management platform featuring a comprehensive administration dashboard that provides data insights, including favorite books, recent borrowings, newly added books, popular categories, book counts per category, and tallies of borrowed or overdue books. The platform integrates OCR technology for efficient data management (CRUD) of books, borrowing records, and categories, while enhancing visitor experience through standard keyword searches and an advanced AI-powered prompting search system.",
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
    description: "Developed an AI-powered home workout application that offers structured training programs across beginner, intermediate, and advanced levels. The platform features an automated repetition counter driven by computer vision motion scanning, which accurately detects and records correct movements to help users maintain proper form and track progress.",
    longDescription: "Developed an AI-powered home workout application that offers structured training programs across beginner, intermediate, and advanced levels. The platform features an automated repetition counter driven by computer vision motion scanning, which accurately detects and records correct movements to help users maintain proper form and track progress.",
    role: "Android Developer",
    tech: ["Kotlin", "Tensorflow Lite", ],
    image: "/images/fitsync/1.jpeg",
    screenshots: [
      
    ],
    link: "#"
  }
];
