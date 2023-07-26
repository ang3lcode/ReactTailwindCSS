import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context/index'


import { Home } from '../home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Navbar } from '../Components/Navbar/index'
import { CheckoutSideMenu } from '../Components/CheckoutSideMenu';

import './App.css';

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)
  //account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // sign out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/furnitures', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    // {path: '/', element: <Home/>},
    // {path: '/all', element: <Home/>},
    // {path: '/clothes', element: <Home/>},
    // {path: '/electronics', element: <Home/>},
    // {path: '/furnitures', element: <Home/>},
    // {path: '/toys', element: <Home/>},
    // {path: '/others', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-orders/last', element: <MyOrders/>},
    {path: '/my-order/:id', element: <MyOrders/>},
    {path: '/*', element: <NotFound/>},
    {path: '/sign-in', element: <SignIn/>},
  ])
  return routes
}


const App = () => { 
  initializeLocalStorage()
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

{/* <Home/>
      <MyAccount/>
      <MyOrder/>
      <MyOrders/>
      <NotFound/>
      <SignIn/> */}
export default App
