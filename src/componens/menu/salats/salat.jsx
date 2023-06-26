import React from 'react'
//import strelka from "../../../png/strelka.png"
import "./salat.css"
import {salat} from "../../../data/database"
import { useSelector } from 'react-redux'
import cesar from "../../../png/foot/cesar.png"
import svekla from "../../../png/foot/svekla.png"
import burat from "../../../png/foot/burata.png"
import печень  from "../../../png/foot/печень.png"


const Salat = ({display,func,back}) => {

  const ru = useSelector(state=>state.one)
  return (
    <>
    
    <div className={display?"salat":"none"}>
    {/* <div className='strelka' onClick={back}><img src={strelka} alt="" /></div> */}
    <div className='btn-back' onClick={back}>←</div>
    <div className={display?'snakes-item':"none"} >{ru==="ru"?"Салаты":"Salads"}</div>
    
    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Цезарь с цыпленком":"Caesar with chicken"}</div>
            <div className="wr_img"><img src={cesar} alt="" /></div>
            <span className='price-pl'>200г / 670 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Салат с печёной свеклой, авокадо, сладкими томатами и кедровым орехом":"Salad with baked beets, avocado, sweet tomatoes and pine nuts"}</div>
            <div className="wr_img"><img src={svekla} alt="" /></div>
            <span className='price-pl'>250г / 470 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Буррата со сладкими томатами":"Burrata with sweet tomatoes"}</div>
            <div className="wr_img"><img src={burat} alt="" /></div>
            <span className='price-pl'>220 г / 850 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Утиная печень со шпинатом и медово- горчичной заправкой":"Duck liver with spinach and honey mustard dressing"}</div>
            <div className="wr_img"><img src={печень} alt="" /></div>
            <span className='price-pl'>200 г / 690 ₽</span>
          </div>




    {salat.map((el,index)=>(
        <div className='item' key={index} tabIndex="0" onClick={func}><span className='label'>{ru ==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    </>
    
  )
}

export default Salat