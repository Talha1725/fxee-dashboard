import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/contexts/ThemeContext";
import { AddOnsProvider } from "@/lib/contexts/AddOnsContext";
import { UserProvider } from "@/lib/contexts/UserContext";
import { AccountTypeProvider } from "@/lib/contexts/AccountTypeContext";
import { ReduxProvider } from "@/lib/redux/provider";
import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_OAUTH_CONFIG } from '@/lib/config/google';
import AuthInitializer from '@/components/auth/AuthInitializer';
import { LocalizationProvider } from '@/components/localization-provider';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const satoshiRegular = localFont({
  src: "./fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi-regular",
  display: "swap",
});

const satoshiMedium = localFont({
  src: "./fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi-medium",
  display: "swap",
});

const satoshiBold = localFont({
  src: "./fonts/Satoshi-Bold.woff2",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshiRegular.variable} ${satoshiMedium.variable} ${satoshiBold.variable} ${spaceGrotesk.variable} ${creatoRegular.variable} antialiased`}
        suppressHydrationWarning
      >
        <ReduxProvider>
          <LocalizationProvider>
            <AuthInitializer />
            <ThemeProvider>
              <AccountTypeProvider>
                <UserProvider>
                  <AddOnsProvider>
                  {GOOGLE_OAUTH_CONFIG.CLIENT_ID ? (
                    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CONFIG.CLIENT_ID}>
                      {children}
                      <Toaster />
                    </GoogleOAuthProvider>
                  ) : (
                    <>
                      {children}
                      <Toaster />
                    </>
                  )}
                  </AddOnsProvider>
                </UserProvider>
              </AccountTypeProvider>
            </ThemeProvider>
          </LocalizationProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
