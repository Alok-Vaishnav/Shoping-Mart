import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext.jsx'
import Navbar from '../components/Home/Navbar.jsx'
import Slide from '../components/Home/Slide.jsx'
import Authbox from '../components/Auth/Authbox.jsx'
import MyAccount from '../components/Home/MyAccount/MyAccount.jsx'
import Profile from '../components/Home/MyAccount/Profile.jsx'
import Order from "../components/Home/MyAccount/Order.jsx"
import Categories from '../components/Product/Categories.jsx'
import Product from '../components/Product/Product.jsx'
import Footer from "../components/Home/Footer.jsx"

function Home() {
  const { IsMyaccount, IsProfile, IsOrder } = useContext(MyContext);

  return (
    <>
      <div>
        <Navbar />
        <Slide />
        {(IsMyaccount && localStorage.getItem("User")) && <MyAccount />}
        {(IsMyaccount && !localStorage.getItem("User")) && <Authbox />}
        {IsProfile && <Profile />}
        {IsOrder && <Order />}
        <Categories />
        <Product />
      </div>
      <Footer />
    </>
  )
}

export default Home;
