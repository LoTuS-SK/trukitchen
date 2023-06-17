import React from 'react'
import './chek.css'
// import { useSearchParams } from "react-router-dom"
// import { snakes } from '../../data/database'
import { useSelector } from 'react-redux'
import menu from "../../png/menu.png"
import { Link } from "react-router-dom";


const Сhek = () => {
  const list = useSelector(state => state.chek)
  // const [queryParameters] = useSearchParams()
  // const str = decodeURI(queryParameters.get("name"))
  // const arr = JSON.parse(str)
  console.log(list)
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



const sum = list.reduce(function(sum,num){
  return (num.price * num.count) + sum
},0)

function click(e){
  const count = "Ввидите количество"
  
  const pr = prompt("",count)
  console.log(pr)
}
  
  return (
    <div >
      <Link to={"/"}>
        <div className='wrap_img_menu'> 
        <img src={menu} alt="" />
        </div>
      </Link>
      <h2>Заказ</h2>
      <div className="test">{list.map(state=>(
        <div className='list_ch'>
          
      <span className='name'>{state.name}</span>
      <span className='count'onClick={click}>{state.count}</span>
      <div className='prise'><div>{state.count * state.price} ₽</div></div>      
        
        </div> 
      ))}
      <div className="acc">Итого - {sum} ₽</div>
      </div>
      
    </div>
  )
}

export default Сhek