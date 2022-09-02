import React from 'react'
import "./Footer.css"
import logo from "../../Images/logo.png"
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-col-3">
            <div className="footer-left-image">
              <NavLink to="/">
              <img src={logo} alt={logo} />
            </NavLink>
              
            </div>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          
          <div className="footer-col-9">
            <div className="footer-right-container">
              <dev className="footer-right-container-box">
                <div className="footer-right-container-box-design">
                  <p>Company</p>
                  <ul>
                    <li>
                      <NavLink to="/about" className="footer-navlink">About</NavLink>
                    </li>

                    <li>
                      <NavLink to="/contact-us" className="footer-navlink">Contact Us</NavLink>
                    </li>

                    <li>
                      <NavLink to="/faq" className="footer-navlink">FAQs</NavLink>
                    </li>
                  </ul>
                   
                </div>
                <div className="footer-right-container-box-design">
                  <p>Legal</p>
                  <ul>
                    <li>
                      <NavLink to="/privacypolicy" className="footer-navlink">Privacy Policy</NavLink>
                    </li>

                    <li>
                      <NavLink to="/rules" className="footer-navlink">Terms of Use</NavLink>
                    </li>
                  </ul>
                </div>
              </dev>
              <div className="contact-us-box">
              <div className="footer-right-container-box-design" style={{margin:"0px"}}>
                  <p>Contact Us</p>
                  <div className="footer-contact-us">
                    <p>Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                    <p>example@email.com</p>
                    <p>123-456-7890</p>
                  </div>
                   
                </div>
              </div>
            </div>
          </div>
          

       
        </div>


        <div className="footer-copywrite-social-container">
            <div className="footer-copywrite-container">
              <p>© Copyright 2022 Protein Writer. All rights reserved.</p>
            </div>

            <div className="footer-social-container">
            <ul>
                    <li>
                  <NavLink to="#" className="footer-navlink-social">
                  <i class="fa-brands fa-facebook"></i>
                      </NavLink>
                    </li>

                    <li>
                <NavLink to="#" className="footer-navlink-social">
                <i class="fa-brands fa-instagram"></i>
                      </NavLink>
                    </li>

                    <li>
                <NavLink to="#" className="footer-navlink-social">
                <i class="fa-brands fa-twitter"></i>
                      </NavLink>
                    </li>
                  </ul>
            </div>
          </div>
    </div>
    </>
  )
}

export default Footer