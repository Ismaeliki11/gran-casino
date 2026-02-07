import Link from "next/link";
import CasinoLogo from "@/components/ui/CasinoLogo";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-black-primary text-crema border-t border-dorado-dark/20 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-dorado-dark/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-dorado-primary/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-24">

                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="relative p-2 rounded-xl border border-dorado-dark/20 bg-black-soft/30 group-hover:border-dorado-primary/40 transition-all duration-700">
                                <CasinoLogo size={32} className="relative z-10" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-serif text-xl sm:text-2xl tracking-tighter leading-none text-crema">
                                    Gran Casino
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-dorado-primary/50 leading-none font-light mt-1">
                                    Totana - 1890
                                </span>
                            </div>
                        </Link>
                        <p className="text-dorado-light/40 font-light text-sm leading-relaxed max-w-sm">
                            Sociedad Cultural y Recreativa fundada en 1890. Un legado de distinción, cultura y vida social en el corazón de Totana.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
                            <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
                            <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-dorado-primary text-xs uppercase tracking-[0.2em] font-bold">Explorar</h4>
                        <ul className="space-y-3">
                            <FooterLink href="/historia">Historia & Legado</FooterLink>
                            <FooterLink href="/cultura">Agenda Cultural</FooterLink>
                            <FooterLink href="/socios">Área de Socios</FooterLink>
                            <FooterLink href="/contacto">Contacto</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-dorado-primary text-xs uppercase tracking-[0.2em] font-bold">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-dorado-light/60 group cursor-default">
                                <MapPin size={18} className="shrink-0 mt-0.5 text-dorado-dark/60 group-hover:text-dorado-primary transition-colors" />
                                <span className="text-sm font-light leading-relaxed">
                                    Calle Vidal Abarca, 2<br />
                                    30850 Totana, Murcia
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-dorado-light/60 group hover:text-dorado-primary transition-colors">
                                <Phone size={18} className="shrink-0 text-dorado-dark/60 group-hover:text-dorado-primary transition-colors" />
                                <a href="tel:868241248" className="text-sm font-light">868 24 12 48</a>
                            </li>
                            <li className="flex items-center gap-3 text-dorado-light/60 group hover:text-dorado-primary transition-colors">
                                <Mail size={18} className="shrink-0 text-dorado-dark/60 group-hover:text-dorado-primary transition-colors" />
                                <a href="mailto:institucion@casinototana.es" className="text-sm font-light">institucion@casinototana.es</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-dorado-dark/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-dorado-light/30">
                    <div>
                        © {new Date().getFullYear()} Gran Casino de Totana.
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <Link href="/legal/aviso-legal" className="hover:text-dorado-primary transition-colors">Aviso Legal</Link>
                        <Link href="/legal/privacidad" className="hover:text-dorado-primary transition-colors">Privacidad</Link>
                        <Link href="/legal/terminos" className="hover:text-dorado-primary transition-colors">Términos</Link>
                        <Link href="/legal/cookies" className="hover:text-dorado-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full border border-dorado-dark/20 flex items-center justify-center text-dorado-dark hover:text-black-primary hover:bg-dorado-primary hover:border-dorado-primary transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm text-dorado-light/40 hover:text-dorado-primary transition-colors font-light tracking-wide block hover:translate-x-1 duration-300"
            >
                {children}
            </Link>
        </li>
    );
}
