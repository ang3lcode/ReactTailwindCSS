import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen)
    const openProductDetail = () =>  setIsProductDetailOpen(true)

    //product detail show product
    const [productToShow, setProductToShow] = useState({});
   
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            toggleProductDetail,
            isProductDetailOpen,
            productToShow, 
            setProductToShow,
            openProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}