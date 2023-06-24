import React from 'react'
import { snakes } from "../../../data/database"
import strelka from "../../../png/strelka.png"
import "../snaks/snaks.css"
import { useSelector} from 'react-redux'

import pashtet from "../../../png/foot/pashtet.png"

const Snaks = ({display,func,back}) => {

const lean = useSelector(state=>state.one)


  return (
    <>
    
    <div className={display?"skakes":"snakes none"}>
    <div className='strelka' onClick={back}><img src={strelka} alt="" /></div>
    <div className='snakes-item'>{lean==="ru"?"Закуски":"Snacks"}</div>
    
    
    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Паштет из оленины с румяными тостами и брусничным джемом":"Venison pate with ruddy toast and lingonberry jam"}</div>
            <div className="wr_img"><img src={pashtet} alt="" /></div>
            <span className='price-pl'>450 ₽</span>
          </div>

    
    
    
    
    {lean==="ru" && snakes.map(el=>(
        <div className='item' tabIndex="0" onClick={func} key={el.id}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    {lean==="en" && snakes.map(el=>(
        <div className='item' tabIndex="0" onClick={func}key={el.id}><span className='label'>{el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    </>
  )
}

export default Snaks