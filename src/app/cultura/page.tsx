"use client";

import { motion } from "framer-motion";
import { Book, Trophy, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import CasinoLogo from "@/components/ui/CasinoLogo";

const realSpaces = [
    {
        id: "salon-modernista",
        title: "Salón Modernista",
        tag: "Eje del Casino",
        description: "Recientemente restaurado en 2021 para recuperar su esplendor original. Es el corazón social de la institución, donde se celebran las asambleas y los actos más solemnes de la sociedad totanera.",
        image: "/images/hero/11zon_IMG_9124.webp",
        icon: <CasinoLogo size={40} />,
        details: ["Restaurado en 2021", "Estilo Modernista Regionalista", "Sede de Actos Institucionales"]
    },
    {
        id: "la-biblioteca",
        title: "Biblioteca Histórica",
        tag: "Legado Escrito",
        description: "Un espacio de silencio que custodia la historia de Totana. Desde su fundación en 1917, ha sido el lugar de encuentro para la lectura de prensa y la consulta de un fondo bibliográfico que es patrimonio vivo de la ciudad.",
        image: "/images/hero/11zon_IMG_9133.webp",
        icon: <Book className="text-dorado-primary" size={40} />,
        details: ["Fundada en 1917", "Archivo de Prensa Histórica", "Tertulias Literarias"]
    },
    {
        id: "sala-de-juegos",
        title: "Salones de Juego",
        tag: "Ocio Tradicional",
        description: "El alma recreativa del Casino. Salas acondicionadas para el billar y los juegos de mesa que han fomentado la camaradería entre generaciones de socios, manteniendo vivas las tradiciones lúdicas de la sociedad.",
        image: "/images/hero/11zon_IMG_9138.webp",
        icon: <Trophy className="text-dorado-primary" size={40} />,
        details: ["Mesa de Billar Gran Match", "Torneos de Mus y Ajedrez", "Ambiente de Distinción"]
    }
];

const realEvents = [
    {
        date: "25 JUL 2025",
        title: "La Orden de Santiago en Totana y su Huella",
        type: "Conferencia Histórica",
        location: "Sede Social - Vidal Abarca, 2"
    },
    {
        date: "29 NOV 2025",
        title: "108º Aniversario de la Sociedad",
        type: "Gala Conmemorativa",
        location: "Salón Modernista"
    },
    {
        date: "MENSUAL",
        title: "Tertulias 'Totana Cultural'",
        type: "Ciclo de Conferencias",
        location: "Biblioteca"
    }
];

export default function CulturaPage() {
    const containerRef = useRef(null);
    const ease = [0.25, 0.1, 0.25, 1.0] as const;

    return (
        <main ref={containerRef} className="bg-black-primary text-crema min-h-screen overflow-x-hidden">
            <Navbar />

            {/* Hero Editorial - Real Context */}
            <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black-primary/40 via-black-primary/80 to-black-primary z-10" />
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 2.5, ease }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/images/hero/11zon_IMG_9146.webp"
                            alt="Actividad cultural en Totana"
                            fill
                            priority
                            sizes="100vw"
                            quality={72}
                            className="object-cover grayscale"
                        />
                    </motion.div>
                </div>

                <div className="relative z-20 text-center space-y-8 md:space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease }}
                        className="space-y-4"
                    >
                        <span className="text-dorado-primary text-[11px] sm:text-sm uppercase tracking-[0.35em] sm:tracking-[0.8em] font-light">Asociación Cultural · Vidal Abarca, 2</span>
                        <h1 className="text-5xl sm:text-7xl md:text-[12rem] font-serif text-gold leading-none lowercase italic -tracking-[0.05em]">
                            cultura
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <p className="max-w-xl text-dorado-light/40 text-base sm:text-lg md:text-xl font-light leading-relaxed">
                            Descubra el eje cultural de Totana desde 1917. Un patrimonio vivo que late en cada rincón de nuestra sede histórica.
                        </p>
                        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-dorado-primary/0 via-dorado-primary to-dorado-primary/0 animate-pulse" />
                    </motion.div>
                </div>
            </section>

            {/* Editorial Sections Loop - Real Spaces */}
            <section className="section-visibility py-20">
                {realSpaces.map((space, idx) => (
                    <div key={space.id} className="relative min-h-[70svh] lg:min-h-[80vh] flex items-center px-4 sm:px-6 md:px-20 py-16 md:py-24 border-b border-dorado-dark/5">
                        <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center ${idx % 2 !== 0 ? 'lg:rtl' : ''}`}>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease }}
                                className="lg:col-span-7 relative group lg:ltr"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-dorado-dark/10 shadow-2xl transition-transform duration-1000">
                                    <Image
                                        src={space.image}
                                        alt={space.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 58vw"
                                        quality={72}
                                        className="object-cover grayscale opacity-60 group-hover:opacity-80 transition-all duration-1000"
                                    />
                                </div>
                                {/* Floating Detail */}
                                <div className={`absolute -bottom-6 ${idx % 2 === 0 ? '-right-6' : '-left-6'} hidden md:block z-20`}>
                                    <div className="bg-black-soft/95 backdrop-blur-xl border border-dorado-primary/20 p-6 shadow-2xl">
                                        <ul className="space-y-3">
                                            {space.details.map(detail => (
                                                <li key={detail} className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-dorado-light/60 font-medium">
                                                    <div className="w-1 h-1 rounded-full bg-dorado-primary" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2, ease }}
                                className="lg:col-span-5 space-y-8 lg:ltr"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-px bg-dorado-primary" />
                                        <span className="text-dorado-primary text-xs uppercase tracking-[0.4em] font-bold">{space.tag}</span>
                                    </div>
                                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif text-crema tracking-tight">{space.title}</h2>
                                </div>
                                <p className="text-dorado-light/50 text-base sm:text-lg md:text-xl leading-relaxed font-light font-sans">
                                    {space.description}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Real Agenda Section */}
            <section className="section-visibility py-20 md:py-32 px-4 sm:px-6 bg-black-soft/10">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <span className="text-dorado-primary text-xs uppercase tracking-[0.4em]">Citas Confirmadas 2025</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-crema italic">Agenda del Casino</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {realEvents.map((event, idx) => (
                            <motion.div
                                key={event.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 sm:p-8 rounded-2xl border border-dorado-dark/10 bg-black-primary/40 hover:border-dorado-primary/30 transition-all group"
                            >
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <Calendar size={14} className="text-dorado-primary/60" />
                                        <span className="text-dorado-primary font-mono text-sm">{event.date}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-serif text-crema group-hover:text-dorado-light transition-colors">{event.title}</h3>
                                </div>
                                <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-2">
                                    <span className="text-[10px] uppercase tracking-widest text-dorado-light/30 px-3 py-1 border border-dorado-dark/20 rounded-full">{event.type}</span>
                                    <div className="flex items-center gap-2 text-dorado-light/40 text-xs italic">
                                        <MapPin size={12} /> {event.location}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Call to Action - Real Context */}
            <section className="section-visibility py-24 md:py-40 px-4 sm:px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="text-[5rem] sm:text-[10rem] md:text-[20rem] font-serif text-dorado-primary/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none italic">
                            1917
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif text-crema relative z-10 leading-tight">
                            Vive la <span className="text-gold italic">verdad</span> de Totana
                        </h2>
                    </motion.div>

                    <p className="text-dorado-light/40 text-base sm:text-lg md:text-2xl font-light italic max-w-2xl mx-auto">
                        &ldquo;Un espacio de encuentro sociocultural en el centro de Totana, preservando nuestro patrimonio arquitectónico y humano.&rdquo;
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8">
                        <Link href="/" className="px-8 sm:px-12 py-4 sm:py-5 bg-dorado-primary text-black-primary rounded-full font-serif text-base sm:text-xl hover:bg-dorado-light transition-all hover:scale-105 shadow-[0_0_40px_rgba(201,169,98,0.2)]">
                            Descargar Estatutos
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer Minimalista */}
            <footer className="section-visibility py-14 md:py-20 border-t border-dorado-dark/5 bg-black-soft/20 text-center px-4">
                <div className="space-y-6">
                    <div className="font-serif text-xl sm:text-2xl text-dorado-light opacity-30 italic">Sociedad Gran Casino de Totana</div>
                    <div className="text-[10px] uppercase tracking-[0.5em] text-dorado-light/10" suppressHydrationWarning>
                        © {new Date().getFullYear()} – PATRIMONIO E HISTORIA · VIDAL ABARCA, 2
                    </div>
                </div>
            </footer>
        </main>
    );
}
