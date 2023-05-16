import "../styles/globals.scss";
import React from 'react'
import { useRouter } from 'next/router'
import Preloader from "@/components/Preloader";




export default function App({ Component, pageProps }) {

  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])
  return<>{loading ? <Preloader /> : <Component {...pageProps} />}</>

  
}
