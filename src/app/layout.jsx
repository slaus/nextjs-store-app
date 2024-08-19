"use client";
import { Inter } from "next/font/google";
import "./globals.css";
// import { RecoilRoot } from 'recoil';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ["cyrillic"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
