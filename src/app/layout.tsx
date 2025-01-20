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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        <script id="chatbotkit-widget" src="https://static.chatbotkit.com/integrations/widget/v2.js" data-widget="cm659kggg0dl27wcbk4io72ah"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}