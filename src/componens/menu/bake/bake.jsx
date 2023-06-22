import React from 'react'
//import { bake } from '../../../data/database'
import "../snaks/snaks.css"
import paltus from "../../../png/foot/paltus.png"
import strelyd from "../../../png/foot/str3.png"
import koz4 from "../../../png/foot/koz5.png"

const paltus2 = require("../../../png/foot/pirog_paltus 2.png")
const gus = require("../../../png/foot/gus.png")

const pirog_olen = require("../../../png/foot/pirog-olen.png")


const obj =  {id:4,name:"Беломорский палтус с тыквенным пюре и молодым горошком",price:1340,weight:300,section:"печь"}

const bake2 = [
  {id:42,name:"Пирог с камчатским крабом",price:990,weight:400,section:"печь"},
  //{id:43,name:"Пирог с дальневосточным палтусом, налимьей печенью и обжаренным луком",price:960,weight:420,section:"супы"},
  {id:44,name:"Пирог с фермерской страчателлой",price:590,weight:400,section:"печь"},
  //{id:45,name:"Беломорский палтус с тыквенным пюре и молодым горошком",price:1340,weight:300,section:"печь"},
  {id:46,name:"Растомлённая утиная ножка с пюре из сельдерея",price:290,weight:920,section:"печь"},
  //{id:47,name:"Пирог с копчёным оленем на подушке из грибного рагу",price:890,weight:430,section:"печь"},
  //{id:48,name:"Мясо молодого козлёнка с ароматными травами и молодым картофелем",price:1890,weight:400,section:"печь"},
  //{id:49,name:"Гусь с Палехской фермы томлёный с черносливом",price:1290,weight:450,section:"печь"},
  {id:50,name:"Мозговая косточка из печи",price:370,weight:450,section:"печь"},
  //{id:51,name:"Стерлядь",price:2500,weight:700,section:"печь"},
  {id:52,name:"Пирог с рапаной",price:790,weight:450,section:"печь"},
  
] 







const Bake = ({display,func,back}) => {
  return (
    <>
    <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>Печь</div>
    
    {bake2.map(el=>(
        <div className='item' key={el.id}tabIndex="0" onClick={func}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
       
    
    
    ))}
     <div className='item_pal'>
        
            
            <span className='label' onClick={func} tabIndex="0" >{obj.name}</span>
            <div className="wr_img"><img src={paltus} alt="" /></div>
            <div className='price-pl'>{obj.price} ₽</div>
            
          </div>
          <div className='item_pal'>
        
            
        <span className='label' onClick={func}>Пирог с копчёным оленем на подушке из грибного рагу</span>
        <div className="wr_img"><img src={pirog_olen} alt="" /></div>
        <div className='price-pl'>2500 ₽</div>
        
      </div>
          <div className='item_pal'>
        
            
            <span className='label' onClick={func}>Гусь с Палехской фермы томлёный с черносливом</span>
            <div className="wr_img"><img src={gus} alt="" /></div>
            <div className='price-pl'>2500 ₽</div>
            
          </div>
          <div className='item_pal'>
        
            
        <span className='label' onClick={func}>Стерлядь</span>
        <div className="wr_img"><img src={strelyd} alt="" /></div>
        <div className='price-pl'>2500 ₽</div>
        
      </div>
          <div className='item_pal'>
        
            
        <span className='label' onClick={func}>Пирог с дальневосточным палтусом, налимьей печенью и обжаренным луком</span>
        <div className="wr_img"><img src={paltus2} alt="" /></div>
        <div className='price-pl'>2500 ₽</div>
        
      </div>
          <div className='item_pal'>
        
            
        <span className='label' onClick={func}>Мясо молодого козлёнка с ароматными травами и молодым картофелем</span>
        <div className="wr_img"><img src={koz4} alt="" /></div>
        <div className='price-pl'>2500 ₽</div>
        
      </div>
    
    
    </div>
   
    </>
  )
}

export default Bake