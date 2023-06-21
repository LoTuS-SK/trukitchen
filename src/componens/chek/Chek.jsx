import React, { useEffect, useState} from 'react'
import './chek.css'
// import { useSearchParams } from "react-router-dom"
// import { snakes } from '../../data/database'
import { useSelector , useDispatch} from 'react-redux'
import menu from "../../png/menu2.png"
import { Link } from "react-router-dom";
import logo from "../../img/Asset-1.png"
import send from "../../png/send.png"


const Сhek = () => {
  const list1 = useSelector(state => state.chek).filter(el=>el.count!==0)
  const list2 = useSelector(state => state.chek_en).filter(el=>el.count!==0)
  const lang = useSelector(state=>state.one)
  // const [queryParameters] = useSearchParams()
  // const str = decodeURI(queryParameters.get("name"))
  // const arr = JSON.parse(str)
  console.log(lang)
  
 
  
  const [list3,setlist] = useState([])
  const [sum2,setsum] = useState(0)
  const [ru,setru] = useState(true)
  
  
  

  useEffect(()=>{
    if (lang==="ru"){ 
      setlist([...list1])
      setru(true) 
    }
    if (lang==="en"){
       setlist([...list2])
       setru(false)
      }
    
    
  
  },[])
  console.log(list3)
  const sum = list3.reduce(function(sum,num){
    return (num.price * num.count) + sum
  },0)

  
  






const dispath = useDispatch()

function click(e){
  
  // const target = e.target.dataset.id
  // list.forEach(element => {
  //   if(element.name===target){
      
  //     let num = element.count
  //     element.count = num + 1
      
  //   } 
   // });
  // setlist([...list])
  // setsum(list.reduce(function(sum,num){
  //   return (num.price * num.count) + sum
  // },0))


}

function click2(e) {
   const target = e.target.textContent
   
   list3.forEach(el=>{
    if((el.name)===target){
      console.log(target)
      dispath({type:"delone",payload:target})
      //setsum(list3.reduce(function(sum,num){return (num.price * num.count) + sum},0))
  }})

  list3.forEach(el=>{
    if((el.name_en)===target){
      console.log(target)
      dispath({type:"delone_en",payload:target})
      //setsum(list3.reduce(function(sum,num){return (num.price * num.count) + sum},0))
  }})





    list3.forEach(el=>{
      if(el.count===0){
        console.log("0")
        const arr = list3.filter(el=>el.count!==0)
        setlist(arr)
        console.log(list3)
        console.log(arr)
        dispath({type:"del-all",payload:arr})
      }

      //setlist(...[list])
    })
   // setlist([...list3])
  }




const bot = {
  token:"6103840895:AAHX2THv4-mjtvyx0wQITN-PN9i7eOR3AAA",
  chatID:"-985566494",
  name:"t.me/chikentruebot."
}




function send2(){
 //console.log("yes")
 
 animesend()
 let message = ""

 list3.forEach(element=>{
  message += `${element.name} - ${element.count} `
  message +='                                           '
 })
 //const message  = JSON.stringify(list)
  fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${message}`,{method:"GET"})


}

const [activ,setactiv]= useState(true) 
function animesend(){
  if(activ) {
    setactiv(false)
    setTimeout(()=>setactiv(true),1000)
  } 
  
}



  return (
    <div >
      <Link to={"/"} className='back'>
        
        <img src={menu} alt="" className='menu-back'/>
       
      </Link>
      <div className="wr_logo_ch"><img className='logo-ch-2' src={logo} alt=""/></div>
      {list3.length>0 && <h1 className='zakaz'>Ваш заказ</h1>}
      <div className="test">{list3.map(state=>(
        <div className='list_ch'>
           <div className='name' onClick={click2}>{ru?state.name:state.name_en}</div>
           <span className='count'onClick={click} data-id={state.name}>{state.count}</span>
           <div className='prise'><div>{state.count * state.price} ₽</div></div>      
        </div> 
      ))}
      {list3.length>0 && <div className="acc"><span className='sum'>Итого: {sum} ₽</span></div>}
      {list3.length===0 && <Link to={"/"} ><h1 className='zakaz'>Выберите блюдо</h1></Link>}
      </div>
      {list3.length>0 && <div className='wrap_send'>
        <img src={send} alt="" className={activ?'send':"send send_active"} onClick={send2}/> </div>
        }
    </div>
  )
}

export default Сhek


