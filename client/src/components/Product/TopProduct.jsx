import React, { useContext, useEffect, useState } from 'react';
import Card from './ProductCard';
import { MyContext } from '../../Context/MyContext';
import Styles from '../../styles/Product/ProductCard.module.css';

function TopProduct() {

  const { notfound } = useContext(MyContext);
  const [myProducts, setMyProducts] = useState([])

  async function getTopProducts() {
    try {
      let response = await fetch("http://localhost:5000/products/topproducts")
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      else {
        let TopProducts = await response.json();
        setMyProducts(TopProducts);
      }

    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getTopProducts();
  }, [notfound]);


  useEffect(() => {
    console.log("myProducts:", myProducts);
  }, [myProducts]);


  return (
    <div className={Styles.MapContainer}>
      {myProducts && myProducts.map((product) => (
        <Card
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

export default  TopProduct;
