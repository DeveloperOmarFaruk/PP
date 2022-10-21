
import React, {useContext} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PLabAnalysis from "./ProteinLab/PLabAnalysis/PLabAnalysis";
import PLabDesign from "./ProteinLab/PLabDesign/PLabDesign";
import ProteinDesign from "./ProteinDesign/ProteinDesign";
import ProteinDesignBacteria from "./ProteinDesign/ProteinDesignBacteria";
import ProteinDesignVirus from "./ProteinDesign/ProteinDesignVirus";
import Order from "./Order/Order";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Privacy from "./Privacy/Privacy";
import Rules from "./Rules/Rules";
import Contact from "./Contact/Contact";
import SignIn from "./SignIn/SignIn";
import Forgot from "./SignIn/Forgot";
import Work from "./Work/Work";
import ContactUs from "./Contact/ContactUs";
import ContactShare from "./Contact/ContactShare";
import Home from "./Components/Home/Home";
import Checkout from "./Checkout/Checkout";
import Cart from "./Cart/Cart";
import {GlobalContext} from "./context/Provider";
import LoginPrivateRoute from './context/privateRoute'
import LoginPublicRoute from './context/publicRoute'



function App() {
  const {authState, authDispatch} = useContext(GlobalContext)

    return ( 
      

      <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<LoginPublicRoute><SignIn /></LoginPublicRoute>} />
          <Route element={<LoginPrivateRoute/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/protein-lab-analysis" element={<PLabAnalysis />} />
            <Route path="/protein-lab-design" element={<PLabDesign />} />
            <Route path="/protein-design" element={<ProteinDesign />} />
            <Route path="/protein-design-bacteria" element={<ProteinDesignBacteria/>} />
            <Route path="/protein-design-virus" element={<ProteinDesignVirus />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacypolicy" element={<Privacy />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/contact-share-story" element={<ContactShare/>} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/how-it-works" element={<Work />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart/>} />
          </Route>
        </Routes>
        <Footer/>
</Router>
     );
     }
      export default App;
