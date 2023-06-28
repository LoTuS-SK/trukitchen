import React ,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Shop from '../burger/корзина/Shop'
import pirogki from "../../png/foot/piroshki.png"
import lepeshka from "../../png/foot/lepeshka.png"
import breadkor from "../../png/foot/bredkor.png"
import { Link } from 'react-router-dom'
//import { useTest } from '../hooks/usechek'

const Bread = () => {
    const ru = useSelector(state=>state.one)

    const dispath = useDispatch()
  
    const list = useSelector(state=>state.chek)
    const list_en = useSelector(state=>state.chek_en)
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
      
      
      
      
      //console.log("количество = " + count)
    }


  return (
    <>
    <Link to="/menu" className='btn-back new ' >←</Link>
    <Shop count={count}/>
    <div className='snakes-item'>{ru==="ru"?"хлеб и прирожик":"bread and pies"}</div>
    <div className="wrp">
    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Пирожок с картофелем и грибамии":"Pie with potatoes and mushrooms"}</div>
            <div className="wr_img"><img src={pirogki} alt="" /></div>
            <span className='price-pl'>50 г / 120 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Пирожек с дичью":"Pie with game"}</div>
            {/* <div className="wr_img"><img src={pirogki} alt="" /></div> */}
            <span className='price-pl'>50 г / 150 ₽</span>
          </div>
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Пирожок с капустой":"Pie with cabbage"}</div>
            {/* <div className="wr_img"><img src={pirogki} alt="" /></div> */}
            <span className='price-pl'>50 г / 120 ₽</span>
          </div>
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Пшеничная лепёшка, запечённая в дровяной печи с травами":"Wheat tortilla baked in a wood-fired oven with herbs"}</div>
            
            <div className="wr_img"><img src={lepeshka} alt="" /></div>
            <span className='price-pl'>150 г / 320 ₽</span>
          </div>
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Хлебная корзина со сливочным маслом":"Bread basket with butter"}</div>
            
            <div className="wr_img"><img src={breadkor} alt="" /></div>
            <span className='price-pl'>180 г / 390 ₽</span>
          </div>
        </div>
    </>
  )
}

export default Bread