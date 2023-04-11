import Header from '@/components/Header'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function about() {
  return (
   <>
    <Head>
        <title>About Me | Sujit Khandagale</title>
    </Head>
    <div>
      <Header/>
      <Link href={"/"}>Home</Link>
    </div>
    </>
  )
}

export default about