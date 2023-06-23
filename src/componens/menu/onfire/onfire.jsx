import React from 'react'
import "../snaks/snaks"
import { onFire } from '../../../data/database'
import { useSelector } from 'react-redux'

const Onfire = ({display,back,func}) => {

  const ru = useSelector(state=>state.one)

  return (
    <>
    <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>{ru==="ru"?"Гриль":"Grill"}</div>
    
    {onFire.map((el,index)=>(
        
        <div className='item' key={index}tabIndex="0" onClick={func}>
            <span className='label'>{ru==="ru"?el.name:el.name_en}</span>
            <span className='price'>{el.price} ₽</span>
          </div>
    ))}
   


    </div>
    </>
  )
}

export default Onfire