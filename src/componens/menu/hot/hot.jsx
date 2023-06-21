import React from 'react'
import "../snaks/snaks"
import {hotbluda} from "../../../data/database"

const Hot = ({display,func,back}) => {
  return (
    <>
      <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>Горячие блюда</div>
    
    {hotbluda.map((el,index)=>(
        <div className='item' key={index} tabIndex="0" onClick={func}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    </>
  )
}

export default Hot