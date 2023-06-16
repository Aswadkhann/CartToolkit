import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Main pages/LandingPage";
import AboutPage from "./Main pages/AboutPage";
import BeardContestPage from "./Main pages/BeardContestPage";
import BeardShopPage from "./Main pages/BeardShopPage";
import OnlineShop from "./Main pages/OnlineShop";
import axios from "axios";
import { useState, } from "react";
import Admission from "./Main pages/Admission";
import VAlidation from "./pages/VAlidation";
import New from "./pages/New";
import Cart from "./redux/Cart";
import RegistrationPage from "./pages/Registration";
import Login from "./pages/Login";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let component = true;
//   useEffect(() => {
//     const getProducts = async () => {
//         setLoading(true);
//         const response = await fetch("https://fakestoreapi.com/products");
//         if (component) {
//             setData(await response.clone().json());
//             setLoading(false);
//             console.log(data)
//         }
//         return () => {
//             component = false;
//         }
//     }

//     getProducts();
// }, [])


  return (

    
    <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage data={data} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/beardcontest"
          element={<BeardContestPage data={data} />}
        /> 
        <Route path="/beardshop" element={<BeardShopPage data={data} />} />
        <Route path="/onlineshop" element={<OnlineShop />} /> */}
        {/* <Route path="/" element={<VAlidation/>}/> */}
        <Route path="/" element={<RegistrationPage/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
};

export default App;
