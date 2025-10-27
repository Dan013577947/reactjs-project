import { Route, Routes } from 'react-router'
import HomePage from '../pages/homepage/HomePage'
import OrdersPage from '../pages/order/OrdersPage'
import './App.css'
import CheckoutPage from '../pages//checkout/CheckoutPage'
import TrackingPage from '../pages/trackingpage/TrackingPage'
import PageNotFound from '../pages/pagenotfound/PageNoFound'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const responseCart = await axios.get('/api/cart-items?expand=product');
    setCart(responseCart.data);
  }

  useEffect(() => {
    loadCart();
  }, []);

  const [orders, setOrders] = useState([]);
  const loadOrders = async () => {
    const response = await axios.get('/api/orders?expand=products');
    setOrders(response.data);
  }

  useEffect(() => {
    loadOrders();
  }, [])
  return (
    <Routes>
      <Route index element={
        <HomePage cart={cart} loadCart={loadCart} />}
      />
      <Route path="/orders" element={<OrdersPage cart={cart} orders={orders} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} loadOrders={loadOrders} />} />
      <Route path="/tracking" element={<TrackingPage cart={cart} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App
