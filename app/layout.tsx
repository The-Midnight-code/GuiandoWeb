import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import "./globals.css";

import MenuList from "../components/menu/MenuList";
import UserMenu from "../components/menu/UserMenu";

const geisInter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guiando App",
  description: "Welcome to Guiando App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider appearance={{ theme: dark }}>
      <html lang="en" className={`${geisInter.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
