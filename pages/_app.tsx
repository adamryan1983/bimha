import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import {DivisionContext} from '@context/state'
import React, { useState } from 'react'
import Main from '@components/Menu/Main'
import SocialBar from '@components/Menu/SocialBar'
import Footer from '@components/Footer/Footer'
import styles from '@components/Menu/Main.module.scss'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import MobileMenu from '@components/Menu/MobileMenu'


function MyApp({ Component, pageProps, }: AppProps) {
  const [division, setDivision] = useState('')
  library.add(fas)

  return (
    
  <DivisionContext.Provider value={{division,setDivision}}>
    <SocialBar />
    <div className={styles.stick}>
      <Main />
    </div>
    <MobileMenu />
    <Component {...pageProps} title="BIMHA" />
    <Footer />
  </DivisionContext.Provider>
  )
}

export default MyApp
