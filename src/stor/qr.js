//import { useSearchParams } from "react-router-dom"

//const [queryParameters] = useSearchParams()

//const str = queryParameters.get("name")

const str = "Сергей"



const reducer = (state = str,action) =>{
    
    switch (action.type) {
        case "addtable":
            return state = action.payload
        case "get":
        return state = "en"

            
        default:
            return state
    }

}

export default reducer