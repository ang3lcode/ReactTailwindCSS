import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css';


export const ProductDetail = () => {
    return (
        <aside className='product_detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    Detail
                </h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black'/>
                </div>
            </div>
        </aside>
    )
}