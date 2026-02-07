"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@/components/ui/PremiumElements";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem("casino-totana-cookie-consent");
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("casino-totana-cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("casino-totana-cookie-consent", "rejected");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-4 left-4 right-4 md:left-8 md:bottom-8 md:max-w-md z-[100]"
                >
                    <div className="relative p-6 rounded-2xl bg-black-soft/95 border border-dorado-dark/20 backdrop-blur-xl shadow-2xl overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dorado-primary/10 blur-3xl pointer-events-none" />

                        <div className="relative z-10 space-y-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="p-3 rounded-xl bg-black-primary border border-dorado-dark/10">
                                    <Cookie className="text-dorado-primary" size={20} />
                                </div>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="text-dorado-light/40 hover:text-dorado-primary transition-colors p-1"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-crema font-serif text-lg">Cookies & Privacidad</h4>
                                <p className="text-dorado-light/60 text-xs leading-relaxed font-light">
                                    Utilizamos cookies propias y de terceros para mejorar su experiencia y analizar el tráfico.
                                    Consulte nuestra <Link href="/legal/cookies" className="text-dorado-primary hover:underline underline-offset-2">Política de Cookies</Link>.
                                </p>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={handleReject}
                                    className="flex-1 py-2 rounded-lg border border-dorado-dark/20 text-[10px] uppercase tracking-widest text-dorado-light/60 hover:bg-white/5 hover:text-crema transition-all"
                                >
                                    Rechazar
                                </button>
                                <PremiumButton
                                    onClick={handleAccept}
                                    variant="primary"
                                    className="flex-1 py-2 text-[10px] uppercase tracking-widest"
                                >
                                    Aceptar
                                </PremiumButton>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
