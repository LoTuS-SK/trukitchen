import React,{useState} from 'react'
import "../snaks/snaks"
import { garnish } from '../../../data/database'
import {useSelector,useDispatch} from 'react-redux'
import Shop from '../../burger/корзина/Shop'
const Garnish = () => {

  const ru = useSelector(state=>state.one)

  const dispath = useDispatch()

  const list = useSelector(state=>state.chek)
  const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))

  function func(e){
    const target = e.target.textContent
    
    if (ru==="ru"){
      dispath({type:"add",payload:target})
    }

    if (ru==="en"){
      dispath({type:"add_en",payload:target})
    }
    
    setcount(list.reduce(function(sum,num){return num.count + sum},0))

    
    //console.log("количество = " + count)
  }
  

  return (
    <>
    <Shop count={count}/>
    <div className="skakes">
    {/* <div className='btn-back' onClick={back}>←</div> */}
    <div className='snakes-item'>Гарниры</div>
    
    {garnish.map(el=>(
        <div className='item' tabIndex="0" onClick={func}><span className='label'>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>  
    
    </>
  )
}

export default Garnish