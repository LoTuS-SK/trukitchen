import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./bar.css"
import {tincture,strong,cocktails} from "../../../data/basebar"
import Shop from '../../burger/корзина/Shop';

export const Alobar = ({display,back,add}) => {

    const ru = useSelector(sr=>sr.one)  
    const whisky = strong.filter(el=>el.section==="виски")
    const Cognac = strong.filter(el=>el.section==="коньяк")
    const Gin = strong.filter(el=>el.section==="джин")
    const tequila = strong.filter(el=>el.section==="текила")
    const vodka = strong.filter(el=>el.section==="водка")

    const dispath = useDispatch()
  
    const list = useSelector(state=>state.chek)
    const list_en =useSelector(state=>state.chek_en)
  const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))

  function func(e){
    const target = e.target.textContent
    
    if (ru==="ru"){
      dispath({type:"add",payload:target})
      setcount(list.reduce(function(sum,num){return num.count + sum},0))
    }

    if (ru==="en"){
      dispath({type:"add_en",payload:target})
      setcount(list_en.reduce(function(sum,num){return num.count + sum},0))
    }
  }



  return (
    <>
    <Shop count={count}/>
    <div className={display?"barwarp":"barwarap none"}>
        <div className='btn-back' onClick={back}>←</div>
      <h1 className='bar_h'>{ru==="ru"?"Настойки":"Tincturen"}</h1>
      {tincture.map((el,index)=>(
        <div className='item_b' key={index}>
          
          <span className='label_b' onClick={func}>{ru==="ru"?el.name:el.name_en}</span>
          <div>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'>{el.price} ₽</span>
          </div>
        </div>
        ))}

    <h1 className='bar_h'>{ru==="ru"?"Виски":"Whisky"}</h1>
      {whisky.map((el,index)=>(
        <div className='item_b' key={index}><span className='label' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price_m'>{el.volume}мл/</span>
        <span className='price_m'>{el.price}₽</span>
        </div>
        ))}
      
        <h1 className='bar_h'>{ru==="ru"?"Коньяк":"Cognac"}</h1>
        {Cognac.map((el,index)=>(
          <div className='item_b' key={index} ><span className='label' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'>{el.price} ₽</span>
          </div>
          ))}
          <h1 className='bar_h'>{ru==="ru"?"Джин":"Gin"}</h1>
        {Gin.map(el=>(
          <div className='item_b'><span className='label' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'>{el.price} ₽</span>
          </div>
          ))}
           <h1 className='bar_h'>{ru==="ru"?"Текила":"Tequila"}</h1>
        {tequila.map(el=>(
          <div className='item_b'><span className='label' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'>{el.price} ₽</span>
          </div>
          ))}
           <h1 className='bar_h'>{ru==="ru"?"Водка":"Vodka"}</h1>
        {vodka.map(el=>(
          <div className='item_b'><span className='label' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
          <span className='price_m'>{el.volume}мл/</span>
          <span className='price_m'>{el.price} ₽</span>
          </div>
          ))}
          <h1 className='bar_h'>{ru==="ru"?"Коктели":"Cocktails"}</h1>
        {cocktails.map(el=>(
          <div className='item_b'><span className='label koktel' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
          <span className='price_m'>{el.volume}мл /</span>
          <span className='price_m'> {el.prise} ₽</span>
          </div>
          ))}
        </div>
        </> 
  )
}
