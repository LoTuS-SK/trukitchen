import React from 'react'
// import { useSearchParams } from "react-router-dom"
// import { snakes } from '../../data/database' 

const Сhek = ({disch}) => {

  // const [queryParameters] = useSearchParams()
  // const str = decodeURI(queryParameters.get("name"))
  // const arr = JSON.parse(str)

  // function pars_url(){
  //   let list = []
  //   for(let elem of snakes){
  //     for(let elem2 of arr){
  //       if(elem2.id === elem.id){
  //         list.push(elem)
  //       }
  //     }
  //   }
  //   return list
  // }


  
  return (
    <div className={disch?"chek":"chek none"}>
      {/* <h1>Заказ</h1>
      {pars_url().map((el=>(
        <div>{el.name} - {el.count}</div>
      )))} */}
      <div className="test">sd`dfsd</div>
      
    </div>
  )
}

export default Сhek