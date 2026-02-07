# Sociedad del Gran Casino de Totana - Plataforma Digital

## 🏛️ Contexto del Proyecto
La **Sociedad del Gran Casino de Totana** es una institución emblemática con más de 100 años de historia. Ubicada en un edificio histórico, ha sido el epicentro cultural e institucional de Totana (Murcia). Su rica historia y arquitectura la convierten en un pilar fundamental de la vida social de la ciudad.

## 🎯 Objetivos
El proyecto nace de la necesidad de modernizar la presencia digital de la sociedad para cumplir los siguientes objetivos:
- **Rejuvenecimiento de la Base Social:** Atraer a una nueva generación de socios, adaptando la comunicación y los servicios a las expectativas del siglo XXI sin perder su esencia institucional.
- **Gestión Dinámica de Actividades:** Facilitar la organización, reserva y difusión de actividades culturales, lúdicas y sociales.
- **Digitalización de Procesos:** Modernizar trámites como el alta de nuevos socios y la comunicación institucional.

## 🛠️ Stack Tecnológico
Para garantizar una experiencia de usuario premium, rápida y escalable, se ha seleccionado el siguiente stack:
- **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/) - Para renderizado optimizado y SEO excelente.
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) - Para un desarrollo robusto y tipado.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Diseño moderno y responsivo con utilidades.
- **Iconografía:** [Lucide React](https://lucide.dev/) - Iconos consistentes y ligeros.
- **Utilidades:** `clsx` y `tailwind-merge` - Para gestión dinámica de clases CSS.

## 📂 Estructura del Proyecto (src/)
La arquitectura del proyecto sigue principios de escalabilidad y separación de responsabilidades:
- `app/`: Directorio raíz de rutas, layouts y estados globales (App Router).
- `components/`:
  - `ui/`: Componentes atómicos de interfaz (botones, inputs, modales).
  - `layout/`: Estructura base de la aplicación (Header, Footer, Nav).
  - `shared/`: Componentes de negocio reutilizables en diferentes secciones.
- `lib/`: Configuraciones de librerías externas y funciones de utilidad (ej. `utils.ts` para clases CSS).
- `styles/`: Archivos CSS globales y configuración de variables de tema.
- `hooks/`: Custom hooks para lógica reutilizable.
- `types/`: Definiciones de interfaces y tipos TypeScript.

## 📅 Roadmap de Funcionalidades
1. **Sección Pública Histórica:** Espacio dedicado a la historia del edificio, fotografías de archivo y legado cultural.
2. **Agenda de Eventos:** Calendario interactivo con actividades para socios y público general.
3. **Formulario Digital de Socios:** Proceso simplificado para la solicitud de nuevas altas.

---
### Guía de Inicio Rápido

**Requisitos:** Node.js 18+

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Construir para producción:
   ```bash
   npm run build
   ```
