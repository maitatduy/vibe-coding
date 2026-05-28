"use client";

import { useCartStore } from "@/store/cartStore";
import { ICartItem } from "@/types";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// --- DUMB COMPONENTS ---

function DrawerBackdrop({ onClick }: { onClick: () => void }) {
    return (
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60 transition-opacity"
            onClick={onClick}
        />
    );
}

function QuantityStepper({
    quantity,
    onIncrease,
    onDecrease,
    isDisabled,
}: {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    isDisabled?: boolean;
}) {
    return (
        <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden w-fit">
            <button
                onClick={onDecrease}
                disabled={isDisabled || quantity <= 1}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
                <Minus size={14} />
            </button>
            <span className="w-8 text-center text-sm font-semibold text-gray-800">
                {quantity}
            </span>
            <button
                onClick={onIncrease}
                disabled={isDisabled}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
                <Plus size={14} />
            </button>
        </div>
    );
}

function CartItem({
    item,
    onIncrease,
    onDecrease,
    onRemove,
}: {
    item: ICartItem;
    onIncrease: (id: string) => void;
    onDecrease: (id: string) => void;
    onRemove: (id: string) => void;
}) {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleAction = (action: () => void) => {
        setIsUpdating(true);
        action();
        setTimeout(() => setIsUpdating(false), 300); // Simulate network latency
    };

    return (
        <div
            className={`flex gap-4 py-4 border-b border-gray-100 transition-opacity ${isUpdating ? "opacity-50" : "opacity-100"}`}
        >
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-50">
                <img
                    src={item.thumbnailUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start gap-2">
                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                        {item.name}
                    </h4>
                    <button
                        onClick={() => handleAction(() => onRemove(item.id))}
                        className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
                <div className="mt-auto flex items-end justify-between">
                    <QuantityStepper
                        quantity={item.quantity}
                        isDisabled={isUpdating}
                        onIncrease={() =>
                            handleAction(() => onIncrease(item.id))
                        }
                        onDecrease={() =>
                            handleAction(() => onDecrease(item.id))
                        }
                    />
                    <span className="text-sm font-bold text-orange-600">
                        {(item.currentPrice * item.quantity).toLocaleString(
                            "vi-VN",
                        )}{" "}
                        ₫
                    </span>
                </div>
            </div>
        </div>
    );
}

// --- SMART COMPONENT ---

export default function CartDrawer() {
    const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart } =
        useCartStore();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration errors
    useEffect(() => {
        setMounted(true);
    }, []);

    // Sync URL state (optional but requested in plan)
    useEffect(() => {
        if (!mounted) return;
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
            window.history.pushState(null, "", "#cart");
        } else {
            document.body.style.overflow = "unset";
            if (window.location.hash === "#cart") {
                window.history.pushState(
                    null,
                    "",
                    window.location.pathname + window.location.search,
                );
            }
        }

        const handlePopState = () => {
            if (window.location.hash !== "#cart" && isCartOpen) {
                closeCart();
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [isCartOpen, mounted, closeCart]);

    if (!mounted) return null;

    const itemsSubTotal = cartItems.reduce(
        (acc, item) => acc + item.currentPrice * item.quantity,
        0,
    );
    const shippingFee = itemsSubTotal > 0 ? 15000 : 0;
    const isFreeShipping = itemsSubTotal >= 150000;
    const finalShippingFee = isFreeShipping ? 0 : shippingFee;
    const totalAmount = itemsSubTotal + finalShippingFee;

    return (
        <>
            {/* Backdrop */}
            {isCartOpen && <DrawerBackdrop onClick={closeCart} />}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-dvh w-full sm:w-100 bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <ShoppingBag size={20} className="text-orange-600" />
                        Giỏ hàng của bạn (
                        {cartItems.reduce((acc, i) => acc + i.quantity, 0)})
                    </h2>
                    <button
                        onClick={closeCart}
                        className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body / Item List */}
                <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center px-4 space-y-4 opacity-70">
                            <ShoppingBag size={48} className="text-gray-300" />
                            <p className="text-gray-500 font-medium">
                                Giỏ hàng của bạn đang trống
                            </p>
                            <button
                                onClick={closeCart}
                                className="px-6 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold text-sm hover:bg-orange-200 transition-colors"
                            >
                                Tiếp tục mua sắm
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onIncrease={(id) => updateQuantity(id, 1)}
                                    onDecrease={(id) => updateQuantity(id, -1)}
                                    onRemove={removeFromCart}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer / Summary */}
                {cartItems.length > 0 && (
                    <div className="border-t border-gray-100 p-4 bg-gray-50 shrink-0">
                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Tạm tính</span>
                                <span className="font-medium">
                                    {itemsSubTotal.toLocaleString("vi-VN")} ₫
                                </span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Phí giao hàng</span>
                                <span
                                    className={`font-medium ${isFreeShipping ? "text-green-600" : ""}`}
                                >
                                    {isFreeShipping
                                        ? "Miễn phí"
                                        : `${shippingFee.toLocaleString("vi-VN")} ₫`}
                                </span>
                            </div>
                            <div className="flex justify-between text-base text-gray-800 font-bold pt-2 border-t border-gray-200">
                                <span>Tổng cộng</span>
                                <span className="text-orange-600 text-lg">
                                    {totalAmount.toLocaleString("vi-VN")} ₫
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => console.log("Proceed to checkout")}
                            className="w-full py-3 bg-orange-600 text-white text-[14px] rounded-xl font-bold uppercase tracking-wider hover:bg-orange-700 active:scale-95 transition-all shadow-md shadow-orange-600/20"
                        >
                            Thanh Toán Ngay
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
