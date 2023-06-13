import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Home } from '../home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/My-account', element: <MyAccount/>},
    {path: '/My-order', element: <MyOrder/>},
    {path: '/My-orders', element: <MyOrders/>},
    {path: '/*', element: <NotFound/>},
    {path: '/Sign-in', element: <SignIn/>},
  ])
  return routes
}


const App = () => { 
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

{/* <Home/>
      <MyAccount/>
      <MyOrder/>
      <MyOrders/>
      <NotFound/>
      <SignIn/> */}
export default App
