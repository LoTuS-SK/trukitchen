import { combineReducers, legacy_createStore as createStore} from 'redux'

import reducer from './reducer'
import cheking from "./reducerchek"
import cheking_en from "./reducerchek_en"
import tic from "./reducertic"
import qr from "./qr"

const rootreducer = combineReducers({
    one:reducer,
    chek:cheking,
    chek_en:cheking_en,
    qrcode:qr,
    chtic:tic
})




export const store = createStore(rootreducer)

