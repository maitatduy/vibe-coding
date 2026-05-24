import Link from "next/link";

interface LogoProps {
    variant?: "light" | "dark";
    width?: number;
    height?: number;
}

export default function Logo({ variant = "dark", width, height }: LogoProps) {
    return (
        <Link
            href="/"
            className="flex items-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
            <span className="text-xl md:text-2xl font-black tracking-tighter text-orange-600">
                TechBite
            </span>
        </Link>
    );
}
