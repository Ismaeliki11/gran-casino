"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, FileText, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Reusable Tab Interface Component
function Tabs({ items }: { items: { label: string; icon: React.ReactNode; content: React.ReactNode }[] }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8 md:mb-12">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl transition-all duration-300 font-medium text-xs md:text-sm uppercase tracking-wide",
                            activeTab === index
                                ? "bg-dorado-primary text-black-primary shadow-lg scale-105"
                                : "bg-black-soft/40 text-dorado-light/60 hover:text-dorado-primary hover:bg-black-soft/60 border border-dorado-dark/20"
                        )}
                    >
                        {item.icon}
                        <span className="hidden md:inline">{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-black-soft/20 border border-dorado-dark/20 rounded-[2rem] p-6 md:p-10 backdrop-blur-md min-h-[400px]"
            >
                {items[activeTab].content}
            </motion.div>
        </div>
    );
}

export default function TerminosCondiciones() {
    const sections = [
        {
            label: "Objeto",
            icon: <FileText size={16} />,
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif text-crema mb-4">Finalidad de los Términos</h2>
                    <p className="text-dorado-light/70 font-light leading-relaxed text-lg">
                        El presente documento regula el uso del sitio web <strong className="text-dorado-primary">casinototana.es</strong>. La utilización del sitio web atribuye la condición de Usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
                    </p>
                    <div className="p-4 rounded-xl bg-dorado-primary/10 border border-dorado-primary/20">
                        <p className="text-sm text-dorado-claro italic">
                            Si el usuario no está de acuerdo con alguna de estas condiciones, deberá abstenerse de utilizar el sitio web.
                        </p>
                    </div>
                </div>
            )
        },
        {
            label: "Uso Correcto",
            icon: <ShieldCheck size={16} />,
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif text-crema mb-4">Obligaciones del Usuario</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4 p-4 rounded-xl bg-black-primary/20 hover:bg-black-primary/40 transition-colors border border-white/5">
                            <div className="w-2 h-2 rounded-full bg-dorado-primary mt-2 shrink-0" />
                            <p className="text-dorado-light/70 font-light">
                                <strong className="block text-white mb-1">Veracidad de la Información</strong>
                                Garantizar que los datos aportados (nombre, email) son verdaderos, exactos y actuales.
                            </p>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-xl bg-black-primary/20 hover:bg-black-primary/40 transition-colors border border-white/5">
                            <div className="w-2 h-2 rounded-full bg-dorado-primary mt-2 shrink-0" />
                            <p className="text-dorado-light/70 font-light">
                                <strong className="block text-white mb-1">Seguridad de la Cuenta</strong>
                                Custodiar diligentemente sus claves de acceso al Área de Socios y no compartirlas con terceros.
                            </p>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-xl bg-black-primary/20 hover:bg-black-primary/40 transition-colors border border-white/5">
                            <div className="w-2 h-2 rounded-full bg-dorado-primary mt-2 shrink-0" />
                            <p className="text-dorado-light/70 font-light">
                                <strong className="block text-white mb-1">Respeto</strong>
                                No utilizar el sitio para actividades ilícitas, ni difundir contenido racista, xenófobo o que atente contra los derechos humanos.
                            </p>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            label: "Área de Socios",
            icon: <UserCheck size={16} />,
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif text-crema mb-4">Condiciones Específicas: Área Privada</h2>
                    <p className="text-dorado-light/70 font-light leading-relaxed mb-6">
                        El acceso al Área de Socios está restringido exclusivamente a los miembros de la Sociedad Gran Casino de Totana al corriente de pago.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-dorado-primary/10 to-transparent border border-dorado-primary/20">
                            <h3 className="text-xl font-serif text-dorado-primary mb-3">Privilegios</h3>
                            <p className="text-sm font-light text-dorado-light/80 leading-relaxed">
                                Acceso a actas, reserva prioritaria de espacios, votaciones telemáticas y descuentos exclusivos en el Gastro Club.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
                            <h3 className="text-xl font-serif text-red-400 mb-3">Suspensión</h3>
                            <p className="text-sm font-light text-red-200/80 leading-relaxed">
                                La Sociedad se reserva el derecho de retirar el acceso en caso de impago de cuotas o incumplimiento grave de los Estatutos.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            label: "Propiedad",
            icon: <Lock size={16} />,
            content: (
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif text-crema mb-4">Derechos de Propiedad Intelectual</h2>
                    <p className="text-dorado-light/70 font-light leading-relaxed">
                        Todo el contenido de este sitio web (diseño, logotipos, textos, fotografías históricas, código fuente) es propiedad exclusiva de la <strong>Sociedad Gran Casino de Totana</strong> o de terceros que han autorizado su uso.
                    </p>
                    <p className="text-dorado-light/70 font-light leading-relaxed">
                        Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido sin la autorización previa y por escrito de la Sociedad.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20 space-y-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center p-4 rounded-full bg-dorado-primary/10 mb-4 ring-1 ring-dorado-primary/20"
                >
                    <FileText size={32} className="text-dorado-primary" />
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-serif text-gold italic">Términos y Condiciones</h1>
                <p className="text-lg md:text-xl text-dorado-light/60 font-light max-w-2xl mx-auto leading-relaxed">
                    Las reglas de juego claras son la base de la confianza. Aquí explicamos cómo funciona nuestra plataforma.
                </p>
            </div>

            {/* Tabbed Interface */}
            <Tabs items={sections} />
        </div>
    );
}
