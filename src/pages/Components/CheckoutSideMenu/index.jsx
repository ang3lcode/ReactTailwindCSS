import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../../Context/index'
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../../utils'; 
import './Styles.css';


export const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }
    const handleChechout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProduct: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])

    }
    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    My Order
                </h2>
                <div onClick={() => context.toggleCheckoutSideMenu()}>
                    <XMarkIcon 
                        className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1' >
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price= {product.price} 
                        handleDelete ={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <button 
                className='w-full bg-black py-3 text-white rounded-lg'
                onClick={() => handleChechout()}>Checkout</button>
            </div>
        </aside>
    )
}