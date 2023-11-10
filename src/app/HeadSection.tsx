'use client'

import React from 'react'
import { Head } from 'next/document'
import favicon from './assets/images/logo.jpg'
const HeadSection = () => {
  return (
   <>
    <Head>
          {/* <link rel="shortcut icon" href={favicon} /> */}
          <link rel="shortcut icon" href="./assets/images/logo.jpg" />
        </Head>
   
   </>
  )
}

export default HeadSection