import React, { useState, useEffect, useContext } from "react";
import "./Order.css";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import bacteria from "../Images/bacteria.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Provider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Order = () => {
  const { cartDispatch } = useContext(GlobalContext);
  const { state } = useLocation();
  const [changeActive, setChangeActive] = useState({});
  const [btnActive, setBtnActive] = useState("home");
  const [product, setProduct] = useState({});
  const [variant, setVariant] = useState([]);
  const [isAddCart, setIsAddCart] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://protein.catkinsofttech-bd.xyz/api/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setVariant(res.data.variants);
        setChangeActive(res.data.variants[state.id]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let x = cart.map((i) => i.id);
    if (x.includes(parseInt(id))) {
      setIsAddCart(true);
    }
  }, [id]);

  const addToCart = () => {
    setIsAddCart(true);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let newItem = {
      id: product.id,
      title: product.protein_name,
      variant: changeActive,
      image: `https://protein.catkinsofttech-bd.xyz/${product.checkout_image_path}`,
    };
    cart.push(newItem);
    cartDispatch({
      type: "ADD_PRODUCT",
      payload: cart.length,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // ============================
  // Slieder
  // ============================

  const settings = {
    // dots: true,
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    // dots: true,
    // lazyLoad: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // initialSlide: 2,
  };

  return (
    <>
      <div className="order-section">
        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-section-col">
            <Slider {...settings}>
              {/* <div className="order-section-col">
                <img
                  src={`https://protein.catkinsofttech-bd.xyz/${product.checkout_image_path}`}
                  alt={`https://protein.catkinsofttech-bd.xyz/${product.checkout_image_path}`}
                />

                <div className="order-section-col-id">
                  <p>NCBI ID: 1212121212121212</p>
                  <p>UniProt ID: 787878787878</p>
                </div>
              </div> */}

              <div className="order-section-col">
                <img
                  src={`https://protein.catkinsofttech-bd.xyz/${product.image_path}`}
                  alt={`https://protein.catkinsofttech-bd.xyz/${product.image_path}`}
                />

                <div className="order-section-col-id">
                  <p>NCBI ID: 1212121212121212</p>
                  <p>UniProt ID: 787878787878</p>
                </div>
              </div>
            </Slider>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-section-col">
            <div className="order-col-right-container">
              {isAddCart && (
                <div className="order-confirm">
                  <p>
                    Added{" "}
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                  </p>
                  <p>View cart to see item(s) added.</p>
                </div>
              )}

              <div className="order-choose-container">
                <p className="order-choose-container-title">
                  Choose a Protein Design Package:
                </p>

                <div className="row order-choose-row">
                  {variant.map((v, k) => (
                    <>
                      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                        <div
                          onClick={() => {
                            setChangeActive(v);
                            state.id = k;
                          }}
                          className={` ${
                            changeActive.id === v.id || k === state.id
                              ? "order-choose-col active-choose"
                              : "order-choose-col"
                          }`}
                        >
                          <div className="order-choose-title">
                            <div
                              onClick={() => {
                                setChangeActive(v);
                                state.id = k;
                              }}
                              className={` ${
                                changeActive.id === v.id || k === state.id
                                  ? "order-choose-circle active-circle"
                                  : "order-choose-circle"
                              }`}
                            ></div>

                            {v.variant_type === "starter" && (
                              <h5>Researcher</h5>
                            )}

                            {v.variant_type === "researcher" && (
                              <h5>Designer</h5>
                            )}

                            {v.variant_type === "designer" && <h5>Leader</h5>}
                          </div>

                          {/* <p>${v.rate}/Region Positions</p> */}
                          {v.variant_type === "starter" && (
                            <>
                              <p>pm Region Matrix</p>
                              <p style={{ margin: "10px auto" }}></p>
                            </>
                          )}

                          {v.variant_type === "researcher" && (
                            <>
                              <p>pm sequence matrix</p>
                              <p style={{ margin: "10px auto" }}></p>
                            </>
                          )}

                          {v.variant_type === "designer" && (
                            <>
                              <p>pm sequence matrix</p>
                              <p>pm Region Matrix</p>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  ))}
                </div>

                <div className="order-protein-container">
                  <h3>{product.organism_name}</h3>
                  <div className="order-protein-row">
                    <p>{product.protein_name}</p>
                    <p>${changeActive.price}</p>
                  </div>
                </div>

                {changeActive.id && (
                  <div className="order-confirm-best-container">
                    {/* {changeActive.variant_type === "designer" && (
                      <div className="order-confirm-best">
                        <p>
                          Best Value{" "}
                          <span>
                            <i class="fa-solid fa-check"></i>
                          </span>
                        </p>
                      </div>
                    )} */}

                    <div className="order-confirm-best-col-platform-name">
                      {changeActive.variant_type === "starter" && (
                        <p>Researcher</p>
                      )}
                      {changeActive.variant_type === "researcher" && (
                        <p>Designer</p>
                      )}
                      {changeActive.variant_type === "designer" && (
                        <p>Leader</p>
                      )}
                    </div>

                    <div className="order-confirm-best-row">
                      {/* <div className="order-confirm-best-col-region">
                        <p>
                          <span style={{ fontSize: "35px" }}>
                            ${changeActive.rate} /{" "}
                          </span>
                          REGION POSITION
                        </p>
                      </div> */}

                      <div className="order-confirm-best-col">
                        {/* <p>
                          <span>
                            <i class="fa-solid fa-diamond"></i> Protein Platform
                            with 325 amino acids
                          </span>
                        </p> */}

                        {/* <p>
                          <span>
                            <i class="fa-solid fa-diamond"></i>{" "}
                            {changeActive.variant_type === "starter" && (
                              <>1 Amino Acid regions ( Region 1 )</>
                            )}
                            {changeActive.variant_type === "researcher" && (
                              <>3 Amino Acid regions ( Regions 1, 2 and 3 )</>
                            )}
                            {changeActive.variant_type === "designer" && (
                              <>
                                12 Amino Acid regions ( Including Regions 1, 2
                                and 3 )
                              </>
                            )}
                          </span>
                        </p> */}

                        {/* <p>
                          <span>
                            <i class="fa-solid fa-diamond"></i>{" "}
                            {changeActive.variant_type === "starter" && 15}{" "}
                            {changeActive.variant_type === "researcher" && 50}{" "}
                            {changeActive.variant_type === "designer" && 150}{" "}
                            Amino Acid region proteins
                          </span>
                        </p> */}

                        {changeActive.variant_type === "starter" && (
                          <>
                            <p>
                              <span>
                                <i class="fa-solid fa-diamond"></i> Position
                                match region matrix <br />
                                <spacecustom className="spacecustom"></spacecustom>{" "}
                                75 optimized positions
                              </span>
                            </p>

                            <p>
                              <span>
                                <i class="fa-solid fa-diamond"></i> region
                                matrix graph analysis
                              </span>
                            </p>
                          </>
                        )}

                        {changeActive.variant_type === "researcher" && (
                          <>
                            <p>
                              <span>
                                <i class="fa-solid fa-diamond"></i> Position
                                match sequence matrix <br />
                                <spacecustom className="spacecustom"></spacecustom>{" "}
                                325 optimized amino acid tables
                              </span>
                            </p>

                            <p>
                              <span>
                                <i class="fa-solid fa-diamond"></i> sequence
                                matrix graph analysis
                              </span>
                            </p>
                          </>
                        )}

                        {changeActive.variant_type === "designer" && (
                          <>
                            <p>
                              <span>
                                <i class="fa-solid fa-diamond"></i> Position
                                match sequence matrix <br />
                                <spacecustom className="spacecustom"></spacecustom>{" "}
                                325 optimized amino acid tables
                              </span>
                            </p>

                            <p>
                              <span>
                                <i class="fa-solid fa-diamond"></i> Position
                                match region matrix <br />
                                <spacecustom className="spacecustom"></spacecustom>{" "}
                                75 optimized positions
                              </span>
                            </p>

                            <p>
                              <span>
                                <i class="fa-solid fa-diamond"></i> sequence
                                matrix graph analysis
                              </span>
                            </p>

                            <p>
                              <span>
                                <i class="fa-solid fa-diamond"></i> region
                                matrix graph analysis
                              </span>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="row order-confirm-btn d-flex justify-content-around">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <button
                      onClick={() => {
                        setBtnActive("btn1");
                        navigate("/cart");
                      }}
                      className={` ${
                        btnActive === "btn1"
                          ? "order-confirm-btn-button active-order-btn"
                          : "order-confirm-btn-button"
                      }`}
                    >
                      Continue Shopping
                    </button>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <button
                      onClick={() => {
                        isAddCart ? navigate("/cart") : addToCart();
                      }}
                      disabled={changeActive.id ? false : true}
                      className={"order-confirm-btn-button"}
                    >
                      {isAddCart ? "View cart" : "Add To Cart"}
                    </button>
                  </div>
                </div>

                <div className="order-confirm-notice">
                  <p>
                    See our refund policy. Design your protein with confidence.
                    Sign-up now and get a Protein Platform with a Leader Design
                    Package--Free!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
