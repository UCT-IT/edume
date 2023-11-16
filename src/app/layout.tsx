"use client";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer/Footer";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
import { Box } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Providers>
            <Box pos="relative">
              <Navbar></Navbar>
              {children}
              <Footer></Footer>
              <ScrollButton></ScrollButton>
            </Box>
          </Providers>
        </main>
      </body>
    </html>
  );
}
