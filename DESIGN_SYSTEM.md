# 🎨 Sistema de Diseño - Gran Casino de Totana

Este documento define la identidad visual y los principios de diseño para la plataforma digital, fusionando la herencia centenaria con una estética moderna y tecnológica.

## 🌈 Paleta de Colores Institucional

| Color | Hex | Uso Sugerido |
| :--- | :--- | :--- |
| **Dorado Principal** | `#C9A962` | Logo, acentos primarios, llamadas a la acción (CTAs). |
| **Dorado Claro** | `#E0C684` | Estados hover, reflejos de luz, detalles sutiles. |
| **Dorado Oscuro** | `#A68B4A` | Bordes, sombras proyectadas sobre dorado, trazos finos. |
| **Negro Principal** | `#0A0A0A` | Fondo principal institucional, profundidad máxima. |
| **Negro Suave** | `#1A1A1A` | Tarjetas (Cards), modales, superficies elevadas. |
| **Crema** | `#FAF8F4` | Fondos claros alternativos, legibilidad alta. |
| **Crema Papel** | `#F2EFE9` | Secciones narrativas, contenido histórico, fondos tipo documento. |

## 📐 Filosofía de Diseño

### 1. Minimalismo Institucional
- La elegancia reside en el espacio en blanco (o negro). No saturar la interfaz con elementos innecesarios.
- Jerarquía visual clara mediante el uso de tipografía y espaciado generoso.

### 2. El Eje Visual: Negro + Dorado
- El binomio **Negro/Dorado** representa la exclusividad y la historia.
- El dorado no debe dominar; se usa como un metal precioso: en detalles críticos, iconos clave y bordes refinados.

### 3. Tipografía Dual (Old meets New)
- **Títulos (Serif):** `Playfair Display`. Evoca tradición, solera y prestigio. Para H1, H2 y citas destacadas.
- **Cuerpo (Sans):** `Inter`. Aporta modernidad, limpieza técnica y legibilidad perfecta en pantallas.

### 4. Estética "LiquidGlass" (Efecto Metal Líquido Premium)
A diferencia del Glassmorphism tradicional, buscamos una estética de **cristal fundido y metal líquido** (inspirada en Apple Pro y marcas de lujo):

- **Superficies Sólidas:** Fondos Negro Principal (`#0A0A0A`) sólidos. Evitamos transparencias estáticas o desenfoques de fondo (`backdrop-filter`).
- **Luz Dinámica:** Uso de gradientes radiales animados que simulan reflejos orgánicos de luz dorada sobre la superficie negra.
- **Movimiento Orgánico:** Animaciones lentas (8-12s) usando `@keyframes` que desplazan puntos de luz de forma casi imperceptible.
- **Bordes de Definición:** Bordes ultra-finos (1px) en Dorado Oscuro (`#A68B4A`) con opacidad reducida (30%) para dar estructura sin romper la oscuridad.
- **Micro-interacción:** Reacción sutil de los reflejos al movimiento del ratón o al scroll para enfatizar la naturaleza "líquida" del material.

---

*Nota: Este sistema de diseño debe aplicarse consistentemente en todos los componentes de la aplicación (`src/components/ui`).*
