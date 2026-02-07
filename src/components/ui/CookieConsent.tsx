"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { PremiumButton } from "@/components/ui/PremiumElements";

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-DCN887KTTN";

type ConsentStatus = "loading" | "visible" | "accepted" | "rejected";

export default function CookieConsent() {
    const [status, setStatus] = useState<ConsentStatus>("loading");

    useEffect(() => {
        // Check if user has already consented
        const savedConsent = localStorage.getItem("casino-totana-cookie-consent");

        if (savedConsent === "accepted") {
            setStatus("accepted");
        } else if (savedConsent === "rejected") {
            setStatus("rejected");
        } else {
            // No choice yet, show banner after delay
            const timer = setTimeout(() => setStatus("visible"), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("casino-totana-cookie-consent", "accepted");
        setStatus("accepted");
    };

    const handleReject = () => {
        localStorage.setItem("casino-totana-cookie-consent", "rejected");
        setStatus("rejected");
    };

    // Initialize GA only when consent is accepted
    const loadAnalytics = status === "accepted";

    return (
        <>
            {/* Google Analytics Scripts - Only loaded if trusted/accepted */}
            {loadAnalytics && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${GA_MEASUREMENT_ID}', {
                                page_path: window.location.pathname,
                            });
                        `}
                    </Script>
                </>
            )}

            <AnimatePresence>
                {status === "visible" && (
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
                                        onClick={() => setStatus("rejected")} // Closing acts as reject or just hide? Usually reject or persist until choice. Let's make close = hide but prompt again next time (or session). For strictly legal, 'reject' is safer for X, or just 'hidden' but re-ask. Let's treat X as 'rejected' for this session (UI dismiss).
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
                                        className="flex-1 py-1.5 md:py-2 rounded-lg border border-dorado-dark/20 text-[10px] uppercase tracking-widest text-dorado-light/60 hover:bg-white/5 hover:text-crema transition-all"
                                    >
                                        Rechazar
                                    </button>
                                    <PremiumButton
                                        onClick={handleAccept}
                                        variant="primary"
                                        className="flex-1 py-1.5 md:py-2 text-[10px] uppercase tracking-widest"
                                    >
                                        Aceptar
                                    </PremiumButton>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
