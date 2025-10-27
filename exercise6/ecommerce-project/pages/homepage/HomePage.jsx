import Header from '../../components/Header'
import './HomePage.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductsGrid from './ProductsGrid'
import { useSearchParams } from 'react-router'

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  
  
  useEffect(() => {
    const getProductsData = async () => {
      const url = search ? await axios.get(`/api/products?search=${search}`) : await axios.get('/api/products');
      const response = url;
      setProducts(response.data);
    }
    getProductsData();

  }, [search]);


  useEffect(() => {
    const resetData = async () => {
      window.axios = axios;
      // const response = await axios.post('/api/reset');
      // console.log(response);
    }
    resetData();
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Ecommerce Project</title>
      <div className="home-page">
        <Header cart={cart} />
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );

}

export default HomePage