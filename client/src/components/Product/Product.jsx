import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard'
import { MyContext } from '../../Context/MyContext';
import Styles from '../../styles/Product/ProductCard.module.css';
;

function Product() {

  const { notfound } = useContext(MyContext);
  const [myProducts, setMyProducts] = useState([])

  async function getAllProducts() {
    try {
      let response = await fetch("http://localhost:5000/products/allProducts")
      
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
