import React  from 'react'
import { Link } from 'react-router-dom'
import kor from "../../../png/kor.png"
import "./chop.css"


const Shop = ({count}) => {

return (
    <>
     <Link to="/chek"><img  className='chek' src={kor} alt="img"/>
      {count>0&&<div className="cir">{count}</div>}
     </Link>
    </>
  )
}

export default Shop