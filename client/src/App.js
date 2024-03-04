import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "../src/Context/Context.jsx";
import Login from "../src/components/Auth/Login";
import Signup from "../src/components/Auth/Signup";
import Home from "../src/components/Home/Home.jsx";
import Categories from "../src/components/Home/Navbar/Categories.jsx";
import Product from "./components/Product/Product.jsx";
import Profile from "../src/components/Home/Navbar/MyAccount/Profile.jsx";
import Support from "./components/Home/Navbar/Support.jsx";

function App() {
  return (
    <>
      <Context>
        <div className="App">
          {/* <BrowserRouter> */}
            <ToastContainer />
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/Support" element={<Support/>}/>
              <Route path="/Profile"element={<Profile/>}/>
            </Routes>
          {/* </BrowserRouter> */}
        </div>
      </Context>
      <Product/>
    </>
  );
}

export default App;
