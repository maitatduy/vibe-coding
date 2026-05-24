import { create } from "zustand";

export interface ICartItem {
    id: string;
    productId: string;
    name: string;
    thumbnailUrl: string;
    currentPrice: number;
    quantity: number;
}

interface CartState {
    isCartOpen: boolean;
    cartItems: ICartItem[];
    isLoading: boolean;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    addToCart: (item: ICartItem) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, delta: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
    isCartOpen: false,
    cartItems: [],
    isLoading: false,
    openCart: () => set({ isCartOpen: true }),
    closeCart: () => set({ isCartOpen: false }),
    toggleCart: () => set({ isCartOpen: !get().isCartOpen }),
    addToCart: (newItem) =>
        set((state) => {
            const existingItem = state.cartItems.find(
                (i) => i.productId === newItem.productId,
            );
            if (existingItem) {
                return {
                    cartItems: state.cartItems.map((i) =>
                        i.productId === newItem.productId
                            ? { ...i, quantity: i.quantity + newItem.quantity }
                            : i,
                    ),
                };
            }
            return { cartItems: [...state.cartItems, newItem] };
        }),
    removeFromCart: (itemId) =>
        set((state) => ({
            cartItems: state.cartItems.filter((i) => i.id !== itemId),
        })),
    updateQuantity: (itemId, delta) =>
        set((state) => ({
            cartItems: state.cartItems.map((i) => {
                if (i.id === itemId) {
                    const newQuantity = Math.max(1, i.quantity + delta);
                    return { ...i, quantity: newQuantity };
                }
                return i;
            }),
        })),
}));
