"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LegalSectionProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    defaultOpen?: boolean;
}

export function LegalSection({ title, children, icon, defaultOpen = false }: LegalSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={false}
            className="border border-dorado-dark/20 rounded-2xl bg-black-soft/20 overflow-hidden mb-4"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-4">
                    {icon && <div className="text-dorado-primary">{icon}</div>}
                    <h3 className="text-lg sm:text-xl font-serif text-crema tracking-wide">
                        {title}
                    </h3>
                </div>
                <ChevronDown
                    className={cn(
                        "text-dorado-primary transition-transform duration-300",
                        isOpen ? "rotate-180" : ""
                    )}
                />
            </button>
            <motion.div
                initial="collapsed"
                animate={isOpen ? "open" : "collapsed"}
                variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 }
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
                <div className="px-6 pb-6 pt-0 text-dorado-light/70 font-light leading-relaxed space-y-4">
                    <div className="h-px w-full bg-dorado-dark/10 mb-6" />
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
}

export function LegalPageHeader({ title, subtitle, summary }: { title: string, subtitle: string, summary?: string }) {
    return (
        <div className="mb-12 md:mb-20 text-center space-y-6">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-serif text-gold italic"
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-dorado-light/60 font-light max-w-2xl mx-auto"
            >
                {subtitle}
            </motion.p>
            {summary && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 p-6 mx-auto max-w-3xl bg-dorado-primary/5 border border-dorado-primary/20 rounded-2xl"
                >
                    <p className="text-sm md:text-base text-crema/80 font-medium">
                        <span className="text-dorado-primary font-bold uppercase tracking-wider text-xs block mb-2">Resumen Rápido</span>
                        {summary}
                    </p>
                </motion.div>
            )}
        </div>
    );
}
