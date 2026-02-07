"use client";

import { motion } from "framer-motion";
import { History, Award, BookOpen, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { PremiumCard, PremiumButton } from "@/components/ui/PremiumElements";
import Image from "next/image";
import CasinoLogo from "@/components/ui/CasinoLogo";

const timelineEvents = [
    {
        year: "1890",
        title: "Fundación de la Sociedad",
        description: "Un grupo de ilustres ciudadanos de Totana se reúne para crear un espacio de debate, cultura y recreo.",
        icon: <CasinoLogo size={24} />,
    },
    {
        year: "1910",
        title: "Inauguración de la Sede Actual",
        description: "Se finaliza la construcción del edificio emblemático en la Plaza de la Constitución, joya del neoclasicismo local.",
        icon: <History className="text-dorado-primary" />,
    },
    {
        year: "1950",
        title: "Época Dorada Cultural",
        description: "El Casino se consolida como el epicentro de las artes, acogiendo conciertos de cámara y recitales literarios de renombre.",
        icon: <BookOpen className="text-dorado-primary" />,
    },
    {
        year: "2015",
        title: "Declaración de BIC",
        description: "El edificio es reconocido oficialmente como Bien de Interés Cultural, protegiendo su legado para las futuras generaciones.",
        icon: <Award className="text-dorado-primary" />,
    },
];

export default function HistoriaPage() {
    const ease = [0.22, 1, 0.36, 1] as const;

    return (
        <main className="bg-black-primary text-crema min-h-screen overflow-x-hidden">
            <Navbar />

            {/* Hero Section Historia */}
            <section className="relative min-h-[60svh] md:h-[70vh] flex items-center justify-center pt-24 md:pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black-primary/60 via-black-primary to-black-primary z-10" />
                    <Image
                        src="/images/hero/11zon_IMG_9133.webp"
                        alt="Textura histórica del Gran Casino"
                        fill
                        priority
                        sizes="100vw"
                        quality={72}
                        className="object-cover grayscale opacity-30"
                    />
                </div>

                <div className="relative z-20 text-center px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease }}
                    >
                        <span className="text-dorado-primary uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[11px] sm:text-sm mb-4 block font-bold">Nuestras Raíces</span>
                        <h1 className="fluid-h1 font-serif text-gold leading-tight">Crónica de un Legado</h1>
                    </motion.div>
                </div>
            </section>

            {/* Intro Narrative */}
            <section className="section-visibility fluid-py fluid-px max-w-4xl mx-auto border-y border-dorado-dark/10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="space-y-8 text-center px-4 sm:px-0"
                >
                    <p className="text-xl sm:text-2xl md:text-3xl font-serif text-dorado-light/80 italic leading-relaxed">
                        &ldquo;Para entender el presente de Totana, es necesario recorrer los pasillos de su Gran Casino, donde cada moldura guarda el eco de un siglo de historia.&rdquo;
                    </p>
                    <div className="w-16 h-px bg-dorado-primary mx-auto opacity-40 rounded-full" />
                    <p className="text-dorado-light/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Desde su fundación en 1890, el Gran Casino ha sido más que un edificio; ha sido el punto de encuentro de las mentes más brillantes, el escenario de las decisiones más importantes y el hogar de la cultura totanera.
                    </p>
                </motion.div>
            </section>

            {/* Timeline Section */}
            <section className="section-visibility fluid-py fluid-px relative">
                <div className="max-w-6xl mx-auto relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dorado-primary/30 to-transparent hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease, opacity: { duration: 0.8 } }}
                                className={`smooth-gpu relative flex flex-col items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    } gap-6 md:gap-0`}
                            >
                                {/* Year Bubble */}
                                <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:block">
                                    <div className="w-12 h-12 rounded-full bg-black-primary border border-dorado-primary flex items-center justify-center shadow-[0_0_20px_rgba(201,169,98,0.3)]">
                                        <span className="text-[10px] font-bold text-dorado-primary">{event.year}</span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-[45%]">
                                    <PremiumCard className="hover:border-dorado-primary/40 p-6 sm:p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 rounded-2xl bg-black-soft border border-dorado-dark/20">
                                                {event.icon}
                                            </div>
                                            <div className="flex flex-col md:hidden">
                                                <span className="text-dorado-primary font-bold tracking-widest text-xs uppercase">{event.year}</span>
                                                <h3 className="text-xl font-serif text-crema">{event.title}</h3>
                                            </div>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-serif text-crema mb-3 hidden md:block">{event.title}</h3>
                                        <p className="text-dorado-light/40 leading-relaxed text-sm md:text-base">
                                            {event.description}
                                        </p>
                                    </PremiumCard>
                                </div>

                                {/* Empty Side for Spacing */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Building Detail Section */}
            <section className="section-visibility fluid-py bg-black-soft/20 overflow-hidden">
                <div className="max-w-7xl mx-auto fluid-px grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease }}
                        className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-dorado-dark/20 relative group shadow-2xl"
                    >
                        <Image
                            src="/images/hero/IMG_9111.webp"
                            alt="Casino Architecture"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            quality={72}
                            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                            <span className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">Detalle Arquitectónico</span>
                            <h4 className="text-xl sm:text-2xl md:text-3xl font-serif text-crema">Bóveda de los Espejos</h4>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <span className="text-dorado-primary uppercase tracking-[0.3em] text-sm font-bold">El Inmueble</span>
                        <h2 className="fluid-h2 text-crema leading-tight">Un Patrimonio Declarado BIC</h2>
                        <div className="space-y-4 text-dorado-light/60 leading-relaxed text-base md:text-lg">
                            <p>
                                El edificio principal, de estilo ecléctico con influencias neoclásicas, destaca por su imponente fachada orientada a la Plaza de la Constitución. Sus balcones de forja y su decoración de escayola son únicos en la Región de Murcia.
                            </p>
                            <p>
                                En su interior, el Salón de Baile y la Biblioteca contienen volúmenes que datan de finales del siglo XIX, conservados con meticuloso cuidado por los sucesivos directores de la sociedad.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-dorado-dark/10">
                            <div>
                                <div className="text-3xl sm:text-4xl font-serif text-dorado-primary">1910</div>
                                <div className="text-[10px] uppercase tracking-widest text-dorado-light/30">Año Construcción</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl font-serif text-dorado-primary">Eclecticismo</div>
                                <div className="text-[10px] uppercase tracking-widest text-dorado-light/30">Estilo Artístico</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-visibility fluid-py fluid-px">
                <div className="max-w-4xl mx-auto rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden border border-dorado-primary/10 bg-gradient-to-br from-black-soft to-black-primary shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-dorado-primary/5 blur-[100px] -mr-32 -mt-32" />
                    <div className="relative z-10 space-y-8">
                        <h2 className="fluid-h2 text-crema">Explora el Archivo Digital</h2>
                        <p className="text-dorado-light/50 text-lg md:text-xl font-light italic">
                            &ldquo;Miles de documentos, fotografías y actas que narran la vida social de tres siglos.&rdquo;
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8">
                            <PremiumButton variant="primary" className="w-full sm:w-auto px-10">
                                Consulta Histórica <ChevronRight size={20} />
                            </PremiumButton>
                            <Link href="/" className="w-full sm:w-auto">
                                <PremiumButton variant="outline" className="w-full px-10">
                                    <ArrowLeft size={18} className="mr-2" /> Volver al Inicio
                                </PremiumButton>
                            </Link>
                        </div>
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

