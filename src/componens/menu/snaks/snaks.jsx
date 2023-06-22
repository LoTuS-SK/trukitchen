import React from 'react'
import { snakes } from "../../../data/database"
import strelka from "../../../png/strelka.png"
import "../snaks/snaks.css"
import { useSelector} from 'react-redux'

const Snaks = ({display,func,back}) => {

const lean = useSelector(state=>state.one)


  return (
    <>
    
    <div className={display?"skakes":"snakes none"}>
    <div className='strelka' onClick={back}><img src={strelka} alt="" /></div>
    <div className='snakes-item'>{lean==="ru"?"Закуски":"Snacks"}</div>
    {lean==="ru" && snakes.map(el=>(
        <div className='item' tabIndex="0" onClick={func} key={el.id}><span className='label'>{el.name}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    {lean==="en" && snakes.map(el=>(
        <div className='item' tabIndex="0" onClick={func}key={el.id}><span className='label'>{el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    </>
  )
}

export default Snaks