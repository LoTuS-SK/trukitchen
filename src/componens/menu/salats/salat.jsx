import React from 'react'
import strelka from "../../../png/strelka.png"
import "./salat.css"
import {salat} from "../../../data/database"
import { useSelector } from 'react-redux'


const Salat = ({display,func,back}) => {

  const lean = useSelector(state=>state.one)
  return (
    <>
    
    <div className={display?"salat":"none"}>
    <div className='strelka' onClick={back}><img src={strelka} alt="" /></div>
    
    <div className={display?'snakes-item':"none"} >{lean==="ru"?"Салаты":"Salads"}</div>
    
    {salat.map((el,index)=>(
        <div className='item' key={index} tabIndex="0" onClick={func}><span className='label'>{lean ==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    </>
    
  )
}

export default Salat