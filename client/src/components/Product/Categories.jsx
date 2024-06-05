import React from 'react'
import Styles from "../../styles/Product/Categories.module.css"
import iPhone from '../../assets/Image/Phone.jpg'


export default function Categories() {
  return (
    <div className={Styles.Container}>
      <div className={Styles.ImgContainer}>
        <img src={iPhone} alt="phone" />
        <h1>iPhone</h1>
      </div>

      <div className={Styles.ImgContainer}>
        <img src={iPhone} alt="" />
        <h1>iPhone</h1>
      </div>

      <div className={Styles.ImgContainer}>
        <img src="https://media.croma.com/image/upload/v1708672572/Croma%20Assets/Communication/Mobiles/Images/261932_0_bieudy.png" alt="" />
        <h1>iPhone</h1>
      </div>

      <div className={Styles.ImgContainer}>
      <img src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_5_3.png" alt="" />
        <h1>iPhone</h1>
      </div>

      <div className={Styles.ImgContainer}>
        <img src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_5_3.png" alt="" />
        <h1>iPhone</h1>
      </div>

    </div>
  )
}
