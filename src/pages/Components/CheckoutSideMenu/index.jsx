import { XMarkIcon } from '@heroicons/react/24/solid'
import './Styles.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../../Context/index'
import { OrderCard } from '../OrderCard';


export const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('product', context.productToShow)
    console.log('cart', context.cartProducts)
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
            <div className='px-6' >
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price= {product.price} />
                    ))
                }
            </div>
        </aside>
    )
}