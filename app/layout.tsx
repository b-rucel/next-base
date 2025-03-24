import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Outfit } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";
import "./syntax.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Next Base Template",
  description: "A modern, responsive web platform built with Next.js and React Server Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" rel="stylesheet" type="text/css" />
      </head>
      <body
        className={`${outfit.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="system" attribute="class" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] lg:w-[70vw] h-auto scroll-smooth">
          {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
