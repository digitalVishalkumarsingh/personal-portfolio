import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vishal Kumar Singh | Software Developer",
  description:
    "Portfolio of Vishal Kumar Singh – Software Developer specializing in Next.js, TypeScript, Node.js, and MongoDB.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
