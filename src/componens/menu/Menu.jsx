import React, { useState } from 'react'
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
// import Burger from '../burger/Burger';
import Snaks from './snaks/snaks';
import "../menu/menu.css"
import { snakes } from "../../data/database"



const Menu = () => {

const [parser_list,set_parser_list]=useState([])
const [chek_list,set_chek_list]=useState([])
const[ display_snakes, set_display_snakes ]= useState(false)
const [display_menu,set_display_menu] = useState(true)



const menu_eat = ["Закуски","Салаты","Горячие блюда","Супы","Гриль","Аквариум","Печь","Гарниры","Напитки"]


function parser1(){
  
  let list = []
for( let elem of snakes){

  for(let elem2 of chek_list){
      if (elem.name === elem2.name){
         let obj = {id:elem.id,count:elem2.count}
        list.push(obj)
      } 
      
      }
      
  }
  return list
} 

function test(){
  set_parser_list([...parser1()])

}


const click =(e)=>{
 
  const target = e.target.textContent
  set_display_snakes(true)
  set_display_menu(false)
  console.log(target)
}

function add(e){
  const target = e.target.textContent
  
  if (chek_list.length===0){
    let obj = {name:target,count:1}
    set_chek_list([obj])
    console.log(chek_list)
  }
  console.log(chek_list)



if (chek_list.length>=1){
  
  if(chek_list.some(el=>el.name === target)){
    let count = chek_list[chek_list.findIndex(el=>el.name===target)].count
    chek_list[chek_list.findIndex(el=>el.name===target)].count=count+1
    set_chek_list(chek_list)
  } else
  {
    let obj = {name:target,count:1}
    set_chek_list([obj,...chek_list])
  }
}
}

function back_snakes(){ 
  set_display_menu(true)
  set_display_snakes(false)
}

// function chek(){
//   console.log(query)
// }

const query = `https://teal-lamington-08734d.netlify.app/salat?name=${JSON.stringify(parser_list)}`
//const query = `http://localhost:3001/salat?name=${JSON.stringify(parser_list)}`

 





  return (
    <>
   
    <button onClick={test}>test</button>
    <Snaks display={display_snakes} func={add} back={back_snakes}/>
    
    <div className={display_menu?"wrap":"wrap none"}>
    {/* <Burger/> */}
    
    
      
  
        {menu_eat.map((el)=>(<div className='menu-items' onClick={click}>{el}</div>))}
        </div>   
          
    <div className='qrcode-wrap'>
         <Link to={query}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100", width: "100%" }}
                    value={query}
                    iewBox={`0 0 500 500`}
                  />
            </Link> 
          </div>
    
    </>
  )
}

export default Menu