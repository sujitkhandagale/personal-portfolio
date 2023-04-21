import Socialmedia from '@/components/Socialmedia'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  const GTM_ID = "GTM-5VDLNDZ";
  return (
    <Html lang="en">
      <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet" type="text/css" />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NKXFGN9ZLE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NKXFGN9ZLE');
        `}
      </Script>
      <Head />
      <body>



        <Main />
        <NextScript />
        <Socialmedia />
      </body>
    </Html>
  )
}
