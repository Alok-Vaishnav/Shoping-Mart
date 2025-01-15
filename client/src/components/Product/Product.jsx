import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Styles from '../../styles/Product/ProductCard.module.css';

function Product() {
  const [myProducts, setMyProducts] = useState([]);
  const [notfound, setnotfound] = useState(false);

  async function getAllProducts() {
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

      const API_ENDPOINT = `${API_BASE_URL}/products/allProducts`;
      
      console.log('Fetching products from:', API_ENDPOINT);

      let response = await fetch(API_ENDPOINT, {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        let AllProducts = await response.json();
        console.log('Fetched products:', AllProducts); // Log response data
        setMyProducts(AllProducts);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setnotfound(true); // Set notfound to true if there is an error
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [notfound]);

  useEffect(() => {
    console.log('myProducts state updated:', myProducts);
  }, [myProducts]);

  return (
    <div className={Styles.MapContainer}>
      {myProducts.length > 0 ? (
        myProducts.map((product) => (
          <ProductCard
            key={product.id}
            thumbnail={product.thumbnail}
            description={product.description}
            rating={product.rating}
            price={product.price}
            title={product.title}
            id={product.id}
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default Product;
