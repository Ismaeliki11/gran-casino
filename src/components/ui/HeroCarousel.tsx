"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

const SLIDES = [
    {
        url: "/images/hero/IMG_9111.webp",
        title: "Patrimonio Histórico",
        description: "Un legado arquitectónico único en el corazón de Totana."
    },
    {
        url: "/images/hero/IMG_9120.webp",
        title: "Elegancia Centenaria",
        description: "Salones que narran la historia viva de nuestra sociedad."
    },
    {
        url: "/images/hero/11zon_IMG_9124.webp",
        title: "Cultura y Encuentro",
        description: "El punto de encuentro preferido para la vida cultural y social."
    },
    {
        url: "/images/hero/11zon_IMG_9133.webp",
        title: "Distinción y Tradición",
        description: "Compromiso con la excelencia y la conservación del patrimonio."
    },
    {
        url: "/images/hero/11zon_IMG_9138.webp",
        title: "Espacios Únicos",
        description: "Ambientes diseñados para la reflexión y la conversación."
    },
    {
        url: "/images/hero/11zon_IMG_9146.webp",
        title: "Vida Social",
        description: "Donde las generaciones se unen en torno a la cultura."
    }
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
        }, 8000); // 8 segundos para apreciar la foto y el texto
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const nextIndex = (currentIndex + 1) % SLIDES.length;
        const nextSlide = new window.Image();
        nextSlide.src = SLIDES[nextIndex].url;
    }, [currentIndex]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.06 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
                    transition={{ duration: reduceMotion ? 0.7 : 1.8, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black-primary/20 z-10" />
                    <Image
                        src={SLIDES[currentIndex].url}
                        alt={SLIDES[currentIndex].title}
                        fill
                        priority={currentIndex === 0}
                        sizes="100vw"
                        quality={78}
                        className="object-cover contrast-[1.05]"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Text Overlay for Carousel */}
            <div className="absolute bottom-20 sm:bottom-16 left-4 sm:left-6 md:left-24 right-16 md:right-auto z-30 max-w-[75%] sm:max-w-lg hidden sm:block">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`text-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <span className="text-dorado-primary uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] md:text-xs block mb-2">
                            Gran Casino de Totana
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-crema mb-2 leading-tight">
                            {SLIDES[currentIndex].title}
                        </h3>
                        <p className="text-dorado-light/60 text-xs sm:text-sm md:text-base font-light italic">
                            {SLIDES[currentIndex].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 sm:bottom-10 right-4 sm:right-6 md:right-24 z-30 flex gap-2">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Ir a diapositiva ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1 transition-all duration-500 ${currentIndex === index ? "w-8 bg-dorado-primary" : "w-4 bg-dorado-dark/30"
                            }`}
                    />
                ))}
            </div>

            {/* Premium Vignetado y Gradientes - Softer to let images breathe */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-transparent to-black-primary/60 z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black-primary/20 via-transparent to-black-primary/20 z-20" />

            {/* Reflejos de luz sutiles */}
            <div className="absolute inset-0 opacity-30 z-20 pointer-events-none">
                <div className="absolute top-[-8%] left-[-8%] w-[42%] h-[42%] bg-dorado-primary/10 blur-[80px]" />
                <div className="absolute bottom-[-8%] right-[-8%] w-[42%] h-[42%] bg-dorado-dark/10 blur-[80px]" />
            </div>
        </div>
    );
}
