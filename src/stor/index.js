import { combineReducers, legacy_createStore as createStore} from 'redux'

import reducer from './reducer'
import cheking from "./reducerchek"
import cheking_en from "./reducerchek_en"

const rootreducer = combineReducers({
    one:reducer,
    chek:cheking,
    chek_en:cheking_en
})




export const store = createStore(rootreducer)

