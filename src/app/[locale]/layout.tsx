import type { Metadata } from "next";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Anis Sahed | Crafting Code & Beyond",
  description: "Relax.. You just found the right software Engineer",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {

  return (
    <html lang={locale}>
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
    </html>
  );
}
