import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import OrdersPage from '../pages/OrdersPage'
import CheckoutPage from '../pages//checkout/CheckoutPage'
import TrackingPage from '../pages/TrackingPage'
import PageNotFound from '../pages/PageNoFound'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getProductsData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    }
    getProductsData();
    
  },[]);  

  return(
    <Routes>
      <Route index element={
        <HomePage products={products} />}
      />
      <Route path="/orders" element={<OrdersPage />}/>
      <Route path="/checkout" element={<CheckoutPage />}/>
      <Route path="/tracking" element={<TrackingPage />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App
