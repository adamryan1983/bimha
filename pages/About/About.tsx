import React from 'react'
import styles from './About.module.scss'
import Head from 'next/head'

const About = () => {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="About" content="BIMHA About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      About
    </div>
  )
}

export default About
