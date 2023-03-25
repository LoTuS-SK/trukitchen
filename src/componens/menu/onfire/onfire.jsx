import React from 'react'
import "../snaks/snaks"
import { onFire } from '../../../data/database'

const Onfire = ({display,back,add}) => {
  return (
    <>
    <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>Гриль</div>
    
    {onFire.map(el=>(
        <div className='item' tabIndex="0" onClick={add}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    </>
  )
}

export default Onfire