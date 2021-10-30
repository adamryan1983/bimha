import React from 'react'
import styles from './FAQ.module.scss'
import Head from 'next/head'

const FAQ = () => {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>FAQ</title>
        <meta name="FAQ" content="BIMHA FAQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      FAQ
    </div>
  )
}

export default FAQ
