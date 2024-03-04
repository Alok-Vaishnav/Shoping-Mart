import React, { useContext } from 'react'
import Navbar from '../../../src/components/Home/Navbar/Navbar'
import { MyContext } from '../../Context/MyContext'
import Slide from './Slide';
import MyAccount from './Navbar/MyAccount/MyAccount';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate()
  const { isCategory, setIsCategory, IsMyaccount } = useContext(MyContext);
  return (
    <>
      <div>
        <Navbar />
        <Slide/>
        {/* {isCategory && <Categories />} */}
        
        {(IsMyaccount && localStorage.getItem("User")) && <MyAccount/>}
        {(IsMyaccount && !localStorage.getItem("User")) && navigate("/login")}
        {/* <Product />
        <Card/> */}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Home;
