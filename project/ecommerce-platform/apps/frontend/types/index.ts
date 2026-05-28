import React from "react";

export interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    badges?: string[];
}

export interface Banner {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
}

export interface ICartItem {
    id: string;
    productId: string;
    name: string;
    thumbnailUrl: string;
    currentPrice: number;
    quantity: number;
}
