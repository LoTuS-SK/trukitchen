import { combineReducers, legacy_createStore as createStore} from 'redux'

import reducer from './reducer'
import cheking from "./reducerchek"
import cheking_en from "./reducerchek_en"
import qr from "./qr"

const rootreducer = combineReducers({
    one:reducer,
    chek:cheking,
    chek_en:cheking_en,
    qrcode:qr,
})




export const store = createStore(rootreducer)

