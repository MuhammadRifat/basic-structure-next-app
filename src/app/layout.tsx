import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'my-app',
  description: 'Authored by Rifat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />

        <main className="container-fluid" style={{minHeight: "90vh"}}>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
