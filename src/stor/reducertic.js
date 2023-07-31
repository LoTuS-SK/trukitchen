
const arr = []

const reducertic = (state = arr,action) =>{
    
    switch (action.type) {
       
        case "add_tic33":
            const tic3 = action.payload
            console.log(tic3)
            
            return state = tic3
        case "en":
        

        return state
        default:
            return state
    }

}

export default reducertic