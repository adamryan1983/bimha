import React from 'react'
import styles from './Covid.module.scss'
import Head from 'next/head'
import { Card } from 'primereact/card';

const Covid = () => {

  const header = <h1>Covid Policy</h1>;
  const footer = 
  <span>
    Questions/concerns: <a href="mailto:bellislandminorhockey@gmail.com">Email Us</a>
  </span>;

<Card footer={footer} header={header}>
    Content
</Card>
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Covid Policy</title>
        <meta name="Covid" content="BIMHA Covid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card className={styles.content} header={header} subTitle="Effective October 22, 2021" footer={footer}>

        Covid
      </Card>
    </div>
  )
}

export default Covid
