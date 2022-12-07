import React from 'react'
import styles from './styles.module.css'

function OutlineButton({text, onClick}) {
  return (
    <div className={styles.outlineBtnDiv} onClick={()=>onClick()}>{text}</div>
  )
}

export default OutlineButton;