import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import image1 from "../../Images/mac_dynamic_table.png";
import image2 from "../../Images/mac_universal_table.png";
import image3 from "../../Images/protein-image.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-section">
        <div className="home-header">
          <h2>
            Leap frog to a new vaccine with organism-specific amino acid
            substitution.
          </h2>
          <p className="home-header-link" onClick={() => navigate("/signin")}>
            Sign up now and get over 400 Dynamic and Universal tables - a $50
            value absolutely free!{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </p>
        </div>

        <div className="home-body-container">
          <div className="home-col-6-left">
            <div className="home-col-image">
              <img src={image1} alt={image1} />
            </div>

            <div className="home-col-info">
              <h3>Dynamic Tables</h3>
              <p>Beat your competition to prized therapeutics</p>
              <p onClick={() => navigate("/protein-design")}>
                Shop now <i className="fa-solid fa-arrow-right-long"></i>
              </p>
            </div>
          </div>

          <div className="home-col-6-right">
            <div className="home-col-image">
              <img src={image2} alt={image2} />
            </div>

            <div className="home-col-info">
              <h3>Universal Tables</h3>
              <p>
                Get a powerful and compact guide for substituting amino acids
              </p>
              <p onClick={() => navigate("/protein-design")}>
                Shop now <i className="fa-solid fa-arrow-right-long"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="why-proteinwriter-div">
          <h5>Why ProteinWriter?</h5>

          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 why-proteinwriter-col">
              <img src={image3} alt={image3} />

              <h6>Design proteins faster</h6>

              <p>
                ProteinWriter offers a simplified way to design your proteins
                faster with our position-specific matrices. First, our Sequencee
                Matrix helps you to make optimal substitutions at each position
                in a protein platform. Second, our Region Matrix helps you to
                choose the optimal positions in a proteion platform for
                substitution.
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 why-proteinwriter-col">
              <img src={image3} alt={image3} />

              <h6>ProteinWriter is budget-friendly</h6>

              <p>
                Our protein design engine helps you to design valuable proteins
                without breaking the bank. In fact, designing proteins faster
                means you can cash in on budget-friendly savings now, and on
                valuable proteins later.
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 why-proteinwriter-col">
              <img src={image3} alt={image3} />

              <h6>Discover the fun</h6>

              <p>
                Who said those in protein design competitions have all the fun?
                You too can discover the fun of creating proteins along with the
                rewards of a faster design and cost-savings.
              </p>
            </div>
          </div>

          <div className="why-proteinwriter-div-btn">
            <button onClick={() => navigate("/how-it-works")}>
              How it works
            </button>
            <button onClick={() => navigate("/signin")}>
              Start designing <span>free!</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
