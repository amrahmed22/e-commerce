import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext()

let token ={
    token:localStorage.getItem('userToken')
}
 function addToCart(id) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart/`, { productId: id }, { headers: token})
        .then((response) => response)
        .catch((error) => error)


}
 function getUserCart() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers: token})
        .then((response) => response)
        .catch((error) => error)

}



 function removeProduct(id) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers: token})
        .then((res) => res).catch((err) => err)

}
 function clearCart() {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers: token})
        .then((res) => res).catch((err) => err)

}

 function updateProduct(id, count) {
    if (count < 0) {
        count = 0
    }
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count }, { headers: token})
        .then((res) => res).catch((err) => err)

}


export default function CartContextProvider({ children }) {
    return <CartContext.Provider value={{ addToCart, getUserCart, removeProduct, updateProduct, clearCart }}>
        {children}
    </CartContext.Provider>

}