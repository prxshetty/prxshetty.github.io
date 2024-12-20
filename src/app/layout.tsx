import '@/styles/globals.css';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pranam's Portfolio",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-45MEB3F176"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-45MEB3F176');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}