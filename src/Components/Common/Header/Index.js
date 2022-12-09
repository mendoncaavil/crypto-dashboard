import React from 'react'
import styles from './styles.module.css'
import Button from '../Button/Button';
import MobileDrawer from './Drawer';

function Header() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.heading}>
        <a href='/'>
        CryptoTracker <span style={{color: "var(--blue)"}}>.</span> 
        </a>
      </h1>
      <div className={styles.links}> 
        <a href='/'> <p className={styles.link}>Home</p> </a>
        <a href='/compare'> <p className={styles.link}>Compare</p> </a>
        <a href='/dashboard'> <Button  text="dashboard"/> </a>

      </div>
      <MobileDrawer/>

    </div>
  )
}

export default Header;