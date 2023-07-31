import React, { useEffect, useState ,useMemo} from 'react'
import "./bar.css"
import imgbar from "../../../png/bar.png"
//import strelka from "../../../png/strelka.png"
import Vine from "./vine"
import { Barnapitki } from './barnapiiki'
import { Alobar } from './Alobar'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Shop from '../../burger/корзина/Shop';





const Bar = () => {
  const [display,setdislay] = useState(true)
  const [display_vine,set_display_vine]= useState(false)
  const [display_alko,set_display_alko]= useState(false)
  const [display_bar,set_display_bar]= useState(false)
  const dispatch = useDispatch();

  const list = useSelector(state=>state.chek)
    const list_en =useSelector(state=>state.chek_en)
    const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))

function func(e){
  const target = e.target.textContent
    
  if (ru==="ru"){
    if(target==="Дигустационный сет/3"||target==="Дигустационный сет/5"){
      setdistic(true)
      set_display_alko(false)
    }
    
    
    dispatch({type:"add",payload:target})
    setcount(list.reduce(function(sum,num){return num.count + sum},0))
  }

  if (ru==="en"){
    if(target==="Digustation set/3"||target==="Digustation set/5"){
      setdistic(true)
      
    }


    dispatch({type:"add_en",payload:target})
    setcount(list_en.reduce(function(sum,num){return num.count + sum},0))
  }
  
  

}

  const ru = useSelector(state=>state.one)

  const bar_menu = useMemo(()=>["Винная карта","Алкоголь","Напитки"],[])
  const bar_menu_en = useMemo(()=>["Vine","Alcohol","Drinks"],[])
  const [bar_list,set_barlist] = useState(bar_menu)

  useEffect(()=>{
    if(ru==="ru"){
      set_barlist(bar_menu)

    }
    if(ru==="en"){
      set_barlist(bar_menu_en)

    }
  },[ru,bar_menu,bar_menu_en])

  function bar_click(e){
    const target = e.target.textContent

    switch (target) {
      case "Винная карта":
        set_display_vine(true)
        setdislay(false)
        break;
        case "Vine":
        set_display_vine(true)
        setdislay(false)
        break;
        case "Алкоголь":
        
        set_display_alko(true)
        setdislay(false)
        break;
        case "Alcohol":
        
        set_display_alko(true)
        setdislay(false)
        break;
        case "Напитки":
        set_display_bar(true)
  
        setdislay(false)
        break;
        case "Drinks":
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
  useMemo(()=>{
    if (ru==="ru"){
      setcount(list.reduce(function(sum,num){return num.count + sum},0))
    } else{
      setcount(list_en.reduce(function(sum,num){return num.count + sum},0))
    }
  },[list,list_en,ru])

  const [distic,setdistic] = useState(false)

  function distic_off(){
    setdistic(false)
  }

  function display_on(){
    set_display_alko(true)
  }
    
  return (
    <>
    <Shop count={count}/>
    <div className={display?"wrap_bar_1":"wrap_bar_1 none"}>

    <Link to="/menu" className='btn-back' >←</Link>
        {bar_list.map(((el,index)=>(
            <div className='menu-items' onClick={bar_click} key={index}>{el}</div>
        )))}
        <div className='wrap_img_bar'><img src={imgbar} alt="" /></div>
        {/* <div className='btn' onClick={back}><img className="strelka"src={strelka} alt="" /></div> */}
    </div>
    <Vine display={display_vine} back={backvine} add={func} />
    <Barnapitki display = {display_bar} back={backvine} add={func}/>
    <Alobar 
    display = {display_alko} 
    display_on = {display_on}
    back={backvine} 
    add={func} 
    distic={distic}
    distic_off={distic_off}
    />
    </>
  )
}

export default Bar