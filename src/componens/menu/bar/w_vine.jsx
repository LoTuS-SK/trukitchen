import React from 'react'
import { vine } from '../../../data/basevine'

const W_VINE = ({display,back}) => {
  
    
  
    return (
    <div className={display?"w_wr_vine":"w_wr_vine none"}>
    <h2>По Бокалам </h2>
    {vine.filter(el=>el.price<1000).map(el=>(
        <><h3>{el.name}</h3><span>{el.price}</span></>
    ))}
    <div className='btn-back' onClick={back}>←</div>


    </div>
  )
}

export default W_VINE