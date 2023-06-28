import { Layout } from '../Components/Layout/index';
import { Card } from '../Components/Card/index';
import { useContext } from 'react';
import { ProductDetail }  from '../Components/ProductDetail/index'
import { ShoppingCartContext } from '../../Context/index';
// import './'

export function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    

    
    if(context.filteredItems?.length  >0){
      return(
        context.filteredItems?.map((item) => (
          <Card key= {item.id} data={item} />            
        ))
      )
    } else {
      return (
        <div> we dont have anythig :( </div>
      )          
    }
  }

  return (
    <>
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4 '>
          <h1 className='font-medium text-xl'>Exclusive Product</h1>
        </div>
        <input 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value) }
          type="text" placeholder='search a product' />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            renderView()
          }
        </div>
        <ProductDetail/>
      </Layout>
    </>
  )
}

