
import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import StoreProvider from "@/app/StoreProvider";
import {Poppins} from "next/font/google";
import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import Header from "@/components/layouts/Header";
import ButtonToTop from "@/components/layouts/ButtonToTop";
import SettingButton from "@/components/layouts/SettingButton";
import SkinCssPopup from "@/components/layouts/SkinCssPopup";
import NoticeModalCart from "@/components/layouts/NoticeModalCart";
import NoticeModalCompare from "@/components/layouts/NoticeModalCompare";
import NoticeModalWishList from "@/components/layouts/NoticeModalWishList";
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'Retails Website',
  description: ''
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={poppins.className}>
          <SessionProvider>
        <StoreProvider>
            <main className="relative">
                <Header/>
                <NavBar/>
                {children}
                <Footer/>
                <SettingButton/>
                <ButtonToTop/>
                <SkinCssPopup/>
                <NoticeModalCart/>
                <NoticeModalCompare/>
                <NoticeModalWishList/>
            </main>
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
