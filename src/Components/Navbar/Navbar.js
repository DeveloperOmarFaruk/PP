import React, {useState} from 'react'
import "./Navbar.css"
import logo from "../../Images/logo.png"
import { NavLink } from 'react-router-dom';
import Cart from '../../Cart/Cart';
 
const Navbar = () => {
 
  return (
    <>
    <div className="nav-section fixed-top">
    <header>
<nav className="navbar">
  <div className="branding-logo">
  <NavLink to="/">
            <img className=" cursor-pointer " src={logo} alt={logo}/>
            </NavLink>
  </div>
  <label for="input-hamburger" className="hamburger "></label>
  <input type="checkbox" id="input-hamburger" hidden/>
  <ul className="menu">
  <li className="has-dropdown">
      <NavLink to="/protein-design" className="menu-link">Protein Design &nbsp;
        <span className="arrow"></span> 
      </NavLink>
      <ul className="submenu">
        <li><NavLink  to="/protein-design-bacteria" className="menu-link">Bacteria</NavLink></li>
        <li><NavLink to="/protein-design-virus" className="menu-link">Virus</NavLink></li>
      </ul>
        </li>
        
        <li><NavLink to="/how-it-works" className="menu-link">How It Works</NavLink></li>

 
    <li className="has-dropdown">
      <NavLink to="#" className="menu-link">My ProteinLab &nbsp;
        <span className="arrow"></span>
      </NavLink>
      <ul className="submenu">
        
        <li className="has-dropdown">
          <NavLink to="#" className="menu-link menu-link-respons">My Analysis &nbsp;
            <span className="arrow"></span>
          </NavLink>
          <ul className="submenu">
          <li><NavLink className="menu-link" to="#">Analysis 1</NavLink></li>
                  <li><NavLink className="menu-link" to="#">Analysis 2</NavLink></li>
                  <li><NavLink className="menu-link" to="#">Analysis 3</NavLink></li>
                  <li><NavLink className="menu-link" to="#">Analysis 4</NavLink></li>
                  <li><NavLink className="menu-link" to="#">Analysis 5</NavLink></li>
                  <li><NavLink className="menu-link" to="#">Analysis 6</NavLink></li>
                  <li><NavLink className="menu-link" to="#">Analysis 7</NavLink></li>
                  <li><NavLink className="menu-link" to="#">Analysis 8</NavLink></li>
                  <li><NavLink className="menu-link" to="#">Analysis 9</NavLink></li>
                  <li><NavLink className="menu-link" to="#">Analysis 10</NavLink></li>
          </ul>
            </li>
            

            <li className="has-dropdown">
          <NavLink to="#" className="menu-link menu-link-respons">My Protein &nbsp;
            <span className="arrow"></span>
          </NavLink>
          <ul className="submenu">
          <li><NavLink className="menu-link " to="#">My Protein 1</NavLink></li>
                  <li><NavLink className="menu-link" to="#">My Protein 2</NavLink></li>
                  <li><NavLink className="menu-link" to="#">My Protein 3</NavLink></li>
                  <li><NavLink className="menu-link" to="#">My Protein 4</NavLink></li>
                  <li><NavLink className="menu-link" to="#">My Protein 5</NavLink></li>
                  <li><NavLink className="menu-link" to="#">My Protein 6</NavLink></li>
                  <li><NavLink className="menu-link" to="#">My Protein 7</NavLink></li>
                  <li><NavLink className="menu-link" to="#">My Protein 8</NavLink></li>
                  <li><NavLink className="menu-link" to="#">My Protein 9</NavLink></li>
                  <li><NavLink className="menu-link" to="#">My Protein 10</NavLink></li>
          </ul>
        </li>
            <li><NavLink to="/protein-lab-analysis" className="menu-link menu-link-respons">ProteinLab Analysis</NavLink></li>
            <li><NavLink to="/protein-lab-design" className="menu-link menu-link-respons">ProteinLab Design</NavLink></li>
            <li><NavLink to="#" className="menu-link menu-link-respons">Protein Design Basics</NavLink></li>
      </ul>
        </li>
        

        <li><NavLink to="/signin" className="menu-link">Sign In</NavLink></li>
        <NavLink to="/cart" className="nav-cart"><i class="fa-solid fa-cart-shopping"></i><span className="cart-amount">0</span></NavLink>
  </ul>
</nav>
</header>

</div>

</>
  )
}
 
export default Navbar
