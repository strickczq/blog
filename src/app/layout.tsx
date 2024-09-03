import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import { Footer } from '~/components/footer'
import { Nav } from '~/components/nav'
import '~/globals.css'
import { site } from '~/lib/consts'

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
