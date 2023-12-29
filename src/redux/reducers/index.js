import { combineReducers } from "redux"
import WebAppReducer from "./WebAppReducer"


// CombineReducer fonksiyonu, tüm reducer’ları birleştirir ve aktarır. Burada tek reducer olduğu için o reducer aktarılmıştır. Şu an tüm uygulama için genel bir state yani bellek alanımız olmuştur


const reducers = combineReducers({
    WebAppReducer
})

export default reducers;