import "../styles/globals.scss";
import React, { Suspense, useEffect } from 'react'
import { useRouter } from 'next/router'
import "../assets/font-awsome-v6/css/all.css"
import "../assets/font-awsome-v6/css/fontawesome.min.css";
import PageLoader from './../components/PageLoader';

const MyApp = ({ Component, pageProps }) => {

  return (
    <Suspense fallback={"test"}>
      <Component {...pageProps} />
    </Suspense>
  );
};

export default MyApp;
