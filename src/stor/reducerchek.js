import * as eat from "../data/database"
import { vine }  from "../data/basevine"
import * as bar from "../data/basebar"

const arreat = []
const arrbar = []
let chek = []

for (const property in eat) {
    
    arreat.push(...eat[property])
  }

  for (const property in bar) {
    
    arrbar.push(...bar[property])
  }




const cheking = (state = chek,action) =>{
    switch (action.type) {
        case "add":
            const add = action.payload
            const eat = arreat.some(some=>some.name===add)
            const bar = arrbar.some(some=>some.name===add)
            const vine2 = vine.some(some=>some.name===add)
            
            
            if (eat&&chek.length===0) {
                const ch = arreat.filter(el=>el.name===add)
                ch[ch.findIndex(el=>el.name===add)].count = 1
                chek.push(...ch)
                
                return state = chek
            }

            if (eat&&chek.length>=1) {
                //const ch = chek.filter(el=>el.name===add)
                
                if(chek.some(chek=>chek.name===add)){
                    
                    const count = chek[chek.findIndex(el=>el.name===add)].count
                    chek[chek.findIndex(el=>el.name===add)].count = count + 1
                    
                    
                } else {
                const ch = arreat.filter(el=>el.name===add)
                ch[ch.findIndex(el=>el.name===add)].count = 1
                chek.push(...ch)
                }


                console.log(chek)
                return state = chek
            }


            
            // if (vine&&chek.length===0) {
            //     const ch = arreat.filter(el=>el.name===add)
            //     ch[ch.findIndex(el=>el.name===add)].count = 1
                
            //     console.log(ch)
            // }
            
            if (bar&&chek.length===0) {
                const ch = arrbar.filter(el=>el.name===add)
                ch[ch.findIndex(el=>el.name===add)].count = 1
                chek.push(...ch)
                console.log(ch)
                return state = chek
            }
            if (bar&&chek.length>=1) {
                if(chek.some(chek=>chek.name===add)){
                    
                    const count = chek[chek.findIndex(el=>el.name===add)].count
                    chek[chek.findIndex(el=>el.name===add)].count = count + 1
                    console.log(chek)
                    
                } else {
                const ch = arrbar.filter(el=>el.name===add)
                ch[ch.findIndex(el=>el.name===add)].count = 1
                chek.push(...ch)
                }


                return state = chek


            }

            if (vine2&&chek.length===0) {
                const ch = vine.filter(el=>el.name===add)
                ch[ch.findIndex(el=>el.name===add)].count = 1
                chek.push(...ch)
                console.log(ch)
                return state = chek
            }
            if (vine2&&chek.length>=1) {
                if(chek.some(chek=>chek.name===add)){
                    
                    const count = chek[chek.findIndex(el=>el.name===add)].count
                    chek[chek.findIndex(el=>el.name===add)].count = count + 1
                    console.log(chek)
                    
                } else {
                const ch = vine.filter(el=>el.name===add)
                ch[ch.findIndex(el=>el.name===add)].count = 1
                chek.push(...ch)
                }


                return state = chek


            }




            
            
            return state

        case "del":
            chek = [];    
            console.log(chek)
        return state = chek   

        case "delone":
        const delone = action.payload
        state.forEach((el)=>{
            if(el.name===delone){
                el.count = el.count -1 
            }
        })
        
        return state
        
        
        case "del-all":
                const del = action.payload
                state = del
        
        return state    
            
        default:
            return state
    }

}

export default cheking