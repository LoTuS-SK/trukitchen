import React from 'react'
import "./bar.css"
import { coffe , drinks ,hotdrinks, lemonade, tee} from "../../../data/basebar"
import { useSelector} from 'react-redux'




export const Barnapitki = ({display,back,add}) => {
  const ru = useSelector(sr=>sr.one) 
  //const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))

  // function func(e){
  //   const target = e.target.textContent
    
  //   if (ru==="ru"){
  //     dispath({type:"add",payload:target})
  //     setcount(list.reduce(function(sum,num){return num.count + sum},0))
  //   }

  //   if (ru==="en"){
  //     dispath({type:"add_en",payload:target})
  //     setcount(list_en.reduce(function(sum,num){return num.count + sum},0))
  //   }
  // }
    



  return (
    <>
   
    <div className={display?"barwarp":"barwarap none"}>
    <div className='btn-back' onClick={back}>←</div>
      <h1 className='bar_h'>{ru==="ru"?"Кофе":"Coffe"}</h1>
      {coffe.map(el=>(
        <div className='item'>
          <span className='label_b' key={el.id} onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price} ₽</span>
        </div>
      ))}
       <h1 className='bar_h'>{ru==="ru"?"Чай":"Tee"}</h1>
      {tee.map(el=>(
        <div className='item'>
          <span className='label' key={el.id} onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price} ₽</span>
        </div>
      ))}
      <h1 className='bar_h'>{ru==="ru"?"Напитки":"drinks"}</h1>
      {drinks.map(el=>(
        <div className='item'>
            <span className='label' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price}₽</span>
        </div>
      ))}
      <h1 className='bar_h'>{ru==="ru"?"Горячие напитки":"Hot drinks"}</h1>
       {hotdrinks.map(el=>(
        <div className='item'>
          <span className='label' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price} ₽</span>
        </div>))}
        <h1 className='bar_h'>{ru==="ru"?"Лимонады":"Lemonade"}</h1>
        {lemonade.map(el=>(
        <div className='item'><span className='label' onClick={add}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price} ₽</span>
        </div>))}
      
    </div>
    </>
  )
}
