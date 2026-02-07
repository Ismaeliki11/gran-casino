"use client";

import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, Download, Send, Users, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { PremiumButton } from "@/components/ui/PremiumElements";
import CasinoLogo from "@/components/ui/CasinoLogo";

export default function SociosPage() {
    const ease = [0.25, 0.1, 0.25, 1.0] as const;

    return (
        <main className="bg-black-primary text-crema min-h-screen pb-16 md:pb-20 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-40 pb-14 md:pb-24 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease }}
                    >
                        <span className="text-dorado-primary uppercase tracking-[0.3em] sm:tracking-[0.6em] text-[10px] font-bold block mb-4">Membresía Institucional</span>
                        <h1 className="fluid-h1 font-serif text-gold leading-tight">Solicitud de Admisión</h1>
                        <p className="mt-6 sm:mt-10 text-dorado-light/40 text-base sm:text-lg md:text-xl font-light italic leading-relaxed max-w-2xl mx-auto">
                            &ldquo;Pertenecer a la Sociedad es hoy un acto de mecenazgo: apoyar la cultura viva y preservar un patrimonio que late en Totana desde 1917.&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1.5 }}
                        className="flex justify-center mt-12"
                    >
                        <a
                            href="/docs/formulario-alta-socio.pdf"
                            download="Formulario Alta Socio - Gran Casino Totana.pdf"
                            className="text-[10px] uppercase tracking-[0.25em] text-dorado-primary/40 hover:text-dorado-primary/80 transition-all duration-500 flex items-center gap-3 group px-6 py-3 rounded-full border border-dorado-primary/10 hover:border-dorado-primary/20 bg-dorado-primary/5"
                        >
                            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                            ¿Prefieres el formato físico? Descarga el PDF
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Main Form Section */}
            <section className="section-visibility fluid-px">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1.2, ease }}
                    className="max-w-4xl mx-auto bg-black-soft/30 border border-dorado-dark/10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
                >
                    {/* Institutional Header within Form */}
                    <div className="p-8 sm:p-10 border-b border-dorado-dark/10 bg-gradient-to-r from-dorado-primary/5 to-transparent flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                        <div className="flex items-center gap-5">
                            <CasinoLogo size={56} />
                            <div className="space-y-1">
                                <h2 className="text-2xl sm:text-3xl font-serif text-crema uppercase tracking-tight">Gran Casino</h2>
                                <p className="text-[9px] uppercase tracking-[0.4em] text-dorado-primary/60 font-bold">Totana · Sede Social</p>
                            </div>
                        </div>
                        <div className="text-center md:text-right hidden sm:block">
                            <p className="text-[10px] uppercase tracking-widest text-dorado-light/20 font-bold">Documento Oficial de Ingreso</p>
                            <p className="text-dorado-primary font-mono text-xs mt-1">REF: ADM-2025-TC</p>
                        </div>
                    </div>

                    <form className="p-6 sm:p-10 md:p-16 space-y-12 md:space-y-20">

                        {/* 1. Identification */}
                        <div className="space-y-8 sm:space-y-12">
                            <div className="flex items-center gap-4 border-b border-dorado-dark/10 pb-5">
                                <div className="p-2 rounded-xl bg-dorado-primary/10">
                                    <UserPlus size={20} className="text-dorado-primary" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-serif text-dorado-light italic">Datos del Solicitante</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                                <div className="md:col-span-8 space-y-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary/60 ml-1 font-bold">Nombre y Apellidos (D/Dª)</label>
                                    <input type="text" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 focus:border-dorado-primary/60 outline-none transition-all text-crema placeholder:text-dorado-light/10" placeholder="Ej: Juan Pérez Martínez" />
                                </div>
                                <div className="md:col-span-4 space-y-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary/60 ml-1 font-bold">D.N.I. nº</label>
                                    <input type="text" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 focus:border-dorado-primary/60 outline-none transition-all text-crema" placeholder="00000000X" />
                                </div>

                                <div className="md:col-span-12 space-y-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary/60 ml-1 font-bold">Dirección Completa</label>
                                    <input type="text" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 focus:border-dorado-primary/60 outline-none transition-all text-crema" placeholder="Calle, número, piso, puerta" />
                                </div>

                                <div className="md:col-span-5 space-y-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary/60 ml-1 font-bold">Ciudad</label>
                                    <input type="text" defaultValue="Totana" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 focus:border-dorado-primary/60 outline-none transition-all text-crema" />
                                </div>
                                <div className="md:col-span-3 space-y-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary/60 ml-1 font-bold">C.P.</label>
                                    <input type="text" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 focus:border-dorado-primary/60 outline-none transition-all text-crema" placeholder="30850" />
                                </div>
                                <div className="md:col-span-4 space-y-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary/60 ml-1 font-bold">Provincia</label>
                                    <input type="text" defaultValue="Murcia" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 focus:border-dorado-primary/60 outline-none transition-all text-crema" />
                                </div>

                                <div className="md:col-span-6 space-y-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary/60 ml-1 font-bold">Teléfono de Contacto</label>
                                    <input type="tel" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 focus:border-dorado-primary/60 outline-none transition-all text-crema" placeholder="+34 000 000 000" />
                                </div>
                                <div className="md:col-span-6 space-y-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary/60 ml-1 font-bold">Email Institucional</label>
                                    <input type="email" className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 focus:border-dorado-primary/60 outline-none transition-all text-crema" placeholder="ejemplo@correo.com" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Endorsement (Proponentes) */}
                        <div className="space-y-8 sm:space-y-12">
                            <div className="flex items-center gap-4 border-b border-dorado-dark/10 pb-5">
                                <div className="p-2 rounded-xl bg-dorado-primary/10">
                                    <Users size={20} className="text-dorado-primary" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-serif text-dorado-light italic">Proponen su admisión</h3>
                            </div>
                            <p className="text-sm text-dorado-light/30 italic -mt-8 max-w-2xl">Según estatutos vigentes, se requiere la presentación formal por parte de dos socios de pleno derecho de la institución.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                {/* Proponente A */}
                                <div className="p-8 rounded-[2rem] border border-dorado-dark/10 bg-black-primary/20 space-y-8 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Users size={80} />
                                    </div>
                                    <div className="text-[10px] text-dorado-primary uppercase tracking-[0.25em] font-bold flex items-center gap-3">
                                        <div className="w-6 h-px bg-dorado-primary" />
                                        Socio Proponente A
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] uppercase tracking-widest text-dorado-light/20 font-bold ml-1">Nombre Completo</label>
                                            <input type="text" className="w-full bg-transparent border-b border-dorado-dark/30 py-3 outline-none focus:border-dorado-primary transition-all text-crema font-serif text-lg" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] uppercase tracking-widest text-dorado-light/20 font-bold ml-1">Nº de Socio</label>
                                            <input type="text" className="w-full bg-transparent border-b border-dorado-dark/30 py-3 outline-none focus:border-dorado-primary transition-all text-crema font-mono" />
                                        </div>
                                    </div>
                                </div>
                                {/* Proponente B */}
                                <div className="p-8 rounded-[2rem] border border-dorado-dark/10 bg-black-primary/20 space-y-8 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Users size={80} />
                                    </div>
                                    <div className="text-[10px] text-dorado-primary uppercase tracking-[0.25em] font-bold flex items-center gap-3">
                                        <div className="w-6 h-px bg-dorado-primary" />
                                        Socio Proponente B
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] uppercase tracking-widest text-dorado-light/20 font-bold ml-1">Nombre Completo</label>
                                            <input type="text" className="w-full bg-transparent border-b border-dorado-dark/30 py-3 outline-none focus:border-dorado-primary transition-all text-crema font-serif text-lg" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] uppercase tracking-widest text-dorado-light/20 font-bold ml-1">Nº de Socio</label>
                                            <input type="text" className="w-full bg-transparent border-b border-dorado-dark/30 py-3 outline-none focus:border-dorado-primary transition-all text-crema font-mono" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Confirmation & Signature */}
                        <div className="space-y-8 bg-dorado-primary/[0.03] p-8 sm:p-10 rounded-[2rem] border border-dorado-primary/10 shadow-inner">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="p-3 rounded-2xl bg-dorado-primary/10 h-fit">
                                    <ShieldCheck className="text-dorado-primary" size={28} />
                                </div>
                                <div className="space-y-6">
                                    <p className="text-base md:text-lg text-crema/80 leading-relaxed font-light">
                                        Solicito formalmente mi admisión como socio/a de la Excelentísima Sociedad GRAN CASINO DE TOTANA, manifestando hallarme plenamente enterado/a de los Estatutos vigentes y dispuesto/a a cumplir con honor las obligaciones y tradiciones que en ellos se consignan.
                                    </p>
                                    <label className="flex items-center gap-4 cursor-pointer group select-none">
                                        <div className="relative flex items-center justify-center">
                                            <input type="checkbox" className="peer w-6 h-6 rounded-lg border-2 border-dorado-dark/40 bg-black-primary appearance-none checked:bg-dorado-primary checked:border-dorado-primary transition-all cursor-pointer" />
                                            <ShieldCheck size={14} className="absolute text-black-primary opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                                        </div>
                                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.1em] text-dorado-light/40 group-hover:text-dorado-primary transition-colors font-bold">Acepto los términos y condiciones estatutarias de la sociedad</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Submit Actions */}
                        <div className="pt-8 flex flex-col md:flex-row gap-8 justify-between items-center bg-black-primary/20 -mx-6 sm:-mx-10 md:-mx-16 p-8 sm:p-10 md:p-12 border-t border-dorado-dark/10">
                            <div className="text-dorado-light/30 text-[10px] uppercase tracking-[0.2em] text-center md:text-left font-bold" suppressHydrationWarning>
                                <MapPin size={10} className="inline mr-2 text-dorado-primary/40 -mt-0.5" />
                                Sede Social, Totana · {new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Madrid" }).format(new Date())}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <a
                                    href="/docs/formulario-alta-socio.pdf"
                                    download="Formulario Alta Socio - Gran Casino Totana.pdf"
                                    className="w-full sm:w-auto"
                                >
                                    <PremiumButton variant="outline" type="button" className="w-full gap-3 py-5 px-8">
                                        <Download size={18} /> Descargar PDF
                                    </PremiumButton>
                                </a>
                                <PremiumButton variant="primary" type="submit" className="w-full sm:w-auto gap-3 px-14 py-5 shadow-2xl">
                                    Enviar Solicitud <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </PremiumButton>
                            </div>
                        </div>
                    </form>

                    {/* Legal Footer */}
                    <div className="p-8 sm:p-10 bg-black-primary/60 border-t border-dorado-dark/10 space-y-6">
                        <p className="text-[9px] text-dorado-light/20 leading-relaxed text-center uppercase tracking-[0.15em] font-medium max-w-3xl mx-auto">
                            Los datos personales recogidos pasarán a formar parte de un fichero automatizado titularidad exclusiva de la Sociedad Gran Casino de Totana, tratados bajo estrictos criterios de confidencialidad y de acuerdo con la legislación vigente (RGPD/LOPD-GDD).
                        </p>
                        <div className="text-center font-serif text-dorado-primary/60 italic text-base sm:text-lg">
                            Dpto. de Admisiones · Junta Directiva
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer Info */}
            <footer className="section-visibility fluid-py text-center space-y-8 px-4 bg-black-primary">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-dorado-primary to-transparent opacity-30" />
                    <span className="text-[10px] uppercase tracking-[0.5em] text-dorado-light/10 font-bold">Sociedad Gran Casino de Totana</span>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-dorado-light/20 leading-loose max-w-xl mx-auto italic">
                        Calle Vidal Abarca, 2 · 30850 Totana (Murcia)<br />
                        Tlf: 868 24 12 48 · institucion@casinototana.es
                    </p>
                    <div className="h-px w-12 bg-dorado-primary/10 mt-4" />
                </div>
            </footer>
        </main>

    );
}
