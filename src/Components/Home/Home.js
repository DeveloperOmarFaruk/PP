import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import image1 from "../../Images/mac_dynamic_table.png"
import image2 from "../../Images/mac_universal_table.png"

const Home = () => {
    const navigate = useNavigate();
    const signin = (e) => {
        navigate("/signin", { replace: true });
    }

    const proteinDesigngnin = (e) => {
        navigate("/protein-design", { replace: true });
    }
  return (
      <>
          <div className="home-section">
              <div className="home-header">
                  <h2>Leap frog to a new vaccine with organism-specific amino acid substitution.</h2>
                  <p className="home-header-link" onClick={signin}>Sign up now and get over 400 Dynamic and Universal tables - a $50 value absolutely free! <i className="fa-solid fa-arrow-right-long"></i></p>
              </div>

              <div className="home-body-container">
                  <div className="home-col-6-left">
                      <div className="home-col-image">
                          <img src={image1} alt={image1} />
                      </div>

                      <div className="home-col-info">
                          <h3>Dynamic Tables</h3>
                          <p>Beat your competition to prized therapeutics</p>
                          <p onClick={proteinDesigngnin}>Shop now  <i className="fa-solid fa-arrow-right-long"></i></p>
                      </div>
                  </div>

                  <div className="home-col-6-right">
                      <div className="home-col-image">
                          <img src={image2} alt={image2} />
                      </div>

                      <div className="home-col-info">
                          <h3>Universal Tables</h3>
                          <p>Get a powerful and compact guide for substituting amino acids</p>
                          <p onClick={proteinDesigngnin}>Shop now  <i className="fa-solid fa-arrow-right-long"></i></p>
                      </div>
                  </div>
              </div>
              
      </div>
      </>
  )
}

export default Home