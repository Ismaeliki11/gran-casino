"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
                "liquid-glass group rounded-2xl p-5 sm:p-7 md:p-8 transition-all duration-700 motion-safe:hover:scale-[1.01] hover:bg-black-soft/50 border border-dorado-dark/20",
                className
            )}
        >
            {/* Light effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-dorado-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
}

export function PremiumButton({ children, variant = "primary", className, ...props }: ButtonProps) {
    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative group min-h-11 px-8 py-3.5 font-serif text-base sm:text-lg rounded-full overflow-hidden transition-all duration-500 inline-flex items-center justify-center",
                variant === "primary"
                    ? "bg-dorado-primary text-black-primary hover:shadow-[0_0_30px_rgba(201,169,98,0.4)]"
                    : "bg-transparent border border-dorado-primary/40 text-dorado-primary hover:border-dorado-primary hover:shadow-[0_0_20px_rgba(201,169,98,0.1)]",
                className
            )}
            {...props}
        >
            {/* Background Fill Layer */}
            <div className={cn(
                "absolute inset-0 transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0",
                variant === "primary" ? "bg-dorado-light" : "bg-dorado-primary/10"
            )} />

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
            </div>

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}
