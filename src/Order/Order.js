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
    const {state} = useLocation();
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
                setChangeActive(res.data.variants[state.id])
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let x = cart.map(i => i.id)
        if (x.includes(parseInt(id))){
            setIsAddCart(true)
        }
    }, [id])

    const addToCart = () => {
        setIsAddCart(true);
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let newItem = {
            id: product.id,
            title: product.title,
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
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <>
            <div className="order-section">
                <div className="row ">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-section-col">
                        <Slider {...settings}>
                            <div className="order-section-col">
                                <img
                                    src={`https://protein.catkinsofttech-bd.xyz/${product.checkout_image_path}`}
                                    alt={`https://protein.catkinsofttech-bd.xyz/${product.checkout_image_path}`}
                                />
                            </div>

                            <div className="order-section-col">
                                <img
                                    src={`https://protein.catkinsofttech-bd.xyz/${product.image_path}`}
                                    alt={`https://protein.catkinsofttech-bd.xyz/${product.image_path}`}
                                />
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
                                    Choose a sequence quantity:
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
                                                        (changeActive.id === v.id) || (k === state.id)
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
                                                                (changeActive.id === v.id) || (k === state.id)
                                                                    ? "order-choose-circle active-circle"
                                                                    : "order-choose-circle"
                                                            }`}
                                                        ></div>
                                                        {/* <h5>{v.title}</h5> */}
                                                        {v.variant_type === 'starter' && <h5>Starter Platform</h5> }
                                                        {v.variant_type === 'designer' && <h5>Designer Platform</h5> }
                                                        {v.variant_type === 'researcher' && <h5>Researcher Platform</h5> }
                                                        {/* <h5>Researcher Platform</h5> <h5>Designer Platform</h5> */}
                                                    </div>
                                                    <p>${v.rate}/Region Positions</p>
                                                    {v.variant_type === 'starter' && <p>15 Region Positions</p> }
                                                    {v.variant_type === 'designer' && <p>150 Region Positions</p> }
                                                    {v.variant_type === 'researcher' && <p>50 Region Positions</p> }

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
                                        {changeActive.variant_type === 'designer' && <div className="order-confirm-best">
                                            <p>
                                                Best Value{" "}
                                                <span>
                          <i class="fa-solid fa-check"></i>
                        </span>
                                            </p>
                                        </div>}

                                        <div className="order-confirm-best-col-platform-name">
                                            {changeActive.variant_type === 'starter' && <p>Starter Platform</p> }
                                            {changeActive.variant_type === 'designer' && <p>Designer Platform</p> }
                                            {changeActive.variant_type === 'researcher' && <p>Researcher Platform</p> }
                                        </div>

                                        <div className="order-confirm-best-row">
                                            <div className="order-confirm-best-col-region">
                                                <p>
                          <span style={{ fontSize: "35px" }}>
                            ${changeActive.rate} /{" "}
                          </span>
                                                    REGION POSITION
                                                </p>
                                            </div>

                                            <div className="order-confirm-best-col">
                                                <p>
                          <span>
                            <i class="fa-solid fa-diamond"></i> Protein Platform
                            with 325 amino acids
                          </span>
                                                </p>

                                                <p>
                          <span>
                            <i class="fa-solid fa-diamond"></i>
                              {changeActive.variant_type === 'starter' && 1} {changeActive.variant_type === 'designer' && 12}
                              {changeActive.variant_type === 'researcher' && 3}Amino Acid regions (Including Regions 1, 2, 3)
                          </span>
                                                </p>

                                                <p>
                          <span>
                            <i class="fa-solid fa-diamond"></i>
                              {changeActive.variant_type === 'starter' && 15} {changeActive.variant_type === 'designer' && 150}
                              {changeActive.variant_type === 'researcher' && 50} Amino Acid
                            region proteins
                          </span>
                                                </p>

                                                <p>
                          <span>
                            <i class="fa-solid fa-diamond"></i> Protein design
                            table and graph analysis
                          </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="row order-confirm-btn d-flex justify-content-around">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <button
                                            onClick={() => {
                                                setBtnActive("btn1");
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
                                        Design your protein in confidence with a 30 day money back
                                        guarantee.
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
