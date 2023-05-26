import React, { useState } from "react";
import "./Work.css";
import image3 from "../Images/protein-image.png";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();

  const shopBacteria = (e) => {
    navigate("/protein-design?type=bacteria", { replace: true });
  };

  const shopViruses = (e) => {
    navigate("/protein-design?type=virus", { replace: true });
  };

  return (
    <>
      <div className="work-section">
        <div className=" work-container">
          <div className="work-container-title">
            <h5>How ProteinWriter Works</h5>
          </div>

          <div className="row d-flex align-items-center work-container-info-row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 work-container-info-col">
              <img src={image3} alt={image3} />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 work-container-info-col">
              <h3>01</h3>
              <h5>Choose protein platform</h5>
              <p>
                Choose a protein platform and open your ProteinLab. Then click
                on an amino acid to replace it with its substitute.
              </p>
            </div>
          </div>

          <div className="row d-flex align-items-center work-container-info-row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 work-container-info-col work-container-info-col-second-row-right">
              <h3>02</h3>
              <h5>Design with confidence</h5>
              <p>
                Our position-specific substitution matrices helps you to choose
                the optimal amino acids and the optimal positions for
                substitutins. So, you have a highly improved way to manage your
                protein design outcomes.
              </p>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 work-container-info-col work-container-info-col-second-row-left">
              <img src={image3} alt={image3} />
            </div>
          </div>

          <div className="row d-flex align-items-center work-container-info-row ">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 work-container-info-col">
              <img src={image3} alt={image3} />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 work-container-info-col">
              <h3>03</h3>
              <h5>Submit for lab analysis</h5>
              <p>
                Download your protein designs and submit them for lab analysis.
                It's that simple.
              </p>
            </div>
          </div>

          <div className="work-container-div-btn">
            <button onClick={shopBacteria}>Shop bacteria</button>
            <button onClick={shopViruses}>Shop viruses</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
