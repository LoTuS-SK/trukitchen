import React from 'react'
import "../snaks/snaks.css"
import { onFire } from '../../../data/database'
import { useSelector } from 'react-redux'
import kamamber from "../../../png/foot/kamamber2.png"
import feele from "../../../png/foot/file.png"


const Onfire = ({display,back,func}) => {

  const ru = useSelector(state=>state.one)

  return (
    <>
    <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>{ru==="ru"?"Гриль":"Grill"}</div>
  
    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Камамбер на гриле с брусничным вареньем":"Grilled camembert with lingonberry jam"}</div>
            <div className="wr_img"><img src={kamamber} alt="" /></div>
            <span className='price-pl'>670 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк филе":"fillet steak"}</div>
            <div className="wr_img"><img src={feele} alt="" /></div>
            <span className='price-pl'>2500 ₽</span>
          </div>      


    {onFire.map((el,index)=>(
        
        <div className='item' key={index}tabIndex="0" onClick={func}>
            <span className='label'>{ru==="ru"?el.name:el.name_en}</span>
           
            <span className='price'>{el.price} ₽</span>
          </div>

    ))}
     
    
   


    </div>
    </>
  )
}

export default Onfire