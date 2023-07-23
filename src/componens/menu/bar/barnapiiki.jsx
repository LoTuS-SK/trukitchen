import React ,{useState}from 'react'
import "./bar.css"
import { coffe , drinks ,hotdrinks, lemonade, tee} from "../../../data/basebar"
import { useSelector,useDispatch} from 'react-redux'
import Shop from '../../burger/корзина/Shop';



export const Barnapitki = ({display,back}) => {
  const dispath = useDispatch()
  const ru = useSelector(state=>state.one)
  const list = useSelector(state=>state.chek)
  const list_en =useSelector(state=>state.chek_en)
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
  }
    



  return (
    <>
    <Shop count={count}/>
    <div className={display?"barwarp":"barwarap none"}>
    <div className='btn-back' onClick={back}>←</div>
      <h1 className='bar_h'>{ru==="ru"?"Кофе":"Coffe"}</h1>
      {coffe.map(el=>(
        <div className='item'>
          <span className='label_b' key={el.id} onClick={func}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price} ₽</span>
        </div>
      ))}
       <h1 className='bar_h'>{ru==="ru"?"Чай":"Tee"}</h1>
      {tee.map(el=>(
        <div className='item'>
          <span className='label' key={el.id} onClick={func}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price} ₽</span>
        </div>
      ))}
      <h1 className='bar_h'>{ru==="ru"?"Напитки":"drinks"}</h1>
      {drinks.map(el=>(
        <div className='item'>
            <span className='label' onClick={func}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price}₽</span>
        </div>
      ))}
      <h1 className='bar_h'>{ru==="ru"?"Горячие напитки":"Hot drinks"}</h1>
       {hotdrinks.map(el=>(
        <div className='item'>
          <span className='label' onClick={func}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price} ₽</span>
        </div>))}
        <h1 className='bar_h'>{ru==="ru"?"Лимонады":"Lemonade"}</h1>
        {lemonade.map(el=>(
        <div className='item'><span className='label' onClick={func}>{ru==="ru"?el.name:el.name_en}</span>
        <span className='price-b'>{el.volume}мл / {el.price} ₽</span>
        </div>))}
      
    </div>
    </>
  )
}
