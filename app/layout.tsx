import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: 'Upbox',
  description: 'Assignment for Everest Engineering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
