import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Valley',
  description: 'A journey into darkness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-midnight text-gray-200">{children}</body>
    </html>
  )
}
