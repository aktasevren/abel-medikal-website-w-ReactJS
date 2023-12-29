// // Reducer’a state’in,başlangıç değerlerini ve state tiplerini belirtmek için bu dosyaya gerekli bilgileri veriyoruz.

import { NOT_HOMEPAGE, HOMEPAGE, PRODUCTPAGE, PRODUCTPAGEOFF } from "../actions/ActionTypes";


// import { GET_LATEST_NEWS } from "../actions/ActionTypes";


const initialState = {
    currentComponent: "HomePage",
    productsComponent: "Off"
};



const WebAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOT_HOMEPAGE:
            return {
                ...state,
                currentComponent: "notHomePage"
            };
        case HOMEPAGE:
            return {
                ...state,
                currentComponent: "HomePage"
            };
        case PRODUCTPAGE:
            return {
                ...state,
                // currentComponent: "HomePage",
                productsComponent: "On"
            };
        case PRODUCTPAGEOFF:
            return {
                ...state,
                // currentComponent: "HomePage",
                productsComponent: "Off"
            };
        default:
            return state;
    }
};

export default WebAppReducer;