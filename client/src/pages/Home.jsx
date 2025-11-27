import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext.jsx'
import Navbar from '../components/Home/Navbar.jsx'
import Slide from '../components/Home/Slide.jsx'
import Authbox from '../components/Auth/Authbox.jsx'
import MyAccount from '../components/Home/MyAccount/MyAccount.jsx'
import Profile from '../components/Home/MyAccount/Profile.jsx'
import Orderstates from "../components/Home/MyAccount/Orderstates.jsx"
import Categories from '../components/Product/Categories.jsx'
import Product from '../components/Product/Product.jsx'
import ProductCard from '../components/Product/ProductCard.jsx'
import Footer from "../components/Home/Footer.jsx"
import CartBox from '../components/Home/Cart/CartBox.jsx'

function Home() {
  const { IsMyaccount, IsProfile, IsOrderstatus, Iscart, setIsCart } = useContext(MyContext);

  return (
    <>
      <div>
        <Navbar />
        <Slide />
        {(IsMyaccount && localStorage.getItem("User")) && <MyAccount />}
        {(IsMyaccount && !localStorage.getItem("User")) && <Authbox />}
        {IsProfile && <Profile />}
        {IsOrderstatus && <Orderstates/>}
        
        {/* Cart with backdrop overlay */}
        {Iscart && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-[99998] transition-opacity duration-300"
              onClick={() => setIsCart(false)}
            ></div>
            <CartBox/>
          </>
        )}
        
        <Categories />
        <Product />

        <Footer />
      </div>
    </>
  )
}

export default Home;
