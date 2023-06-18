import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
//import QRCode from "react-qr-code";
// import Burger from '../burger/Burger';
import logo from "../../img/Asset-1.png"
//import Chek from  "../../componens/chek/Chek"
import chekimg from "../../png/kor.png"
import { useSelector } from 'react-redux'
import Snaks from './snaks/snaks';
import Salat from './salats/salat'; 
import Hot from './hot/hot';
import Soup from "../menu/soup/suop"
import Onfire from './onfire/onfire';
import Aqua from './aqua/aqua';
import Bake from './bake/bake';
import Garnish from './garnish/garnish';
import Sweets from './sweets/sweets'; 

import  Bar  from './bar/bar';


import "../menu/menu.css"
import { useDispatch } from 'react-redux';
//import { snakes } from "../../data/database"




const Menu = () => {

const [count,setcount] = useState(0)

const [display_snakes,set_display_snakes ] = useState(false)
const [display_salat,set_display_salat] =useState(false)
const [display_menu,set_display_menu] = useState(true)
const [display_hot,set_display_hot] = useState(false)
const [display_soup,set_display_soup]= useState(false)
const [display_fire,set_display_fire]= useState(false)
const [display_aqua,set_display_aqua]= useState(false)
const [display_bake,set_display_bake]= useState(false)
const [display_Garnish,set_display_Garnish]= useState(false)
const [dispaly_bar,set_display_bar] = useState(false)
const [dispaly_sweets,set_display_sweets] = useState(false)

const dispath = useDispatch()

const menu_eat = ["Закуски","Салаты","Горячие блюда","Супы","Гриль","Аквариум","Печь","Гарниры","Десерты","Банкет","Бар",]


// function parser1(){
  
// let list = []
// for( let elem of snakes){

//   for(let elem2 of chek_list){
//       if (elem.name === elem2.name){
//          let obj = {id:elem.id,count:elem2.count}
//         list.push(obj)
//       } 
      
//       }
      
//   }
//   set_parser_list([...list])
// } 

// function test(){
//   set_parser_list([...parser1()])

// }


const click =(e)=>{
  
  const target = e.target.textContent
  const url = encodeURI(target)
  console.log(url)
  
  switch (target) {
    case "Закуски":
      set_display_snakes(true)
      set_display_menu(false)
      
        break;
      case "Салаты":
        
        set_display_salat(true)
        set_display_menu(false)
      
      break;
      case "Горячие блюда":
        set_display_hot(true)
        set_display_menu(false)
      break;
      case "Супы":
        set_display_soup(true)
        set_display_menu(false)
      break;
      case "Гриль":
        set_display_fire(true)
        set_display_menu(false)
      break;
      case "Аквариум":
        set_display_aqua(true)
        set_display_menu(false)
      break;
      case "Печь":
        set_display_bake(true)
        set_display_menu(false)
      break;
      case "Гарниры":
        set_display_Garnish(true)
        set_display_menu(false)
      break;
      case "Бар":
        
        set_display_menu(false)
        set_display_bar(true)
      break;
      case "Десерты":
        set_display_sweets(true)
        set_display_menu(false)
        
      break;
  
  
  
    default:
      break;
  }
  
  
}

function add(e){
  
  const target = e.target.textContent
  
 
  dispath({type:"add",payload:target})
 
  if(list3.length===1){
    setcount(list3[0].count)
    } 
    if(list3.length>1){
     const num = list3.reduce(function(sum,num){
      return num.count + sum
     },0)
      
      setcount(num)
      } 
        
    


 
  
  
}

function back(){ 
  set_display_menu(true)
  set_display_snakes(false)
  set_display_salat(false)
  set_display_hot(false)
  set_display_soup(false)
  set_display_fire(false)
  set_display_aqua(false)
  set_display_bake(false)
  set_display_Garnish(false)
 
  set_display_bar(false)
  set_display_sweets(false)
}

// function chek(){
//   console.log(query)
// }

//const query = `https://teal-lamington-08734d.netlify.app/salat?name=${JSON.stringify(parser_list)}`
//const query = `http://localhost:3001/salat?name=${chek_list}`
//const query = "https://truekitchen.netlify.app/"
 
// function display_qr(){
//   setqr(false)
// }
function yes(){
  dispath({type:"del"})
}
const list3 = useSelector(state => state.chek)
console.log(list3)


function display_bar_off(){
  set_display_bar(false)
}

function display_bar_on(){
  set_display_bar(true)
}

useEffect(()=>{
  if(list3.length===1){
    setcount(list3[0].count)
    } 
    if(list3.length>1){
     const num = list3.reduce(function(sum,num){
      return num.count + sum
     },0)
      
      setcount(num)
      } 
},[])




  return (
    <>
   
    
   
   <Link to="/chek"><img  className='chek' src={chekimg} alt=""/>
   {list3.length>0 && <div className="cir">{count}</div>}
   </Link>
    <Snaks display={display_snakes} func={add} back={back}/>
    <Salat display={display_salat} func={add} back={back}/>
    <Hot display={display_hot} func={add} back={back}/>
    <Soup display={display_soup} func={add} back={back}/>
    <Onfire display={display_fire} func={add} back={back}/>
    <Aqua display={display_aqua} func={add} back={back}/>
    <Bake display={display_bake} func={add} back={back}/>
    <Garnish display={display_Garnish} func={add} back={back}/>
    <Sweets display={dispaly_sweets} func={add} back={back}/>
    
    <Bar display={dispaly_bar} func={add} back={back} display_off={display_bar_off} display_on={display_bar_on} />
    
    
    <div className={display_menu?"wrap":"wrap none"}>
    <img className='logo' src={logo} alt="" onClick={yes}/>
   
    
  
        {menu_eat.map((el)=>(<div className='menu-items' onClick={click}>{el}</div>))}
        </div>   
          
    {/* <div className={disqr?'qrcode-wrap':"qrcode-wrap none"} onClick={display_qr}>
         
                <QRCode
                    
                    size={256}
                    style={{ height: "auto", maxWidth: "300", width: "100%"}}
                    value={query}
                    iewBox={`0 0 500 500`}
                  />
          
          </div>
     */}
    </>
  )
}

export default Menu