import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/MyContext'
import Navbar from '../../../src/components/Home/Navbar/Navbar'
import Slide from './Slide';
import MyAccount from './Navbar/MyAccount/MyAccount';
import Profile from './Navbar/MyAccount/Profile.jsx';
import Order from "../../components/Home/Navbar/MyAccount/Order.jsx"
import ClickAwayListener from 'react-click-away-listener';

function Home() {
  const navigate=useNavigate()
  const { isCategory, setIsCategory, IsMyaccount,IsProfile,IsOrder} = useContext(MyContext);
  return (
    <>
      <div>
        <Navbar />
        <Slide/>

        {/* {isCategory && <Categories/>} */}
        
        {(IsMyaccount && localStorage.getItem("User")) && <MyAccount/>}
        {(IsMyaccount && !localStorage.getItem("User")) && navigate("/login")}
        {IsProfile  && <Profile/>}
        {IsOrder&& <Order/>}
        {/* <Product />
        <Card/> */}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Home;
