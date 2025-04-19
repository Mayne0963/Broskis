import './globals.css'
import Providers from '../components/Providers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Broski’s Kitchen',
  description: 'Luxury Street Gourmet'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-text antialiased">
        <Providers>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
