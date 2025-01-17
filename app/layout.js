"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContext } from "./_context/CartContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <CartContext.Provider value={{ cart, setCart }}>
            <Header />
            {children}
            <Footer />
          </CartContext.Provider>
        </ClerkProvider>
      </body>
    </html>
  );
}
