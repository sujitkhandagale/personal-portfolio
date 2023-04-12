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
        <Header />
        <div className="container">
          <div className="center_box">
           <div className="box">
            <h1 className='name'><b>Name</b> : Sujit Khandagale</h1>
            <h4>Location : Ghatkopar, Mumbai, Maharashtra 400086</h4>
            <h2 className='language'>language : Marathi, Hindi, English
            </h2>
            <h2 className='language'>Skills : HTML, Cascading Style Sheets (CSS), Scss, Bootstrap, JavaScript, ReactJs, NextJs, Git</h2>
           
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default about