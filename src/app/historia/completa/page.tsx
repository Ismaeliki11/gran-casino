"use client";

import { motion } from "framer-motion";
import { History, BookOpen, Quote, ChevronLeft, Landmark, Palette, Users, Calendar, Award } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { PremiumButton, PremiumCard } from "@/components/ui/PremiumElements";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HistoriaCompletaPage() {
    return (
        <main className="bg-black-primary text-crema min-h-screen overflow-x-hidden selection:bg-dorado-primary selection:text-black-primary">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0 scale-110">
                    <div className="absolute inset-0 bg-gradient-to-b from-black-primary/40 via-black-primary/70 to-black-primary z-10" />
                    <Image
                        src="/images/hero/11zon_IMG_9138.webp"
                        alt="Gran Casino de Totana - Patrimonio"
                        fill
                        priority
                        className="object-cover opacity-50 img-premium"
                    />
                </div>

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease }}
                    >
                        <Link href="/historia" className="inline-flex items-center gap-2 text-dorado-primary/60 hover:text-dorado-primary mb-8 transition-colors text-sm uppercase tracking-widest font-bold">
                            <ChevronLeft size={16} /> Volver a Historia
                        </Link>
                        <span className="text-dorado-primary uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block font-bold">Investigación Exhaustiva</span>
                        <h1 className="fluid-h1 font-serif text-gold leading-tight mb-8">Sociedad Gran Casino <br className="hidden md:block" /> de Totana</h1>
                        <p className="text-dorado-light/70 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed italic px-4">
                            &ldquo;Un santuario de ocio donde las diferencias quedaban suspendidas en favor de la cohesión social y el recreo civilizado.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Reading Content */}
            <article className="relative fluid-px pb-32">
                <div className="max-w-4xl mx-auto">

                    {/* Section 1: Intro */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dorado-primary/30" />
                            <Landmark className="text-dorado-primary" size={24} />
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dorado-primary/30" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-crema mb-10 text-center">1. El Casino como Institución Vertebradora</h2>
                        <div className="prose prose-invert prose-gold max-w-none text-dorado-light/70 text-lg leading-relaxed space-y-6">
                            <p>
                                Para comprender la magnitud histórica y social de la Sociedad Gran Casino de Totana, es imperativo situar su nacimiento dentro del vasto ecosistema del asociacionismo recreativo y cultural que floreció en España entre finales del siglo XIX y principios del XX.
                            </p>
                            <p>
                                En la Región de Murcia, el fenómeno de los casinos alcanzó una relevancia particular, actuando como contrapesos a las estructuras tradicionales de poder representadas por la Iglesia y el Ayuntamiento. Mientras que el Real Casino de Murcia estableció un estándar de opulencia ecléctica, Totana desarrolló su propia versión adaptada a las necesidades de las élites locales, creando un microcosmos donde se tejían las redes de influencia comercial y agraria.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 2: Genesis */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-crema mb-10 text-center">2. La Génesis de la Sociedad (1917)</h2>
                        <div className="prose prose-invert prose-gold max-w-none text-dorado-light/70 text-lg leading-relaxed space-y-6">
                            <p>
                                La fundación se formalizó el 29 de noviembre de 1917, en un momento de gran convulsión social en España. Impulsada por la burguesía terrateniente y comercial de Totana, la institución nació con una vocación explícitamente apolítica.
                            </p>
                            <div className="liquid-glass border border-dorado-primary/10 p-6 md:p-10 rounded-[2rem] my-8 md:my-12 bg-black-soft/10 backdrop-blur-sm">
                                <h3 className="text-dorado-primary font-serif text-lg md:text-xl mb-4 italic">El Mandato de Neutralidad</h3>
                                <p className="text-sm md:text-lg mb-0">
                                    Los promotores buscaban activamente alejarse de las "luchas que solían traer las confesiones de este carácter". El Casino aspiraba a ser un "santuario" de ocio donde las diferencias partidistas quedaran suspendidas.
                                </p>
                            </div>
                            <p>
                                El carácter elitista original se reflejaba en sus barreras de entrada: una <span className="text-dorado-primary">cuota de 25 pesetas</span> (equivalente a más de una semana de trabajo de un jornalero) y la necesidad de ser avalado por dos socios existentes. Pertenecer al Gran Casino era, en sí mismo, una declaración de éxito.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 3: Architecture parallax-ish */}
                    <div className="relative w-screen left-1/2 -translate-x-1/2 mb-12 md:mb-24 aspect-video md:aspect-[21/9] overflow-hidden">
                        <Image
                            src="/images/hero/IMG_9111.webp"
                            alt="La Pecera"
                            fill
                            className="object-cover opacity-60 img-premium lg:hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-transparent to-black-primary" />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="text-center group cursor-default">
                                <span className="text-dorado-primary uppercase tracking-[0.4em] text-[10px] font-bold">Análisis Tipológico</span>
                                <h2 className="text-3xl md:text-6xl font-serif text-crema mt-2 md:mt-4 lg:group-hover:text-dorado-light transition-colors">La Pecera</h2>
                            </div>
                        </div>
                    </div>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-crema mb-10 text-center">3. La Arquitectura del Poder</h2>
                        <div className="prose prose-invert prose-gold max-w-none text-dorado-light/70 text-base md:text-lg leading-relaxed space-y-8">
                            <p>
                                Situado en la Calle Vidal Abarca, número 2, el Casino ocupa el corazón neurálgico de Totana. Su presencia completa la tríada de poderes locales junto al Ayuntamiento y la Iglesia de Santiago.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
                                <div className="space-y-3 md:space-y-4">
                                    <h4 className="text-gold font-serif text-lg md:text-xl border-l-2 border-dorado-primary pl-4">El Panóptico Social</h4>
                                    <p className="text-sm md:text-base">
                                        La <span className="italic">Pecera</span>, con su enorme cristalera, permitía a los socios observar el devenir de la vida urbana —amas de casa, niños, viandantes— desde un remanso de paz iluminado. Era el escenario de la jerarquía social.
                                    </p>
                                </div>
                                <div className="space-y-3 md:space-y-4">
                                    <h4 className="text-gold font-serif text-lg md:text-xl border-l-2 border-dorado-primary pl-4">El Salón Modernista</h4>
                                    <p className="text-sm md:text-base">
                                        Centro y eje de la sociedad, conserva su aire modernista caracterizado por líneas curvas y motivos vegetales, diferenciándolo de cualquier otro local de la ciudad.
                                    </p>
                                </div>
                            </div>

                            <p className="mt-8 text-sm md:text-base">
                                La estructura histórica también incluía una <span className="text-dorado-primary">biblioteca</span> (imprescindible para legitimar su carácter cultural en una época de alto analfabetismo) y salas de juego (naipes, dominó, billar) que eran el motor de la sociabilidad diaria masculina.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 4: History */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-crema mb-10 text-center">4. Del Esplendor a la Crisis</h2>
                        <div className="prose prose-invert prose-gold max-w-none text-dorado-light/70 text-lg leading-relaxed space-y-6">
                            <p>
                                Durante su <span className="italic text-gold">Edad Dorada (1917-1936)</span>, el Casino fue el escenario de los grandes ritos de paso. Sus bailes de Pascua y fin de año eran el mercado matrimonial de la época, donde se tejían alianzas entre los apellidos ilustres.
                            </p>
                            <p>
                                En 1947, bajo la presidencia del <span className="text-dorado-primary">Dr. Cayuela Meca</span>, el edificio se adaptó a la nueva realidad de posguerra, buscando una imagen de recuperación y modernidad moderada. Fue en este momento cuando se produjo la intervención artística más relevante.
                            </p>
                            <p>
                                Sin embargo, a finales del siglo XX, el modelo entró en crisis. El elitismo se volvió un lastre, y la aparición de nuevas formas de ocio como discotecas y centros culturales municipales puso a la institución en riesgo de extinción.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 5: Gamonal */}
                    <motion.section
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-16 md:mb-32 relative overflow-hidden rounded-[2.5rem] border border-dorado-primary/20 bg-black-soft/20 p-8 md:p-20 shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Palette size={120} className="text-dorado-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-8 italic">5. El Patrimonio de Fernando Gamonal</h2>
                        <div className="prose prose-invert prose-gold max-w-none text-dorado-light/70 text-lg leading-relaxed space-y-6 relative z-10">
                            <p>
                                La presidencia de Cayuela Meca en 1947 encargó al pintor <span className="text-gold font-bold">Fernando Gamonal</span> una renovación estética integral. Gamonal diseñó tanto la decoración mural como el mobiliario, concibiendo el espacio como una <span className="italic">obra de arte total</span>.
                            </p>
                            <p>
                                Durante los años 60 y 70, la falta de sensibilidad patrimonial llevó a que se cubrieran sus frescos con capas de pintura convencional. Recientemente, la actual junta directiva ha comenzado a sacar a la luz estos vestigios, redescubriendo un tesoro artístico de posguerra incalculable.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 6: 21st Century */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-crema mb-10 text-center">6. El Renacimiento del Siglo XXI</h2>
                        <div className="prose prose-invert prose-gold max-w-none text-dorado-light/70 text-lg leading-relaxed space-y-8">
                            <p>
                                Ante la amenaza de desaparición, el Casino ha operado un giro estratégico de 180 grados: ha pasado de ser un club hermético a aspirar a convertirse en el <span className="text-dorado-primary">eje cultural de Totana</span>. Esta transformación ha permitido que el edificio recupere su centralidad mediante la cultura, abriendo sus puertas a toda la ciudadanía.
                            </p>

                            <div className="space-y-6 bg-black-soft/10 p-6 md:p-8 rounded-3xl border border-dorado-primary/5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <h4 className="text-gold font-serif text-lg flex items-center gap-2">
                                            <Calendar size={18} className="text-dorado-primary" /> Literatura y Poesía
                                        </h4>
                                        <p className="text-sm md:text-base">
                                            El Casino ha recuperado su vocación de ateneo literario, acogiendo presentaciones de novelas como "Música para un náufrago" y recitales poéticos en colaboración con el grupo "Amigos de la Poesía".
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-gold font-serif text-lg flex items-center gap-2">
                                            <Users size={18} className="text-dorado-primary" /> Compromiso Social
                                        </h4>
                                        <p className="text-sm md:text-base">
                                            La democratización definitiva se refleja en la acogida de eventos como el festival "Que vivan las mujeres", integrando el Casino en los circuitos de promoción de la igualdad.
                                        </p>
                                    </div>
                                    <div className="space-y-4 md:col-span-2">
                                        <h4 className="text-gold font-serif text-lg flex items-center gap-2">
                                            <History size={18} className="text-dorado-primary" /> Divulgación del Patrimonio
                                        </h4>
                                        <p className="text-sm md:text-base">
                                            Desde conferencias sobre la Orden de Santiago hasta la presentación del cómic "Totana y Su-per Patrimonio", la institución sirve de altavoz para investigadores y nuevos formatos de divulgación histórica.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 7: Summary Table */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-crema mb-12 text-center">Hitos y Datos Clave</h2>
                        <div className="overflow-x-auto rounded-3xl border border-dorado-primary/10 liquid-glass">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-dorado-primary/10 bg-dorado-primary/5">
                                        <th className="p-4 md:p-6 font-serif text-gold uppercase tracking-widest text-[10px] md:text-xs">Categoría</th>
                                        <th className="p-4 md:p-6 font-serif text-gold uppercase tracking-widest text-[10px] md:text-xs">Dato Histórico</th>
                                    </tr>
                                </thead>
                                <tbody className="text-dorado-light/60">
                                    <tr className="border-b border-dorado-primary/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-dorado-primary/80">Fundación</td>
                                        <td className="p-6">29 de noviembre de 1917</td>
                                    </tr>
                                    <tr className="border-b border-dorado-primary/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-dorado-primary/80">Ubicación</td>
                                        <td className="p-6">C/ Vidal Abarca, 2 (Esq. Plaza Constitución)</td>
                                    </tr>
                                    <tr className="border-b border-dorado-primary/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-dorado-primary/80">Arquitectura</td>
                                        <td className="p-6">Estilo Ecléctico / Modernista. Destaca "La Pecera".</td>
                                    </tr>
                                    <tr className="border-b border-dorado-primary/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-dorado-primary/80">Patrimonio</td>
                                        <td className="p-6">Murales y Mobiliario de Fernando Gamonal (1947).</td>
                                    </tr>
                                    <tr className="border-b border-dorado-primary/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-dorado-primary/80">Carácter</td>
                                        <td className="p-6">Apolítico / Cultural / Recreativo.</td>
                                    </tr>
                                    <tr className="border-b border-dorado-primary/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-dorado-primary/80">Presidencia Clave</td>
                                        <td className="p-6">Dr. José Cayuela Meca (Reforma de 1947).</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-dorado-primary/80">Uso Actual</td>
                                        <td className="p-6">Eje Cultural (Conferencias, Arte, Música).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.section>

                    {/* Closing Call to Action */}
                    <div className="text-center pt-20 border-t border-dorado-primary/10">
                        <Quote className="text-dorado-primary/20 mx-auto mb-8" size={60} />
                        <h3 className="text-2xl md:text-3xl font-serif italic text-crema mb-12">
                            El Casino es un testigo de piedra de la evolución de Totana, un balcón privilegiado sobre nuestra historia local.
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/socios">
                                <PremiumButton variant="primary" className="px-12 w-full sm:w-auto">
                                    Preservar este Legado <Award className="ml-2" size={18} />
                                </PremiumButton>
                            </Link>
                            <Link href="/historia">
                                <PremiumButton variant="outline" className="px-12 w-full sm:w-auto">
                                    <ChevronLeft className="mr-2" size={18} /> Volver
                                </PremiumButton>
                            </Link>
                        </div>
                    </div>

                </div>
            </article>

            {/* Sticky Footer for Reading progress or just simple footer */}
            <footer className="py-20 border-t border-dorado-primary/5 bg-black-soft/20 text-center">
                <div className="text-[10px] uppercase tracking-[0.4em] text-dorado-light/20">
                    © 2025 – Sociedad Gran Casino de Totana · Centro de Documentación Histórica
                </div>
            </footer>
        </main>
    );
}
