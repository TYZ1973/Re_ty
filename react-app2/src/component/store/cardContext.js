import React from 'react';

const cardContext = React.createContext({
    items:[],
    totalAmount:0,
    totalPrice:0,
    addMealHandler:()=>{},
    subMealHandler:()=>{},
    clearCart:()=>{}
})
export default cardContext;