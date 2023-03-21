import React from 'react'
import { useSearchParams } from "react-router-dom"
 

const Salats = () => {

  const [queryParameters] = useSearchParams()

  const arr = JSON.parse(queryParameters.get("name"))
  
  return (
    <div>
      <h1>TEST</h1>
      <h2>{arr[0].name}</h2>
      
    </div>
  )
}

export default Salats