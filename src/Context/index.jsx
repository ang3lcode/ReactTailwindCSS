import { createContext, useEffect, useState } from 'react';

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
    // chopping cart - order
    const [order, setOrder] = useState([]);
    // get product
    const [item, setItem] = useState(null);
    // get product by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    // console.log(searchByTitle)
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItem(data))
      }, [])

   
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
            openCheckoutSideMenu,

            order, 
            setOrder,
            item, 
            setItem,
            searchByTitle, 
            setSearchByTitle
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}