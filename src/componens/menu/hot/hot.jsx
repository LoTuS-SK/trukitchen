import React ,{ useState,useMemo } from 'react'
import "../snaks/snaks"
//import {hotbluda} from "../../../data/database"
import { useSelector, useDispatch } from "react-redux"
// import more from "../../../png/foot/moreassorti.png"
import { Link } from "react-router-dom";
import Shop from '../../burger/корзина/Shop';
import utka from "../../../png/foot/utka.png"
import treska from "../../../png/foot/treska.png"
import kotlet from "../../../png/foot/kotleti.png"
import olem from "../../../png/foot/fileolen.png"
import pelmeni from "../../../png/foot/pelmeni.png"
import more from "../../../png/foot/assortimore.png"
import barabul from "../../../png/foot/barabulka.png" 


const Hot = () => {
const lean = useSelector(state=>state.one)


const dispath = useDispatch()

const list = useSelector(state=>state.chek)
const list_en =useSelector(state=>state.chek_en)
const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))

function func(e){
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

  
  //console.log("количество =}

  return (
    <>
    <Shop count={count}/>
      <div className="skakes">
      <Link to="/menu" className='btn-back' >←</Link>
    
    <div className='snakes-item'>{lean==="ru"?"Горячие блюда":"Hot dishes"}</div>

    {/* <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Ассорти из морепродуктов, обжаренных с чесноком, в соусе из устриц":"Assorted seafood fried with garlic in oyster sauce"}</div>
            <div className="wr_img"><img src={more} alt="" /></div>
            <span className='price-pl'>1590 ₽</span>
          </div> */}

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Томлённая утиная грудка с апельсиновым соусом, воздушным кремом и грушей":"Stewed duck breast with orange sauce, air cream and pear"}</div>
            <div className="wr_img"><img src={utka} alt="" /></div>
            <span className='price-pl'>300 г / 940 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Черная треска с картофельным пюре, муссом из пармезана и томатами":"Black cod with mashed potatoes, parmesan mousse and tomatoes"}</div>
            <div className="wr_img"><img src={treska} alt="" /></div>
            <span className='price-pl'>270 г / 1390 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Ассорти из морепродуктов, обжаренных с чесноком, в соусе из устриц":"Assorted seafood fried with garlic in oyster sauce"}</div>
            <div className="wr_img"><img src={more} alt="" /></div>
            <span className='price-pl'>390г / 1590 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Пельмени из щуки и Сахалинского гребешка":"Pelmeni from pike and Sakhalin scallop"}</div>
            {/* <div className="wr_img"><img src={utka} alt="" /></div> */}
            <span className='price-pl'>260 г / 680 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Пельмени из дичи с домашней сметаной":"Game dumplings with homemade sour cream"}</div>
            <div className="wr_img"><img src={pelmeni} alt="" /></div>
            <span className='price-pl'>200г / 780 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Котлеты из дичи с соусом из опят":"Game cutlets with mushroom sauce"}</div>
            <div className="wr_img"><img src={kotlet} alt="" /></div>
            <span className='price-pl'>180г60г/ 790 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Котлеты из Ленской щуки":"Lena pike cutlets"}</div>
            {/* <div className="wr_img"><img src={utka} alt="" /></div> */}
            <span className='price-pl'>160г / 940 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Домашний бефстроганов с картофельным пюре":"Homemade beef stroganoff with mashed potatoes"}</div>
            {/* <div className="wr_img"><img src={utka} alt="" /></div> */}
            <span className='price-pl'>400г / 670 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Филе оленя на муссе из печёной свёклы с винным соусом":"Deer fillet on roasted beetroot mousse with wine sauce"}</div>
            <div className="wr_img"><img src={olem} alt="" /></div>
            <span className='price-pl'>240г / 1280 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Cтаврида":"Scad"}</div>
            <div className="wr_img"><img src={barabul} alt="" /></div>
            <span className='price-pl'>200г / 550 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Черноморская барабулька":"Black Sea red mullet"}</div>
            {/* <div className="wr_img"><img src={utka} alt="" /></div> */}
            <span className='price-pl'>200г /550 ₽</span>
          </div>

    
    {/* {hotbluda.map((el,index)=>(
        <div className='item' key={index} tabIndex="0" onClick={func}><span className='label'>{lean==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))} */}
    </div>
    </>
  )
}

export default Hot