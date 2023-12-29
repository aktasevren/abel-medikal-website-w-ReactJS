import { NOT_HOMEPAGE,HOMEPAGE,PRODUCTPAGE,PRODUCTPAGEOFF } from "./ActionTypes";

// Bir action genellikle type ve payload olmak üzere iki adet property’den oluşur. type action’un belirteçi hangi işlemin yapıldığını belirtir. payload ise gönderilecek veriyi içeren property’dir. 
// payload yerine gönderdiğiniz verinin adını da (movie, comment vs.) yazabilirsiniz fakat genel bir kural olarak payload property’sini kullanmaya özen göstermelisiniz.



export const notHomePage = () => (dispatch) => {
    dispatch({
        type: NOT_HOMEPAGE,
    })
}


export const HomePage = () => (dispatch) => {
    dispatch({
        type: HOMEPAGE,
    })
}


export const ProductPage = () => (dispatch) => {
    dispatch({
        type: PRODUCTPAGE,
    })
}


export const ProductPageOff = () => (dispatch) => {
    dispatch({
        type: PRODUCTPAGEOFF,
    })
}