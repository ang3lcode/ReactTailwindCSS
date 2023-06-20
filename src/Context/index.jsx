import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    // prudct Detail . open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen)
    const openProductDetail = () =>  setIsProductDetailOpen(true)

     // Checkout side menu . open/close
     const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
     const toggleCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)
     const openCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(true)

    //product detail show product
    const [productToShow, setProductToShow] = useState({});
    //shopping cart . add product to cart
    const [cartProducts, setCartProducts] = useState([]);
   
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            toggleProductDetail,
            isProductDetailOpen,
            productToShow, 
            setProductToShow,
            openProductDetail,
            cartProducts,
            setCartProducts,

            isCheckoutSideMenuOpen,
            toggleCheckoutSideMenu,
            openCheckoutSideMenu
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}