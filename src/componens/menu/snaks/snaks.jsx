import React from 'react'
import { snakes } from "../../../data/database"
import "../snaks/snaks.css"



const Snaks = ({display,func,back}) => {

  return (
    <>
    
    <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>Закуски</div>
    {snakes.map(el=>(
        <div className='item' tabIndex="0" onClick={func}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    </>
  )
}

export default Snaks