import Header from '../../components/Header'
import './HomePage.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductsGrid from './ProductsGrid'

function HomePage({cart}) {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getProductsData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    }
    getProductsData();
    
  },[]);  

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Ecommerce Project</title>
      <div className="home-page">
        <Header cart={cart} />
        <ProductsGrid products={products} />
      </div>
    </>
  );

}

export default HomePage