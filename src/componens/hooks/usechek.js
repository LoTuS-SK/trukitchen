import { useSelector, useDispatch} from "react-redux";
import { useState } from "react";


export const useTest = (e) =>{
const dispath = useDispatch()
const ru = useSelector(state=>state.one)
const target = e.target.textContent
const list = useSelector(state=>state.chek)
const list_en = useSelector(state=>state.chek_en)
const [count,setcount] = useState(list.reduce(function(sum,num){return num.count + sum},0))
if (ru==="ru"){
    dispath({type:"add",payload:target})
    setcount(list.reduce(function(sum,num){return num.count + sum},0))
  }

  if (ru==="en"){
    dispath({type:"add_en",payload:target})
    setcount(list_en.reduce(function(sum,num){return num.count + sum},0))
  }
  
  return count
     
}