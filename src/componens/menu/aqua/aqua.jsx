import React from 'react'
import "../snaks/snaks"
import { aqua } from '../../../data/database'

const Aqua = ({display,add,back}) => {
  return (
    <>
     <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>Аквариум</div>
    
    {aqua.map(el=>(
        <div className='item' tabIndex="0" onClick={add}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    </>
  )
}

export default Aqua