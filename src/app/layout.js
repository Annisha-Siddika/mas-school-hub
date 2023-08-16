"use client"

import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ["300"]})

export const metadata = {
  title: 'MAS',
  description: 'A School management portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
        </body>
    </html>
  )
}
