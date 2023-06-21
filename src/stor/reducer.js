
const arr = "ru"

const reducer = (state = arr,action) =>{
    
    switch (action.type) {
        case "ru":
            return state = "ru"
        case "en":
        return state = "en"

            
        default:
            return state
    }

}

export default reducer