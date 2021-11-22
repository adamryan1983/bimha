import React, {useState} from 'react'

// import NavBarMobile from './NavBarMobile'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import {DivisionContext} from '@context/state'
import Main from '@components/Menu/Main'
import SocialBar from '@components/Menu/SocialBar'
import Footer from '@components/Footer/Footer'
import styles from '@components/Menu/Main.module.scss'

const Layout = (props:any) => {
  const [division, setDivision] = useState('')
  return (
    <DivisionContext.Provider value={{division,setDivision}}>
      <SocialBar />
      <div className={styles.stick}>
        <Main />
      </div>
      <div>
        {props.children}
      </div>

      <Footer />
    </DivisionContext.Provider>
  )}

export default Layout;




{/* <div className={styles.layoutContainer}>
<Head>
  <title>{props.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="utf-8" />
</Head>
<NavBar theme={props.theme} setTheme={props.setTheme}/>
<NavBarMobile theme={props.theme} setTheme={props.setTheme}/>
<div>
  {props.children}
</div>
<Footer theme={props.theme} />
</div> */}