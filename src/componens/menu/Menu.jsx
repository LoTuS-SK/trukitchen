import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../img/Asset-1.png"
import { useSearchParams } from "react-router-dom"
//import chekimg from "../../png/kor.png";
import Ru from "../burger/Ru"
import Shop from "../burger/корзина/Shop"



import "../menu/menu.css"
import { useSelector , useDispatch} from 'react-redux';




const Menu = () => { 
  const dispatch = useDispatch()

  const [queryParameters] = useSearchParams()
  
  const str = queryParameters.get("name")

  const ru = useSelector(state=>state.one)
  dispatch({type:"addtable",payload:str})
  

//const str = queryParameters.get("name")
const list = useSelector(state=>state.chek)
const list_en =useSelector(state=>state.chek_en)
let count = list.reduce(function(sum,num){return num.count + sum},0)

if (ru==="ru"){
  count = list.reduce(function(sum,num){return num.count + sum},0)
}
if (ru==="en"){
  count = list_en.reduce(function(sum,num){return num.count + sum},0)
}


  

     return (
    <>
    
    <Ru/>
    <Shop count={count}/>
    {/* <Link to="/chek"><img  className='chek' src={chekimg} alt="img"/></Link> */}
    <div className="wrap">
   <img className='logo' src={logo}  alt=""/>
    <Link to="/snaks"  className='menu-items new' >{ru==="ru"?"Закуски":"Snakes"}</Link>
    <Link to="/salat" className='menu-items new' >{ru==="ru"?"Салаты":"Salats"}</Link>
    <Link to="/hot" className='menu-items new'>{ru==="ru"?"Горячие блюда":"Hot dishes"}</Link>
    <Link to="/soup" className='menu-items new'>{ru==="ru"?"Супы":"Soups"}</Link>
    <Link to="/onfire" className='menu-items new'>{ru==="ru"?"Гриль":"Grill"}</Link>
    <Link to="/auqa" className='menu-items new'>{ru==="ru"?"Аквариум":"Aquarium"}</Link>
    <Link to="/bake" className='menu-items new'>{ru==="ru"?"Печь":"Bake"}</Link>
    <Link to="/garnish" className='menu-items new'>{ru==="ru"?"Гарниры":"side dishes"}</Link>
    <Link to="/bread" className='menu-items new'>{ru==="ru"?"Хлеб и пирожки":"Bread and pies"}</Link>
    <Link to="/sweets" className='menu-items new'>{ru==="ru"?"Десерты":"Dessert"}</Link>
    <Link to="/bar" className='menu-items new'>{ru==="ru"?"Бар":"Bar"}</Link>
    </div>
    
   
     
    </>
  )
}

export default Menu