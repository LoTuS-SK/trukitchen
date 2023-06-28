import React,{useState} from 'react'
import "../snaks/snaks"
//import { garnish } from '../../../data/database'
import {useSelector,useDispatch} from 'react-redux'
import Shop from '../../burger/корзина/Shop'
import ovoshi from "../../../png/foot/ovoshi.png"
import kartoshka from "../../../png/foot/potato.png"
import { Link } from 'react-router-dom'

const Garnish = () => {

  const ru = useSelector(state=>state.one)

  const dispath = useDispatch()

  const list = useSelector(state=>state.chek)
  const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))

  function func(e){
    const target = e.target.textContent
    
    if (ru==="ru"){
      dispath({type:"add",payload:target})
    }

    if (ru==="en"){
      dispath({type:"add_en",payload:target})
    }
    
    setcount(list.reduce(function(sum,num){return num.count + sum},0))

    
    //console.log("количество = " + count)
  }
  

  return (
    <>
    <Link to="/menu" className='btn-back new ' >←</Link>
    <Shop count={count}/>
    <div className="skakes">
    {/* <div className='btn-back' onClick={back}>←</div> */}
    <div className='snakes-item'>{ru==="ru"?'Гарниры':"side dishes"}</div>

    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Спаржа":"Asparagus"}</div>
            {/* <div className="wr_img"><img src={utka} alt="" /></div> */}
            <span className='price-pl'>80 г / 650 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Сезонные овощи, запечённые в дровяной печи с травами и Пармезаном":"Seasonal vegetables baked in a wood-fired oven with herbs and Parmesan"}</div>
            <div className="wr_img"><img src={ovoshi} alt="" /></div>
            <span className='price-pl'>180 г / 490 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Молодой картофель из печи, томлёный с розмарином":"New potatoes from the oven, stewed with rosemary"}</div>
            <div className="wr_img"><img src={kartoshka} alt="" /></div>
            <span className='price-pl'>190 г / 490 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Шпинат припущенный":"Spinach poached"}</div>
            {/* <div className="wr_img"><img src={utka} alt="" /></div> */}
            <span className='price-pl'>90 г / 650 ₽</span>
          </div>
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Картофельное пюре на деревенских сливках":"Rustic cream mashed potatoes"}</div>
            {/* <div className="wr_img"><img src={utka} alt="" /></div> */}
            <span className='price-pl'>200 г / 350 ₽</span>
          </div>
    
    {/* {garnish.map(el=>(
        <div className='item' tabIndex="0" onClick={func}><span className='label'>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))} */}
    </div>  
    
    </>
  )
}

export default Garnish