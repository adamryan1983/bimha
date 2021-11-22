import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const mail = faEnvelope as IconProp;
const twitter = faTwitter as IconProp;
const fb = faFacebook as IconProp;

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.footerMenu}>
          <ul>
            <h4>Menu</h4>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <ul>
            <h4>Teams</h4>
            <li><a href="#">Team 1</a></li>
            <li><a href="#">Team 2</a></li>
            <li><a href="#">Team 3</a></li>
            <li><a href="#">Team 4</a></li>
          </ul>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()}. All rights reserved. Designed & developed ​🏒​ 🥅​ &nbsp; 
          <a href="https://thisisadamryan.me" target="_blank" rel="noopener noreferrer">Adam Ryan</a>
        </div>
      </div>
      <div className={styles.footerSocial}>
        <div className={styles.logo}>
          <Image src="/images/logo-trans-fill.png" height="140" width="125" alt="logo" />
        </div>
        <div className={styles.social}>
          <h5>Follow Us: </h5>
          <ul>
            <li>
              <FontAwesomeIcon icon={fb} className={styles.icon}/>
            </li>
            <li>
              <FontAwesomeIcon icon={twitter} className={styles.icon}/>
            </li>
            <li>
              <FontAwesomeIcon icon={mail} className={styles.icon}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
