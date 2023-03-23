import React, { useState } from 'react'
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
// import Burger from '../burger/Burger';
import Snaks from './snaks/snaks';
import "../menu/menu.css"



const Menu = () => {

const [chek_list,set_chek_list]=useState([])
const[ display_snakes, set_display_snakes ]= useState(false)
const [display_menu,set_display_menu] = useState(true)


const menu_eat = ["Закуски","Салаты","Горячие блюда","Супы","Гриль","Аквариум","Печь","Гарниры","Напитки"]

  const arr = [
    {
      name:"Sergey",
      age:36
    }
  ]

const arrst = JSON.stringify(arr)

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


const query = `/salat?name=${JSON.stringify(chek_list)}`


  return (
    <>
  
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