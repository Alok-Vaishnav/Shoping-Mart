import React from 'react'
import Styles from '../../styles/Product/Card.module.css';
 function Card(props) {
  return (
    <div className={Styles.container}>
    <div className={Styles.image}>
      <img src={props.thumbnail} alt="Product img" />
    </div>
    <div className={Styles.ulcontainer}>
      <ul>
        <li>Product: {props.title}</li>
        <li>Price: {props.price+"$"}</li>
        <li>rating: {props.rating}</li>
        {/* <li>detail: {props.description.slice(0,30)+"..."}</li> */}
      </ul>
    </div>

    <div className={Styles.Card}>
      <h1>Add to card</h1>
    </div>

  </div>
  )
}
export default Card;
