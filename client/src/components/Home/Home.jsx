import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/MyContext'
import Navbar from '../../../src/components/Home/Navbar/Navbar'
import Slide from './Slide';
import MyAccount from './Navbar/MyAccount/MyAccount';
import Profile from './Navbar/MyAccount/Profile.jsx';
import Order from "../../components/Home/Navbar/MyAccount/Order.jsx"
import Categories from '../Product/Categories.jsx';
import TopProduct from '../Product/TopProduct.jsx';


function Home() {
  const navigate = useNavigate()
  const { isCategory, IsMyaccount, IsProfile, IsOrder } = useContext(MyContext);
  return (
    <>
      <div>
        <Navbar />
        <Slide />
        {(IsMyaccount && localStorage.getItem("User")) && <MyAccount />}
        {(IsMyaccount && !localStorage.getItem("User")) && navigate("/signup")}
        {IsProfile && <Profile />}
        {IsOrder && <Order />}
        <Categories/>
        <TopProduct />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Home;
