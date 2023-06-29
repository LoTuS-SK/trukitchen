import React , {useState} from 'react'
//import { bake } from '../../../data/database'
import "../snaks/snaks.css"
import paltus from "../../../png/foot/paltuss.png"
import strelyd from "../../../png/foot/str3.png"
import koz4 from "../../../png/foot/koz5.png"
import { useSelector , useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import chekimg from "../../../png/kor.png"
import страч from "../../../png/foot/страчетелла.png"
import Shop from '../../burger/корзина/Shop';
import bone from "../../../png/foot/bon.png"
//const path = "../../../png/foot/pirog_paltus 2.png"

const paltus2 = require("../../../png/foot/pirog_paltus 2.png") 
const gus = require("../../../png/foot/gus.png")
const pirog_olen = require("../../../png/foot/pirog-olen.png")




 

const Bake = () => {
  const dispath = useDispatch()
  const lean = useSelector(state=>state.one)
  const list = useSelector(state=>state.chek)
  const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))

  function clickimg(e){
   const str = e.target.dataset.id
    func(str)
  }

function func(e){
  const target = e.target.textContent
    
    if (lean==="ru"){
      dispath({type:"add",payload:target})
    }

    if (lean==="en"){
      dispath({type:"add_en",payload:target})
    }
    
    setcount(list.reduce(function(sum,num){return num.count + sum},0))

    
}


  return (
    <>
    <Shop count={count}/>
    <Link to="/menu" className='btn-back'>←</Link>
    <Link to="/chek"><img  className='chek' src={chekimg} alt="img"/></Link>
    <div className="skakes">
    
    <div className='snakes-item'>{lean==="ru"?"Печь":"Bake"}</div>
  
    <div className='item_pal'>
            <span className='label' onClick={func} tabIndex="0" >{lean==="ru"?"Пирог с рапаной":"Pie with rapana"}</span>
            <div className="wr_img"></div>
            <div className='price-pl'>{790} ₽</div>
    </div>



    <div className='item_pal'>
            <span className='label' onClick={func} tabIndex="0" >{lean==="ru"?"Мозговая косточка из печи":"Marrow bone from the oven"}</span>
            <div className="wr_img"></div>
            <div className="wr_img"><img src={bone} alt="" /></div>
            <div className='price-pl'>{590} ₽</div>
    </div>

     <div className='item_pal'>
            <span className='label' onClick={func} tabIndex="0" >{lean==="ru"?"Беломорский палтус с тыквенным пюре и молодым горошком":"White Sea halibut with pumpkin puree and young peas"}</span>
            <div className="wr_img"><img src={paltus} alt="" /></div>
            <div className='price-pl'>{1340} ₽</div>
    </div>

    <div className='item_pal'>
            <span className='label' onClick={func} tabIndex="0" >{lean==="ru"?"Растомлённая утиная ножка с пюре из сельдерея":"Mashed duck leg with celery puree"}</span>
            <div className="wr_img"></div>
            <div className='price-pl'>{920} ₽</div>
    </div>


    <div className='item_pal'>
            <span className='label' onClick={func} tabIndex="0" >{lean==="ru"? "Пирог с фермерской страчателлой":"Farm Stracciatella Pie"}</span>
            <div className="wr_img"><img src={страч} alt="" /></div>
            <div className="wr_img"></div>
            <div className='price-pl'>400гр / 790 ₽</div>
    </div>
          
    <div className='item_pal'>
      <span className='label' onClick={func}>{lean==="ru"? "Пирог с камчатским крабом":"Pie with king crab"}</span>
      <div className="wr_img"></div>
      <div className='price-pl'>1050 ₽</div>
    </div>

          
          <div className='item_pal'>
            <span className='label' onClick={func}>{lean==="ru"? "Пирог с копчёным оленем на подушке из грибного рагу":"Smoked reindeer pie on a bed of mushroom stew"}</span>
              <div className="wr_img"><img src={pirog_olen} alt="" data-id={lean==="ru"? "Пирог с копчёным оленем на подушке из грибного рагу":"Smoked reindeer pie on a bed of mushroom stew"}onClick={clickimg}/></div>
             <div className='price-pl'>990 ₽</div>
          </div>

          <div className='item_pal'>
        
            
            <span className='label' onClick={func}>{lean==="ru"?"Гусь с Палехской фермы томлёный с черносливом":"Goose from the Palekh farm stewed with prunes"}</span>
            <div className="wr_img"><img src={gus} alt="" /></div>
            <div className='price-pl'>1290 ₽</div>
            
          </div>
          <div className='item_pal'>
        
            
        <span className='label' onClick={func}>{lean==="ru"?"Стерлядь":"Sterlet"}</span>
        <div className="wr_img"><img src={strelyd} alt="" /></div>
        <div className='price-pl'>2500 ₽</div>
        
      </div>
          <div className='item_pal'>
        
            
        <span className='label' onClick={func}>{lean==="ru"? "Пирог с дальневосточным палтусом, налимьей печенью и обжаренным луком":"Pie with Far Eastern halibut, burbot liver and fried onions"}</span>
        <div className="wr_img"><img src={paltus2} alt="" /></div>
        <div className='price-pl'>990 ₽</div>
        
      </div>
          <div className='item_pal'>
        
            
        <span className='label' onClick={func}>{lean==="ru"?"Мясо молодого козлёнка с ароматными травами и молодым картофелем}":"Young goat meat with aromatic herbs and new potatoes"}</span>
        <div className="wr_img"><img src={koz4} alt="" /></div>
        <div className='price-pl'>1890 ₽</div>
        
      </div>
    
    
    </div>
   
    </>
  )
}

export default Bake