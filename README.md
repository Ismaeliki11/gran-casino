# Sociedad del Gran Casino de Totana - Plataforma Digital

## 🏛️ Contexto del Proyecto
La **Sociedad del Gran Casino de Totana** es una institución emblemática con más de 100 años de historia. Ubicada en un edificio histórico, ha sido el epicentro cultural e institucional de Totana (Murcia). Su rica historia y arquitectura la convierten en un pilar fundamental de la vida social de la ciudad.

## 🎯 Objetivos
El proyecto nace de la necesidad de modernizar la presencia digital de la sociedad para cumplir los siguientes objetivos:
- **Rejuvenecimiento de la Base Social:** Atraer a una nueva generación de socios, adaptando la comunicación y los servicios a las expectativas del siglo XXI sin perder su esencia institucional.
- **Gestión Dinámica de Actividades:** Facilitar la organización, reserva y difusión de actividades culturales, lúdicas y sociales.
- **Digitalización de Procesos:** Modernizar trámites como el alta de nuevos socios y la comunicación institucional.

## 🛠️ Stack Tecnológico (Vanguardia)
Para garantizar una experiencia de usuario premium, rápida y escalable, se utiliza un stack de última generación:
- **Core:** [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) - Rigurosidad y escalabilidad.
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) - Motor de estilos de alto rendimiento.
- **Motion Design:** [Framer Motion](https://www.framer.com/motion/) - Animaciones complejas, transiciones suaves y scroll-driven effects.
- **Iconografía:** [Lucide React](https://lucide.dev/) - Sistema iconográfico consistente.

## ✨ Estado Actual y Funcionalidades
El proyecto cuenta con un **Sistema de Diseño "LiquidGlass"** exclusivo (detallado en `DESIGN_SYSTEM.md`) que fusiona la identidad histórica (Negro/Dorado) con interfaces modernas.

### Secciones Implementadas:
1.  **Inicio (Home):**
    - **Hero Inmersivo:** Carrusel de fondo con transiciones suaves y animaciones de entrada coordinadas.
    - **Narrativa Visual:** Secciones de "Legado", "Eventos" y "Distinción" con efectos de revelación al hacer scroll.
    - **Información de Visita:** Tarjetas interactivas con ubicación y contacto.

2.  **Historia (`/historia`):**
    - **Timeline Interactivo:** Línea de tiempo "Trayectoria Centenaria" responsive (adaptada a móvil/desktop) con hitos desde 1917.
    - **Patrimonio Oculto:** Sección interactiva sobre los murales de Fernando Gamonal con efecto "reveal" (click/hover).
    - **Arquitectura:** Destacado visual de "La Pecera" y acordeón con dossiers históricos detallados.

3.  **Cultura (`/cultura`):**
    - **Catálogo de Espacios:** Recorrido visual por el Salón Modernista, Biblioteca y La Pecera con detalles flotantes.
    - **Agenda Viva:** Listado de eventos culturales reales (conciertos, presentaciones literarias).

4.  **Área de Socios (`/socios`):**
    - **Alta Digital:** Formulario institucional completo para solicitud de admisión.
    - **Gestión Documental:** Integración de descarga de documentos PDF (Estatutos, Hoja de Inscripción).
    - **Estética Formal:** Diseño orientado a la solemnidad del proceso de ingreso.

5.  **Gastronomía (`/restaurante`):**
    - **Carta Digital Premium:** Menú completo estructurado en Entrantes, Principales, Postres y Bodega.
    - **Estado del Servicio:** Aviso "Próximamente" integrado elegantemente para informar sobre la pausa del servicio.
    - **Acceso Exclusivo:** Información sobre eventos privados para socios.

## 📂 Estructura del Proyecto (src/)
La arquitectura está modulada para facilitar el mantenimiento:
- `app/`: Rutas, layouts y páginas (App Router).
- `components/`:
  - `ui/`: Biblioteca de componentes premium (`PremiumButton`, `PremiumCard`, `HeroCarousel`, `CasinoLogo`).
  - `layout/`: Navegación global (`Navbar`, `BottomNav` para móvil).
- `lib/`: Utilidades y configuraciones.
- `styles/`: Variables CSS globales y configuración de fuentes (`Playfair Display` + `Inter`).

## 📅 Próximos Pasos (Roadmap)
- [ ] Implementación de backend para gestión de reservas.
- [ ] Área privada de socios (Login/Dashboard).
- [ ] Blog de noticias automatizado con IA.

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
