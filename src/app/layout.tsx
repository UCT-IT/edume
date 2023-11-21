import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar/Navbar";
import Footer from "@/components/home/Footer/Footer";
import ScrollButton from "@/components/home/ScrollButton/ScrollButton";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />
        

        {children}
        <Footer />
        <ScrollButton />

      </body>
    </html>
  );
}
