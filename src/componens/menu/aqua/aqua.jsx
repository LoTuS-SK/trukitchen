import React from 'react'
import "../snaks/snaks"
//import { aqua } from '../../../data/database'
import { useSelector } from 'react-redux'

import egi from "../../../png/foot/egi.png"
import usrici from "../../../png/foot/устрица.png"
import krevetki from "../../../png/foot/krevetki.png"
import grebesh from "../../../png/foot/grebeshek.png"

const Aqua = ({display,func,back}) => {

  const ru = useSelector(state=>state.one)
  
  return (
    <>
     <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>Аквариум</div>

    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Морской ёж":"Sea urchin"}</div>
            <div className="wr_img"><img src={egi} alt="" /></div>
            <span className='price-pl'>1шт / 670 ₽</span>
          </div>
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Хасанская устрица":"Khasan oyster"}</div>
            {/* <div className="wr_img"><img src={egi} alt="" /></div> */}
            <span className='price-pl'>1шт / 320 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Ромаринская устрица":"Romarin oyster"}</div>
            {/* <div className="wr_img"><img src={egi} alt="" /></div> */}
            <span className='price-pl'>1шт / 320 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Императорская устрица":"Imperial oyster"}</div>
            {/* <div className="wr_img"><img src={egi} alt="" /></div> */}
            <span className='price-pl'>1шт / 320 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Устрица Касабланка":"Oyster Casablanca"}</div>
            {/* <div className="wr_img"><img src={egi} alt="" /></div> */}
            <span className='price-pl'>1шт / 420 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Королевская устрица":"Royal oyster"}</div>
            {/* <div className="wr_img"><img src={egi} alt="" /></div> */}
            <span className='price-pl'>1шт / 420 ₽</span>
          </div> 

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Устрица Розовая Джоли":"Oyster Pink Jolie"}</div>
            <div className="wr_img"><img src={usrici} alt="" /></div>
            <span className='price-pl'>1шт / 420 ₽</span>
          </div> 

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Магаданские креветки":"Magadan shrimps"}</div>
            <div className="wr_img"><img src={krevetki} alt="" /></div>
            <span className='price-pl'>1590 ₽</span>
          </div> 

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Сахалинский гребешок":"Sakhalin scallop"}</div>
            <div className="wr_img"><img src={grebesh} alt="" /></div>
            <span className='price-pl'>1шт / 590 ₽</span>
          </div> 

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Спизула":"Spizula"}</div>
            {/* <div className="wr_img"><img src={grebesh} alt="" /></div> */}
            <span className='price-pl'>1шт / 490 ₽</span>
          </div> 
    
    
    {/* {aqua.map(el=>(
        <div className='item' tabIndex="0" onClick={func}><span className='label'>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))} */}


    </div>
    </>
  )
}

export default Aqua