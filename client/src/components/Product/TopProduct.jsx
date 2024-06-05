import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { MyContext } from '../../context/MyContext';
import Styles from '../../styles/Product/ProductCard.module.css';

function TopProduct() {

  const { notfound } = useContext(MyContext);
  const [topProducts, setTopProducts] = useState([])

  async function getTopProducts() {
    try {
      let response = await fetch(`${process.env.REACT_APP_SERVER_PORT}/products/topproducts`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      else {
        let TopProducts = await response.json();
        setTopProducts(TopProducts);
      }

    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getTopProducts();
  }, [notfound]);


  // useEffect(() => {
  //   console.log("myProducts:", myProducts);
  // }, [myProducts]);


  return (
    <div className={Styles.MapContainer}>
      {topProducts && topProducts.map((product) => (
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

export default  TopProduct;
