# 🚀 Guía de Configuración Rápida

## ✅ Pasos para ejecutar el proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 3. Abrir en el navegador
```
http://localhost:5173
```

## 🔧 Configuración Necesaria

### Personalizar Datos
Edita `src/data/portfolio.js`:
- Cambia `[email]` por tu email real
- Actualiza tus enlaces de GitHub y LinkedIn
- Modifica proyectos, experiencia y tecnologías

### Configurar GitHub Stats
En `src/components/Contact.jsx`, línea con GitHubStats:
```jsx
<GitHubStats username="TU-USUARIO-GITHUB" />
```

### Configurar Formulario de Contacto (Opcional)
El formulario actualmente simula el envío. Para hacerlo funcional:

#### Opción 1: EmailJS
1. Crea cuenta en https://www.emailjs.com/
2. Instala: `npm install @emailjs/browser`
3. En `src/components/ContactForm.jsx`, descomenta y configura las líneas 24-31

#### Opción 2: Formspree
1. Crea cuenta en https://formspree.io/
2. Modifica el form action en ContactForm.jsx

## 📁 Estructura de Archivos Importantes

```
src/
├── components/
│   ├── Navbar.jsx          # Navegación sticky
│   ├── ContactForm.jsx     # Formulario de contacto
│   ├── GitHubStats.jsx     # Estadísticas de GitHub
│   └── ...
├── data/
│   └── portfolio.js        # ⚠️ EDITAR AQUÍ TUS DATOS
└── styles/
    ├── globals.scss        # Estilos globales
    └── variables.scss      # Variables de colores
```

## 🎨 Personalizar Colores

Edita `src/styles/variables.scss`:
```scss
$accent-primary: #00d9ff;    // Color principal
$accent-secondary: #7c3aed;  // Color secundario
```

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 5173 ocupado
```bash
npm run dev -- --port 3000
```

### Errores de SCSS
Verifica que todas las importaciones tengan la ruta correcta:
```scss
@import "../styles/variables.scss";
```

## 🚀 Build para Producción

```bash
npm run build
```

Los archivos estarán en la carpeta `dist/`

## 📦 Desplegar

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
1. `npm run build`
2. Arrastra la carpeta `dist/` a Netlify

## ✨ Características Implementadas

✅ Navbar sticky con detección de sección activa
✅ Tema claro/oscuro con toggle
✅ Fondo animado con cuadros flotantes
✅ Formulario de contacto con validación
✅ Estadísticas de GitHub
✅ Animaciones suaves en todas las secciones
✅ Diseño 100% responsive
✅ SEO optimizado

## 📝 Checklist Antes de Desplegar

- [ ] Cambiar email en `portfolio.js`
- [ ] Actualizar enlaces de GitHub y LinkedIn
- [ ] Cambiar username en GitHubStats
- [ ] Agregar proyectos reales con imágenes
- [ ] Actualizar experiencia laboral
- [ ] Configurar formulario de contacto
- [ ] Probar en móvil y desktop
- [ ] Verificar que todas las animaciones funcionen
- [ ] Probar modo claro y oscuro

## 🆘 Soporte

Si encuentras algún error:
1. Verifica que todas las dependencias estén instaladas
2. Revisa la consola del navegador (F12)
3. Asegúrate de que todos los archivos estén en su lugar
4. Verifica que no haya errores de sintaxis en los archivos editados

---

¡Tu portafolio está listo para impresionar! 🎉
