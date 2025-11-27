import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "./Context/Context.jsx";
import Home from "../src/pages/Home.jsx";
import Support from "../src/pages/Support.jsx";


function App() {
  return (
    <>
      <Context>
        <div className="App">
          <ToastContainer />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/support" element={<Support/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </Context>
     
    </>
  );
}

export default App;
