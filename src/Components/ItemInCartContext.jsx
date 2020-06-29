import React, { createContext, useState } from 'react';


export const ItemInCartContext = createContext();

const ItemInCartContextContextProvider = (props) => {
    const [itemInCart, SetItemInCart] = useState([]);


    return (
        <ItemInCartContext.Provider value={{ itemInCart, SetItemInCart }}>
            {props.children}
        </ItemInCartContext.Provider>
    );
}
export default ItemInCartContextContextProvider;

