// Action’ları daha kullanışlı yapmak için için çoğu zaman Action Creator’lardan faydalanırız. Action Creator’lar birer arrow function’lardır. 
// Sadece değişen payload kısmını parametre alıp bir action geri döner. 
// Type’lar genelde değişmeyen, sadece yönlendirici sabitler olduğu için ayrı bir dosyada tutulur(actionTypes).

// Bunları en son oluşturacağım için şimdilik sadece örnek olarak yazıyorum.

export const GET_LATEST_NEWS = "GET_LATEST_NEWS"
export const NOT_HOMEPAGE = "NOT_HOMEPAGE"
export const HOMEPAGE = "HOMEPAGE"
export const PRODUCTPAGE = "PRODUCTPAGE"
export const PRODUCTPAGEOFF = "PRODUCTPAGEOFF"