"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Users, History, ChevronRight, ArrowRight, Play, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { PremiumCard, PremiumButton } from "@/components/ui/PremiumElements";
import { useRef } from "react";
import HeroCarousel from "@/components/ui/HeroCarousel";
import Image from "next/image";
import CasinoLogo from "@/components/ui/CasinoLogo";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -30]);

  // Professional Easing - Smooth & Steady
  const ease = [0.25, 0.1, 0.25, 1.0] as const;

  return (
    <main className="bg-black-primary text-crema overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 pt-28 pb-14 sm:pb-20 md:py-24 overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-6xl w-full flex flex-col items-center gap-7 sm:gap-10 text-center"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
          >
            <div className="p-4 sm:p-6 rounded-full border border-dorado-primary/10 bg-black-soft/30 group relative">
              <CasinoLogo size={64} priority />
            </div>
          </motion.div>

          <div className="space-y-5 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-serif tracking-tighter leading-[0.92]">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-dorado-light via-dorado-primary to-dorado-dark block pb-4">
                  Gran Casino
                </span>
                <span className="text-crema/90 text-xl sm:text-3xl md:text-5xl lg:text-6xl tracking-[0.2em] sm:tracking-widest block uppercase font-light">
                  De Totana
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease }}
              className="text-base sm:text-lg md:text-2xl text-dorado-light/40 font-sans max-w-2xl md:max-w-3xl mx-auto leading-relaxed italic"
            >
              Un rincón de distinción donde el tiempo se detiene y la cultura florece desde 1890.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-8 w-full sm:w-auto"
          >
            <Link href="/socios" className="w-full sm:w-auto">
              <PremiumButton variant="primary" className="w-full sm:w-auto">
                Hacerse Socio <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </PremiumButton>
            </Link>
            <Link href="/historia" className="w-full sm:w-auto">
              <PremiumButton variant="outline" className="w-full sm:w-auto">Explorar Historia</PremiumButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-dorado-primary/40">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-dorado-primary/40 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Sections */}
      <section className="section-visibility py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PremiumCard delay={0.1}>
            <div className="mb-6 p-4 rounded-xl bg-black-soft border border-dorado-dark/20 w-fit">
              <History className="text-dorado-primary" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-dorado-light mb-4">El Legado</h3>
            <p className="text-dorado-light/40 leading-relaxed text-sm sm:text-base mb-8">
              Descubra más de un siglo de historia arquitectónica y social en el corazón de Totana. Un edificio declarado Bien de Interés Cultural.
            </p>
            <Link href="/historia" className="flex items-center gap-2 text-dorado-primary font-serif italic hover:gap-4 transition-all">
              Ver crónica <ChevronRight size={18} />
            </Link>
          </PremiumCard>

          <PremiumCard delay={0.2}>
            <div className="mb-6 p-4 rounded-xl bg-black-soft border border-dorado-dark/20 w-fit">
              <Calendar className="text-dorado-primary" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-dorado-light mb-4">Eventos</h3>
            <p className="text-dorado-light/40 leading-relaxed text-sm sm:text-base mb-8">
              Desde veladas literarias hasta conciertos de cámara. Nuestra agenda cultural define la vanguardia intelectual de la comarca.
            </p>
            <Link href="/cultura" className="flex items-center gap-2 text-dorado-primary font-serif italic hover:gap-4 transition-all">
              Próximas fechas <ChevronRight size={18} />
            </Link>
          </PremiumCard>

          <PremiumCard delay={0.3}>
            <div className="mb-6 p-4 rounded-xl bg-black-soft border border-dorado-dark/20 w-fit">
              <Users className="text-dorado-primary" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-dorado-light mb-4">Distinción</h3>
            <p className="text-dorado-light/40 leading-relaxed text-sm sm:text-base mb-8">
              Pertenecer a nuestra sociedad no es solo un privilegio, es formar parte de una comunidad dedicada a la excelencia y la cultura.
            </p>
            <Link href="#" className="flex items-center gap-2 text-dorado-primary font-serif italic hover:gap-4 transition-all">
              Proceso de ingreso <ChevronRight size={18} />
            </Link>
          </PremiumCard>
        </div>
      </section>

      {/* Narrative Section (Heritage) */}
      <section className="section-visibility py-20 md:py-32 relative overflow-hidden border-t border-dorado-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-6">
              <span className="text-dorado-primary uppercase tracking-[0.3em] text-sm">Nuestra Esencia</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-crema leading-tight">Un palacio para el conocimiento</h2>
              <p className="text-dorado-light/60 text-base md:text-lg leading-relaxed">
                Fundado en la plenitud del siglo XIX, el Gran Casino de Totana ha sido el faro de la vida social y cultural de la zona.
                Sus salones han sido testigos de los momentos más trascendentales de nuestra historia local.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 py-6 sm:py-8 border-y border-dorado-dark/10">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-serif text-dorado-primary">1890</div>
                  <div className="text-[10px] uppercase tracking-widest text-dorado-light/30">Fundación</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-serif text-dorado-primary">BIC</div>
                  <div className="text-[10px] uppercase tracking-widest text-dorado-light/30">Patrimonio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-serif text-dorado-primary">+500</div>
                  <div className="text-[10px] uppercase tracking-widest text-dorado-light/30">Socios</div>
                </div>
              </div>
              <Link href="/historia">
                <PremiumButton variant="outline" className="w-full sm:w-auto border-dorado-primary/20">
                  Ver Galería Histórica
                </PremiumButton>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-dorado-dark/30 liquid-glass">
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-dorado-primary/5 mix-blend-overlay z-10" />
              {/* Placeholder image that looks premium */}
              <Image
                src="/images/hero/IMG_9120.webp"
                alt="Gran Casino Totana Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={72}
                className="object-cover grayscale opacity-50 contrast-125"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="section-visibility py-20 md:py-32 bg-black-soft/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-dorado-light mb-4">Visítenos</h2>
            <div className="h-0.5 w-24 bg-dorado-primary mx-auto opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <MapPin className="text-dorado-primary" size={32} />
              <h4 className="text-xl font-serif text-crema">Ubicación</h4>
              <p className="text-dorado-light/40 text-sm sm:text-base">Calle Vidal Abarca, 2<br />30850 Totana, Murcia</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Phone className="text-dorado-primary" size={32} />
              <h4 className="text-xl font-serif text-crema">Contacto</h4>
              <p className="text-dorado-light/40 text-sm sm:text-base">868 24 12 48<br />institucion@casinototana.es</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Clock className="text-dorado-primary" size={32} />
              <h4 className="text-xl font-serif text-crema">Gastro Club</h4>
              <p className="text-dorado-light/40 text-sm sm:text-base">Servicio de Restauración Diaria<br />Consulte horarios y reservas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-visibility py-16 md:py-20 border-t border-dorado-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center space-y-10 md:space-y-12">
          <div className="flex items-center gap-3">
            <CasinoLogo size={32} />
            <span className="font-serif text-lg sm:text-2xl tracking-tighter text-dorado-light">Gran Casino de Totana</span>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-16">
            <Link href="#" className="text-xs uppercase tracking-widest text-dorado-light/40 hover:text-dorado-primary transition-colors">Privacidad</Link>
            <Link href="#" className="text-xs uppercase tracking-widest text-dorado-light/40 hover:text-dorado-primary transition-colors">Cookies</Link>
            <Link href="#" className="text-xs uppercase tracking-widest text-dorado-light/40 hover:text-dorado-primary transition-colors">Estatutos</Link>
            <Link href="#" className="text-xs uppercase tracking-widest text-dorado-light/40 hover:text-dorado-primary transition-colors">Transparencia</Link>
          </div>

          <div className="text-[10px] uppercase tracking-[0.4em] text-dorado-light/20" suppressHydrationWarning>
            © {new Date().getFullYear()} – Excelentísima Sociedad del Gran Casino de Totana
          </div>
        </div>
      </footer>
    </main>
  );
}

