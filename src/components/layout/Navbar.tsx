"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CasinoLogo from "@/components/ui/CasinoLogo";
import { PremiumButton } from "@/components/ui/PremiumElements";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Historia", href: "/historia" },
    { name: "Cultura", href: "/cultura" },
    { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const tickingRef = useRef(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (tickingRef.current) {
                return;
            }

            tickingRef.current = true;
            window.requestAnimationFrame(() => {
                const nextValue = window.scrollY > 20;
                setIsScrolled((prev) => (prev === nextValue ? prev : nextValue));
                tickingRef.current = false;
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalOverflow || "";
        }
        return () => {
            document.body.style.overflow = originalOverflow || "";
        };
    }, [mobileMenuOpen]);

    const navbarVariants = {
        initial: {
            y: 12,
            backgroundColor: "rgba(10, 10, 10, 0.4)",
            borderColor: "rgba(255, 255, 255, 0.05)",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
        },
        scrolled: {
            y: 0,
            backgroundColor: "rgba(10, 10, 10, 0.95)",
            borderColor: "rgba(166, 139, 74, 0.2)",
            boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        }
    };

    return (
        <nav className="fixed left-0 right-0 z-50 pointer-events-none">
            <motion.div
                initial="initial"
                animate={isScrolled ? "scrolled" : "initial"}
                variants={navbarVariants}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                    mass: 0.5
                }}
                className={cn(
                    "relative mx-auto pointer-events-auto backdrop-blur-xl border flex items-center justify-between transition-all duration-500 will-change-transform",
                    isScrolled
                        ? "w-full px-4 sm:px-6 lg:px-10 h-[70px] rounded-none"
                        : "w-[calc(100%-32px)] max-w-7xl px-6 sm:px-8 h-[84px] rounded-[24px]"
                )}
            >
                <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-8">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="relative p-1.5 sm:p-2 rounded-xl border border-dorado-dark/20 bg-black-soft/30 group-hover:border-dorado-primary/40 transition-all duration-700 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-dorado-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <CasinoLogo size={28} className="relative z-10" />
                        </div>
                        <div className="flex flex-col justify-center gap-1 sm:gap-1.5">
                            <motion.span
                                animate={{ color: isScrolled ? "#c9a962" : "#faf8f4" }}
                                className="font-serif text-lg sm:text-2xl tracking-tighter leading-none"
                            >
                                Gran Casino
                            </motion.span>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-dorado-primary/50 leading-none font-light">
                                Totana - 1890
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center bg-black-soft/20 backdrop-blur-md border border-dorado-dark/10 rounded-full px-8 py-2.5 gap-8 xl:gap-10 mx-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] xl:text-[11px] uppercase tracking-[0.25em] text-dorado-light/40 hover:text-dorado-primary transition-all duration-500 whitespace-nowrap font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="hidden lg:flex items-center gap-4 shrink-0">
                        <Link href="/socios">
                            <PremiumButton
                                variant="primary"
                                className="px-8 py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold"
                            >
                                Hacerse Socio
                            </PremiumButton>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-dorado-primary min-h-12 min-w-12 inline-flex items-center justify-center rounded-2xl border border-dorado-dark/20 bg-black-soft/30 hover:bg-black-soft/50 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav-menu"
                    >
                        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </motion.div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <div id="mobile-nav-menu" className="lg:hidden fixed inset-0 z-40">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Cerrar menu"
                            className="absolute inset-0 bg-black-primary/75 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="safe-top safe-bottom relative mx-3 sm:mx-6 mt-3 rounded-3xl border border-dorado-dark/20 bg-black-primary/95 p-5 sm:p-8"
                        >
                            <div className="flex flex-col gap-5 items-stretch">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.04 * idx + 0.08, duration: 0.4 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="min-h-12 rounded-xl border border-dorado-dark/20 px-4 inline-flex items-center text-2xl sm:text-3xl font-serif text-dorado-light/90 hover:text-dorado-primary hover:border-dorado-primary/30 transition-colors w-full"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.28, duration: 0.45 }}
                                >
                                    <Link
                                        href="/socios"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="mt-2 w-full min-h-12 rounded-xl border border-dorado-primary/30 text-dorado-primary text-base uppercase tracking-[0.18em] inline-flex items-center justify-center hover:bg-dorado-primary/5 transition-all"
                                    >
                                        Hacerse Socio
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
}

