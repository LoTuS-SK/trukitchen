import React, { useState } from 'react'
import "./bar.css"
import Vine from "./vine"


const Bar = ({display,display_off}) => {
  const [display_vine,set_display_vine]= useState(false)
  //const [display_alko,set_display_alko]= useState(false)
  //const [display_bar,set_display_bar]= useState(false)

  const bar_menu = ["Вино","Алгоколь","Напитки",]
  //const vine_menu = []
  function bar_click(e){
    const target = e.target.textContent

    switch (target) {
      case "Вино":
        set_display_vine(true)
        display_off()
        
        break;case "Алкоголь":
        set_display_vine(true)
        display_off()
        break;
        case "Напитки":
        set_display_vine(true)
        display_off()
        break;
    
      default:
        break;
    }
  }
    
  return (
    <>
    <div className={display?"wrap_bar_1":"wrap_bar_1 none"}>
        {bar_menu.map((el=>(
            <div className='menu-items' onClick={bar_click}>{el}</div>
        )))}
    </div>
    <Vine display={display_vine}/>
    </>
  )
}

export default Bar