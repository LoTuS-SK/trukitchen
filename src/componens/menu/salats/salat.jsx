import React from 'react'
import strelka from "../../../png/strelka.png"
import "./salat.css"
import {salat} from "../../../data/database"


const Salat = ({display,func,back}) => {
  return (
    <>
    
    <div className={display?"salat":"none"}>
    <div className='strelka' onClick={back}><img src={strelka} alt="" /></div>
    
    <div className={display?'snakes-item':"none"} >Салаты</div>
    
    {salat.map((el,index)=>(
        <div className='item' key={index} tabIndex="0" onClick={func}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    </>
    
  )
}

export default Salat