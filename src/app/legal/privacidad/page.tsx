"use client";

import { Shield, BookOpen, User, Lock, Trash2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Reusable Section Component (internal for now, could be extracted)
function PrivacySection({ title, icon, children, isOpen, onToggle }: {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void
}) {
    return (
        <motion.div
            initial={false}
            animate={{ backgroundColor: isOpen ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0)" }}
            className="border-b border-dorado-dark/10 last:border-0 group overflow-hidden"
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-6 px-4 md:px-8 text-left hover:bg-white/5 transition-colors group-hover:text-dorado-primary"
            >
                <div className="flex items-center gap-4 md:gap-6">
                    <div className={cn(
                        "p-3 rounded-full transition-colors duration-300",
                        isOpen ? "bg-dorado-primary text-black-primary" : "bg-black-soft/40 text-dorado-dark group-hover:text-dorado-primary border border-dorado-dark/20"
                    )}>
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-serif text-crema tracking-wide transition-colors group-hover:text-white">
                            {title}
                        </h3>
                    </div>
                </div>
                <div className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-full border border-dorado-dark/20 transition-all duration-300",
                    isOpen ? "rotate-180 bg-dorado-primary text-black-primary border-dorado-primary" : "text-dorado-light/40 group-hover:border-dorado-primary/50"
                )}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>
            <motion.div
                initial="collapsed"
                animate={isOpen ? "open" : "collapsed"}
                variants={{
                    open: { height: "auto", opacity: 1, paddingBottom: 32 },
                    collapsed: { height: 0, opacity: 0, paddingBottom: 0 }
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
                <div className="px-4 md:px-8 ml-0 md:ml-20 mr-4 md:mr-8 text-dorado-light/70 font-light leading-relaxed space-y-4 text-sm md:text-base border-l border-dorado-dark/20 pl-6">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function PoliticaPrivacidad() {
    const [openSection, setOpenSection] = useState<number | null>(0);

    const toggleSection = (index: number) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
            {/* Header */}
            <div className="text-center mb-16 md:mb-24 space-y-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center p-4 rounded-full bg-dorado-primary/10 mb-4 ring-1 ring-dorado-primary/20"
                >
                    <Lock size={32} className="text-dorado-primary" />
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-serif text-gold italic">Política de Privacidad</h1>
                <p className="text-lg md:text-xl text-dorado-light/60 font-light max-w-2xl mx-auto leading-relaxed">
                    Transparencia y seguridad en el tratamiento de sus datos. Su confianza es nuestro mayor patrimonio.
                </p>
            </div>

            {/* Accordion Container */}
            <div className="border border-dorado-dark/20 rounded-[2rem] bg-black-soft/10 backdrop-blur-sm overflow-hidden shadow-2xl">

                <PrivacySection
                    title="1. ¿Quién es el Responsable?"
                    icon={<User size={20} />}
                    isOpen={openSection === 0}
                    onToggle={() => toggleSection(0)}
                >
                    <p>El responsable del tratamiento de sus datos es la <strong>Sociedad Gran Casino de Totana</strong>.</p>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li className="flex items-start gap-3">
                            <span className="text-dorado-primary min-w-[20px]">•</span>
                            <span><strong>Domicilio:</strong> Calle Vidal Abarca, 2. 30850 Totana, Murcia · España.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-dorado-primary min-w-[20px]">•</span>
                            <span><strong>Email:</strong> institucion@casinototana.es</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-dorado-primary min-w-[20px]">•</span>
                            <span><strong>Teléfono:</strong> 868 24 12 48</span>
                        </li>
                    </ul>
                </PrivacySection>

                <PrivacySection
                    title="2. ¿Para qué usamos sus datos?"
                    icon={<BookOpen size={20} />}
                    isOpen={openSection === 1}
                    onToggle={() => toggleSection(1)}
                >
                    <p className="mb-4">Tratamos la información que nos facilita con las siguientes finalidades legítimas:</p>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 rounded-xl bg-black-primary/30 border border-dorado-dark/10">
                            <h4 className="text-dorado-primary text-xs uppercase font-bold mb-2">Gestión de Socios</h4>
                            <p className="text-xs leading-relaxed">Tramitación de altas, cobro de cuotas, envío de convocatorias y gestión del acceso a las instalaciones.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-black-primary/30 border border-dorado-dark/10">
                            <h4 className="text-dorado-primary text-xs uppercase font-bold mb-2">Atención al Usuario</h4>
                            <p className="text-xs leading-relaxed">Responder a las consultas, sugerencias o solicitudes de información enviadas a través de la web.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-black-primary/30 border border-dorado-dark/10">
                            <h4 className="text-dorado-primary text-xs uppercase font-bold mb-2">Eventos y Reservas</h4>
                            <p className="text-xs leading-relaxed">Gestión de reservas en el Gastro Club o alquiler de espacios culturales.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-black-primary/30 border border-dorado-dark/10">
                            <h4 className="text-dorado-primary text-xs uppercase font-bold mb-2">Comunicaciones</h4>
                            <p className="text-xs leading-relaxed">Envío de newsletter cultural (solo con su consentimiento expreso).</p>
                        </div>
                    </div>
                </PrivacySection>

                <PrivacySection
                    title="3. ¿Por qué es legal el tratamiento?"
                    icon={<Shield size={20} />}
                    isOpen={openSection === 2}
                    onToggle={() => toggleSection(2)}
                >
                    <p>
                        La base legal para el tratamiento de sus datos es:
                    </p>
                    <ul className="mt-4 space-y-3 list-none pl-0">
                        <li className="pl-4 border-l-2 border-dorado-primary/30">
                            <strong>Consentimiento:</strong> Al marcar la casilla de aceptación en nuestros formularios.
                        </li>
                        <li className="pl-4 border-l-2 border-dorado-primary/30">
                            <strong>Ejecución de Contrato:</strong> Para la relación socio-entidad o reservas de servicios.
                        </li>
                        <li className="pl-4 border-l-2 border-dorado-primary/30">
                            <strong>Interés Legítimo:</strong> Para garantizar la seguridad de la web y responder consultas simples.
                        </li>
                    </ul>
                </PrivacySection>

                <PrivacySection
                    title="4. Destinatarios y Conservación"
                    icon={<Trash2 size={20} />}
                    isOpen={openSection === 3}
                    onToggle={() => toggleSection(3)}
                >
                    <p className="mb-4">
                        <strong>No cedemos sus datos a terceros</strong>, salvo obligación legal (Hacienda, Bancos) o proveedores de servicios necesarios (hosting, email) bajo contratos de confidencialidad.
                    </p>
                    <p>
                        Los datos se conservarán mientras se mantenga la relación o no solicite su supresión. Posteriormente, se guardarán bloqueados durante los plazos legales (generalmente 5 años).
                    </p>
                </PrivacySection>

                <PrivacySection
                    title="5. Sus Derechos (ARCO+)"
                    icon={<User size={20} />}
                    isOpen={openSection === 4}
                    onToggle={() => toggleSection(4)}
                >
                    <p className="mb-6">
                        Como titular de los datos, usted tiene el control total. Puede ejercer sus derechos gratuitamente:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {["Acceso", "Rectificación", "Supresión", "Limitación", "Oposición", "Portabilidad"].map((right) => (
                            <span key={right} className="px-3 py-1 rounded-full border border-dorado-dark/30 text-xs text-dorado-light/80 bg-black-primary/20">
                                {right}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-dorado-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm italic">Para ejercer sus derechos:</p>
                        <a
                            href="mailto:institucion@casinototana.es"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-dorado-primary text-black-primary font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors shadow-lg shadow-dorado-primary/10"
                        >
                            <Mail size={16} /> Contactar DPO
                        </a>
                    </div>
                </PrivacySection>

            </div>
        </div>
    );
}
