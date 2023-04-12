import Socialmedia from '@/components/Socialmedia'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet" type="text/css" />
      <Head />
      <body>
        <Main />
        <NextScript />
        <Socialmedia />
      </body>
    </Html>
  )
}
