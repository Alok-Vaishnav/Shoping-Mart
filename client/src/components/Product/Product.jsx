import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard'

import Styles from '../../styles/Product/ProductCard.module.css';
;

function Product() {

  
  const [myProducts, setMyProducts] = useState([])
  const [notfound, setnotfound] = useState(false)

  async function getAllProducts() {
    try {
      let response = await fetch(`${process.env.REACT_APP_SERVER_PORT}/products/allProducts`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      else {
        let AllProducts = await response.json();
        setMyProducts(AllProducts);
      }

    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [notfound]);


  useEffect(() => {
    console.log("myProducts:", myProducts);
  }, [myProducts]);


  return (
    <div className={Styles.MapContainer}>
      {myProducts && myProducts.map((product) => (
        <ProductCard
          key={product.id}
          thumbnail={product.thumbnail}
          description={product.description}
          rating={product.rating}
          price={product.price}
          title={product.title}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default  Product;
