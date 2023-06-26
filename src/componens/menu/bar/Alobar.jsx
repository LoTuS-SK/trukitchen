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
      {tincture.map((el,index)=>(
        <div className='item_b' key={index}>
          
          <span className='label_b' onClick={add}>{el.name}</span>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'>{el.price} ₽</span>
        </div>
        ))}

    <h1 className='bar_h'>Виски</h1>
      {whisky.map((el,index)=>(
        <div className='item_b' key={index}><span className='label' onClick={add}>{el.name}</span>
        <span className='price_m'>{el.volume}мл/</span>
        <span className='price_m'>{el.price}₽</span>
        </div>
        ))}
      
        <h1 className='bar_h'>Коньяк</h1>
        {Cognac.map((el,index)=>(
          <div className='item_b' key={index} ><span className='label' onClick={add}>{el.name}</span>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'>{el.price} ₽</span>
          </div>
          ))}
          <h1 className='bar_h'>Джин</h1>
        {Gin.map(el=>(
          <div className='item_b'><span className='label' onClick={add}>{el.name}</span>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'>{el.price} ₽</span>
          </div>
          ))}
           <h1 className='bar_h'>Текила</h1>
        {tequila.map(el=>(
          <div className='item_b'><span className='label' onClick={add}>{el.name}</span>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'>{el.price} ₽</span>
          </div>
          ))}
           <h1 className='bar_h'>Водка</h1>
        {vodka.map(el=>(
          <div className='item_b'><span className='label' onClick={add}>{el.name}</span>
          <span className='price_m'>{el.volume}мл/</span>
          <span className='price_m'>{el.price} ₽</span>
          </div>
          ))}
          <h1 className='bar_h'>Коктели</h1>
        {cocktails.map(el=>(
          <div className='item_b'><span className='label koktel' onClick={add}>{el.name}</span>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'> {el.prise} ₽</span>
          </div>
          ))}
        </div>
  )
}
