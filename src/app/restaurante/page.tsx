"use client";

import { motion } from "framer-motion";
import { Utensils, Wine, Coffee, ChefHat, Info, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { PremiumCard, PremiumButton } from "@/components/ui/PremiumElements";
import Image from "next/image";
import Link from "next/link";

// Menu Data
const menuCategories = [
    {
        id: "entrantes",
        title: "Para Comenzar",
        icon: Utensils,
        items: [
            { name: "Jamón Ibérico de Bellota", description: "Cortado a cuchillo, acompañado de nuestro pan de cristal.", price: "24€" },
            { name: "Queso Manchego Curado", description: "D.O. La Mancha, 12 meses de curación con almendras tostadas.", price: "16€" },
            { name: "Ensalada Murciana Tradicional", description: "Tomate pera, atún, huevo, cebolla tierna y olivas de Cieza.", price: "12€" },
            { name: "Pulpo a la Gallega", description: "Con cachelos, pimentón de la Vera y aceite de oliva virgen extra.", price: "22€" },
            { name: "Croquetas del Casino", description: "Elección del chef: Jamón, Setas o Marisco (6 uds).", price: "10€" },
            { name: "Marinera Murciana", description: "La clásica rosquilla con ensaladilla rusa y anchoa del Cantábrico.", price: "3.50€" },
        ]
    },
    {
        id: "principales",
        title: "Principales",
        icon: ChefHat,
        items: [
            { name: "Solomillo de Ternera", description: "A la parrilla con guarnición de patatas a lo pobre y pimientos.", price: "26€" },
            { name: "Chuletas de Cordero Segureño", description: "D.O. Murcia, a la brasa con ajos tiernos.", price: "22€" },
            { name: "Pluma Ibérica 100% Bellota", description: "Con reducción de Pedro Ximénez y manzana asada.", price: "24€" },
            { name: "Lubina a la Espalda", description: "Fresca del día, con refrito de ajos y guindilla.", price: "20€" },
            { name: "Dorada al Horno", description: "Sobre cama de patatas panadera y cebolla caramelizada.", price: "20€" },
            { name: "Arroz con Conejo y Caracoles", description: "Mínimo 2 personas. El clásico de nuestra tierra.", price: "16€ p.p." },
        ]
    },
    {
        id: "postres",
        title: "Dulce Final",
        icon: Coffee,
        items: [
            { name: "Tarta de la Abuela", description: "Receta tradicional con chocolate y galleta.", price: "6€" },
            { name: "Coulant de Chocolate", description: "Corazón fundido con helado de vainilla Bourbon.", price: "7€" },
            { name: "Torrija Caramelizada", description: "Pan brioche empapado en leche infusionada.", price: "7€" },
            { name: "Fruta de Temporada", description: "Selección fresca del mercado.", price: "5€" },
        ]
    },
    {
        id: "bodega",
        title: "Nuestra Bodega",
        icon: Wine,
        items: [
            { name: "Juan Gil Etiqueta Plata", description: "D.O. Jumilla - Monastrell", price: "22€" },
            { name: "El Nido Clio", description: "D.O. Jumilla - Monastrell, Cabernet", price: "55€" },
            { name: "Marqués de Riscal Reserva", description: "D.O. Rioja - Tempranillo", price: "28€" },
            { name: "Pago de Carraovejas", description: "D.O. Ribera del Duero", price: "45€" },
            { name: "Cava Juve & Camps", description: "Reserva de la Familia", price: "26€" },
        ]
    }
];

export default function Restaurante() {
    return (
        <main className="bg-black-primary text-crema min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background - Using a placeholder or existing image if relevant */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black-primary/30 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black-primary/60 via-transparent to-black-primary z-10" />
                    <Image
                        src="/images/hero/IMG_9120.webp" // Using an existing interior shot for now
                        alt="Salón del Restaurante"
                        fill
                        className="object-cover opacity-80"
                    />
                </div>

                <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="fluid-h1 font-serif text-dorado-light mb-6">Gastro Club</h1>
                        <p className="text-xl md:text-2xl text-crema/80 font-light max-w-2xl mx-auto leading-relaxed">
                            Donde la tradición culinaria murciana se encuentra con la elegancia de nuestros salones centenarios.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Notification Banner */}
            <section className="relative z-30 -mt-16 px-4 md:px-0">
                <div className="max-w-4xl mx-auto">
                    <PremiumCard className="bg-black-soft/95 border-dorado-primary/30 backdrop-blur-xl">
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="p-4 rounded-full bg-dorado-primary/10 text-dorado-primary shrink-0">
                                <Info size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-serif text-dorado-primary mb-2">Servicio Próximamente Disponible</h3>
                                <p className="text-dorado-light/60">
                                    Actualmente estamos renovando nuestro servicio de restauración para ofrecerle una experiencia gastronómica a la altura de nuestra historia. El menú que se muestra a continuación es una <strong>propuesta ilustrativa</strong> de nuestra futura carta.
                                </p>
                            </div>
                        </div>
                    </PremiumCard>
                </div>
            </section>

            {/* Menu Sections */}
            <section className="py-20 fluid-px max-w-5xl mx-auto space-y-16">
                {menuCategories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8 border-b border-dorado-dark/20 pb-4">
                            <category.icon className="text-dorado-primary" size={32} />
                            <h2 className="text-3xl md:text-4xl font-serif text-crema">{category.title}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {category.items.map((item, i) => (
                                <div key={i} className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl font-serif text-dorado-light group-hover:text-dorado-primary transition-colors">
                                            {item.name}
                                        </h3>
                                        <span className="text-dorado-primary/80 font-mono text-lg">{item.price}</span>
                                    </div>
                                    <div className="w-full h-px bg-dorado-dark/10 group-hover:bg-dorado-dark/30 transition-colors mb-2" />
                                    <p className="text-dorado-light/40 italic text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black-soft/20 border-t border-dorado-dark/10">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-dorado-light mb-6">Reserve su Mesa</h2>
                    <p className="text-dorado-light/60 mb-10 max-w-2xl mx-auto">
                        Aunque nuestro servicio regular se encuentra en pausa, los socios pueden disfrutar de entrada a eventos exclusivos en el Casino.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contacto">
                            <PremiumButton variant="primary" className="w-full sm:w-auto px-10">
                                Contactar para Eventos <ArrowRight size={18} className="ml-2" />
                            </PremiumButton>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
