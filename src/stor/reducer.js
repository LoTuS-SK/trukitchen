//import { createStore } from "redux";
//import { Sweets } from "../data/database"
import * as list from  "../data/basebar";

const arr = []

for (const property in list) {
    
    arr.push(...list[property])
  }
  console.log(arr)
  // Expected output:
  // "a: 1"
  // "b: 2"
  // "c: 3"



const reducer = (state = arr,action) =>{
    switch (action.type) {
        case "add1":
            return {...list,count:action.payload}
            
        default:
            return state
    }

}

export default reducer