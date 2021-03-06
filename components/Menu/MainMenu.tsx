/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './Main.module.scss'
import ActiveLink from '@components/ActiveLink'


const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.logo}>
        <img src="/images/logo-trans-fill.png" alt="logo" className={styles.smallLogo}/>
        <h1 className={styles.bimha}>BIMHA</h1>
        <h4>Home of the Miners</h4>
      </div>
      <ul className={styles.menu}>       
        <li>
          <ActiveLink href='/'> Home </ActiveLink>
        </li>
        <li>
          <ActiveLink href='/About/About'> About </ActiveLink>
        </li>
        <li>
          <ActiveLink href='/FAQ/FAQ'> FAQ </ActiveLink>
        </li>
        <li>
          <ActiveLink href='/Covid/Covid'> COVID </ActiveLink>
        </li>
        <li>
          <ActiveLink href='/Board/Board'> BOARD </ActiveLink>
        </li>
        <li>
          <ActiveLink href='/Registration/Registration'> REGISTER A PLAYER </ActiveLink>
        </li>
        
      </ul>
    </div>
  )
}

export default MainMenu