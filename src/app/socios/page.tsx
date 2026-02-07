"use client";

import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, Download, Send, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { PremiumButton } from "@/components/ui/PremiumElements";
import CasinoLogo from "@/components/ui/CasinoLogo";

export default function SociosPage() {
    const ease = [0.25, 0.1, 0.25, 1.0] as const;

    return (
        <main className="bg-black-primary text-crema min-h-screen pb-16 md:pb-20 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease }}
                    >
                        <span className="text-dorado-primary uppercase tracking-[0.3em] sm:tracking-[0.6em] text-[10px] font-bold block mb-4">Membresía Institucional</span>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-gold leading-tight">Solicitud de Admisión</h1>
                        <p className="mt-6 sm:mt-8 text-dorado-light/40 text-base sm:text-lg md:text-xl font-light italic leading-relaxed">
                            &ldquo;Pertenecer a la Sociedad es abrazar un legado de distinción, cultura y convivencia que late en Totana desde hace más de un siglo.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Form Section */}
            <section className="section-visibility px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1.2, ease }}
                    className="max-w-4xl mx-auto bg-black-soft/30 border border-dorado-dark/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden"
                >
                    {/* Institutional Header within Form */}
                    <div className="p-6 sm:p-10 border-b border-dorado-dark/10 bg-gradient-to-r from-dorado-primary/5 to-transparent flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                        <div className="flex items-center gap-4">
                            <CasinoLogo size={48} />
                            <div className="space-y-1">
                                <h2 className="text-2xl font-serif text-crema uppercase tracking-tight">Gran Casino</h2>
                                <p className="text-[9px] uppercase tracking-[0.4em] text-dorado-primary/60">Totana · Sede Social</p>
                            </div>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-[10px] uppercase tracking-widest text-dorado-light/20">Documento Oficial de Ingreso</p>
                            <p className="text-dorado-primary font-mono text-xs">REF: ADM-2025-TC</p>
                        </div>
                    </div>

                    <form className="p-5 sm:p-8 md:p-12 space-y-10 md:space-y-16">

                        {/* 1. Identification */}
                        <div className="space-y-8 sm:space-y-10">
                            <div className="flex items-center gap-3 border-b border-dorado-dark/10 pb-4">
                                <UserPlus size={20} className="text-dorado-primary" />
                                <h3 className="text-xl font-serif text-dorado-light italic">Datos del Solicitante</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
                                <div className="md:col-span-8 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-dorado-primary/60 ml-1">Nombre y Apellidos (D/Dª)</label>
                                    <input type="text" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-5 py-4 focus:border-dorado-primary/60 outline-none transition-all" />
                                </div>
                                <div className="md:col-span-4 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-dorado-primary/60 ml-1">D.N.I. nº</label>
                                    <input type="text" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-5 py-4 focus:border-dorado-primary/60 outline-none transition-all" />
                                </div>

                                <div className="md:col-span-12 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-dorado-primary/60 ml-1">Dirección Completa</label>
                                    <input type="text" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-5 py-4 focus:border-dorado-primary/60 outline-none transition-all" />
                                </div>

                                <div className="md:col-span-5 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-dorado-primary/60 ml-1">Ciudad</label>
                                    <input type="text" defaultValue="Totana" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-5 py-4 focus:border-dorado-primary/60 outline-none transition-all" />
                                </div>
                                <div className="md:col-span-3 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-dorado-primary/60 ml-1">C.P.</label>
                                    <input type="text" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-5 py-4 focus:border-dorado-primary/60 outline-none transition-all" />
                                </div>
                                <div className="md:col-span-4 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-dorado-primary/60 ml-1">Provincia</label>
                                    <input type="text" defaultValue="Murcia" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-5 py-4 focus:border-dorado-primary/60 outline-none transition-all" />
                                </div>

                                <div className="md:col-span-6 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-dorado-primary/60 ml-1">Teléfono de Contacto</label>
                                    <input type="tel" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-5 py-4 focus:border-dorado-primary/60 outline-none transition-all" />
                                </div>
                                <div className="md:col-span-6 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-dorado-primary/60 ml-1">Email Institucional</label>
                                    <input type="email" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-5 py-4 focus:border-dorado-primary/60 outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Endorsement (Proponentes) */}
                        <div className="space-y-8 sm:space-y-10">
                            <div className="flex items-center gap-3 border-b border-dorado-dark/10 pb-4">
                                <Users size={20} className="text-dorado-primary" />
                                <h3 className="text-xl font-serif text-dorado-light italic">Proponen su admisión los socios</h3>
                            </div>
                            <p className="text-xs text-dorado-light/30 italic -mt-6">Según estatutos vigentes, se requiere la presentación por parte de dos socios de pleno derecho.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
                                {/* Proponente A */}
                                <div className="p-6 rounded-2xl border border-dorado-dark/10 bg-black-primary/20 space-y-6">
                                    <div className="text-[10px] text-dorado-primary uppercase tracking-widest font-bold">Socio Proponente A</div>
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-[9px] uppercase text-dorado-light/20">Nombre Completo</label>
                                            <input type="text" className="w-full bg-transparent border-b border-dorado-dark/20 py-2 outline-none focus:border-dorado-primary transition-all text-crema" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[9px] uppercase text-dorado-light/20">Nº de Socio</label>
                                            <input type="text" className="w-full bg-transparent border-b border-dorado-dark/20 py-2 outline-none focus:border-dorado-primary transition-all text-crema" />
                                        </div>
                                    </div>
                                </div>
                                {/* Proponente B */}
                                <div className="p-6 rounded-2xl border border-dorado-dark/10 bg-black-primary/20 space-y-6">
                                    <div className="text-[10px] text-dorado-primary uppercase tracking-widest font-bold">Socio Proponente B</div>
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-[9px] uppercase text-dorado-light/20">Nombre Completo</label>
                                            <input type="text" className="w-full bg-transparent border-b border-dorado-dark/20 py-2 outline-none focus:border-dorado-primary transition-all text-crema" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[9px] uppercase text-dorado-light/20">Nº de Socio</label>
                                            <input type="text" className="w-full bg-transparent border-b border-dorado-dark/20 py-2 outline-none focus:border-dorado-primary transition-all text-crema" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Confirmation & Signature */}
                        <div className="space-y-8 bg-dorado-primary/[0.02] p-5 sm:p-8 rounded-3xl border border-dorado-primary/10">
                            <div className="flex gap-4">
                                <ShieldCheck className="text-dorado-primary shrink-0" size={24} />
                                <div className="space-y-4">
                                    <p className="text-sm md:text-base text-crema/80 leading-relaxed">
                                        Solicito mi admisión como socio/a de la Sociedad GRAN CASINO DE TOTANA, manifestando hallarme enterado/a de los Estatutos de la Sociedad, y dispuesto/a a cumplir las obligaciones que en los mismos se consignan.
                                    </p>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="w-5 h-5 rounded border-dorado-dark/40 bg-black-primary accent-dorado-primary" />
                                        <span className="text-xs uppercase tracking-widest text-dorado-light/40 group-hover:text-dorado-primary transition-colors">Acepto los términos y condiciones estatutarias</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Submit Actions */}
                        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row gap-5 sm:gap-6 justify-between items-center">
                            <div className="text-dorado-light/20 text-[10px] uppercase tracking-widest text-center md:text-left" suppressHydrationWarning>
                                Totana, a {new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Madrid" }).format(new Date())}
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <PremiumButton variant="outline" className="flex-1 md:flex-initial gap-2">
                                    <Download size={16} /> Descargar PDF
                                </PremiumButton>
                                <PremiumButton variant="primary" className="flex-1 md:flex-initial gap-2 px-12">
                                    Enviar Solicitud <Send size={16} />
                                </PremiumButton>
                            </div>
                        </div>
                    </form>

                    {/* Legal Footer */}
                    <div className="p-5 sm:p-8 bg-black-primary/40 border-t border-dorado-dark/10 space-y-4">
                        <p className="text-[9px] text-dorado-light/20 leading-relaxed text-center uppercase tracking-widest">
                            Los datos personales recogidos pasarán a formar parte de un fichero automatizado titularidad de la Sociedad Gran Casino de Totana, tratados de acuerdo con la legislación vigente en materia de protección de datos (LOPD-GDD). Para ejercer sus derechos de acceso o rectificación, diríjase a la Sede Social.
                        </p>
                        <div className="text-center font-serif text-dorado-primary italic text-sm">
                            Sr. Presidente de la Sociedad Gran Casino de Totana
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer Info */}
            <footer className="section-visibility mt-14 md:mt-20 py-12 text-center space-y-6 px-4">
                <div className="flex flex-col items-center gap-2">
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-dorado-primary to-transparent opacity-20" />
                    <span className="text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.5em] text-dorado-light/10">Sociedad Gran Casino de Totana</span>
                    <p className="text-[8px] uppercase tracking-widest text-dorado-light/20">Calle Vidal Abarca, 2 · Totana (Murcia) · grancasinototana@grancasinototana.es</p>
                </div>
            </footer>
        </main>
    );
}
