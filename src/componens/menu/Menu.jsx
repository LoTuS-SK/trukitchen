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
const count = list.reduce(function(sum,num){return num.count + sum},0)

     return (
    <>
    hi
    <Ru/>
    <Shop count={count}/>
    {/* <Link to="/chek"><img  className='chek' src={chekimg} alt="img"/></Link> */}
    <div className="wrap">
   <img className='logo' src={logo}  alt=""/>
    <Link to="/snaks"  className='menu-items new' >{ru==="ru"?"Закуски":"Snakes"}</Link>
    <Link to="/salat" className='menu-items new' >Салаты</Link>
    <Link to="/hot" className='menu-items new'>Горячие блюда</Link>
    <Link to="/soup" className='menu-items new'>Супы</Link>
    <Link to="/onfire" className='menu-items new'>Гриль</Link>
    <Link to="/auqa" className='menu-items new'>Аквариум</Link>
    <Link to="/bake" className='menu-items new'>Печь</Link>
    <Link to="/garnish" className='menu-items new'>Гарниры</Link>
    <Link to="/bar" className='menu-items new'>Бар</Link>
    </div>
    
   
     
    </>
  )
}

export default Menu