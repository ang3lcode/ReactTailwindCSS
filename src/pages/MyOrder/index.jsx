import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../Components/Layout/index'
import { OrdersCard } from '../Components/OrdersCard'
import { ShoppingCartContext } from '../../Context/index'

// import './'

export function MyOrder() {
  const context = useContext(ShoppingCartContext)
  return (
    <>
      <Layout>
        <div className='flex items-center justify-center relative w-80 '>
          <h1>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-order/${index}`}> 
              <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts} />
            </Link>
          ))
        }
      </Layout>
    </>
  )
}
