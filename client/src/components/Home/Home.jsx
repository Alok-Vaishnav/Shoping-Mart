import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/MyContext'
import Navbar from '../../../src/components/Home/Navbar/Navbar'
import Slide from './Slide';
import MyAccount from './Navbar/MyAccount/MyAccount';
import Profile from './Navbar/MyAccount/Profile.jsx';
import Order from "../../components/Home/Navbar/MyAccount/Order.jsx"
import Categories from '../Product/Categories.jsx';
import TopProduct from '../Product/TopProduct.jsx';
import Footer from "../Home/Footer.jsx"
import Signup from "../Auth/Signup.jsx"

function Home() {
  const navigate = useNavigate()
  const { isCategory, IsMyaccount, IsProfile, IsOrder, IsSignup } = useContext(MyContext);

  useEffect(() => {
    console.log(IsSignup)
  }, [IsSignup])

  return (
    <>
      <div>
        <Navbar />
        <Slide />
        {(IsMyaccount && localStorage.getItem("User")) && <MyAccount />}
        {(IsMyaccount && !localStorage.getItem("User")) && <Signup />}

        {/* {IsSignup && <Signup />} */}

        {IsProfile && <Profile />}
        {IsOrder && <Order />}
        <Categories />
        <TopProduct />
        {/* <Product/> */}

      </div>
      <Footer />
    </>
  )
}

export default Home;
