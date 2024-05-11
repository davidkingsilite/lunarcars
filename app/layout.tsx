import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";



export const metadata:Metadata = {

  title: {
    template: '%s | Lunar Cars',
    default: 'Lunar Cars', // a default is required when creating a template
  },
  description: "Welcome to the Lunar Car Hub!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
