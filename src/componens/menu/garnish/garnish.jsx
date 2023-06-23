import React from 'react'
import "../snaks/snaks"
import { garnish } from '../../../data/database'
import {useSelector} from 'react-redux'

const Garnish = ({display,func,back}) => {

  const ru = useSelector(state=>state.one)

  return (
    <>
    <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>Гарниры</div>
    
    {garnish.map(el=>(
        <div className='item' tabIndex="0" onClick={func}><span className='label'>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>  
    
    </>
  )
}

export default Garnish