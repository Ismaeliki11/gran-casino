"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Send } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { PremiumButton } from "@/components/ui/PremiumElements";
import Image from "next/image";

export default function ContactoPage() {
    const ease = [0.25, 0.1, 0.25, 1.0] as const;

    return (
        <main className="bg-black-primary text-crema min-h-screen overflow-x-hidden">
            <Navbar />

            {/* Hero Editorial */}
            <section className="relative min-h-[100svh] flex flex-col items-center justify-center fluid-px pt-24 pb-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black-primary/40 via-black-primary/80 to-black-primary z-10" />
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.5 }}
                        transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/images/hero/11zon_IMG_9138.webp"
                            alt="Vista desde el Gran Casino"
                            fill
                            priority
                            sizes="100vw"
                            quality={85}
                            className="object-cover img-premium"
                        />
                    </motion.div>
                </div>

                <div className="relative z-20 text-center space-y-8 md:space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="space-y-6"
                    >
                        <span className="text-dorado-primary text-[10px] sm:text-sm uppercase tracking-[0.35em] sm:tracking-[0.8em] font-bold">Asociación Cultural · Contacto Institucional</span>
                        <h1 className="fluid-h1 font-serif text-gold leading-none lowercase italic -tracking-[0.05em]">
                            distinción
                        </h1>
                        <p className="max-w-xl text-dorado-light/40 text-base sm:text-lg md:text-xl font-light leading-relaxed px-4 mx-auto italic">
                            &ldquo;Para cualquier consulta institucional, solicitud de eventos o gestión de socios, estamos a su entera disposición en el centro histórico de Totana.&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-dorado-primary/0 via-dorado-primary to-dorado-primary/0 animate-pulse" />
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Grid */}
            <section className="section-visibility fluid-py fluid-px">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Information Side (Left) */}
                    <div className="lg:col-span-5 space-y-8 md:space-y-12">
                        <div className="grid grid-cols-1 gap-6 sm:gap-8">
                            {/* Address */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="group p-6 sm:p-8 rounded-[2rem] border border-dorado-dark/10 bg-black-soft/20 backdrop-blur-sm hover:border-dorado-primary/30 transition-all duration-500 shadow-xl"
                            >
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <div className="p-4 rounded-2xl bg-black-primary border border-dorado-dark/20 group-hover:bg-dorado-primary group-hover:border-dorado-primary transition-all duration-500 shadow-inner">
                                        <MapPin className="text-dorado-primary group-hover:text-black-primary" size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">Sede Social</h3>
                                        <p className="text-xl sm:text-2xl font-serif text-crema">Calle Vidal Abarca, 2</p>
                                        <p className="text-dorado-light/40 text-[11px] sm:text-sm uppercase tracking-wide">30850 Totana, Murcia · España</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone & Email */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="group p-6 sm:p-8 rounded-[2rem] border border-dorado-dark/10 bg-black-soft/20 backdrop-blur-sm hover:border-dorado-primary/30 transition-all duration-500 shadow-xl"
                            >
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <div className="p-4 rounded-2xl bg-black-primary border border-dorado-dark/20 group-hover:bg-dorado-primary group-hover:border-dorado-primary transition-all duration-500 shadow-inner">
                                            <Phone className="text-dorado-primary group-hover:text-black-primary" size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">Atención Directa</h3>
                                            <p className="text-xl sm:text-2xl font-serif text-crema">868 24 12 48</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <div className="p-4 rounded-2xl bg-black-primary border border-dorado-dark/20 group-hover:bg-dorado-primary group-hover:border-dorado-primary transition-all duration-500 shadow-inner">
                                            <Mail className="text-dorado-primary group-hover:text-black-primary" size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">Correo Electrónico</h3>
                                            <p className="text-lg sm:text-xl font-serif text-crema break-all">institucion@casinototana.es</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Gastro Club Special Mention */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative p-8 sm:p-10 rounded-[2.5rem] overflow-hidden border border-dorado-primary/20 bg-gradient-to-br from-black-soft to-black-primary group shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-dorado-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-dorado-primary/20 transition-all" />
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <Clock size={16} className="text-dorado-primary" />
                                        <span className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">Experiencia Gastro Club</span>
                                    </div>
                                    <h4 className="text-2xl sm:text-3xl font-serif text-crema">Restaurante & Ocio</h4>
                                    <p className="text-dorado-light/40 text-sm sm:text-base leading-relaxed font-light">
                                        Ubicado en la planta noble, el Gastro Club ofrece una propuesta culinaria que fusiona tradición y vanguardia. Ideal para comidas de negocios o celebraciones sociales.
                                    </p>
                                    <div className="flex gap-4 pt-2">
                                        <a href="#" className="p-3 border border-dorado-primary/10 rounded-xl hover:bg-dorado-primary/20 transition-all bg-black-primary/40">
                                            <Facebook size={20} className="text-dorado-light/60" />
                                        </a>
                                        <a href="#" className="p-3 border border-dorado-primary/10 rounded-xl hover:bg-dorado-primary/20 transition-all bg-black-primary/40">
                                            <Instagram size={20} className="text-dorado-light/60" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Contact Form Side (Right) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease }}
                            className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-dorado-primary/10 bg-black-soft/30 backdrop-blur-xl shadow-2xl"
                        >
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-6xl font-serif text-crema italic leading-tight">Escríbanos</h2>
                                    <p className="text-dorado-light/40 font-light text-base md:text-lg">
                                        Complete el formulario y nuestro departamento correspondiente contactará con usted en un plazo máximo de 48 horas.
                                    </p>
                                </div>

                                <form className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary font-bold ml-1">Nombre Completo</label>
                                            <input
                                                type="text"
                                                placeholder="Excmo. Sr. ..."
                                                className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 text-crema focus:border-dorado-primary/60 outline-none transition-all placeholder:text-dorado-light/10"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary font-bold ml-1">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                placeholder="su.nombre@email.com"
                                                className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 text-crema focus:border-dorado-primary/60 outline-none transition-all placeholder:text-dorado-light/10"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary font-bold ml-1">Asunto de la Consulta</label>
                                        <div className="relative">
                                            <select className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 text-crema focus:border-dorado-primary/60 outline-none transition-all appearance-none cursor-pointer">
                                                <option className="bg-black-soft">Altas de Nuevos Socios</option>
                                                <option className="bg-black-soft">Reserva de Espacios Culturales</option>
                                                <option className="bg-black-soft">Gabinete de Comunicación</option>
                                                <option className="bg-black-soft">Restaurante Gastro Club</option>
                                                <option className="bg-black-soft">Otro asunto</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-dorado-primary/40">
                                                <Send size={14} className="rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary font-bold ml-1">Mensaje o Solicitud</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Describa brevemente su necesidad..."
                                            className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-2xl px-6 py-4.5 text-crema focus:border-dorado-primary/60 outline-none transition-all placeholder:text-dorado-light/10 resize-none"
                                        ></textarea>
                                    </div>

                                    <PremiumButton variant="primary" className="w-full py-6 text-lg tracking-[0.15em] font-serif shadow-2xl">
                                        Enviar Comunicación <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </PremiumButton>
                                </form>

                                <div className="text-center">
                                    <p className="text-[9px] text-dorado-light/20 uppercase tracking-[0.2em] font-medium leading-relaxed max-w-sm mx-auto">
                                        Al enviar su mensaje, acepta nuestra Política de Privacidad y Tratamiento de Datos Institucionales según RGPD.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Footer Minimalista */}
            <footer className="section-visibility fluid-py border-t border-dorado-dark/5 bg-black-soft/10 text-center px-4">
                <div className="space-y-8">
                    <div className="font-serif text-2xl text-dorado-light opacity-30 italic">Sociedad Gran Casino de Totana</div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-[10px] uppercase tracking-[0.5em] text-dorado-light/10 font-bold" suppressHydrationWarning>
                            © {new Date().getFullYear()} – INSTITUCIÓN · PATRIMONIO · TOTANA
                        </div>
                        <div className="h-px w-12 bg-dorado-primary/10" />
                    </div>
                </div>
            </footer>
        </main>

    );
}
