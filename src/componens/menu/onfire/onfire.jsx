import React,{useState} from 'react'
import "../snaks/snaks.css"
import { onFire } from '../../../data/database'
import { useSelector , useDispatch} from 'react-redux'
import kamamber from "../../../png/foot/kamamber2.png"
import feele from "../../../png/foot/file.png"
import { Link } from "react-router-dom";
import Shop from '../../burger/корзина/Shop'

const Onfire = () => {

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
    <Link to="/menu" className='btn-back' >←</Link>
    
   
    <div className="skakes">
    
    <div className='snakes-item'>{ru==="ru"?"Гриль":"Grill"}</div>
  
    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Камамбер на гриле с брусничным вареньем":"Grilled camembert with lingonberry jam"}</div>
            <div className="wr_img"><img src={kamamber} alt="" /></div>
            <span className='price-pl'>670 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк филе":"fillet steak"}</div>
            <div className="wr_img"><img src={feele} alt="" /></div>
            <span className='price-pl'>2500 ₽</span>
          </div>      


    {onFire.map((el,index)=>(
        
        <div className='item' key={index}tabIndex="0" onClick={func}>
            <span className='label'>{ru==="ru"?el.name:el.name_en}</span>
           
            <span className='price'>{el.price} ₽</span>
          </div>

    ))}
     
    
   


    </div>
    </>
  )
}

export default Onfire