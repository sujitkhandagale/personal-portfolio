import Socialmedia from '@/components/Socialmedia'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  const GTM_ID = "GTM-5VDLNDZ";
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Socialmedia />
      </body>
    </Html>
  )
}
