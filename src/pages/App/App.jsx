import { Home } from '../home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import './App.css'


function App() {
  return (
    <>
      <Home/>
      <MyAccount/>
      <MyOrder/>
      <MyOrders/>
      <NotFound/>
      <SignIn/>
    </>
  )
}

export default App
