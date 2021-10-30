import React from 'react'
import styles from './Covid.module.scss'
import Head from 'next/head'

const Covid = () => {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Covid Policy</title>
        <meta name="Covid" content="BIMHA Covid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Covid
    </div>
  )
}

export default Covid
