import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crimeport",
  description: "Report and track crime in your area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`} // Apply Inter font
      >
        {children}
      </body>
    </html>
  );
}
