import { Layout } from '../Components/Layout/index';
import { Card } from '../Components/Card/index';
import { useState,useEffect } from 'react';
import { ProductDetail }  from '../Components/ProductDetail/index'
// import './'

export function Home() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItem(data))
  }, [])
  return (
    <>
      <Layout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            item?.map((item) => (
              <Card key= {item.id} data={item} />            
            ))
          }
        </div>
        <ProductDetail/>
      </Layout>
    </>
  )
}

