import React, { useState } from "react";
import "./Work.css";
import Bacteria from "../Images/bacteria.jpg";
import { NavLink } from "react-router-dom";

const Work = () => {
  const [changeActive, setChangeActive] = useState("choose3");

  return (
    <>
      <div className="work-section">
        <div className=" work-container">
          <div className="work-container-title">
            <h5>1. Choose a protein</h5>
            <p>
              Please the color buttons to view proteins available for an
              organism
            </p>
          </div>

          <div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="pdesign-card">
                  <img src={Bacteria} alt={Bacteria} />
                  <div className="pdesign-card-btn">
                    <div className="pdesign-card-info">
                      {/* <p>Ebola, Sudan</p>
                      <p>matrix</p>
                      <p>$ 19.5</p> */}
                      <div className="row">
                        <div
                          className="col-xl-4 col-lg-4 col-md-4 col-sm-4 "
                          style={{
                            margin: "20px auto 0px auto",
                            color: "#454545",
                            fontSize: "13px",
                            padding: "5px",
                          }}
                        >
                          <p>ORGANISM</p>
                        </div>

                        <div
                          className="col-xl-8 col-lg-8 col-md-8 col-sm-8 pdesign-card-organism"
                          style={{ margin: "20px auto 0px auto" }}
                        >
                          <p>Ebola, Sudan</p>
                        </div>
                      </div>

                      <div className="row">
                        <div
                          className="col-xl-4 col-lg-4 col-md-4 col-sm-4 "
                          style={{
                            margin: "0px",
                            color: "#454545",
                            fontSize: "13px",
                            padding: "5px",
                          }}
                        >
                          <p>PROTEIN</p>
                        </div>
                        <div
                          className="col-xl-8 col-lg-8 col-md-8 col-sm-8 pdesign-card-protein"
                          style={{ margin: "0px" }}
                        >
                          <p>Matrix</p>
                        </div>
                      </div>

                      <div className="row">
                        <div
                          className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                          style={{ margin: "0px" }}
                        >
                          <p></p>
                        </div>
                        <div
                          className="col-xl-8 col-lg-8 col-md-8 col-sm-8 pdesign-card-price"
                          style={{ margin: "0px" }}
                        >
                          <p>$ 19.95</p>
                        </div>
                      </div>
                    </div>
                    <div className="pdesign-card-multi-btn">
                      <button className="pdesign-card-multi-btn-circle"></button>
                      <button className="pdesign-card-multi-btn-circle"></button>
                      <button className="pdesign-card-multi-btn-circle"></button>
                      <button className="pdesign-card-multi-btn-circle"></button>
                    </div>

                    <div className="row pdesign-card-chart-btn">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <button className={"normal-click"}>
                          {" "}
                          Add to my cart{" "}
                        </button>
                      </div>

                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <button className="show-click">Show me more!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="work-container-title">
            <h5>2. Choose a Variant package.</h5>
            <p>
              Follow the steps until your Design Lab is updated with your
              selected protein platform.
            </p>
          </div>

          <div className="order-choose-row order-choose-row-background">
            <div className="row">
              <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                <div
                  onClick={() => {
                    setChangeActive("choose1");
                  }}
                  className={` ${
                    changeActive === "choose1"
                      ? "order-choose-col active-choose"
                      : "order-choose-col"
                  }`}
                >
                  <div className="order-choose-title">
                    <div
                      onClick={() => {
                        setChangeActive("choose1");
                      }}
                      className={` ${
                        changeActive === "choose1"
                          ? "order-choose-circle active-circle"
                          : "order-choose-circle"
                      }`}
                    ></div>
                    <h5>Starter Platform</h5>
                  </div>
                  <p>$3.34/REGION POSITION</p>
                  <p>15 REGION POSITIONS</p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                <div
                  onClick={() => {
                    setChangeActive("choose2");
                  }}
                  className={` ${
                    changeActive === "choose2"
                      ? "order-choose-col active-choose"
                      : "order-choose-col"
                  }`}
                >
                  <div className="order-choose-title">
                    <div
                      onClick={() => {
                        setChangeActive("choose2");
                      }}
                      className={` ${
                        changeActive === "choose2"
                          ? "order-choose-circle active-circle"
                          : "order-choose-circle"
                      }`}
                    ></div>
                    <h5>Researcher Platform</h5>
                  </div>
                  <p>$1.50/REGION POSITION</p>
                  <p>50 REGION POSITIONS</p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                <div
                  onClick={() => {
                    setChangeActive("choose3");
                  }}
                  className={` ${
                    changeActive === "choose3"
                      ? "order-choose-col active-choose"
                      : "order-choose-col"
                  }`}
                >
                  <div className="order-choose-title">
                    <div
                      onClick={() => {
                        setChangeActive("choose3");
                      }}
                      className={` ${
                        changeActive === "choose3"
                          ? "order-choose-circle active-circle"
                          : "order-choose-circle"
                      }`}
                    ></div>
                    <h5>Designer Platform</h5>
                  </div>
                  <p>$0.67/REGION POSITION</p>
                  <p>150 REGION POSITIONS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="work-container-title">
            <h5>3. Design protein sequences.</h5>
            <p>
              In a teir, each amion acid is paired with a ubstitute for a
              specified position.
            </p>
            <p>
              Make substitutions at any combination of tier positions to create
              novel protein sequences.
            </p>
          </div>

          <div className="work-container-title">
            <h5>4. Prepare for the experimental phase.</h5>
            <p>
              Download your newly designed protein sequences and priortize them.
            </p>
            <p>
              Submit your preferred candidates to a lab for experimental
              evalution.
            </p>
          </div>

          <div className="work-container-title">
            <h5>5. Share your success stories with us.</h5>
          </div>

          <div className="work-contact-share">
            <NavLink className="work-contact-share-btn" to="/contact-us">
              Share your protein writer success story
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
