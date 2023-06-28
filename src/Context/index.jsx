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
    const [filteredItems, setFilteredItems] = useState(null);
    // get product by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    // get  product by category
    const [searchByCategory, setSearchByCategory] = useState(null);
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItem(data))
      }, [])

    const filteredItemsByTitle = (item, searchByTitle) => {
        return item?.filter(items => items.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const filteredItemsByCategory = (item, searchByCategory) => {
        return item?.filter(items => items.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    const filterBy = (searchType, item, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE'){
            return filteredItemsByTitle(item, searchByTitle)
        }
        if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(item, searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(item, searchByCategory).filter(items => items.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
        }
        if(searchType){
            return item
        }
    }


    
    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', item, searchByTitle,searchByCategory ))

        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', item, searchByTitle,searchByCategory ))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', item, searchByTitle,searchByCategory ))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, item, searchByTitle,searchByCategory ))


      }, [item, searchByTitle, searchByCategory])
     

      console.log('filteredItems: ' , filteredItems)

   
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
            setSearchByTitle,
            filteredItems,

            searchByCategory, 
            setSearchByCategory
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}