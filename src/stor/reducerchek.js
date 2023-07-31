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


                
                return state = chek
            }
            
            if (bar&&chek.length===0) {
                
                if (add==="Дигустационный сет/3"){
                    let che = {id:4,name:"Дигустационный сет/3",name_en:"Digustation set/3",price:560,volume:50,section:"Настойки",count:1}
                    chek.push(che)
                    return state = chek 
                }

                if (add==="Дигустационный сет/5"){
                    let che = {id:4,name:"Дигустационный сет/5",name_en:"Digustation set/5",price:780,volume:50,section:"Настойки",count:1}
                    chek.push(che)
                    return state = chek 
                }
                
                
                
                
                
                const ch = arrbar.filter(el=>el.name===add)
                ch[ch.findIndex(el=>el.name===add)].count = 1
               
                chek.push(...ch)
                console.log(ch)
                return state = chek


            }
            if (bar&&chek.length>=1) {
              

        
                if (add==="Дигустационный сет/3"){
                    let che = {id:4,name:"Дигустационный сет/3",name_en:"Digustation set/5",price:560,volume:50,section:"Настойки",count:1}
                    
                    chek.push(che)
                    return state = chek 
                    
                    }

                    if (add==="Дигустационный сет/5"){
                        let che = {id:4,name:"Дигустационный сет/5",name_en:"Digustation set/5",price:780,volume:50,section:"Настойки",count:1}
                        
                        chek.push(che)
                        return state = chek 
                        
                        }




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

       
        case "delone":
        let delone = action.payload
       
        if(delone===undefined){
            delone = []
        }
        
        return state = delone
        
        case "add_tic3":
        let tic3 = action.payload
        
       console.log(chek.tri)
       
       chek[chek.length-1].tri = tic3
        

        console.log(chek)
        return state  = chek 

        case "del-all":
             
               
        return state = []
        
        case "chek":
        chek = action.payload
        return state = chek
            
        default:
            return state
    }

}

export default cheking