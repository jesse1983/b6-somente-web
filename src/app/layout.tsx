import './globals.css'
import { Libre_Franklin } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;


const libre = Libre_Franklin({ subsets: ['latin'] })

export const metadata = {
  title: 'C6 Somente - Psicologia e Psiquiatria',
  description: 'Saúde Mental para todos!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={libre.className}>{children}</body>
    </html>
  )
}
