import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../../Context/index'


export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product_detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    Detail
                </h2>
                <div onClick={() => context.toggleProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black'/>
                </div>
            </div>
        </aside>
    )
}