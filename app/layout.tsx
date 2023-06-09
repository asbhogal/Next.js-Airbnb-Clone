import './styles/index.scss'
import Navbar from './components/navbar/Navbar'

import { Nunito } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"]
})

export const metadata = {
  title: 'Holiday Homes & Apartment Rentals - Airbnb - Airbnb',
  description: 'Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ nunito.className }>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
