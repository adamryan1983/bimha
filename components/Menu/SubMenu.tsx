import React, { useRef } from 'react'
import styles from './Main.module.scss'
import { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useDivision, } from '@context/state';

//primereact
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button'
import 'primereact/resources/themes/rhea/theme.css'
import 'primereact/resources/primereact.css';

const SubMenu: NextPage = () => {

  const menuTim = useRef<any>(null);
  const menuU9 = useRef<any>(null);
  const menuU11 = useRef<any>(null);
  const menuU13 = useRef<any>(null);
  const menuU15 = useRef<any>(null);
  const menuU18 = useRef<any>(null);
  const router = useRouter()

  const divs = useDivision()

  const setChoice = (div:any, page:any) => {
    divs.setDivision(div)
    page === 'roster' ? router.push({pathname:"/Roster/Roster"}) : router.push({pathname:"/Schedule/Schedule"})
  }

  let timbitChoices = [
    {
        label: 'Timbits',
        items: [
        {label: 'Roster', command:()=>{ setChoice('timbits', 'roster') }},
        {label: 'Schedule', command:()=>{ setChoice('timbits', 'schedule') }}]
    }
  ]
  let u9Choices = [
    {
        label: 'U9',
        items: [
        {label: 'Roster', command:()=>{ setChoice('u9', 'roster') }},
        {label: 'Schedule', command:()=>{ setChoice('u9', 'schedule') }}]
    }
  ]
  let u11Choices = [
    {
        label: 'U11',
        items: [
        {label: 'Roster', command:()=>{ setChoice('u11', 'roster') }},
        {label: 'Schedule', command:()=>{ setChoice('u11', 'schedule') }}]
    }
  ]
  let u13Choices = [
    {
        label: 'U13',
        items: [
        {label: 'Roster', command:()=>{ setChoice('u13', 'roster') }},
        {label: 'Schedule', command:()=>{ setChoice('u13', 'schedule') }}]
    }
  ]
    let u15Choices = [
      {
          label: 'U15',
          items: [
          {label: 'Roster', command:()=>{ setChoice('u15', 'roster') }},
          {label: 'Schedule', command:()=>{ setChoice('u15', 'schedule') }}]
      }
    ]
    let u18Choices = [
      {
          label: 'U18',
          items: [
          {label: 'Roster', command:()=>{ setChoice('u18', 'roster') }},
          {label: 'Schedule', command:()=>{ setChoice('u18', 'schedule') }}]
      }
    ]

  return (
    <div className={styles.subMenu}>
      <div className={styles.desc}>
        <div className={styles.title}>
          Roster/Schedule
          </div>
      </div>
    <ul className={styles.playerMenu}>
      <li>
      <Menu model={timbitChoices} popup ref={menuTim} id="popup_menu" />
      <Button label="Timbits" className={styles.btn} onClick={(event) => menuTim.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
          {/* <Link href='/Roster/Roster'><a onClick={() => setDivision("timbits")}> Timbits </a></Link> */}
      </li>
      <li>
        <Menu model={u9Choices} popup ref={menuU9} id="popup_menu" />
        <Button label="U9" className={styles.btn} onClick={(event) => menuU9.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
      </li>
      <li>
        <Menu model={u11Choices} popup ref={menuU11} id="popup_menu" />
        <Button label="U11" className={styles.btn} onClick={(event) => menuU11.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
      </li>
      <li>
        <Menu model={u13Choices} popup ref={menuU13} id="popup_menu" />
        <Button label="U13" className={styles.btn} onClick={(event) => menuU13.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
      </li>
      <li>
        <Menu model={u15Choices} popup ref={menuU15} id="popup_menu" />
        <Button label="U15" className={styles.btn} onClick={(event) => menuU15.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
      </li>
      <li>
        <Menu model={u18Choices} popup ref={menuU18} id="popup_menu" />
        <Button label="U18" className={styles.btn} onClick={(event) => menuU18.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
      </li>
    </ul>
  </div>
  )
}

export default SubMenu