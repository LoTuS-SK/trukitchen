import React, { useState} from 'react'
import './chek.css'
 import { useLocation } from "react-router-dom"
// import { snakes } from '../../data/database'
import { useSelector , useDispatch} from 'react-redux'
import menu from "../../png/menu2.png"
import { Link } from "react-router-dom";
import logo from "../../img/Asset-1.png"

//import { useTest } from "../../componens/hooks/usechek"


const Сhek = () => {

  //const ru = useSelector(state=>state.one)
  const list1 = useSelector(state => state.chek).filter(el=>el.count!==0)
  const list2 = useSelector(state => state.chek_en).filter(el=>el.count!==0)
  //const chttic = useSelector(state => state.chtic)

  
  const [list_ru,setlist_ru] = useState([...list1])
  const [list_en,setlist_en] = useState([...list2])

  const dispath = useDispatch()
  
  //const lang = useSelector(state=>state.one)
  const table = useSelector(state=>state.qrcode)
  
  // const [queryParameters] = useSearchParams()
  // const str = decodeURI(queryParameters.get("name"))
  // const arr = JSON.parse(str)
  //console.log(lang)
  
  const sum1 = list_ru.reduce(function(sum,num){
    return (num.price * num.count) + sum
  },0)

  const sum2 = list_en.reduce(function(sum,num){
    return (num.price * num.count) + sum
  },0)

 


function click_ru(e){
  
  const target = e.target.textContent
 const a =  list1[list1.findIndex(el=>el.name===target)].count
 list1[list1.findIndex(el=>el.name===target)].count = a -1
 dispath({type:"chek",payload:list1})
 
 const filter = list1.filter(el=>el.count!==0)
setlist_ru([...filter])

if (filter.length===0){
  dispath({type:"del-all"})
}
 
 
 
 

 


 // console.log(list1[list1.findIndex(el=>el.name===target)].count)
}

function click_en(e){
  
  const target = e.target.textContent
  const a =  list2[list2.findIndex(el=>el.name_en===target)].count
  list2[list2.findIndex(el=>el.name_en===target)].count = a -1
  
  const filter = list2.filter(el=>el.count!==0)
 setlist_en([...filter])
  
}




const bot = {
  token:"6103840895:AAHX2THv4-mjtvyx0wQITN-PN9i7eOR3AAA",
  chatID:"-985566494",
  name:"t.me/chikentruebot."
}




async function send2(){
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
  if(element.name==="Дигустационный сет/3"){
    message += `${element.name} - 1 `
    message +='                                              '
    element.tri.forEach(el=>{
      message +='                                              '
      message += `${el}`
    })
    message +='                                              '
    return 
  }

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
//  const server = "http://localhost:5001/pdf"
 
//   fetch(server,{
//     method:"POST",
//     headers: {
//       'Content-Type': 'application/json'
//        //'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     credentials: 'same-origin',
//     mode: 'cors',
//     body:JSON.stringify(list1)
//   }).then(data=>{console.log(data)})

// const mess = await fetch("http://localhost:5001/message",{method:"GET"})
// const text = await mess.json()
// console.log(text)
}

const [activ,setactiv]= useState(true) 
const [dis,setdis]=useState(true)
function animesend(){
  if(activ) {
    setactiv(false)
    setTimeout(()=>setactiv(true),1000)
  } 
  
}
const location = useLocation()

console.log(location.pathname)
  return (
    <div className='page'> 
      <Link to={`/?name=${table.name}&table=${table.table}`} className='back'>
        
        <img src={menu} alt="" className='menu-back'/>
       
      </Link>
      <div className="wr_logo_ch"><img className='logo-ch-2' src={logo} alt=""/></div>
      <div className={dis?"true":"none"}>
        {list_ru.length===0 && list_en.length===0 && <div className="button"><Link to={"/"} className='back_li'>Выберите блюдо</Link></div>}
        {list_ru.length>0 && <h1 className='zakaz'>Ваш заказ</h1>}
        {list_en.length>0 && <h1 className='zakaz'>You choise</h1>}
      <div className="test">
        
        {list_ru.length>0 && list_ru.map(state=>(
       
              <div className="wr">
               <div className="list_ch">
                <div className='name' onClick={click_ru}>{state.name}</div>
                <span className='count' data-id={state.name}>{state.count}</span>
                <div className='prise'>
                  <div>{state.count * state.price} ₽</div>      
                </div>
                </div>
                <div className='wr_tic'>
               {state.tri?state.tri.map(el=>(
                  <div className="tica">{el}</div>
                )):""}
                </div>  
                </div>
             
            
              
                
        
      ))}
      
     {list_en.length>0 && list_en.map((state,index)=>(
        <div className='list_ch' key={index}>
           <div className='name' onClick={click_en} >{state.name_en}</div>
           <span className='count'  data-id={state.name_en}>{state.count}</span>
           <div className='prise'><div>{state.count * state.price} ₽</div>
           </div> 

        </div> 
        
      ))}
     
      {list_ru.length>0 && <div className="acc"><span className='sum'>Итого: {sum1} ₽</span></div>}
      {list_en.length>0 && <div className="acc"><span className='sum'>count: {sum2} ₽</span></div>}
      
    
      {list_en.length>0 &&<div className="wr_button"><div to="/menu"><div className="button" onClick={send2}>Отправить </div></div></div>}
{list_ru.length>0 &&<div className="wr_button"><div to="/menu"><div className="button" onClick={send2}>Отправить </div></div></div>}
          </div>
      </div> 
     
     {table.name && <h2 className={dis?'none':"logo3"}> Заказ отправлен</h2>}

  </div>
  )
}

export default Сhek


