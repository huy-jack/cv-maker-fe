import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"], // Adjust based on your needs
  weight: ["400", "500", "700"], // Add different weights if required
  variable: "--font-rubik", // CSS variable for easy reference
});

export const metadata: Metadata = {
  title: "CV Maker",
  description: "Powered by Jack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}
