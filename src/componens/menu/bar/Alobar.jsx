import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import "./bar.css"
import {tincture,strong,cocktails} from "../../../data/basebar"


export const Alobar = ({display,display_on,back,add,distic,distic_off}) => {
  
    const list1 = useSelector(state => state.chek)
    const ru = useSelector(sr=>sr.one)  
    const whisky = strong.filter(el=>el.section==="виски")
    const Cognac = strong.filter(el=>el.section==="коньяк")
    const Gin = strong.filter(el=>el.section==="джин")
    const tequila = strong.filter(el=>el.section==="текила")
    const vodka = strong.filter(el=>el.section==="водка")
    const dispatch = useDispatch();
    let arr = []

    function chek(e){
      const target = e.target.textContent
      const cl = e.target.className
      e.target.className = "yes"
      
     
      
      
      if (cl==="yes"){
        e.target.className = "no"
        arr = arr.filter(el=>el!==target)
      } else {
        arr.push(target)
      }
if(list1[list1.length-1].name===("Дигустационный сет/3"||"Digustation set/3)")){
      if(arr.length===3){
       
        
        dispatch({type:"add_tic3",payload:arr})
  const a = document.querySelectorAll(".yes")
  
  console.log(a)
  for (let i = 0; i < a.length; i++) {
     a[i].className = "no"
    
  }
  console.log(a)
        display_on()
        distic_off()
      }
    }   
    if(list1[list1.length-1].name==="Дигустационный сет/5"){
      if(arr.length===5){
        console.log("3")
        console.log(list1[list1.length-1].name)
        dispatch({type:"add_tic3",payload:arr})
     
        distic_off()
        display_on()
      }
    }   
  
  }

  return (
    <>
   <div className={distic?"ticwrap":"none"}>
    {tincture.filter(el=>(
      el.name!=="Дигустационный сет/3"&&el.name!=="Дигустационный сет/5")).map((a)=>(
      <div onClick={chek} className='no'>{a.name}</div>
    ))}
    </div>
  
    
    <div className={display?"barwarp":"barwarap none"}>
   

   





        <div className='btn-back' onClick={back}>←</div>
      <h1 className='bar_h'>{ru==="ru"?"Настойки":"Tincturen"}</h1>
      {tincture.map((el,index)=>(
       
        <div className='item_b' key={index}>
          
          <span className='label_b' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
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
