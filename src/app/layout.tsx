// src/app/layout.tsx (client-side)
"use client"; // Mark this component as a Client Component
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation"; // Client-side hook
import { metadata } from "./metadata"; // Import metadata from the server-side file
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Use of usePathname hook

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
