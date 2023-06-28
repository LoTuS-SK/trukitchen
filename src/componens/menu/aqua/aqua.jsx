import React , {useState}from 'react'
import "../snaks/snaks"
//import { aqua } from '../../../data/database'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import egi from "../../../png/foot/egi.png"
import usrici from "../../../png/foot/устрица.png"
import krevetki from "../../../png/foot/krevetki.png"
import grebesh from "../../../png/foot/grebeshek.png"
import Shop from '../../burger/корзина/Shop';

const Aqua = () => {

  const ru = useSelector(state=>state.one)

  const dispath = useDispatch()

  const list = useSelector(state=>state.chek)
  const list2 = useSelector(state=>state.chek_en)

  const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))

  function func(e){
    const target = e.target.textContent
    
    if (ru==="ru"){
      dispath({type:"add",payload:target})
      setcount(list.reduce(function(sum,num){return num.count + sum},0))
    }

    if (ru==="en"){
      dispath({type:"add_en",payload:target})
      setcount(list2.reduce(function(sum,num){return num.count + sum},0))
    }
    
    

    
    //console.log("количество = " + count)
  }
  

  return (
    <>
    <Shop count={count}/>
     <div className="skakes:">
     <Link to="/menu" className='btn-back' >←</Link>
    <div className='snakes-item'>{ru==="ru"?"Аквариум":"Aquarium"}</div>

    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Морской ёж":"Sea urchin"}</div>
            <div className="wr_img"><img src={egi} alt="img" /></div>
            <span className='price-pl'>1шт / 670 ₽</span>
          </div>
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Хасанская устрица":"Khasan oyster"}</div>
            {/* <div className="wr_img"><img src={egi} alt="" /></div> */}
            <span className='price-pl'>1шт / 320 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Ромаринская устрица":"Romarin oyster"}</div>
            {/* <div className="wr_img"><img src={egi} alt="" /></div> */}
            <span className='price-pl'>1шт / 320 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Императорская устрица":"Imperial oyster"}</div>
            {/* <div className="wr_img"><img src={egi} alt="" /></div> */}
            <span className='price-pl'>1шт / 320 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Устрица Касабланка":"Oyster Casablanca"}</div>
            {/* <div className="wr_img"><img src={egi} alt="" /></div> */}
            <span className='price-pl'>1шт / 420 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Королевская устрица":"Royal oyster"}</div>
            {/* <div className="wr_img"><img src={egi} alt="img" /></div> */}
            <span className='price-pl'>1шт / 420 ₽</span>
          </div> 

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Устрица Розовая Джоли":"Oyster Pink Jolie"}</div>
            <div className="wr_img"><img src={usrici} alt="img" /></div>
            <span className='price-pl'>1шт / 420 ₽</span>
          </div> 

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Магаданские креветки":"Magadan shrimps"}</div>
            <div className="wr_img"><img src={krevetki} alt="img" /></div>
            <span className='price-pl'>1590 ₽</span>
          </div> 

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Сахалинский гребешок":"Sakhalin scallop"}</div>
            <div className="wr_img"><img src={grebesh} alt="img" /></div>
            <span className='price-pl'>1шт / 590 ₽</span>
          </div> 

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Спизула":"Spizula"}</div>
            {/* <div className="wr_img"><img src={grebesh} alt="" /></div> */}
            <span className='price-pl'>1шт / 490 ₽</span>
          </div> 
    
    
    {/* {aqua.map(el=>(
        <div className='item' tabIndex="0" onClick={func}><span className='label'>{ru==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))} */}


    </div>
    </>
  )
}

export default Aqua