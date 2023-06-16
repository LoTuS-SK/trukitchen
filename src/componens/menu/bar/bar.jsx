import React, { useState } from 'react'
import "./bar.css"
import imgbar from "../../../png/bar.png"
import strelka from "../../../png/strelka.png"
import Vine from "./vine"
import { Barnapitki } from './barnapiiki'
import { Alobar } from './Alobar'
import { useDispatch} from 'react-redux'





const Bar = ({display,display_off,display_on,back}) => {
  const [display_vine,set_display_vine]= useState(false)
  const [display_alko,set_display_alko]= useState(false)
  const [display_bar,set_display_bar]= useState(false)
  const dispatch = useDispatch();
  


  const bar_menu = ["Вино","Алкоголь","Напитки",]
  //const vine_menu = []
  function bar_click(e){
    const target = e.target.textContent

    switch (target) {
      case "Вино":
        set_display_vine(true)
        display_off()
        
        break;
        case "Алкоголь":
        
        set_display_alko(true)
        display_off()
        break;
        case "Напитки":
        set_display_bar(true)
  
        display_off()
        break;
    
      default:
        break;
    }
  }

  function backvine(){
    set_display_vine(false)
    set_display_bar(false)
    set_display_alko(false)
    
    display_on()
  }

  function add(e){
    const chek = e.target.textContent
    dispatch({type:"add",payload:chek})
    console.log(chek)
  }
    
  return (
    <>
    <div className={display?"wrap_bar_1":"wrap_bar_1 none"}>
        {bar_menu.map((el=>(
            <div className='menu-items' onClick={bar_click}>{el}</div>
        )))}
        <div className='wrap_img_bar'><img src={imgbar} alt="" /></div>
        <div className='btn-back' onClick={back}><img src={strelka} alt="" /></div>
    </div>
    <Vine display={display_vine} back={backvine} add={add}/>
    <Barnapitki display = {display_bar} back={backvine} add={add}/>
    <Alobar display = {display_alko} back={backvine} add={add}/>
    </>
  )
}

export default Bar