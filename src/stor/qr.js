

const str = {
    name:"",
    table:""
}



const reducer = (state = str,action) =>{
    
    switch (action.type) {
        case "addtable":
                state = {...state,table:action.payload}

            return state
        case "addname":
            state = {...state,name:action.payload}

        return state

            
        default:
            return state
    }

}

export default reducer