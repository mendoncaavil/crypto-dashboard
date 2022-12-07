import React from 'react'
import './styles.css'

function Info({name, desc}) {
  return (
    <div className='grey-container' style={{padding:"1rem"}}>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{__html: desc}} className="desc-links"/>
    </div>
  )
}

export default Info