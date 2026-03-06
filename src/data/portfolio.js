import Perfil from "../assets/Perfil.png";

export const personalInfo = {
  name: "Andres Pereira",
  role: "Desarrollador Full Stack",
  tagline:
    "Construyendo experiencias web modernas con código limpio y arquitecturas escalables",
  email: "pereirapuelloandresdavid@gmail.com",
  github: "https://github.com/AndresP2006",
  linkedin:
    "https://www.linkedin.com/in/andres-david-pereira-puello-8374ba33b/",
};

export const about = {
  description: `Soy un desarrollador junior con interés en el desarrollo full stack y en la calidad del software. Tengo conocimientos en la creación de aplicaciones web, participando tanto en el desarrollo de interfaces y APIs como en la realización de pruebas para asegurar el correcto funcionamiento de las funcionalidades. Me interesa trabajar con arquitecturas como MVC, aprender buenas prácticas de desarrollo y aplicar testing para mejorar continuamente la calidad del software.`,
  image: Perfil,
};

export const techStack = [
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "MySQL", category: "database" },
  { name: "Git", category: "tools" },
  { name: "MVC", category: "architecture" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    technologies: ["React", "Node.js", "MySQL", "SCSS"],
    github: "https://github.com/andrespereira/ecommerce",
    demo: "https://demo-ecommerce.com",
    image: "/projects/ecommerce.jpg",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con autenticación, asignación de proyectos y seguimiento en tiempo real.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MySQL"],
    github: "https://github.com/andrespereira/task-manager",
    demo: "https://demo-tasks.com",
    image: "/projects/tasks.jpg",
  },
  {
    id: 3,
    title: "API RESTful Blog",
    description:
      "API REST completa para un sistema de blog con autenticación JWT, CRUD de posts y sistema de comentarios.",
    technologies: ["Node.js", "PHP", "MySQL", "MVC"],
    github: "https://github.com/andrespereira/blog-api",
    demo: null,
    image: "/projects/api.jpg",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description:
      "Sistema de gestión de contenido para portafolios con editor visual y generación de sitios estáticos.",
    technologies: ["React", "TypeScript", "Node.js", "SCSS"],
    github: "https://github.com/andrespereira/portfolio-cms",
    demo: "https://demo-cms.com",
    image: "/projects/cms.jpg",
  },
];

export const experience = [
  {
    id: 1,
    title: "Practicante de QA (Quality Assurance)",
    company: "GBM",
    period: "2025 - 2026",
    description:
      "Apoya en la verificación de la calidad del software realizando pruebas funcionales, reportando errores y validando que las funcionalidades cumplan con los requisitos establecidos antes de su liberación",
  },
  {
    id: 2,
    title: "Ingeniero de QA (Quality Assurance)",
    company: "GBN",
    period: "2026",
    description:
      "Responsable de asegurar la calidad del software mediante el diseño y ejecución de pruebas, identificación y seguimiento de defectos, y validación de que las aplicaciones cumplan con los requisitos funcionales y estándares de calidad antes de su liberación.",
  },
];
