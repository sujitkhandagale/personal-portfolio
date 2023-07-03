import "../styles/globals.scss";
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import "../assets/font-awsome-v6/css/all.css"
import "../assets/font-awsome-v6/css/fontawesome.min.css";
import PageLoader from './../components/PageLoader';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log('App is changing to:', url);
      // Perform any additional actions on route change
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <PageLoader />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
