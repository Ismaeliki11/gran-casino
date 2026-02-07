"use client";

import { motion } from "framer-motion";
import { Home, History, Calendar, Phone, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Historia", href: "/historia", icon: History },
    { name: "Socios", href: "/socios", icon: Users },
    { name: "Cultura", href: "/cultura", icon: Calendar },
    { name: "Contacto", href: "/contacto", icon: Phone },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] pb-6 px-4"
        >
            <div className="mx-auto max-w-sm">
                <div className="relative flex items-center justify-between bg-black-primary/90 backdrop-blur-2xl border border-dorado-dark/20 h-16 rounded-2xl px-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative flex flex-col items-center justify-center flex-1 py-1"
                            >
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                    className={cn(
                                        "flex flex-col items-center gap-1 transition-all duration-300",
                                        isActive ? "text-dorado-primary" : "text-dorado-light/30"
                                    )}
                                >
                                    <Icon size={isActive ? 20 : 18} className={cn("transition-all", isActive && "drop-shadow-[0_0_8px_rgba(201,169,98,0.4)]")} />
                                    <span className={cn(
                                        "text-[8px] uppercase tracking-widest font-bold",
                                        isActive ? "opacity-100" : "opacity-60"
                                    )}>
                                        {item.name}
                                    </span>
                                </motion.div>

                                {isActive && (
                                    <motion.div
                                        layoutId="bottom-indicator-new"
                                        className="absolute -bottom-1 w-1 h-1 rounded-full bg-dorado-primary shadow-[0_0_10px_rgba(201,169,98,0.8)]"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
