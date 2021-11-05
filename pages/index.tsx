import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@components/Home/Home.module.scss'
import { useDivision } from '@context/state';
import Main from '@components/Home/Main';

import Landing from '@components/Home/Landing';
import TickerPage from '@components/Home/Ticker'

const Home: NextPage = () => {
  const { division, setDivision } = useDivision();
  console.log(division);
  return (
    <div className={styles.containerHome}>
      <Head>
        <title>BIMHA</title>
        <meta name="BIMHA" content="BIMHA Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <TickerPage />
      <Main />
    </div>
  )
}

export default Home
