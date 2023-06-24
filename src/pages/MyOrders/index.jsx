import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderCard } from '../Components/OrderCard';
import { ShoppingCartContext } from '../../Context/index'
import { Layout } from '../Components/Layout/index'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

// import './'

export function MyOrders() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+ 1)
  if (index === 'last') index = context.order?.length -1
 
  return (
    <>
      <Layout className='bg-red-500'>
      <div className='flex items-center justify-center relative w-80 mb-6'>
          <Link to='/My-order' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
          </Link>
          <h1>My Order</h1>
        </div>
       
        <div className='flex flex-col w-80' >
          {
            context.order?.[index]?.products.map(product => (
              <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price= {product.price} 
               />
            ))
          }
        </div>
      </Layout>
    </>
  )
}
