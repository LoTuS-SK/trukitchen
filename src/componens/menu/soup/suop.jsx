import React ,{useState,useMemo}from 'react'
import "../snaks/snaks"
import Shop from '../../burger/корзина/Shop';
// import { soup } from '../../../data/database'
import { useSelector,useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import suopraki from "../../../png/foot/rkaisoup.png"
import gribsoup from "../../../png/foot/suopgrib.png"
import borsh from "../../../png/foot/borsh.png"
import chekimg from "../../../png/kor.png"
import svek from "../../../png/foot/svekolnik.png"

const Suop = () => {
  const lean = useSelector(state=>state.one)
  const list = useSelector(state=>state.chek)
  const list_en =useSelector(state=>state.chek_en)
  const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))
  
  const dispath = useDispatch()
  
  function func(e){
    console.log("soup")
    const target = e.target.textContent
    
    if (lean==="ru"){
      dispath({type:"add",payload:target})
      setcount(list.reduce(function(sum,num){return num.count + sum},0))
    }

    if (lean==="en"){
      dispath({type:"add_en",payload:target})
      setcount(list_en.reduce(function(sum,num){return num.count + sum},0))
    }
  }

  useMemo(()=>{
    if (lean==="ru"){
      setcount(list.reduce(function(sum,num){return num.count + sum},0))
    } else{
      setcount(list_en.reduce(function(sum,num){return num.count + sum},0))
    }
  },[list,list_en,lean])


  
  return (
    <>
    <Shop count={count}/>
    <Link to="/chek"><img  className='chek' src={chekimg} alt="img"/></Link>
     <div className="skakes">
     <Link to="/menu" className='btn-back' >←</Link>
    <div className='snakes-item'>{lean==="ru"?"Супы":"Soups"}</div>

    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Суп из Астраханских раков с обжаренными лангустинами и муссом из Пармезана":"Astrakhan crayfish soup with fried langoustines and Parmesan mousse"}</div>
            <div className="wr_img"><img src={suopraki} alt="" /></div>
            <div className='price-pl'>300г / 690 ₽</div>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Наваристый борщ с дичью и домашней сметаной":"Rich borscht with game and homemade sour cream"}</div>
            <div className="wr_img"><img src={borsh} alt="" /></div>
            <div className='price-pl'>300г / 450 ₽</div>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Суп из лесных грибов":"wild mushroom soup"}</div>
            <div className="wr_img"><img src={gribsoup} alt="" /></div>
            <div className='price-pl'>300г /420 ₽</div>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Свекольник":"beetroot soup"}</div>
            <div className="wr_img"><img src={svek} alt="" /></div>
            <div className='price-pl'>300г / 450 ₽</div>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Окрошка на Квасе":"Okroshka on Kvass"}</div>
            {/* <div className="wr_img"><img src={suopraki} alt="" /></div> */}
            <div className='price-pl'> 300г / 450 ₽</div>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Окрошка на Тане":"Okroshka on Tanya"}</div>
            {/* <div className="wr_img"><img src={suopraki} alt="" /></div> */}
            <div className='price-pl'>300г / 450 ₽</div>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Уха из северной рыбы":"Northern fish ear"}</div>
            {/* <div className="wr_img"><img src={suopraki} alt="" /></div> */}
            <div className='price-pl'>300г / 450 ₽</div>
          </div>
      
      
      
      



    {/* {soup.map(el=>(
        <div className='item' key={el.id}tabIndex="0" onClick={func}><span className='label'>{lean==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))} */}
    </div>
    
    </>
  )
}

export default Suop