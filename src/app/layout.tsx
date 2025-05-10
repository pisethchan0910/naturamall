import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import the Header component
import Footer from "@/components/Footer"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tmall Clone",
  description: "A Next.js and Tailwind CSS clone of Tmall.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header /> {/* Add the Header component here */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
