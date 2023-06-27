import React, { useState } from 'react'
import "./bar.css"
import imgbar from "../../../png/bar.png"
//import strelka from "../../../png/strelka.png"
import Vine from "./vine"
import { Barnapitki } from './barnapiiki'
import { Alobar } from './Alobar'
//import { useDispatch} from 'react-redux'





const Bar = () => {
  const [display,setdislay] = useState(true)
  const [display_vine,set_display_vine]= useState(false)
  const [display_alko,set_display_alko]= useState(false)
  const [display_bar,set_display_bar]= useState(false)
  //const dispatch = useDispatch();
  
function func(e){
  const target = e.target.textContent
  console.log(target)
}



  const bar_menu = ["Вино","Алкоголь","Напитки",]
  //const vine_menu = []
  function bar_click(e){
    const target = e.target.textContent

    switch (target) {
      case "Вино":
        set_display_vine(true)
        setdislay(false)

        
        break;
        case "Алкоголь":
        
        set_display_alko(true)
        setdislay(false)
        break;
        case "Напитки":
        set_display_bar(true)
  
        setdislay(false)
        break;
    
      default:
        break;
    }
  }

  function backvine(){
    set_display_vine(false)
    set_display_bar(false)
    set_display_alko(false)
    setdislay(true)
    
  }

  // function add(e){
  //   const chek = e.target.textContent
  //   dispatch({type:"add",payload:chek})
  //   console.log(chek)
  // }
    
  return (
    <>
    <div className={display?"wrap_bar_1":"wrap_bar_1 none"}>
        {bar_menu.map(((el,index)=>(
            <div className='menu-items' onClick={bar_click} key={index}>{el}</div>
        )))}
        <div className='wrap_img_bar'><img src={imgbar} alt="" /></div>
        {/* <div className='btn' onClick={back}><img className="strelka"src={strelka} alt="" /></div> */}
    </div>
    <Vine display={display_vine} back={backvine} add={func}/>
    <Barnapitki display = {display_bar} back={backvine} add={func}/>
    <Alobar display = {display_alko} back={backvine} add={func}/>
    </>
  )
}

export default Bar