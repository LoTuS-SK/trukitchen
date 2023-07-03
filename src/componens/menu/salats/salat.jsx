import React ,{ useState } from 'react'
//import strelka from "../../../png/strelka.png"
import { Link } from "react-router-dom";
import "./salat.css"
//import {salat} from "../../../data/database"
import { useSelector , useDispatch } from 'react-redux'
import Shop from '../../burger/корзина/Shop';
import cesar from "../../../png/foot/cesar.png"
import svekla from "../../../png/foot/svekla.png"
import burat from "../../../png/foot/burata.png"
import печень  from "../../../png/foot/печень.png"
import росбив from "../../../png/foot/росбиф3.png"
import salatKrab from "../../../png/foot/saladKRAB.png"


const Salat = () => {

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
    <div className="salat">
    {/* <div className='strelka' onClick={back}><img src={strelka} alt="" /></div> */}
    
    <div className='snakes-item'>{ru==="ru"?"Салаты":"Salads"}</div>
    
    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Цезарь с цыпленком":"Caesar with chicken"}</div>
            <div className="wr_img"><img src={cesar} alt="" /></div>
            <span className='price-pl'>200г / 670 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Салат с печёной свеклой, авокадо, сладкими томатами и кедровым орехом":"Salad with baked beets, avocado, sweet tomatoes and pine nuts"}</div>
            <div className="wr_img"><img src={svekla} alt="" /></div>
            <span className='price-pl'>250г / 470 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Буррата со сладкими томатами":"Burrata with sweet tomatoes"}</div>
            <div className="wr_img"><img src={burat} alt="" /></div>
            <span className='price-pl'>220 г / 850 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Утиная печень со шпинатом и медово- горчичной заправкой":"Duck liver with spinach and honey mustard dressing"}</div>
            <div className="wr_img"><img src={печень} alt="" /></div>
            <span className='price-pl'>200 г / 690 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Салат по-деревенски":"rustic salad"}</div>
            {/* <div className="wr_img"><img src={печень} alt="" /></div> */}
            <span className='price-pl'>250 г / 550 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Ростбиф с салатом, огурцом и сладким томатом":"Roast beef with lettuce, cucumber and sweet tomato"}</div>
            <div className="wr_img"><img src={росбив} alt="" /></div>
            <span className='price-pl'>180 г / 690 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Салат «Приморский» с дикими креветками":"Seaside salad with wild shrimps"}</div>
            {/* <div className="wr_img"><img src={печень} alt="" /></div> */}
            <span className='price-pl'>250 г / 990 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Дальневосточный краб с авокадо и сладким томатом":"Far Eastern crab with avocado and sweet tomato"}</div>
            <div className="wr_img"><img src={salatKrab} alt="" /></div>
            <span className='price-pl'>200 г / 1290 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Теплый салат с морепродуктами «Сахалин»":"Warm salad with seafood Sakhalin"}</div>
            {/* <div className="wr_img"><img src={печень} alt="" /></div> */}
            <span className='price-pl'>200 г / 1190 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Сладкие томаты с каперсами, красным луком и кремом бальзамик":"Sweet tomatoes with capers, red onion and balsamic cream"}</div>
            {/* <div className="wr_img"><img src={печень} alt="" /></div> */}
            <span className='price-pl'>270 г / 770 ₽</span>
          </div>




    {/* {salat.map((el,index)=>(
        <div className='item' key={index} tabIndex="0" onClick={func}><span className='label'>{ru ==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))} */}
    </div>
    </>
    
  )
}

export default Salat