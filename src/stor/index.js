import { combineReducers, legacy_createStore as createStore} from 'redux'

import reducer from './reducer'
import cheking from "./reducerchek"

const rootreducer = combineReducers({
    one:reducer,
    chek:cheking
})




export const store = createStore(rootreducer)

