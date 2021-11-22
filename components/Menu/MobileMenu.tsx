import React, {useState, useEffect} from 'react'
import styles from './Main.module.scss'
import ActiveLink from '@components/ActiveLink'
import { useDivision, } from '@context/state';

import hamburger from './HamburgerMenu.module.scss'
import Image from 'next/image'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faInfoCircle, faQuestionCircle, faNotesMedical, faPerson, faMoneyBill, faHome, faHockeyPuck } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import { IconProp } from '@fortawesome/fontawesome-svg-core';

const info = faInfoCircle as IconProp;
const question = faQuestionCircle as IconProp;
const covid = faNotesMedical as IconProp;
const board = faPerson as IconProp;
const money = faMoneyBill as IconProp;
const home = faHome as IconProp;
const puck = faHockeyPuck as IconProp;

const NavBar = () => {
  const [toggled, setToggled] = useState(false);
  const [toggledSmall, setToggledSmall] = useState(false);
  const [choice, setChoice] = useState('');

  const divs = useDivision()

  const [tims, setTims] = useState(false);
  const [u9, setU9] = useState(false);
  const [u11, setU11] = useState(false);
  const [u13, setU13] = useState(false);
  const [u15, setU15] = useState(false);
  const [u18, setU18] = useState(false);

  const router = useRouter();
  const handleClickSmall = () => {
    setToggled(false)
    setToggledSmall(!toggledSmall)
  }
  const handleClickLarge = () => {
    setToggled(!toggled)
    setToggledSmall(false)
  }

  const handleClickDivision = (division: string) => {
    switch (division) {
      case 'timbits':
        setTims(!tims)
        setU9(false)
        setU11(false)
        setU13(false)
        setU15(false)
        setU18(false)
        divs.setDivision('timbits')
        break;
      case 'u9':
        setU9(!u9)
        setTims(false)
        setU11(false)
        setU13(false)
        setU15(false)
        setU18(false)
        divs.setDivision('u9')
        break;
      case 'u11':
        setU11(!u11)
        setU9(false)
        setTims(false)
        setU13(false)
        setU15(false)
        setU18(false)
        divs.setDivision('u11')
        break;
      case 'u13':
        setU13(!u13)
        setU9(false)
        setU11(false)
        setTims(false)
        setU15(false)
        setU18(false)
        divs.setDivision('u13')
        break;
      case 'u15':
        setU15(!u15)
        setU9(false)
        setU11(false)
        setU13(false)
        setTims(false)
        setU18(false)
        divs.setDivision('u15')
        break;
      case 'u18':
        setU18(!u18)
        setTims(false)
        setU9(false)
        setU11(false)
        setU13(false)
        setU15(false)
        divs.setDivision('u18')
        break;
    
      default:
        break;
    }
  }

  return (
    <>
      <div className={styles.menuMobile}>
        <div className={styles.menuMobile__hamburger}>
          <button className={!toggledSmall ? hamburger.coolsmall : hamburger.openedsmall} onClick={handleClickSmall} aria-label="Small Menu">
            <svg width="50" height="50" viewBox="0 0 100 100">
              <path className={hamburger.line + ' ' + hamburger.line1} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className={hamburger.line + ' ' + hamburger.line2} d="M 20,50 H 80" />
              <path className={hamburger.line + ' ' + hamburger.line3} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </button>
          <div className={styles.logoArea}>
            <Image src="/images/logo-trans-fill.png" alt="logo" height="100" width="100" className={styles.logo}/>
          </div>
          <div className={styles.hamArea}>
            <button className={!toggled ? hamburger.cool : hamburger.opened} onClick={handleClickLarge} aria-label="Main Menu">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path className={hamburger.line + ' ' + hamburger.line1} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className={hamburger.line + ' ' + hamburger.line2} d="M 20,50 H 80" />
                <path className={hamburger.line + ' ' + hamburger.line3} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
          </div>
        </div>
        <div className={!toggled ? styles.mobileListClosed : styles.mobileListOpen}>
        <ul>
          <li className={styles.mobileHeader}>
            <h3>BIMHA</h3>
            <h4>Home of the Miners</h4>
          </li>
          <li>
            <FontAwesomeIcon icon={home} className={styles.iconMobile}/>
            <ActiveLink href='/'> Home </ActiveLink>
          </li>
          <li className={styles.iconSection}>
            <FontAwesomeIcon icon={info} className={styles.iconMobile}/>
            <ActiveLink href='/About/About'> About </ActiveLink>
          </li>
          <li>
            <FontAwesomeIcon icon={question} className={styles.iconMobile}/>
            <ActiveLink href='/FAQ/FAQ'> FAQ </ActiveLink>
          </li>
          <li>
            <FontAwesomeIcon icon={covid} className={styles.iconMobile}/>
            <ActiveLink href='/Covid/Covid'> COVID </ActiveLink>
          </li>
          <li>
            <FontAwesomeIcon icon={board} className={styles.iconMobile}/>
            <ActiveLink href='/Board/Board'> BOARD </ActiveLink>
          </li>
          <li>
            <FontAwesomeIcon icon={money} className={styles.iconMobile}/>
            <ActiveLink href='#'> FUNDRAISING </ActiveLink>
          </li>
          <li>
            <FontAwesomeIcon icon={puck} className={styles.iconMobile}/>
            <ActiveLink href='#'> REGISTER A PLAYER </ActiveLink>
          </li>
        </ul>
        </div>
        <div className={!toggledSmall ? styles.mobileListSmallClosed : styles.mobileListSmallOpen}>

        <ul >
          <li>
          <ActiveLink href='/'> Home </ActiveLink>
          </li>
          <li onClick={() => handleClickDivision('timbits')}>
            Timbits
            <div className={tims ? styles.timsSmallMenuOpen : styles.timsSmallMenuClosed}>
              <ActiveLink href='/Roster/Roster'> Roster </ActiveLink>
              <ActiveLink href='/Schedule/Schedule'> Schedule </ActiveLink>
            </div>
          </li>
          <li onClick={() =>handleClickDivision('u9')}>
            U9
            <div className={u9 ? styles.u9SmallMenuOpen : styles.u9SmallMenuClosed}>
              <ActiveLink href='/Roster/Roster'> Roster </ActiveLink>
              <ActiveLink href='/Schedule/Schedule'> Schedule </ActiveLink>
            </div>
          </li>
          <li onClick={() => handleClickDivision('u11')}>
            U11
            <div className={u11 ? styles.u11SmallMenuOpen : styles.u11SmallMenuClosed}>
              <ActiveLink href='/Roster/Roster'> Roster </ActiveLink>
              <ActiveLink href='/Schedule/Schedule'> Schedule </ActiveLink>
            </div>
          </li>
          <li onClick={() => handleClickDivision('u13')}>
            U13
            <div className={u13 ? styles.u13SmallMenuOpen : styles.u13SmallMenuClosed}>
              <ActiveLink href='/Roster/Roster'> Roster </ActiveLink>
              <ActiveLink href='/Schedule/Schedule'> Schedule </ActiveLink>
            </div>
          </li>
          <li onClick={() => handleClickDivision('u15')}>
            U15
            <div className={u15 ? styles.u15SmallMenuOpen : styles.u15SmallMenuClosed}>
              <ActiveLink href='/Roster/Roster'> Roster </ActiveLink>
              <ActiveLink href='/Schedule/Schedule'> Schedule </ActiveLink>
            </div>
          </li>
          <li onClick={() => handleClickDivision('u18')}>
            U18
            <div className={u18 ? styles.u18SmallMenuOpen : styles.u18SmallMenuClosed}>
              <ActiveLink href='/Roster/Roster'> Roster </ActiveLink>
              <ActiveLink href='/Schedule/Schedule'> Schedule </ActiveLink>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;