import Perfil from "../assets/Perfil.png";
import CDA from "../assets/CDA.png";
import Portafolio from "../assets/Portafolio.png";

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
  { name: "NestJs", category: "backend" },
  { name: "MongoDB", category: "database" },
];

export const projects = [
  {
    id: 1,
    title: "Control de Acceso",
    description:
      "Plataforma de control de entrada y salida de visitantes y residentes en conjuntos residenciales.",
    technologies: ["React", "PHP", "MySQL", "SCSS"],
    github: "https://github.com/AndresP2006/Control-de-acceso.git",
    image: CDA,
  },
  {
    id: 2,
    title: "e-commerce",
    description:
      "Tienda online desarrollada desde cero que permite visualizar productos y gestionar un carrito de compras.",
    technologies: ["React.js", "Javascript", "Node.js", "MySQL"],
    github: "https://github.com/AndresP2006/SHOPING.git",
    // demo: "https://demo-tasks.com",
    // image: "/projects/tasks.jpg",
  },
  {
    id: 3,
    title: "Conjuntly",
    description:
      "API REST completa para un sistema de blog con autenticación JWT, CRUD de posts y sistema de comentarios.",
    technologies: [
      "Node.js",
      "Typescript",
      "React.js",
      "Tailwind",
      "MySQL",
      "MVC",
    ],
    github: "https://github.com/AndresP2006/Conjuntly.git",
    demo: null,
    // image: "/projects/api.jpg",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "Portafolio web personal desarrollado para presentar mis proyectos, habilidades y experiencia como desarrollador.",
    technologies: ["React", "TypeScript", "SCSS"],
    github: "https://github.com/AndresP2006/PORTAFOLIO.git",
    demo: "https://andrespereira.vercel.app/",
    image: Portafolio,
  },
];

export const experience = [
  {
    id: 1,
    title: "Practicante de QA (Quality Assurance)",
    company: "GBM",
    period: "AGO 2025 – FEB 2026",
    description:
      "Apoya en la verificación de la calidad del software realizando pruebas funcionales, reportando errores y validando que las funcionalidades cumplan con los requisitos establecidos antes de su liberación",
  },
  {
    id: 2,
    title: "Ingeniero de QA (Quality Assurance)",
    company: "GBN",
    period: "FEB 2026",
    description:
      "Responsable de asegurar la calidad del software mediante el diseño y ejecución de pruebas, identificación y seguimiento de defectos, y validación de que las aplicaciones cumplan con los requisitos funcionales y estándares de calidad antes de su liberación.",
  },
];
