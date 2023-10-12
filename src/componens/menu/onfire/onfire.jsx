import React,{useMemo, useState} from 'react'
import "../snaks/snaks.css"
//import { onFire } from '../../../data/database'
import { useSelector , useDispatch} from 'react-redux'
import kamamber from "../../../png/foot/kamamber2.png"
import feele from "../../../png/foot/file.png"
import { Link } from "react-router-dom";
import Shop from '../../burger/корзина/Shop'
import ridai from "../../../png/foot/ribai.png"
import yazich from "../../../png/foot/yazichki.png"
import chiking from "../../../png/foot/chiking.png"
import rebra from "../../../png/foot/bichki.png"

const Onfire = () => {

  const ru = useSelector(state=>state.one)

  const dispath = useDispatch()

  const list = useSelector(state=>state.chek)
  const list_en =useSelector(state=>state.chek_en)
  const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))

  useMemo(()=>{
    if (ru==="ru"){
      setcount(list.reduce(function(sum,num){return num.count + sum},0))
    } else{
      setcount(list_en.reduce(function(sum,num){return num.count + sum},0))
    }
  },[list,list_en,ru])

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
    <Shop count={count}/>
    <Link to="/menu" className='btn-back' >←</Link>
    
   
    <div className="skakes">
    
    <div className='snakes-item'>{ru==="ru"?"Гриль":"Grill"}</div>
  
    <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Камамбер на гриле с брусничным вареньем":"Grilled camembert with lingonberry jam"}</div>
            <div className="wr_img"><img src={kamamber} alt="" /></div>
            <span className='price-pl'>125г / 690 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк филе":"fillet steak"}</div>
            <div className="wr_img"><img src={feele} alt="" /></div>
            <span className='price-pl'>300 г / 2500 ₽</span>
          </div>      

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк Рибай":"Ribeye steak"}</div>
            <div className="wr_img"><img src={ridai} alt="" /></div>
            <span className='price-pl'>350г / 3300 ₽</span>
          </div>  

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк стриплойн":"Striploin steak"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>300г / 3300 ₽</span>
          </div>  
          
     
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Рёбра бычка на гриле":"Grilled bull ribs"}</div>
            <div className="wr_img"><img src={rebra} alt="" /></div>
            <span className='price-pl'>250г / 1900 ₽</span>
          </div> 
          
        

         
         
         <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Корейка ягнёнка на кости":"Lamb loin on the bone"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>300г / 1900 ₽</span>
          </div>   
          
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Шашлык из Каширского петуха со сладкими томатами":"Shish kebab from Kashirsky rooster with sweet tomatoes"}</div>
            <div className="wr_img"><img src={chiking} alt="" /></div>
            <span className='price-pl'>350г / 690 ₽</span>
          </div>   

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Язычки ягнёнка с овощами":"Lamb tongues with vegetables"}</div>
            <div className="wr_img"><img src={yazich} alt="" /></div>
            <span className='price-pl'>210 г / 990 ₽</span>
          </div> 
          
         

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Люля из фермерского ягнёнка":"Kebub from farm lamb"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>210 г / 890 ₽</span>
          </div> 
          
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Люля из щуки и Сахалинского гребешка":"Kebub from pike and Sakhalin scallop"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>1290 ₽</span>
          </div> 
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк Мачете":"Steak Machete"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>1290 ₽</span>
          </div> 
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк Чак рол":"Chuck ol Steak"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>1290₽</span>
          </div> 
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк Пиканья":"Steak Picanya"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'> 1290 ₽</span>
          </div> 
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Т-бон":"T-bone Steak"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>100 г / 690 ₽</span>
          </div> 
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк Ковбой":"Cowboy Steak"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>100 г / 690 ₽</span>
          </div> 

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Морской карась":"Sea carp"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>330 г / 900 ₽</span>
          </div> 
          
        
  




    {/* {onFire.map((el,index)=>(
        
        <div className='item' key={index}tabIndex="0" onClick={func}>
            <span className='label'>{ru==="ru"?el.name:el.name_en}</span>
           
            <span className='price'>{el.price} ₽</span>
          </div> */}

    
    
   


    </div>
    </>
  )
}

export default Onfire