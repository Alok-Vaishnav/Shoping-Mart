import React from 'react'
import Styles from '../../styles/Home/Footer.module.css'

function Footer() {
  return (
    <div className={Styles.Footer}>

      <ul className={Styles.footerUl}>

        <li className={Styles.footerItem}>Home</li>

        <li className={Styles.footerItem}>Features</li>

        <li className={Styles.footerItem}>Pricing</li>

        <li className={Styles.footerItem}>FAQs</li>

        <li className={Styles.footerItem}>About</li>
      </ul>
    </div>
  )
}
export default Footer;
