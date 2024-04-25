import "./App.css";
import { BrowserRouter } from "react-router-dom"; 
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "../src/Context/Context.jsx";
import Login from "../src/components/Auth/Login";
import Signup from "../src/components/Auth/Signup";
import Home from "../src/components/Home/Home.jsx";
import Support from "./components/Home/Navbar/Support.jsx";

function App() {
  return (
    <>
      <Context>
        <div className="App">
          <ToastContainer />
          <BrowserRouter>
            <Routes>
              {/* <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Context>
     
    </>
  );
}

export default App;
