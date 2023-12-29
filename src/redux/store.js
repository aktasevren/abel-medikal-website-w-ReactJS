

// Bir redux Store yarattık ve reducer verilerini store’a aktardık.

// configureStore()
// Reducer ların tanımlanmasını sağlayan yapıdır. Genelde store adında klasör içerisinde index.js veya store.js içerisinde tanımlaması yapılır.

// Store: State’in tutulduğu yerdir. Store’u oluşturmak için createStore fonksiyonunu kullanırız. Parametre olarak reducer’ları alır. Reducer’lar birden fazla olduğu zaman, ki genellikle öyle olur. 
// Bunları bir arada göndermek için combineReducer fonksiyonunu kullanırız. Redux bizim için bu reducer’ları ortak bir objede tutarak erişimi ve kullanımı kolay bir hale getirir.



// import { createStore, } from "redux";
// import reducers from "./reducers/index"

// export default function configureStore() {
//     return createStore(reducers)
// }



import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const middleware = [thunk];

export default function configureStore() {
    return createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))
}