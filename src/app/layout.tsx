import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Anis Sahed | Portfolio",
  description: "Anis Sahed's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
