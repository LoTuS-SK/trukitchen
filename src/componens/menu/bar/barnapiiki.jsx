import React from 'react'
import "./bar.css"
import { coffe , drinks ,hotdrinks, lemonade} from "../../../data/basebar"



export const Barnapitki = ({display,back,add}) => {
  
  

  return (
    <>
    
    <div className={display?"barwarp":"barwarap none"}>
    <div className='btn-back' onClick={back}>←</div>
      <h1 className='bar_h'>Кофе</h1>
      {coffe.map(el=>(
        <div className='item'><span className='label' onClick={add}>{el.name}</span>
        <span className='price'>{el.price} ₽</span>
        </div>
      ))}
      <h1 className='bar_h'>Напитки</h1>
      {drinks.map(el=>(
        <div className='item'><span className='label'>{el.name}</span>
        <span className='price'>{el.price} ₽</span>
        </div>
      ))}
      <h1 className='bar_h'>Горячие напитки</h1>
       {hotdrinks.map(el=>(
        <div className='item'><span className='label'>{el.name}</span>
        <span className='price'>{el.price} ₽</span>
        </div>))}
        <h1 className='bar_h'>Лимонады</h1>
        {lemonade.map(el=>(
        <div className='item'><span className='label'>{el.name}</span>
        <span className='price'>{el.price} ₽</span>
        </div>))}
      
    </div>
    </>
  )
}
