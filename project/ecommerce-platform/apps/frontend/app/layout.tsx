import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import CartDrawer from "../components/ui/CartDrawer";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "TechBite",
    description: "E-commerce platform for coders",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body
                className={`${beVietnamPro.className} flex flex-col min-h-screen bg-black`}
            >
                <Header />
                <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 min-h-[50vh]">
                    {children}
                </main>
                <Footer />
                <CartDrawer />
            </body>
        </html>
    );
}
