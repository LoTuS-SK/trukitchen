import React, { useState} from 'react'
import './chek.css'
// import { useSearchParams } from "react-router-dom"
// import { snakes } from '../../data/database'
import { useSelector , useDispatch} from 'react-redux'
import menu from "../../png/menu2.png"
import { Link } from "react-router-dom";
import logo from "../../img/Asset-1.png"

//import { useTest } from "../../componens/hooks/usechek"


const Сhek = () => {
  const list1 = useSelector(state => state.chek).filter(el=>el.count!==0)
  const list2 = useSelector(state => state.chek_en).filter(el=>el.count!==0)
  
  
  
  //const lang = useSelector(state=>state.one)
  const table = useSelector(state=>state.qrcode)
  
  // const [queryParameters] = useSearchParams()
  // const str = decodeURI(queryParameters.get("name"))
  // const arr = JSON.parse(str)
  //console.log(lang)
  
  const sum1 = list1.reduce(function(sum,num){
    return (num.price * num.count) + sum
  },0)

  const sum2 = list2.reduce(function(sum,num){
    return (num.price * num.count) + sum
  },0)

 
const dispath = useDispatch()

function click(e){
  
  const target = e.target.textContent

  list2.forEach(el=>{
    if((el.name_en)===target){
      
      console.log(list2)
      dispath({type:"delone_en",payload:target})
      
      //setsum(list3.reduce(function(sum,num){return (num.price * num.count) + sum},0))
  }})
  

  list2.forEach(el=>{
    if(el.count===0){
      const arr = list2.filter(el=>el.count!==0)
      dispath({type:"del-all",payload:arr})
    }
  }
  
  )

  

}

function click2(e) {
   const target = e.target.textContent
   
   list1.forEach(el=>{
    if((el.name)===target){
      //console.log(target)
      dispath({type:"delone",payload:target})
      //setsum(list3.reduce(function(sum,num){return (num.price * num.count) + sum},0))
  }})


    list1.forEach(el=>{
      if(el.count===0){
        const arr = list1.filter(el=>el.count!==0)
        dispath({type:"del-all",payload:arr})
      }
    }
    )
    

}


const bot = {
  token:"6103840895:AAHX2THv4-mjtvyx0wQITN-PN9i7eOR3AAA",
  chatID:"-985566494",
  name:"t.me/chikentruebot."
}




function send2(){
 //console.log("yes")
 setdis(false)
 animesend()
 console.log(table.table)
 let message = " "
 message += `стол - ${table.table}`
 message +='                                              '
 message +=`офицант  - ${table.name}`
 message +='                                              '

 list1.forEach(element=>{
  message += `${element.name} - ${element.count} `
  message +='                                           '
 })
 list2.forEach(element=>{
  message += `${element.name} - ${element.count} `
  message +='                                           '
 })

 //6146285866:AAEzIDl9PSjxpBWjtS82qioTpC_cgmVG5q4

 //const message  = JSON.stringify(list)
  fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${message}`,{method:"GET"})


}

const [activ,setactiv]= useState(true) 
const [dis,setdis]=useState(true)
function animesend(){
  if(activ) {
    setactiv(false)
    setTimeout(()=>setactiv(true),1000)
  } 
  
}


  return (
    <div> 
      <Link to={`/?name=${table.name}&table=${table.table}`} className='back'>
        
        <img src={menu} alt="" className='menu-back'/>
       
      </Link>
      <div className="wr_logo_ch"><img className='logo-ch-2' src={logo} alt=""/></div>
      <div className={dis?"true":"none"}>
      {list1.length===0 && list2.length===0 && <div className="button"><Link to={"/"} className='back_li'>Выбирите блюдо</Link></div>}
      {list1.length>0 && <h1 className='zakaz'>Ваш заказ</h1>}
      {list2.length>0 && <h1 className='zakaz'>You choise</h1>}
      <div className="test">
        
        {list1.length>0 && list1.map(state=>(
        <div className='list_ch'>
           <div className='name' onClick={click2}>{state.name}</div>
           <span className='count' data-id={state.name}>{state.count}</span>
           <div className='prise'><div>{state.count * state.price} ₽</div></div>      
        </div> 
      ))}

     {list2.length>0 && list2.map(state=>(
        <div className='list_ch'>
           <div className='name' onClick={click} >{state.name_en}</div>
           <span className='count'  data-id={state.name_en}>{state.count}</span>
           <div className='prise'><div>{state.count * state.price} ₽</div></div>      
        </div> 
      ))}
      {/* {list3.map(state=>(
        <div className='list_ch'>
           <div className='name' >{state.name}</div>
           <span className='count'  data-id={state.name}>{state.count}</span>
           <div className='prise'><div>{state.count * state.price} ₽</div></div>      
        </div> 
      ))} */}
      {list1.length>0 && <div className="acc"><span className='sum'>Итого: {sum1} ₽</span></div>}
      {list2.length>0 && <div className="acc"><span className='sum'>count: {sum2} ₽</span></div>}
      {/* {list3.length===0 && <Link to={"/"} ><h1 className='zakaz'>Выберите блюдо</h1></Link>} */}
      
    

{list1.length>0 &&<div className="wr_button"><div to="/menu"><div className="button" onClick={send2}>Отправить </div></div></div>}
          </div>
      </div> 
     {table.name && <h2 className={dis?'none':"logo3"}> Заказ отправлен</h2>}

  </div>
  )
}

export default Сhek


