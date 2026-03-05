export const personalInfo = {
  name: "Andres Pereira",
  role: "Desarrollador Full Stack",
  tagline:
    "Construyendo experiencias web modernas con código limpio y arquitecturas escalables",
  email: "[email]",
  github: "https://github.com/andrespereira",
  linkedin: "https://linkedin.com/in/andrespereira",
};

export const about = {
  description: `Soy un desarrollador full stack apasionado por crear soluciones web eficientes y escalables. 
  Con experiencia en el desarrollo de aplicaciones completas, desde el diseño de interfaces de usuario 
  hasta la implementación de APIs robustas y bases de datos optimizadas. Me especializo en arquitectura MVC 
  y busco constantemente mejorar la calidad del software mediante buenas prácticas y testing.`,
  image:
    "https://i.pinimg.com/736x/e6/d1/d5/e6d1d53634a5e455c4979dd8e1f0162c.jpg",
};

export const techStack = [
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "SCSS", category: "frontend" },
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
    title: "Desarrollador Full Stack",
    company: "Proyectos Freelance",
    period: "2023 - Presente",
    description:
      "Desarrollo de aplicaciones web completas utilizando React, Node.js y MySQL. Implementación de arquitecturas MVC y APIs RESTful.",
  },
  {
    id: 2,
    title: "Formación en Desarrollo Web",
    company: "Autodidacta / Cursos Online",
    period: "2022 - 2023",
    description:
      "Aprendizaje intensivo de tecnologías frontend y backend, bases de datos SQL, y mejores prácticas de desarrollo.",
  },
];
