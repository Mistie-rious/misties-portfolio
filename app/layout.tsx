import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "./theme-context"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Mistura's Portfolio",
  description: "Porfolio made by Mistie",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
