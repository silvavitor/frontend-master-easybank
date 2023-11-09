import type { Metadata } from "next"
import { Public_Sans } from "next/font/google"
import "./globals.css"

const font = Public_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Mentor | Easybank landing page",
  description: "Challenge by Vitor Fernando da Silva",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
