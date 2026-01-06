import type { Metadata } from "next";
import "./globals.css";
import {ROOT_METADATA} from "@/lib/constants/metadata";

import { NextIntlClientProvider } from "next-intl";
import NextAuthProviders from "../providers/NextAuthProvider";

import FontSwitcher from "@/components/fontswitcher/FontSwitcher";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = ROOT_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className="antialiased bg-white text-black">
        <NextAuthProviders>
          <NextIntlClientProvider>
         
              <FontSwitcher locale={"ar"}>{children}</FontSwitcher>
                 <Toaster
            position="bottom-right"
            richColors
            
          
            duration={3000}
          />
          
          </NextIntlClientProvider>
        </NextAuthProviders>
      </body>
    </html>
  );
}
