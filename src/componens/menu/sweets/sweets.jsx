import React from 'react'
import "./sweets.css"
import { Sweets } from '../../../data/database'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Swets = ({display,back,func}) => {
  const desert = Sweets.filter(el=>el.section==="сладкое")
  const ice = Sweets.filter(el=>el.section==="мороженое")
  const jam = Sweets.filter(el=>el.section==="варенье")
  
  const ru = useSelector(state=>state.one)

  return (
    <div className="sweets">
    <Link to="/menu" className='btn-back' >←</Link>
      
      <h1 className='sw_h1'>Десерты</h1>
      {desert.map(el=>(
        <div className='item' tabIndex="0" ><span className='label' onClick={func}>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
<h1 className='sw_h1'>{ru==="ru"?"Мороженое":"Ice cream"}</h1>
{ice.map(el=>(
        <div className='item' tabIndex="0" ><span className='label' onClick={func}>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    <h1 className='sw_h1'>Варенье</h1>
{jam.map(el=>(
        <div className='item' tabIndex="0" ><span className='label' onClick={func}>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}

    </div>
  )
}

export default Swets