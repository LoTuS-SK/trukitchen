import React from 'react'
import { useSearchParams } from "react-router-dom"
 

const Salats = () => {

  const [queryParameters] = useSearchParams()

  const arr = queryParameters.get("name")
  
  return (
    <div>
      <h1>Заказ</h1>
      
        <div>{arr}</div>
    
      
    </div>
  )
}

export default Salats