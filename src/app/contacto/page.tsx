"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Send } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { PremiumButton } from "@/components/ui/PremiumElements";

export default function ContactoPage() {
    const ease = [0.25, 0.1, 0.25, 1.0] as const;

    return (
        <main className="bg-black-primary text-crema min-h-screen">
            <Navbar />

            {/* Hero Editorial */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-dorado-primary blur-[110px]" />
                    <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-dorado-dark blur-[110px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease }}
                    >
                        <span className="text-dorado-primary text-xs uppercase tracking-[0.6em] font-bold block mb-4">Contacto Institucional</span>
                        <h1 className="text-6xl md:text-[10rem] font-serif text-gold leading-none lowercase italic -tracking-[0.04em]">
                            distinción
                        </h1>
                        <p className="mt-8 max-w-2xl mx-auto text-dorado-light/40 text-lg md:text-xl font-light italic">
                            &ldquo;Para cualquier consulta institucional, solicitud de eventos o gestión de socios, estamos a su entera disposición en el centro histórico de Totana.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Grid */}
            <section className="section-visibility pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Information Side (Left) */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="grid grid-cols-1 gap-8">
                            {/* Address */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="group p-8 rounded-2xl border border-dorado-dark/10 bg-black-soft/20 backdrop-blur-sm hover:border-dorado-primary/30 transition-all duration-500"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-xl bg-black-primary border border-dorado-dark/20 group-hover:bg-dorado-primary group-hover:border-dorado-primary transition-all duration-500">
                                        <MapPin className="text-dorado-primary group-hover:text-black-primary" size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">Sede Social</h3>
                                        <p className="text-xl font-serif text-crema">Calle Vidal Abarca, 2</p>
                                        <p className="text-dorado-light/40 text-sm">30850 Totana, Murcia · España</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone & Email */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="group p-8 rounded-2xl border border-dorado-dark/10 bg-black-soft/20 backdrop-blur-sm hover:border-dorado-primary/30 transition-all duration-500"
                            >
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="p-4 rounded-xl bg-black-primary border border-dorado-dark/20 group-hover:bg-dorado-primary group-hover:border-dorado-primary transition-all duration-500">
                                            <Phone className="text-dorado-primary group-hover:text-black-primary" size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">Atención Directa</h3>
                                            <p className="text-xl font-serif text-crema">868 24 12 48</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="p-4 rounded-xl bg-black-primary border border-dorado-dark/20 group-hover:bg-dorado-primary group-hover:border-dorado-primary transition-all duration-500">
                                            <Mail className="text-dorado-primary group-hover:text-black-primary" size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">Correo Electrónico</h3>
                                            <p className="text-lg font-serif text-crema">institucion@casinototana.es</p>
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
                                className="relative p-10 rounded-3xl overflow-hidden border border-dorado-primary/20 bg-gradient-to-br from-black-soft to-black-primary group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-dorado-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-dorado-primary/20 transition-all" />
                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} className="text-dorado-primary" />
                                        <span className="text-dorado-primary text-[10px] uppercase tracking-widest font-bold">Experiencia Gastro Club</span>
                                    </div>
                                    <h4 className="text-2xl font-serif text-crema">Restaurante & Ocio</h4>
                                    <p className="text-dorado-light/40 text-sm leading-relaxed">
                                        Ubicado en la planta noble, el Gastro Club ofrece una propuesta culinaria que fusiona tradición y vanguardia. Ideal para comidas de negocios o celebraciones sociales.
                                    </p>
                                    <div className="flex gap-4 pt-4">
                                        <a href="#" className="p-2 border border-dorado-primary/10 rounded-lg hover:bg-dorado-primary/5 transition-all">
                                            <Facebook size={18} className="text-dorado-light/60" />
                                        </a>
                                        <a href="#" className="p-2 border border-dorado-primary/10 rounded-lg hover:bg-dorado-primary/5 transition-all">
                                            <Instagram size={18} className="text-dorado-light/60" />
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
                            className="liquid-glass p-8 md:p-12 rounded-[2rem] border border-dorado-primary/10"
                        >
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-serif text-crema italic">Escríbanos</h2>
                                    <p className="text-dorado-light/40 font-light">
                                        Complete el formulario y nuestro departamento correspondiente contactará con usted en un plazo máximo de 48 horas.
                                    </p>
                                </div>

                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary font-bold ml-1">Nombre Completo</label>
                                            <input
                                                type="text"
                                                placeholder="Excmo. Sr. ..."
                                                className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-6 py-4 text-crema focus:border-dorado-primary/60 outline-none transition-all placeholder:text-dorado-light/10"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary font-bold ml-1">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                placeholder="su.nombre@email.com"
                                                className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-6 py-4 text-crema focus:border-dorado-primary/60 outline-none transition-all placeholder:text-dorado-light/10"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary font-bold ml-1">Asunto de la Consulta</label>
                                        <select className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-6 py-4 text-crema focus:border-dorado-primary/60 outline-none transition-all appearance-none cursor-pointer">
                                            <option className="bg-black-soft">Altas de Nuevos Socios</option>
                                            <option className="bg-black-soft">Reserva de Espacios Culturales</option>
                                            <option className="bg-black-soft">Gabinete de Comunicación</option>
                                            <option className="bg-black-soft">Restaurante Gastro Club</option>
                                            <option className="bg-black-soft">Otro asunto</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-dorado-primary font-bold ml-1">Mensaje o Solicitud</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Describa brevemente su necesidad..."
                                            className="w-full bg-black-primary/40 border border-dorado-dark/20 rounded-xl px-6 py-4 text-crema focus:border-dorado-primary/60 outline-none transition-all placeholder:text-dorado-light/10 resize-none"
                                        ></textarea>
                                    </div>

                                    <PremiumButton variant="primary" className="w-full py-6 text-lg tracking-[0.1em]">
                                        Enviar Comunicación <Send size={18} className="ml-3" />
                                    </PremiumButton>
                                </form>

                                <div className="text-center">
                                    <p className="text-[10px] text-dorado-light/20 uppercase tracking-widest font-light">
                                        Al enviar, acepta nuestra Política de Privacidad y Tratamiento de Datos Institucionales.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Footer Minimalista */}
            <footer className="section-visibility py-20 border-t border-dorado-dark/5 bg-black-soft/10 text-center">
                <div className="space-y-6">
                    <div className="font-serif text-2xl text-dorado-light opacity-30 italic">Sociedad Gran Casino de Totana</div>
                    <div className="text-[10px] uppercase tracking-[0.5em] text-dorado-light/10" suppressHydrationWarning>
                        © {new Date().getFullYear()} – INSTITUCIÓN · PATRIMONIO · TOTANA
                    </div>
                </div>
            </footer>
        </main>
    );
}
