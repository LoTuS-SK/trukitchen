import React, { useState} from 'react'
import './chek.css'
// import { useSearchParams } from "react-router-dom"
// import { snakes } from '../../data/database'
import { useSelector , useDispatch} from 'react-redux'
import menu from "../../png/menu2.png"
import { Link } from "react-router-dom";
import logo from "../../img/Asset-1.png"
import send from "../../png/send.png"


const Сhek = () => {
  const list = useSelector(state => state.chek).filter(el=>el.count!==0)
  // const [queryParameters] = useSearchParams()
  // const str = decodeURI(queryParameters.get("name"))
  // const arr = JSON.parse(str)
  console.log(list)


const sum = list.reduce(function(sum,num){
  return (num.price * num.count) + sum
},0)

const [sum2,setsum]= useState(sum)
const [list2,setlist] =useState([...list])

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
   
   list.forEach(el=>{
    if(el.name===target){
      console.log(target)
      dispath({type:"delone",payload:target})
      setsum(list.reduce(function(sum,num){return (num.price * num.count) + sum},0))
  }})

    list.forEach(el=>{
      if(el.count===0){
        console.log("0")
        const arr = list.filter(el=>el.count!==0)
        //setlist([...arr])
        console.log(arr)
        dispath({type:"del-all",payload:arr})
      }

      //setlist(...[list])
    })
    setlist(...[list])
  }


const message  = JSON.stringify(list)

const bot = {
  token:"6103840895:AAHX2THv4-mjtvyx0wQITN-PN9i7eOR3AAA",
  chatID:"",
  name:"t.me/chikentruebot."
}




function send2(){
 console.log("yes")

 fetch(`https://api.telegram.org/bot6103840895:AAHX2THv4-mjtvyx0wQITN-PN9i7eOR3AAA/sendMessage?chat_id=-985566494&text=${message}`,{method:"GET"})


}




  return (
    <div >
      <Link to={"/"} className='back'>
        
        <img src={menu} alt="" className='menu-back'/>
       
      </Link>
      <div className="wr_logo_ch"><img className='logo-ch-2' src={logo} alt=""/></div>
      {list2.length>0 && <h1 className='zakaz'>Ваш заказ</h1>}
      <div className="test">{list2.map(state=>(
        <div className='list_ch'>
           <div className='name' onClick={click2}>{state.name}</div>
           <span className='count'onClick={click} data-id={state.name}>{state.count}</span>
           <div className='prise'><div>{state.count * state.price} ₽</div></div>      
        </div> 
      ))}
      {list2.length>0 && <div className="acc"><span className='sum'>Итого: {sum2} ₽</span></div>}
      {list2.length===0 && <Link to={"/"} ><h1 className='zakaz'>Выберите блюдо</h1></Link>}
      </div>
      <img src={send} alt="" className='menu-back' onClick={send2}/>
    </div>
  )
}

export default Сhek