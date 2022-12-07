import React from 'react'
import styles from './styles.module.css'

function Button({text, onClick}) {
  return (
    <div className={styles.btnDiv} onClick={()=>onClick()}>{text}</div>
  )
}

export default Button;