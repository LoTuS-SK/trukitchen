import React,{useState} from 'react'
import "../snaks/snaks.css"
//import { onFire } from '../../../data/database'
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
            <span className='price-pl'>125г / 670 ₽</span>
          </div>

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк филе":"fillet steak"}</div>
            <div className="wr_img"><img src={feele} alt="" /></div>
            <span className='price-pl'>250 г / 2500 ₽</span>
          </div>      

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк Рибай":"Ribeye steak"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>230г / 3300 ₽</span>
          </div>  

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Стейк стриплойн":"Striploin steak"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>230г / 3300 ₽</span>
          </div>  
          
     
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Рёбра бычка на гриле":"Grilled bull ribs"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>250г / 1900 ₽</span>
          </div> 
          
        

         
         
         <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Корейка ягнёнка на кости":"Lamb loin on the bone"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>300г / 1900 ₽</span>
          </div>   
          
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Шашлык из Каширского петуха со сладкими томатами":"Shish kebab from Kashirsky rooster with sweet tomatoes"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>350г / 690 ₽</span>
          </div>   

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Язычки ягнёнка с овощами":"Lamb tongues with vegetables"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>210 г / 990 ₽</span>
          </div> 
          
         

          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Люля из фермерского ягнёнка":"Lula from farm lamb"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>210 г / 890 ₽</span>
          </div> 
          
          <div className='item_pal' tabIndex="0" >
            <div className='label' onClick={func}>{ru==="ru"?"Люля из щуки и Сахалинского гребешка":"Lula from pike and Sakhalin scallop"}</div>
            {/* <div className="wr_img"><img src={feele} alt="" /></div> */}
            <span className='price-pl'>210 г / 680 ₽</span>
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