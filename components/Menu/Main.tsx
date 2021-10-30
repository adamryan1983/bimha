import React from 'react'
import MainMenu from './MainMenu'
import SubMenu from './SubMenu'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.container}>
          <MainMenu />
          <SubMenu />
    </div>
  )
}

export default Main
