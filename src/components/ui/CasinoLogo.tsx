import Image from "next/image";
import { cn } from "@/lib/utils";

interface CasinoLogoProps {
    size?: number;
    className?: string;
    priority?: boolean;
}

export default function CasinoLogo({ size = 32, className, priority = false }: CasinoLogoProps) {
    return (
        <div
            className={cn("relative shrink-0", className)}
            style={{ width: size, height: size }}
            aria-hidden="true"
        >
            <Image
                src="/images/brand/logo-casino.png"
                alt="Logo del Gran Casino de Totana"
                fill
                priority={priority}
                sizes={`${size}px`}
                className="object-contain"
            />
        </div>
    );
}
