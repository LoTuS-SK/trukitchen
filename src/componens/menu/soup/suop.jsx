import React from 'react'
import "../snaks/snaks"
import { soup } from '../../../data/database'

const Suop = ({display,back,func}) => {
  return (
    <>
     <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>Супы</div>
    {soup.map(el=>(
        <div className='item' key={el.id}tabIndex="0" onClick={func}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    
    </>
  )
}

export default Suop