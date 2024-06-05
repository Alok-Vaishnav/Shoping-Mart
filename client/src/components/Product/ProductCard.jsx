import React, { useContext } from 'react'
import Styles from '../../styles/Product/ProductCard.module.css';
import { MyContext } from '../../context/MyContext';
function ProductCard(product) {

  const{setCart}=useContext(MyContext)
  console.log(setCart)

  const handleAddToCart = () => {
    // Pass an object containing product information to setCart
    setCart({ title: product.title, price: product.price });
  };
  
  return (
    <div className={Styles.container}>
      <div className={Styles.imageContainer}>
        <img src={product.thumbnail} alt="Product img" />
      </div>

      <div className={Styles.DatialContainer}>
        <h1>Product: {product.title}</h1>
        <h1>Price: {product.price + "$"}</h1>
        <h1>rating: {product.rating}</h1>
        {/* <h1>detail: {myProducts.description.slice(0,30)+"..."}</h1> */}
      </div>
      
      <button className={Styles.btn} 
      onClick={()=>{handleAddToCart()}}
      >Cart</button>
    </div>
  )
}
export default ProductCard;
