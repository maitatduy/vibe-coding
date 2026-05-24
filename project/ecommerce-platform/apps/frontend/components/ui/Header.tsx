"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import AuthButton from "./AuthButton";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { useCartStore } from "../../store/cartStore";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openCart, cartItems } = useCartStore();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    const cartItemsCount = mounted ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

    const handleAuthClick = () => {
        console.log("Auth click");
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 h-16 md:h-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4 md:gap-8">
                <Logo />

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        className="text-sm font-semibold text-orange-600 border-b-2 border-orange-600"
                        href="#"
                    >
                        Trang chủ
                    </a>
                    <a
                        className="text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors"
                        href="#"
                    >
                        Sản phẩm
                    </a>
                    <a
                        className="text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors"
                        href="#"
                    >
                        Khuyến mãi
                    </a>
                    <a
                        className="text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors"
                        href="#"
                    >
                        Cộng đồng
                    </a>
                </div>

                <div className="flex items-center gap-2 md:gap-6 shrink-0">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 transition-colors rounded-full flex items-center justify-center">
                        <Search size={20} />
                    </button>
                    <button 
                        onClick={openCart}
                        className="p-2 text-gray-600 hover:bg-gray-100 transition-colors rounded-full flex items-center justify-center relative"
                    >
                        <ShoppingCart size={20} />
                        {cartItemsCount > 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-orange-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>
                    <div className="hidden md:block">
                        <AuthButton
                            isAuthenticated={false}
                            onClick={handleAuthClick}
                        />
                    </div>
                    {/* Mobile Menu Toggle */}
                    <button
                        className="p-2 text-gray-600 hover:bg-gray-100 transition-colors rounded-full flex md:hidden items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-b border-gray-100 flex flex-col p-4 gap-4 md:hidden">
                    <a
                        className="text-base font-semibold text-orange-600 py-2 border-b border-gray-50"
                        href="#"
                    >
                        Trang chủ
                    </a>
                    <a
                        className="text-base font-semibold text-gray-600 hover:text-orange-600 py-2 border-b border-gray-50 transition-colors"
                        href="#"
                    >
                        Sản phẩm
                    </a>
                    <a
                        className="text-base font-semibold text-gray-600 hover:text-orange-600 py-2 border-b border-gray-50 transition-colors"
                        href="#"
                    >
                        Khuyến mãi
                    </a>
                    <a
                        className="text-base font-semibold text-gray-600 hover:text-orange-600 py-2 border-b border-gray-50 transition-colors"
                        href="#"
                    >
                        Cộng đồng
                    </a>
                    <div className="pt-2">
                        <button
                            onClick={handleAuthClick}
                            className="w-full flex items-center justify-center px-5 py-3 rounded-full border border-gray-200 bg-white shadow-sm text-base font-semibold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
