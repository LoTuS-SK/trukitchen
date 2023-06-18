import React from 'react'
import "./bar.css"
import {tincture,strong,cocktails} from "../../../data/basebar"

export const Alobar = ({display,back,add}) => {

    const whisky = strong.filter(el=>el.section==="виски")
    const Cognac = strong.filter(el=>el.section==="коньяк")
    const Gin = strong.filter(el=>el.section==="джин")
    const tequila = strong.filter(el=>el.section==="текила")
    const vodka = strong.filter(el=>el.section==="водка")

  return (
    <div className={display?"barwarp":"barwarap none"}>
        <div className='btn-back' onClick={back}>←</div>
      <h1 className='bar_h'>Настойки</h1>
      {tincture.map(el=>(
        <div className='item'><span className='label' onClick={add}>{el.name}</span>
        <span className='price'>{el.volume} мл /</span>
        <span className='price'>{el.price} ₽</span>
        </div>
        ))}

    <h1 className='bar_h'>Виски</h1>
      {whisky.map(el=>(
        <div className='item'><span className='label' onClick={add}>{el.name}</span>
        <span className='price'>{el.volume} мл /</span>
        <span className='price'>{el.price} ₽</span>
        </div>
        ))}
      
        <h1 className='bar_h'>Коньяк</h1>
        {Cognac.map(el=>(
          <div className='item'><span className='label' onClick={add}>{el.name}</span>
          <span className='price'>{el.volume} мл /</span>
          <span className='price'>{el.price} ₽</span>
          </div>
          ))}
          <h1 className='bar_h'>Джин</h1>
        {Gin.map(el=>(
          <div className='item'><span className='label' onClick={add}>{el.name}</span>
          <span className='price'>{el.volume} мл /</span>
          <span className='price'>{el.price} ₽</span>
          </div>
          ))}
           <h1 className='bar_h'>Текила</h1>
        {tequila.map(el=>(
          <div className='item'><span className='label' onClick={add}>{el.name}</span>
          <span className='price'>{el.volume} мл /</span>
          <span className='price'>{el.price} ₽</span>
          </div>
          ))}
           <h1 className='bar_h'>Водка</h1>
        {vodka.map(el=>(
          <div className='item'><span className='label' onClick={add}>{el.name}</span>
          <span className='price'>{el.volume} мл /</span>
          <span className='price'>{el.price} ₽</span>
          </div>
          ))}
          <h1 className='bar_h'>Коктели</h1>
        {cocktails.map(el=>(
          <div className='item'><span className='label koktel' onClick={add}>{el.name}</span>
          <span className='price'>{el.volume}мл /</span>
          <span className='price'> {el.prise} ₽</span>
          </div>
          ))}
        </div>
  )
}
