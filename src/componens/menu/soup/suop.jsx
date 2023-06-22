import React from 'react'
import "../snaks/snaks"
import { soup } from '../../../data/database'
import { useSelector} from 'react-redux'

const Suop = ({display,back,func}) => {



  const lean = useSelector(state=>state.one)
  return (
    <>
     <div className={display?"skakes":"snakes none"}>
    <div className='btn-back' onClick={back}>←</div>
    <div className='snakes-item'>Супы</div>
    {soup.map(el=>(
        <div className='item' key={el.id}tabIndex="0" onClick={func}><span className='label'>{lean==="ru"?el.name:el.name_en}</span><span className='price'>{el.price} ₽</span></div>
    ))}
    </div>
    
    </>
  )
}

export default Suop