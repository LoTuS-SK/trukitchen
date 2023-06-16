import React from 'react'
import "./sweets.css"
import { Sweets } from '../../../data/database'
import strelka from "../../../png/strelka.png"

const sweets = ({display,back,func}) => {
  const desert = Sweets.filter(el=>el.section==="сладкое")
  const ice = Sweets.filter(el=>el.section==="мороженое")
  const jam = Sweets.filter(el=>el.section==="варенье")
  return (
    <div className={display?"sweets":"sweets none"}>
      <div className='strelka' onClick={back}><img src={strelka} alt="" /></div>
      <h1 className='sw_h1'>Десерты</h1>
      {desert.map(el=>(
        <div className='item' tabIndex="0" ><span className='label' onClick={func}>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
<h1 className='sw_h1'>Мороженое</h1>
{ice.map(el=>(
        <div className='item' tabIndex="0" ><span className='label' onClick={func}>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    <h1 className='sw_h1'>Варенье</h1>
{jam.map(el=>(
        <div className='item' tabIndex="0" ><span className='label' onClick={func}>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}

    </div>
  )
}

export default sweets