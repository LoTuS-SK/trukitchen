import React ,{useState}from 'react'
//import { snakes } from "../../../data/database"
// import strelka from "../../../png/strelka.png"
import "../snaks/snaks.css"
import { useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom";

import pashtet from "../../../png/foot/pashtet.png"
import forel from "../../../png/foot/forel.png"
import ikra from "../../../png/foot/ikra.png"
import seledka from "../../../png/foot/seledka.png"
import sheese from "../../../png/foot/chees.png"
import tartar from "../../../png/foot/tartar.png"
import forchmak from "../../../png/foot/for4mak.png"
import gribi from "../../../png/foot/gribi.png"
import  sugudai from "../../../png/foot/sugudai.png"
import Shop from '../../burger/корзина/Shop';
import solen from "../../../png/foot/soleny.png"
import lomtika from "../../../png/foot/lomtiki utki.png"
import assor from "../../../png/foot/assorim.png"
import salo from "../../../png/foot/salo.png"


const Snaks = () => {

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

    
    

    
    //console.log("количество = " + count)
  }

  return (
    <>
    <Shop count={count}/>
    <div className="skakes">
    <Link to="/menu" className='btn-back new ' >←</Link>
    {/* <div className='strelka' onClick={back}><img src={strelka} alt="" /></div> */}
    <div className='snakes-item'>{lean==="ru"?"Закуски":"Snacks"}</div>
    

    <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Парфе из заячьей печёнки с ароматом портвейна":"Hare liver parfait with port wine aroma"}</div>
            <span className='price'>160г / 490 ₽</span>
          </div>



    
    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Паштет из оленины с румяными тостами и брусничным джемом":"Venison pate with ruddy toast and lingonberry jam"}</div>
            <div className="wr_img"><img src={pashtet} alt="" /></div>
            <div className='price-pl'>190г / 450 ₽</div>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Омуль малосоленый":"Lightly salted omul"}</div>
            <div className='price'>100г / 550 ₽</div>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Филе Енисейского малосолёного муксуна":"Fillet of Yenisei lightly salted muksun"}</div>
            <div className='price'>100г / 550 ₽</div>
          </div>



          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Слабосолёная Карельская форель с мочёной брусникой":"Lightly salted Karelian trout with soaked cranberries"}</div>
            <div className="wr_img"><img src={forel} alt="" /></div>
            <div className='price-pl'>100г / 550 ₽</div>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Икра щуки с румяными тостами и сливочным маслом":"Pike caviar with ruddy toast and butter"}</div>
            <span className='price'>145 г / 820 ₽</span>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Икра омуля с румяными тостами и сливочным маслом":"Omul caviar with ruddy toast and butter"}</div>
            <span className='price'>145 г / 820 ₽</span>
          </div>
         
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Икра нерки с румяными тостами и сливочным маслом":"Sockeye salmon caviar with ruddy toast and butter"}</div>
            <div className="wr_img"><img src={ikra} alt="" /></div>
            <span className='price-pl'>145 г /820 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Сельдь собственного засола с молодым картофелем":"Self-salted herring with new potatoes"}</div>
            <div className="wr_img"><img src={seledka} alt="" /></div>
            <span className='price-pl'>200г / 460 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Сугудай из муксуна со сладким луком и заправкой из кислого яблока":"Muksun sugudai with sweet onion and sour apple dressing"}</div>
            <div className="wr_img"><img src={sugudai} alt="" /></div>
            <span className='price-pl'>140г / 790 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Сугудай из Мурманской форели с Ялтинским луком":"Sugudai from Murmansk trout with Yalta onion"}</div>
            {/* <div className="wr_img"><img src={seledka} alt="" /></div> */}
            <span className='price-pl'>140г / 790 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Ассорти фермерских сыров с орехами":"Assorted farm cheeses with nuts"}</div>
            <div className="wr_img"><img src={sheese} alt="" /></div>
            <span className='price-pl'>210г / 790 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Форшмак из Олютюрской сельди и кислого яблока":"Olyutur herring and sour apple forshmak"}</div>
            <div className="wr_img"><img src={forchmak} alt="" /></div>
            <span className='price-pl'>100г / 390 ₽</span>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Оливки Гиганти":"Olives Giganti"}</div>
            <span className='price'>90г / 390 ₽</span>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Оливки Каламата":"Olives Kalamata"}</div>
            <span className='price'>90г / 390 ₽</span>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Перчики с рикоттой":"Peppers with ricotta"}</div>
            <span className='price'>90г / 390 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Боровики с душистым маслом":"Mushrooms with fragrant oil"}</div>
            <div className="wr_img"><img src={gribi} alt="" /></div>
            <span className='price-pl'>110г / 580 ₽</span>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Грузди со сметаной":"Milk mushrooms with sour cream"}</div>
            
            <span className='price'>110г / 580 ₽</span>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Строганина из чира":"Stroganina from chir"}</div>
            <span className='price'>60г / 460 ₽</span>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Сырокопчёная Алтайская оленина":"Smoked Altai venison"}</div>
            <span className='price'>50 г / 450 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Филе утки холодного копчения":"Cold smoked duck fillet"}</div>
            <div className="wr_img"><img src={lomtika} alt="" /></div>
            <span className='price-pl'>50г / 550 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Тартар из оленя с тёплым муссом из Пармезана и хрустящими гренками":"Deer tartare with warm Parmesan mousse and crispy croutons"}</div>
            <div className="wr_img"><img src={tartar} alt="" /></div>
            <span className='price-pl'>140г / 1190 ₽</span>
          </div>

          <div className='item' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Тартар из мраморной говядины":"Marbled beef tartare"}</div>
            {/* <div className="wr_img"><img src={tartar} alt="" /></div> */}
            <span className='price'>150г / 1200 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Сыровяленое ассорти":"Dry-cured assortment"}</div>
            <div className="wr_img"><img src={assor} alt="" /></div>
            <span className='price-pl'>160г / 990 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Домашнее сало на гренках":"Homemade lard on toast"}</div>
            <div className="wr_img"><img src={salo} alt="" /></div>
            <span className='price-pl'>120 г / 460 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{lean==="ru"?"Домашние Соленья":"homemade pickles"}</div>
            <div className="wr_img"><img src={solen} alt="" /></div>
            <span className='price-pl'>300 г / 490 ₽</span>
          </div>



    
    
    
    
    
    {/* {lean==="ru" && snakes.map(el=>(
        <div className='item' tabIndex="0" onClick={func} key={el.id}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    {lean==="en" && snakes.map(el=>(
        <div className='item' tabIndex="0" onClick={func}key={el.id}><span className='label'>{el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))} */}
    </div>
    </>
  )
}

export default Snaks