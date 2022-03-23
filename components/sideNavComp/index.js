import React from 'react'
import { Nav } from 'react-bootstrap'
import styles from '../../styles/sideNav.module.css'
import * as FaIcons from 'react-icons/fa'

function SideNavComp() {
  return (
    <div className='d-flex justify-content-center'>
      <Nav defaultActiveKey='/home' className='flex-column'>
        <span className={styles.sidenavLink}>
          <FaIcons.FaHome /> Beranda
        </span>
        <span className={styles.sidenavLinkActive}>
          <FaIcons.FaUsers /> Personnel-List
        </span>
        <span className={styles.sidenavLink}>
          <FaIcons.FaRegCalendarAlt /> Daily Attendence
        </span>
      </Nav>
    </div>
  )
}

export default SideNavComp
