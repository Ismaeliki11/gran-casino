"use client";

import { motion } from "framer-motion";
import { History, Award, BookOpen, ChevronRight, ArrowLeft, Eye, Palette, Landmark } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { PremiumCard, PremiumButton, PremiumAccordion } from "@/components/ui/PremiumElements";
import Image from "next/image";
import CasinoLogo from "@/components/ui/CasinoLogo";

const timelineEvents = [
    {
        year: "1917",
        title: "Génesis y Voluntad",
        description: "El 29 de noviembre, un grupo de terratenientes y comerciantes funda la Sociedad. En un clima de agitación nacional, nace como un 'santuario' apolítico de recreo civilizado.",
        icon: <CasinoLogo size={24} />,
    },
    {
        year: "1935",
        title: "La Edad Dorada",
        description: "Esplendor social con grandes orquestas amenizando bailes de Pascua y fin de año, convirtiéndose en el epicentro de las alianzas sociales del municipio.",
        icon: <History className="text-dorado-primary" />,
    },
    {
        year: "1947",
        title: "El Renacimiento de Cayuela",
        description: "Bajo la presidencia del Dr. José Cayuela Meca, se impulsa la gran transformación estética, encargando a Fernando Gamonal la decoración mural y el mobiliario.",
        icon: <Palette className="text-dorado-primary" />,
    },
    {
        year: "2024",
        title: "Redescubrimiento Artístico",
        description: "Comienza la recuperación de las pinturas de Gamonal, ocultas durante décadas bajo capas de pintura, devolviendo al Casino su categoría de contenedor artístico.",
        icon: <Award className="text-dorado-primary" />,
    },
];

