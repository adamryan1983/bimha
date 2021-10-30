import React from 'react'
import styles from './Main.module.scss'

const SubMenu = () => {
  return (
    <div className={styles.subMenu}>
      <div className={styles.desc}>
        ROSTER/SCHEDULE
      </div>
    <ul className={styles.playerMenu}>
      <li><a href="#">Timbits</a></li>
      <li><a href="#">U7</a></li>
      <li><a href="#">U9</a></li>
      <li><a href="#">U11</a></li>
      <li><a href="#">U13</a></li>
      <li><a href="#">U15</a></li>
      <li><a href="#">U18</a></li>
    </ul>
  </div>
  )
}

export default SubMenu
