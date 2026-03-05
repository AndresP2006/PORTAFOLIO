# 🚀 Portafolio Profesional - Andres Pereira

Portafolio web moderno y minimalista para desarrollador Full Stack con animaciones avanzadas, tema claro/oscuro y formulario de contacto.

## ✨ Características

- 🎨 Diseño moderno con modo claro/oscuro
- 🌊 Fondo animado con cuadros flotantes
- 📱 Completamente responsive
- 🎭 Animaciones suaves y profesionales
- 📧 Formulario de contacto funcional
- 🧭 Navbar sticky con detección de sección activa
- 📊 Estadísticas de GitHub integradas
- ⚡ Optimizado para rendimiento
- 🔍 SEO optimizado con Open Graph tags

## 🛠️ Tecnologías

- React 18
- Vite
- SCSS
- React Icons
- Context API (gestión de tema)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Personalización

### 1. Datos Personales
Edita `src/data/portfolio.js`:
```javascript
export const personalInfo = {
  name: "Tu Nombre",
  role: "Tu Rol",
  email: "tu@email.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario"
};
```

### 2. Proyectos
Actualiza el array `projects` en `src/data/portfolio.js` con tus proyectos reales.

### 3. Experiencia
Modifica el array `experience` con tu trayectoria profesional.

### 4. Tecnologías
Edita el array `techStack` con las tecnologías que dominas.

### 5. Colores y Estilos
Los colores están en `src/styles/variables.scss`:
```scss
$accent-primary: #00d9ff;
$accent-secondary: #7c3aed;
```

### 6. GitHub Stats
En `src/components/Contact.jsx`, cambia el username:
```jsx
<GitHubStats username="tu-usuario-github" />
```

## 📧 Configurar Formulario de Contacto

El formulario actualmente simula el envío. Para hacerlo funcional:

### Opción 1: EmailJS (Recomendado)
```bash
npm install @emailjs/browser
```

En `src/components/ContactForm.jsx`, descomenta y configura:
```javascript
import emailjs from '@emailjs/browser';

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

### Opción 2: Formspree
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Opción 3: Tu propio backend
Crea una API y actualiza la función `handleSubmit`.

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
```

Agrega a `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

## 📁 Estructura del Proyecto

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── projects/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AnimatedBackground.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── GitHubStats.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── TechStack.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── styles/
│   │   ├── globals.scss
│   │   └── variables.scss
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Próximas Mejoras Sugeridas

- [ ] Agregar más proyectos con imágenes reales
- [ ] Implementar blog con MDX
- [ ] Agregar sección de certificaciones
- [ ] Implementar filtros en proyectos
- [ ] Agregar tests con Vitest
- [ ] Implementar i18n (ES/EN)
- [ ] Agregar Google Analytics
- [ ] Crear sitemap.xml
- [ ] Optimizar imágenes con WebP
- [ ] Implementar PWA

## 📝 Licencia

MIT - Libre para uso personal y comercial

## 👤 Autor

**Andres Pereira**
- GitHub: [@andrespereira](https://github.com/andrespereira)
- LinkedIn: [Andres Pereira](https://linkedin.com/in/andrespereira)

---

⭐ Si te gustó este proyecto, dale una estrella en GitHub!
