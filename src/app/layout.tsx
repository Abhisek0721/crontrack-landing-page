"use client"; // Keep the client directive if required

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isLegalPage = pathname.startsWith("/legal");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {!isLegalPage && <Navbar />}
          <div>{children}</div>
          {!isLegalPage && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}
