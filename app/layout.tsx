import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wesley Jennings Portfolio',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
