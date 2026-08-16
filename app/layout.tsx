import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import "./globals.css";

import MenuList from "../components/menu/MenuList";
import UserMenu from "../components/menu/UserMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guiando App",
  description: "Welcome to Guiando App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider appearance={{ theme: dark }}>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <Link href="/">
                      <img
                        alt="Guiando App"
                        className="size-12"
                        src="/guiandoLogo.png"
                      />
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <MenuList />
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <UserMenu />
                  </div>
                </div>
              </div>
            </div>
          </Disclosure>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
