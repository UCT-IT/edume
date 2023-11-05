"use client"
import Navbar from '@/components/Navbar/Navbar'
import { Providers } from './providers'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Providers>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </Providers>
        </main>
      </body>
    </html>
  )
}
