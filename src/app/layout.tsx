import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/contexts/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const satoshiRegular = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi-regular",
  display: "swap",
});

const satoshiBold = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi-bold",
  display: "swap",
});

const creatoRegular = localFont({
  src: "./fonts/Creato-Display.woff2",
  variable: "--font-creato-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fxee.ai",
  description: "Fxee.ai - Your AI-Powered Trading Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshiRegular.variable} ${satoshiBold.variable} ${spaceGrotesk.variable} ${creatoRegular.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
