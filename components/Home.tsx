import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.scss'
import { useDivision } from '@context/state';


const Home: NextPage = () => {
  const { division, setDivision } = useDivision();
  console.log(division);
  return (
    <div className={styles.container}>
      <Head>
        <title>BIMHA</title>
        <meta name="BIMHA" content="BIMHA Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Test
      </main>
    </div>
  )
}

export default Home
