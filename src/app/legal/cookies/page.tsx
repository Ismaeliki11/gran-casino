"use client";

import { Cookie, Settings, ShieldCheck, Info } from "lucide-react";
import { LegalPageHeader, LegalSection } from "@/components/legal/LegalComponents"; // I need to export these from a file. I'll create `src/components/legal/LegalComponents.tsx` containing the logic.

// Wait, I created LegalComponents.tsx in the previous step but I didn't export them as named exports. Let me double check content of `src/components/legal/LegalComponents.tsx`
// Ah, the previous step created `src/components/legal/LegalComponents.tsx` but the code content was good.

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Redefining here since I can't import easily until I know the exact exports.
// Actually, it's cleaner to use the file I just created. 
// Let's assume the previous step worked and exports `LegalSection` and `LegalPageHeader`.

export default function PoliticaCookies() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
            {/* Intro Header */}
            <div className="text-center mb-16 space-y-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center p-4 rounded-full bg-dorado-primary/10 mb-4"
                >
                    <Cookie size={32} className="text-dorado-primary" />
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-serif text-gold italic">Política de Cookies</h1>
                <p className="text-lg md:text-xl text-dorado-light/60 font-light max-w-2xl mx-auto leading-relaxed">
                    Utilizamos cookies para garantizar que disfrute de una experiencia de navegación premium y segura en nuestro portal digital.
                </p>
            </div>

            {/* Quick Summary Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-dorado-primary/5 border border-dorado-primary/20 rounded-2xl p-6 md:p-8 mb-12 backdrop-blur-sm"
            >
                <div className="flex items-start gap-4">
                    <Info className="text-dorado-primary shrink-0 mt-1" />
                    <div>
                        <h3 className="text-dorado-primary font-bold uppercase tracking-wider text-sm mb-2">Resumen Rápido</h3>
                        <p className="text-dorado-light/80 text-sm leading-relaxed">
                            Este sitio web utiliza cookies propias y de terceros. Las cookies <strong className="text-crema">técnicas</strong> son esenciales para que la web funcione (reservas, área de socios). Las cookies de <strong className="text-crema">análisis</strong> nos ayudan a mejorar el contenido. Usted tiene el control total para aceptar o rechazar las que no sean estrictamente necesarias.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Interactive Sections */}
            <div className="space-y-4">
                {/* Section 1: What are cookies */}
                <div className="border border-dorado-dark/20 rounded-2xl bg-black-soft/20 overflow-hidden group hover:border-dorado-primary/30 transition-all duration-300">
                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-dorado-dark/10 text-dorado-primary">
                                <Info size={20} />
                            </div>
                            <h2 className="text-xl md:text-2xl font-serif text-crema">¿Qué son las Cookies?</h2>
                        </div>
                        <p className="text-dorado-light/60 font-light leading-relaxed">
                            Son pequeños archivos de texto que se descargan en su dispositivo al visitar una web. No son virus ni malware. Su función es recordar sus preferencias (como el idioma o su sesión de socio) y ayudarnos a entender cómo interactúa con nuestro contenido para mejorarlo.
                        </p>
                    </div>
                </div>

                {/* Section 2: Types of Cookies */}
                <div className="border border-dorado-dark/20 rounded-2xl bg-black-soft/20 overflow-hidden group hover:border-dorado-primary/30 transition-all duration-300">
                    <div className="p-6 md:p-8 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-dorado-dark/10 text-dorado-primary">
                                <Settings size={20} />
                            </div>
                            <h2 className="text-xl md:text-2xl font-serif text-crema">Tipos de Cookies que Usamos</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-5 rounded-xl bg-black-primary/40 border border-dorado-dark/10">
                                <h3 className="text-dorado-primary font-bold uppercase tracking-wider text-xs mb-3">Estrictamente Necesarias</h3>
                                <p className="text-sm text-dorado-light/60 font-light leading-relaxed">
                                    Imprescindibles para navegar. Permiten funciones básicas como la seguridad, la gestión de la red y la accesibilidad. <span className="text-dorado-light/40 italic block mt-2">Ejemplo: Mantener su sesión activa en el Área de Socios.</span>
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-black-primary/40 border border-dorado-dark/10">
                                <h3 className="text-dorado-primary font-bold uppercase tracking-wider text-xs mb-3">Analíticas y Rendimiento</h3>
                                <p className="text-sm text-dorado-light/60 font-light leading-relaxed">
                                    Nos ayudan a entender cómo los visitantes interactúan con la web (qué páginas visitan más, tiempo de permanencia). La información es anónima. <span className="text-dorado-light/40 italic block mt-2">Ejemplo: Google Analytics (estadísticas de visitas).</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Management */}
                <div className="border border-dorado-dark/20 rounded-2xl bg-black-soft/20 overflow-hidden group hover:border-dorado-primary/30 transition-all duration-300">
                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-dorado-dark/10 text-dorado-primary">
                                <ShieldCheck size={20} />
                            </div>
                            <h2 className="text-xl md:text-2xl font-serif text-crema">Su Control y Privacidad</h2>
                        </div>
                        <p className="text-dorado-light/60 font-light leading-relaxed mb-6">
                            Respetamos su privacidad. Puede cambiar sus preferencias de cookies en cualquier momento desde la configuración de su navegador. Tenga en cuenta que bloquear ciertas cookies puede afectar a su experiencia (por ejemplo, tener que iniciar sesión cada vez que visite la web).
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-dorado-primary hover:text-white border border-dorado-primary/30 py-2 px-4 rounded-full transition-all">Google Chrome</a>
                            <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-dorado-primary hover:text-white border border-dorado-primary/30 py-2 px-4 rounded-full transition-all">Mozilla Firefox</a>
                            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-dorado-primary hover:text-white border border-dorado-primary/30 py-2 px-4 rounded-full transition-all">Safari</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
