import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Anis Sahed | Crafting Code & Beyond",
  description: "Relax.. You just found the right software Engineer",
};

const LOCALES = ["en", "fr"];

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

// Dynamically import needed messages for given locale
async function getMessages(locale: string) {
  const messageModule = await import(`@/i18n/messages/${locale}.json`);

  return messageModule.default;
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {

  const messages = await getMessages(params.locale);
  return (
    <html lang={params.locale}>
      <Providers messages={messages} locale={params.locale}>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.variable
          )} suppressHydrationWarning>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={false}
                storageKey="portfolio-theme"
              >
                {children}
              </ThemeProvider>  
          </body>
      </Providers>
    </html>
  );
}
