import React,{useState} from 'react'
import "./sweets.css"
import { Sweets } from '../../../data/database'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Shop from '../../burger/корзина/Shop'

const Swets = ({display,back}) => {
  const desert = Sweets.filter(el=>el.section==="сладкое")
  const ice = Sweets.filter(el=>el.section==="мороженое")
  const jam = Sweets.filter(el=>el.section==="варенье")
  
  const ru = useSelector(state=>state.one)
  const dispath = useDispatch()

  const list = useSelector(state=>state.chek)
  const list_en =useSelector(state=>state.chek_en)
  const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))



  function func(e){
    const target = e.target.textContent
    
    if (ru==="ru"){
      dispath({type:"add",payload:target})
      setcount(list.reduce(function(sum,num){return num.count + sum},0))
    }

    if (ru==="en"){
      dispath({type:"add_en",payload:target})
      setcount(list_en.reduce(function(sum,num){return num.count + sum},0))
    }
  }







  return (
    <div className="sweets">
      <Shop count={count}/>
      
    <Link to="/menu" className='btn-back' >←</Link>
      
      <h1 className='sw_h1'>{ru==="ru"?"Десерты":"Dessert"}</h1>
      {desert.map(el=>(
        <div className='item' tabIndex="0" ><span className='label' onClick={func}>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
<h1 className='sw_h1'>{ru==="ru"?"Мороженое":"Ice cream"}</h1>
{ice.map(el=>(
        <div className='item' tabIndex="0" ><span className='label' onClick={func}>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.weight}г / {el.price} ₽</span></div>
    ))}
    <h1 className='sw_h1'>{ru==="ru"?"Варенье":"Jam"}</h1>
{jam.map(el=>(
        <div className='item' tabIndex="0" ><span className='label' onClick={func}>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.weight}г / {el.price} ₽</span></div>
    ))}

    </div>
  )
}

export default Swets