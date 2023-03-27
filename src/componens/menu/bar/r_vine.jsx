import React from 'react'
import {vine} from '../../../data/basevine'

const r_vine = ({display}) => {
  return (
    <>
    <div className={display?"r_wr_vine":"w_wr_vine none"}>
    <h2>По бокал</h2>
    {vine.filter(el=>el.price<1000&&el.type==="красное").map(el=>(
        <div><span>{el.name}</span><span>{el.price}</span></div>
    ))}
    </div>
    </>
  )
}

export default r_vine