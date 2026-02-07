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
      <section ref={heroRef} className="relative w-full min-h-[100svh] flex flex-col items-center justify-center fluid-px pt-28 pb-14 sm:pb-20 md:py-24 overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-7xl w-full flex flex-col items-center gap-4 sm:gap-10 text-center"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
          >
            <div className="p-3 sm:p-6 rounded-full border border-dorado-primary/10 bg-black-soft/30 group relative mb-2 sm:mb-4">
              <CasinoLogo size={42} priority className="sm:w-[56px] sm:h-[56px]" />
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="fluid-h1 font-bold font-serif tracking-tighter leading-[0.92]">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-dorado-light via-dorado-primary to-dorado-dark block pb-2 sm:pb-6">
                  Gran Casino
                </span>
                <span className="text-crema/90 text-[clamp(1rem,4vw,3.5rem)] tracking-[0.2em] sm:tracking-widest block uppercase font-light">
                  De Totana
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease }}
              className="text-base sm:text-lg md:text-2xl text-dorado-light/40 font-sans max-w-2xl md:max-w-3xl mx-auto leading-relaxed italic px-6"
            >
              Un rincón de distinción donde el tiempo se detiene y la cultura florece desde 1917.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-10 w-full sm:w-auto px-8"
          >
            <Link href="/socios" className="w-full sm:w-auto">
              <PremiumButton variant="primary" className="w-full sm:px-12 py-5 shadow-2xl">
                Hacerse Socio <ArrowRight size={20} className="ml-2" />
              </PremiumButton>
            </Link>
            <Link href="/historia" className="w-full sm:w-auto">
              <PremiumButton variant="outline" className="w-full sm:px-12 py-5 backdrop-blur-sm">
                Explorar Historia
              </PremiumButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Desktop Only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-dorado-primary/40">Explorar</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-dorado-primary/40 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Sections */}
      <section className="section-visibility fluid-py fluid-px max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
      <section className="section-visibility py-16 sm:py-24 md:py-32 relative overflow-hidden border-t border-dorado-dark/10">
        <div className="max-w-7xl mx-auto fluid-px grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-8">
              <div className="space-y-4 px-2 sm:px-0">
                <span className="text-dorado-primary uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold block">Nuestra Esencia</span>
                <h2 className="fluid-h2 text-crema leading-tight">Un palacio para el conocimiento</h2>
              </div>

              <p className="text-dorado-light/60 text-base md:text-xl leading-relaxed font-light px-2 sm:px-0">
                Fundado en 1917, el Gran Casino de Totana ha sido el faro de la vida social y cultural de la zona.
                Sus salones han sido testigos de los momentos más trascendentales de nuestra historia local.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-y border-dorado-dark/10">
                <div className="flex flex-col items-center sm:items-start">
                  <div className="text-4xl sm:text-5xl font-serif text-dorado-primary leading-none mb-2">1917</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-dorado-light/30 font-bold">Fundación</div>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="text-4xl sm:text-5xl font-serif text-dorado-primary leading-none mb-2">BIC</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-dorado-light/30 font-bold">Patrimonio</div>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="text-4xl sm:text-5xl font-serif text-dorado-primary leading-none mb-2">+500</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-dorado-light/30 font-bold">Socios</div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/historia">
                  <PremiumButton variant="primary" className="w-full sm:w-auto px-10 py-5">
                    Ver Galería Histórica
                  </PremiumButton>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-dorado-dark/30 liquid-glass">
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-dorado-primary/5 mix-blend-overlay z-10" />
              <Image
                src="/images/hero/IMG_9120.webp"
                alt="Gran Casino Totana Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={72}
                className="object-cover grayscale opacity-50 contrast-125 transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="section-visibility py-20 md:py-32 bg-black-soft/30 border-t border-dorado-dark/5">
        <div className="max-w-7xl mx-auto fluid-px">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="fluid-h2 text-dorado-light mb-6">Visítenos</h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-dorado-primary to-transparent mx-auto opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center space-y-6 p-8 rounded-[2.5rem] bg-black-primary/40 border border-dorado-dark/10 shadow-xl"
            >
              <div className="p-5 rounded-2xl bg-black-soft border border-dorado-dark/20 text-dorado-primary">
                <MapPin size={32} />
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-serif text-crema">Ubicación</h4>
                <p className="text-dorado-light/40 text-base md:text-lg leading-relaxed">Calle Vidal Abarca, 2<br />30850 Totana, Murcia</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center space-y-6 p-8 rounded-[2.5rem] bg-black-primary/40 border border-dorado-dark/10 shadow-xl"
            >
              <div className="p-5 rounded-2xl bg-black-soft border border-dorado-dark/20 text-dorado-primary">
                <Phone size={32} />
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-serif text-crema">Contacto</h4>
                <p className="text-dorado-light/40 text-base md:text-lg leading-relaxed">868 24 12 48<br />institucion@casinototana.es</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center space-y-6 p-8 rounded-[2.5rem] bg-black-primary/40 border border-dorado-dark/10 shadow-xl"
            >
              <div className="p-5 rounded-2xl bg-black-soft border border-dorado-dark/20 text-dorado-primary">
                <Clock size={32} />
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-serif text-crema">Gastro Club</h4>
                <p className="text-dorado-light/40 text-base md:text-lg leading-relaxed">Servicio de Restauración Diaria<br />Consulte horarios y reservas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </main>
  );
}

