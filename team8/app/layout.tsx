import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import StoreProvider from "@/app/StoreProvider";
import { Poppins } from "next/font/google";
import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import Header from "@/components/layouts/Header";
export const metadata: Metadata = {
    title: "Retails Website",
    description: "",
  };
  
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
            <main className="relative">
                <Header/>
                <NavBar/>
                {children}
                <Footer />
            </main>
        </StoreProvider>
      </body>
    </html>
  );
}
