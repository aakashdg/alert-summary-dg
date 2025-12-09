import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farmer.Chat - Agricultural Intelligence',
  description: 'AI-powered agricultural advice for farmers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
