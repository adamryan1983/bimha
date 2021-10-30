import React from 'react'
import styles from './Main.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const mail = faEnvelope as IconProp;
const twitter = faTwitter as IconProp;
const fb = faFacebook as IconProp;

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      <ul className={styles.socialMenu}>
        <li>
        <FontAwesomeIcon icon={fb} className={styles.icon}/>
        </li>
        <li>
        <FontAwesomeIcon icon={twitter} className={styles.icon}/>
        </li>
        <li>
        <FontAwesomeIcon icon={mail} className={styles.icon}/>
        </li>
        <li className={styles.listBorder}>
          Contact
        </li>
        <li>
          Donation
        </li>
      </ul>
    </div>
  )
}

export default SocialBar
