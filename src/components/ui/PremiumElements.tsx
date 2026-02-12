"use client";

import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function PremiumCard({ children, className, delay = 0 }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "liquid-glass group rounded-[2rem] p-5 sm:p-8 md:p-10 transition-all duration-700 hover:bg-black-soft/50 border border-dorado-dark/20",
                className
            )}
        >
            {/* Light effect on hover - slightly more visible */}
            <div className="absolute inset-0 bg-gradient-to-br from-dorado-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: React.ReactNode;
    variant?: "primary" | "outline";
}

export function PremiumButton({ children, variant = "primary", className, ...props }: ButtonProps) {
    return (
        <motion.button
            whileTap={{ scale: 0.97 }}
            className={cn(
                "relative group min-h-[36px] px-4 py-2 sm:min-h-[48px] sm:px-10 sm:py-4 font-serif text-xs sm:text-base rounded-full overflow-hidden transition-all duration-500 inline-flex items-center justify-center no-tap-highlight",
                variant === "primary"
                    ? "bg-dorado-primary text-black-primary font-bold shadow-lg"
                    : "bg-transparent border border-dorado-primary/40 text-dorado-primary hover:border-dorado-primary/60",
                className
            )}
            {...props}
        >
            {/* Background Fill Layer */}
            <div className={cn(
                "absolute inset-0 transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0",
                variant === "primary" ? "bg-dorado-light" : "bg-dorado-primary/5"
            )} />

            <span className="relative z-10 flex items-center gap-2 tracking-wide">
                {children}
            </span>
        </motion.button>
    );
}

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function PremiumAccordion({ title, children, defaultOpen = false }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-dorado-dark/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 sm:py-8 flex items-center justify-between text-left group transition-all"
            >
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-crema group-hover:text-dorado-primary transition-colors">
                    {title}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="p-2 rounded-full border border-dorado-dark/20 text-dorado-primary group-hover:border-dorado-primary/40"
                >
                    <ChevronDown size={20} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-dorado-light/60 text-base md:text-lg leading-relaxed font-light space-y-4">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
