import { useContext } from 'react';
import { OrderCard } from '../Components/OrderCard';
import { ShoppingCartContext } from '../../Context/index'
import { Layout } from '../Components/Layout/index'
// import './'

export function MyOrders() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order)
  return (
    <>
      <Layout className='bg-red-500'>
        MyOrders
        <div className='flex flex-col w-80' >
          {
            context.order?.slice(-1)[0].products.map(product => (
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