export default function HistoriaPage() {
    const ease = [0.22, 1, 0.36, 1] as const;

    return (
        <main className="bg-black-primary text-crema min-h-screen overflow-x-hidden">
            <Navbar />

            {/* Hero Section Historia */}
            <section className="relative min-h-[60svh] md:h-[80vh] flex items-center justify-center pt-24 md:pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black-primary/40 via-black-primary/80 to-black-primary z-10" />
                    <Image
                        src="/images/hero/11zon_IMG_9133.webp"
                        alt="Textura histórica del Gran Casino"
                        fill
                        priority
                        sizes="100vw"
                        quality={85}
                        className="object-cover img-premium opacity-65"
                    />
                </div>

                <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease }}
                    >
                        <span className="text-dorado-primary uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[11px] sm:text-sm mb-4 block font-bold">Crónica de un Siglo (1917 — 2025)</span>
                        <h1 className="fluid-h1 font-serif text-gold leading-tight mb-6 pb-4 -mb-4">Un Legado de Miradas</h1>
                        <p className="text-dorado-light/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            Desde el mandato de neutralidad de 1917 hasta su apertura total como eje cultural del siglo XXI.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Narrative & Stats Context */}
            <section className="section-visibility fluid-py fluid-px max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="fluid-h2 font-serif text-crema leading-tight">La Barrera de un Estatus</h2>
                        <div className="space-y-4 text-dorado-light/60 text-lg leading-relaxed">
                            <p>
                                En 1917, pertenecer al Gran Casino era una declaración de éxito. La entrada costaba 25 pesetas: más de una semana de trabajo íntegro para un jornalero de la época.
                            </p>
                            <p>
                                Más que exclusividad, era un compromiso con la cultura y la sociabilidad apolítica, un &ldquo;santuario&rdquo; donde las diferencias partidistas quedaban suspendidas en favor del recreo civilizado.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <PremiumCard className="p-8 text-center border-dorado-primary/10">
                            <div className="text-4xl font-serif text-dorado-primary mb-2">25 pesetas</div>
                            <div className="text-[10px] uppercase tracking-widest text-dorado-light/40 font-bold">Cuota de Entrada 1917</div>
                        </PremiumCard>
                        <PremiumCard className="p-8 text-center border-dorado-primary/10">
                            <div className="text-4xl font-serif text-dorado-primary mb-2">1,50 pesetas</div>
                            <div className="text-[10px] uppercase tracking-widest text-dorado-light/40 font-bold">Mensualidad Histórica</div>
                        </PremiumCard>
                        <PremiumCard className="p-8 text-center border-dorado-primary/10 sm:col-span-2">
                            <div className="text-sm italic text-dorado-light/60 leading-relaxed text-center">
                                &ldquo;Un espacio de transición entre la esfera privada del hogar burgués y la esfera pública.&rdquo;
                            </div>
                        </PremiumCard>
                    </div>
                </div>
            </section>

            {/* Architecture: La Pecera */}
            <section className="section-visibility fluid-py bg-black-soft/10 overflow-hidden border-y border-dorado-dark/5">
                <div className="max-w-7xl mx-auto fluid-px grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease }}
                        className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-dorado-dark/20 relative group shadow-2xl lg:order-last"
                    >
                        <Image
                            src="/images/hero/IMG_9111.webp"
                            alt="La Pecera del Casino"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            quality={85}
                            className="object-cover img-premium opacity-90 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black-primary/60 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                            <span className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                                <Eye size={12} /> El Panóptico Social
                            </span>
                            <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif text-crema mt-2">La Pecera</h4>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <span className="text-dorado-primary uppercase tracking-[0.3em] text-sm font-bold flex items-center gap-3">
                            <Landmark size={18} /> Arquitectura del Poder
                        </span>
                        <h2 className="fluid-h2 text-crema leading-tight">Ver y ser visto: <br /><span className="text-gold italic">El balcón de Totana</span></h2>
                        <div className="space-y-4 text-dorado-light/60 leading-relaxed text-base md:text-lg">
                            <p>
                                Situado estratégicamente en la esquina del Ayuntamiento, el edificio completa la tríada de poderes locales junto a la Iglesia de Santiago.
                            </p>
                            <p>
                                Su elemento más distintivo, <span className="text-dorado-light italic">La Pecera</span>, actuaba como un escaparate donde la élite observaba el devenir de las gentes —amas de casa, niños y viandantes— desde un remanso de paz iluminado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-visibility fluid-py fluid-px relative">
                <div className="max-w-6xl mx-auto relative">
                    <div className="text-center mb-16 md:mb-20 space-y-4">
                        <span className="text-dorado-primary text-xs uppercase tracking-[0.4em] font-bold">Hitos Cronológicos</span>
                        <h2 className="fluid-h2 font-serif text-crema">Trayectoria Centenaria</h2>
                    </div>

                    {/* Desktop Center Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-40 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado-primary/20 to-transparent hidden md:block" />

                    {/* Mobile Left Line */}
                    <div className="absolute left-8 top-40 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado-primary/20 to-transparent md:hidden" />

                    <div className="space-y-12 md:space-y-24">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease, opacity: { duration: 0.8 } }}
                                className={`smooth-gpu relative flex flex-col items-start md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    } gap-6 md:gap-0`}
                            >
                                {/* Year Bubble - Desktop: Center, Mobile: Left */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20">
                                    <div className="w-16 h-16 rounded-full bg-black-primary border border-dorado-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
                                        <span className="text-[10px] font-bold text-dorado-primary/80">{event.year}</span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-[45%] pl-20 md:pl-0">
                                    <PremiumCard className="hover:border-dorado-primary/40 p-6 sm:p-10 bg-black-soft/20 backdrop-blur-sm shadow-2xl">
                                        <div className="flex flex-col gap-5">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-2xl bg-black-soft border border-dorado-dark/20 text-dorado-primary">
                                                    {event.icon}
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-serif text-crema italic tracking-tight">{event.title}</h3>
                                            </div>
                                            <p className="text-dorado-light/40 leading-relaxed text-sm md:text-base">
                                                {event.description}
                                            </p>
                                        </div>
                                    </PremiumCard>
                                </div>

                                {/* Empty Side for Spacing */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gamonal: The Hidden Treasure */}
            <section className="section-visibility fluid-py bg-black-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dorado-primary/20 to-transparent" />

                <div className="max-w-5xl mx-auto fluid-px text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <span className="text-dorado-primary uppercase tracking-[0.4em] text-xs font-bold">Patrimonio Artístico</span>
                        <h2 className="fluid-h2 font-serif text-crema italic">El Tesoro Oculto de Gamonal</h2>
                    </motion.div>

                    <div
                        className="relative aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-dorado-primary/10 group shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-pointer"
                        onClick={(e) => {
                            const overlay = e.currentTarget.querySelector('.gamonal-overlay');
                            const prompt = e.currentTarget.querySelector('.gamonal-prompt');
                            const image = e.currentTarget.querySelector('.gamonal-image');

                            if (window.innerWidth < 1024) {
                                overlay?.classList.toggle('opacity-0');
                                overlay?.classList.toggle('opacity-100');
                                prompt?.classList.toggle('opacity-0');
                                image?.classList.toggle('grayscale');
                                image?.classList.toggle('grayscale-0');
                            }
                        }}
                    >
                        <Image
                            src="/images/hero/11zon_IMG_9124.webp"
                            alt="Salón Modernista con pinturas de Gamonal"
                            fill
                            className="gamonal-image object-cover img-premium opacity-80 group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-black-primary/20 to-transparent" />

                        <div className="gamonal-overlay absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center bg-black-primary/60 lg:bg-black-primary/40 opacity-0 lg:group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]">
                            <p className="text-dorado-light/90 md:text-dorado-light/80 text-sm sm:text-base md:text-xl max-w-2xl font-light leading-relaxed">
                                En 1947, Fernando Gamonal diseñó una obra total: murales y mobiliario que fueron cubiertos por capas de pintura en los años 60. Hoy, la restauración vuelve a sacar a la luz su genio.
                            </p>
                        </div>

                        <div className="gamonal-prompt absolute bottom-6 left-1/2 -translate-x-1/2 lg:group-hover:opacity-0 transition-opacity flex flex-col items-center gap-2">
                            <div className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">
                                <span className="hidden lg:inline">Pasa el cursor</span>
                                <span className="lg:hidden text-xs">Pulsa</span> para revelar
                            </div>
                            <div className="w-1 h-6 bg-gradient-to-b from-dorado-primary to-transparent" />
                        </div>
                    </div>

                    <p className="text-dorado-light/40 text-base md:text-xl font-light italic leading-relaxed max-w-3xl mx-auto px-4">
                        &ldquo;Elevando la categoría del inmueble de lugar de reunión a contenedor de patrimonio artístico.&rdquo;
                    </p>
                </div>
            </section>

            {/* Dossier de Investigación Histórica - Lighter Background for readability */}
            <section className="section-visibility fluid-py fluid-px bg-crema-paper/[0.08] border-t border-dorado-dark/10 backdrop-blur-md relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black-primary/20 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                    <div className="text-center space-y-4 mb-12">
                        <span className="text-dorado-primary text-xs uppercase tracking-[0.4em] font-bold">Investigación Exhaustiva</span>
                        <h2 className="fluid-h2 font-serif text-crema tracking-tight">Archivos y Crónicas</h2>
                    </div>

                    <div className="space-y-4">
                        <PremiumAccordion title="El Fenómeno del Asociacionismo">
                            <p className="text-crema/80">
                                Para comprender la magnitud de la Sociedad Gran Casino de Totana, es imperativo situar su nacimiento dentro del asociacionismo recreativo que floreció en España entre finales del s. XIX y principios del XX.
                            </p>
                            <p className="text-crema/80">
                                Estas instituciones actuaban como contrapesos a las estructuras tradicionales de poder representadas por la Iglesia y el Ayuntamiento, creando un microcosmos donde se tejían las redes de influencia comercial y social del municipio.
                            </p>
                        </PremiumAccordion>

                        <PremiumAccordion title="El Mandato de Neutralidad de 1917">
                            <p className="text-crema/80">
                                La fundación se formalizó el 29 de noviembre de 1917, un año de gran convulsión social en España. A diferencia de otros casinos de la época, a menudo vinculados a partidos políticos específicos, el Gran Casino nació con una vocación explícitamente apolítica.
                            </p>
                            <p className="text-crema/80">
                                El acta fundacional enfatizaba una sociedad donde imperara la "independencia política", buscando alejarse de las luchas de confesiones de carácter partidista para crear un "santuario" de ocio y cohesión de clase.
                            </p>
                        </PremiumAccordion>

                        <PremiumAccordion title="Arquitectura y Simbolismo Urbano">
                            <p className="text-crema/80">
                                La ubicación en la Calle Vidal Abarca, número 2, no es casual. Ocupa el corazón neurálgico de Totana, completando el triángulo de poder junto al Ayuntamiento y la Iglesia de Santiago.
                            </p>
                            <p className="text-crema/80">
                                Su arquitectura responde a la tipología del casino burgués, adaptada a la escala de una ciudad media agraria, destacando su salón modernista como centro y eje de la sociedad.
                            </p>
                        </PremiumAccordion>

                        <PremiumAccordion title="El Declive y Riesgo de Extinción">
                            <p className="text-crema/80">
                                A finales del siglo XX, el modelo del casino entró en crisis debido al elitismo anacrónico, la aparición de nuevas alternativas de ocio y las restricciones al juego.
                            </p>
                            <p className="text-crema/80">
                                La institución se enfrentó a la "pena de extinción", riesgo que ha motivado el giro estratégico actual hacia la apertura cultural definitiva del siglo XXI.
                            </p>
                        </PremiumAccordion>
                    </div>
                </div>
            </section>

            {/* Deep Dive Call to Action */}
            <section className="section-visibility fluid-py fluid-px text-center bg-dorado-primary/5 border-y border-dorado-primary/10">
                <div className="max-w-4xl mx-auto space-y-8">
                    <BookOpen size={40} className="text-dorado-primary mx-auto mb-4" />
                    <h2 className="fluid-h2 font-serif text-gold">¿Deseas profundizar más?</h2>
                    <p className="text-dorado-light/60 text-lg md:text-xl font-light leading-relaxed">
                        Hemos preparado un informe detallado que recorre desde el asociacionismo de la Restauración hasta el redescubrimiento de los murales de Gamonal.
                        Toda la historia, sin cortes.
                    </p>
                    <div className="pt-4">
                        <Link href="/historia/completa">
                            <PremiumButton variant="primary" className="px-12">
                                Leer Crónica Completa <ChevronRight size={20} className="ml-2" />
                            </PremiumButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contemporary Transition */}
            <section className="section-visibility fluid-py fluid-px text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="fluid-h2 font-serif text-crema">Del Club Privado al Eje Cultural</h2>
                        <p className="text-dorado-light/50 text-lg md:text-xl font-light leading-relaxed">
                            Hoy, el Casino ha roto las barreras psicológicas de su pasado. Bajo un mandato de apertura, sus salones vibran con presentaciones de cómics, recitales poéticos y actos reivindicativos como el festival &ldquo;Que vivan las mujeres&rdquo;.
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                        <Link href="/cultura">
                            <PremiumButton variant="primary" className="w-full sm:w-auto px-10">
                                Explorar Agenda Cultural <ChevronRight size={20} />
                            </PremiumButton>
                        </Link>
                        <Link href="/">
                            <PremiumButton variant="outline" className="w-full sm:w-auto px-10">
                                <ArrowLeft size={18} className="mr-2" /> Inicio
                            </PremiumButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer minimal for inner page */}
            <footer className="section-visibility py-16 border-t border-dorado-dark/10 text-center px-4 bg-black-primary">
                <div className="text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.4em] text-dorado-light/20" suppressHydrationWarning>
                    © {new Date().getFullYear()} – Gran Casino de Totana · Departamento de Identidad e Historia
                </div>
            </footer>
        </main>
    );
}
