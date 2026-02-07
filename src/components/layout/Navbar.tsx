"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CasinoLogo from "@/components/ui/CasinoLogo";
import { PremiumButton } from "@/components/ui/PremiumElements";
import BottomNav from "./BottomNav";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Historia", href: "/historia" },
    { name: "Cultura", href: "/cultura" },
    { name: "Gastronomía", href: "/restaurante" },
    { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const tickingRef = useRef(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (tickingRef.current) return;
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
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileMenuOpen]);

    const navbarVariants = {
        initial: {
            y: 0,
            backgroundColor: "rgba(10, 10, 10, 0)",
            borderColor: "rgba(255, 255, 255, 0)",
            paddingTop: "24px",
        },
        scrolled: {
            y: 0,
            backgroundColor: "rgba(10, 10, 10, 0.95)",
            borderColor: "rgba(166, 139, 74, 0.2)",
            paddingTop: "0px",
            boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        }
    };

    return (
        <>
            <nav className="fixed left-0 right-0 z-50 pointer-events-none">
                <motion.div
                    initial="initial"
                    animate={isScrolled ? "scrolled" : "initial"}
                    variants={navbarVariants}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 28,
                    }}
                    className={cn(
                        "relative mx-auto pointer-events-auto backdrop-blur-xl border-b flex items-center transition-all duration-500",
                        isScrolled
                            ? "w-full h-[70px] px-4 sm:px-6 lg:px-10"
                            : "w-full h-[90px] px-6 sm:px-8 bg-transparent border-transparent"
                    )}
                >
                    <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center gap-3 group shrink-0">
                            <div className="relative p-1.5 sm:p-2 rounded-xl border border-dorado-dark/20 bg-black-soft/30 group-hover:border-dorado-primary/40 transition-all duration-700">
                                <CasinoLogo size={28} className="relative z-10" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <motion.span
                                    animate={{ color: isScrolled ? "#c9a962" : "#faf8f4" }}
                                    className="font-serif text-lg sm:text-2xl tracking-tighter leading-none"
                                >
                                    Gran Casino
                                </motion.span>
                                <span className="text-[9px] uppercase tracking-[0.3em] text-dorado-primary/50 leading-none font-light mt-1">
                                    Totana - 1890
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center bg-black-soft/20 backdrop-blur-md border border-dorado-dark/10 rounded-full px-8 py-2.5 gap-10 mx-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-[10px] uppercase tracking-[0.25em] transition-all duration-500 font-medium",
                                        pathname === link.href ? "text-dorado-primary" : "text-dorado-light/40 hover:text-dorado-primary"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Actions Area */}
                        <div className="flex items-center gap-4 shrink-0">
                            <Link href="/socios" className="hidden lg:block">
                                <PremiumButton
                                    variant="primary"
                                    className="min-h-[32px] h-[32px] sm:min-h-[48px] sm:h-auto px-3 sm:px-8 text-[9px] sm:text-[10px] uppercase tracking-wide sm:tracking-[0.2em] font-bold"
                                >
                                    Hacerse Socio
                                </PremiumButton>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </nav>
            <BottomNav />
        </>
    );
}

