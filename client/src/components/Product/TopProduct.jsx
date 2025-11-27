import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { MyContext } from '../../Context/MyContext';

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
    <div className="w-screen flex items-center justify-center flex-wrap shrink-0 gap-[10px] md:gap-[15px] lg:gap-5 p-[5px] md:p-[10px]">
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
