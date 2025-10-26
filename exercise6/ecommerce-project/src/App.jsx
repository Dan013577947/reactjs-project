import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import OrdersPage from '../pages/OrdersPage'
import CheckoutPage from '../pages//checkout/CheckoutPage'
import TrackingPage from '../pages/TrackingPage'
import PageNotFound from '../pages/PageNoFound'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart, setCart] = useState([]);
  
  useEffect(()=>{
    const getCheckoutData = async () => {
      const responseCart = await axios.get('/api/cart-items?expand=product');
      setCart(responseCart.data);
    }
    getCheckoutData();
  },[]);
  return(
    <Routes>
      <Route index element={
        <HomePage cart={cart} />}
      />
      <Route path="/orders" element={<OrdersPage cart={cart} />}/>
      <Route path="/checkout" element={<CheckoutPage cart={cart} />}/>
      <Route path="/tracking" element={<TrackingPage />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App
