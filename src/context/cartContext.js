import React, { createContext, useState } from 'react'
import axios from 'axios'

export let cartContext = createContext(0)

async function addToCart(productId){
    return axios.post('https://ecommerce.routemisr.com/api/v1/cart', {productId}, {
        headers: { token: localStorage.getItem("token") }
    }).then(response => response.data).catch(error => {
        console.error(error)
        return error
    })
}

async function getUserCart(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
        headers: { token: localStorage.getItem("token") }
    }).then(({data}) => data).catch(err => err)
}


async function deleteFromCart(productId){
    return axios.delete('https://ecommerce.routemisr.com/api/v1/cart/' + productId, {
        headers: { token: localStorage.getItem("token") }
    }).then(({data}) => data).catch(err => err)
}

async function updateQTY(productId, count){
    return axios.put('https://ecommerce.routemisr.com/api/v1/cart/' + productId, {count} , {
        headers: { token: localStorage.getItem("token") }
    }).then(({data}) => data).catch(err => err)
}


async function createCheckout(cartId){
    return axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/' + cartId , {} , {
        headers: { token: localStorage.getItem("token") }
    }).then(response => response.data).catch(error => {
        console.error(error)
        return error
    })
}


export default function CartContextProvider({ children }) {
    let [counter, setCounter] = useState(0)
    return <cartContext.Provider value={{ counter, createCheckout , setCounter, addToCart,getUserCart ,deleteFromCart , updateQTY}}>
            {children}
        </cartContext.Provider>
    
}
