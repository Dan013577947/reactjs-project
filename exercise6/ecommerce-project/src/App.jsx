import { Route, Routes } from 'react-router'
import HomePage from '../pages/homepage/HomePage'
import OrdersPage from '../pages/order/OrdersPage'
import CheckoutPage from '../pages//checkout/CheckoutPage'
import TrackingPage from '../pages/trackingpage/TrackingPage'
import PageNotFound from '../pages/pagenotfound/PageNoFound'
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

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersData = async () => {
      const response = await axios.get('/api/orders?expand=products');
      setOrders(response.data);
    }
    
    getOrdersData();
  }, [])
  return(
    <Routes>
      <Route index element={
        <HomePage cart={cart} />}
      />
      <Route path="/orders" element={<OrdersPage cart={cart} orders={orders} />}/>
      <Route path="/checkout" element={<CheckoutPage cart={cart} />}/>
      <Route path="/tracking" element={<TrackingPage cart={cart} />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App
