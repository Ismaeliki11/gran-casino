"use client";

import { motion } from "framer-motion";
import { User, Copy, Info } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Reusable Data Row Component (List Style)
function DataRow({ label, value }: { label: string; value: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            onClick={handleCopy}
            className="group relative p-5 md:p-6 hover:bg-white/5 transition-colors cursor-pointer flex justify-between items-start gap-6 bg-black-soft/20"
        >
            <div className="space-y-2 flex-1 min-w-0">
                <p className="text-xs uppercase tracking-[0.2em] text-dorado-primary/60 font-medium">
                    {label}
                </p>
                <p className="text-sm md:text-base text-crema font-light break-words leading-relaxed">
                    {value}
                </p>
            </div>
            <div className="shrink-0 pt-1 text-dorado-dark/30 group-hover:text-dorado-primary transition-colors">
                {copied ? <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Copiado</span> : <Copy size={18} />}
            </div>
        </div>
    );
}

export default function AvisoLegal() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32 md:py-20 relative z-10">
            {/* Header */}
            <div className="text-center mb-16 md:mb-24 space-y-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center p-4 rounded-full bg-dorado-primary/10 mb-4 ring-1 ring-dorado-primary/20"
                >
                    <Info size={32} className="text-dorado-primary" />
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-serif text-gold">Aviso Legal</h1>
                <p className="text-lg md:text-xl text-dorado-light/60 font-light max-w-2xl mx-auto leading-relaxed">
                    Información legal sobre la titularidad y condiciones de uso de este portal web, en cumplimiento de la ley LSSI-CE.
                </p>
            </div>

            <div className="border border-dorado-dark/20 rounded-[2.5rem] bg-black-soft/10 backdrop-blur-md overflow-hidden shadow-2xl p-5 md:p-12 space-y-12">

                {/* 1. Datos Identificativos (The Core) */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-dorado-dark/10 pb-4">
                        <div className="p-2 rounded-lg bg-dorado-primary/10 text-dorado-primary">
                            <User size={24} />
                        </div>
                        <h2 className="text-2xl font-serif text-crema">Datos del Titular</h2>
                    </div>

                    {/* Unified Data Card Layout */}
                    <div className="rounded-3xl border border-dorado-dark/20 overflow-hidden divide-y divide-dorado-dark/10">
                        <DataRow label="Razón Social" value="Sociedad Gran Casino de Totana" />
                        <DataRow label="CIF / NIF" value="[PENDIENTE DE INSERTAR]" />
                        <DataRow label="Registro" value="[PENDIENTE DE INSERTAR DATOS RELEVANTES DEL REGISTRO]" />
                        <DataRow label="Dirección Social" value="Calle Vidal Abarca, 2. 30850 Totana, Murcia" />
                        <DataRow label="Email Oficial" value="institucion@casinototana.es" />
                        <DataRow label="Teléfono" value="868 24 12 48" />
                    </div>

                    <p className="text-xs text-dorado-light/40 italic text-center mt-4">
                        * Pulse sobre cualquier fila para copiar el dato.
                    </p>
                </div>

                {/* 2. Condiciones de Uso */}
                <div className="space-y-6 pt-8 border-t border-dorado-dark/10">
                    <h3 className="text-xl font-serif text-dorado-primary mb-4">Condiciones Generales de Uso</h3>
                    <p className="text-dorado-light/60 font-light leading-relaxed text-sm md:text-base">
                        El acceso y/o uso de este portal atribuye la condición de <strong>USUARIO</strong>, que acepta las Condiciones Generales aquí reflejadas. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios (como chat, foros o grupos de noticias) que la Sociedad ofrece a través de su portal y con carácter enunciativo pero no limitativo, a no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-dorado-primary/20 transition-colors">
                            <h4 className="text-dorado-claro font-bold text-sm mb-2">Propiedad Intelectual</h4>
                            <p className="text-xs text-dorado-light/50 leading-relaxed">
                                Todos los contenidos (textos, imágenes, marcas) son propiedad de la Sociedad Gran Casino de Totana. Queda prohibida su reproducción sin autorización expresa.
                            </p>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-dorado-primary/20 transition-colors">
                            <h4 className="text-dorado-claro font-bold text-sm mb-2">Exclusión de Garantías</h4>
                            <p className="text-xs text-dorado-light/50 leading-relaxed">
                                La Sociedad no se hace responsable de los posibles errores de seguridad o daños en el sistema informático del usuario, ni de los contenidos de enlaces externos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Jurisdicción */}
                <div className="pt-8 border-t border-dorado-dark/10 text-center">
                    <p className="text-sm text-dorado-light/60 font-light max-w-lg mx-auto">
                        Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web, será de aplicación la <strong>legislación española</strong>, siendo competentes los Juzgados y Tribunales de Totana (Murcia).
                    </p>
                </div>

            </div>
        </div>
    );
}
