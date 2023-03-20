import Bacteria from "../Images/bacteria.jpg";
import {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Provider";
import "../ProteinDesign/ProteinDesign.css";
import React from "react";

const ProtienCard = ({ item }) => {
  let variants = item.variants;
  const { cartDispatch } = useContext(GlobalContext);
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [press, setPress] = useState("home");
  const navigate = useNavigate();
  const [circleBtn, setCircleBtn] = useState(0);
  const [cartList, setCartList] = useState([])

  useEffect(() => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let x = cart.map(i => i.id)
      setCartList(x)
  }, [item])

  const addToCart = () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let newItem = {
        id: item.id,
        title: item.protein_name,
        variant: item.variants[index],
        image: `https://protein.catkinsofttech-bd.xyz/${item.checkout_image_path}`,
      };
      cart.push(newItem);
      setCartList(prevState => [...prevState, item.id])
      cartDispatch({
        type: "ADD_PRODUCT",
        payload: cart.length,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      setClicked(true)
    };

  return (
    <>
      <div className="pdesign-card">
        { cartList.includes(item.id) && <div className="pdesign-card-added">
          <p>
            Added <i className="fa-solid fa-check"></i>
          </p>
        </div>}
        <img
          src={`https://protein.catkinsofttech-bd.xyz/${item.image_path}`}
          alt={`https://protein.catkinsofttech-bd.xyz/${item.image_path}`}
        />
        <div className="pdesign-card-btn">
          <div className="pdesign-card-info">
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
                <p>{item.organism_name}</p>
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
                <p>{item.protein_name}</p>
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
                <p>$ {variants[index].price}</p>
              </div>
            </div>
          </div>
          <div className="pdesign-card-multi-btn">
            {item.variants.map((vr, key) => {
              return (
                <button
                  key={vr.id}
                  onClick={() => {
                    setIndex(key);
                    setCircleBtn(key);
                  }}
                  className={` ${
                    circleBtn === key
                      ? "pdesign-card-multi-btn-circle active-circle-btn"
                      : "pdesign-card-multi-btn-circle"
                  }`}
                ></button>
              );
            })}
          </div>

          <div className=" row pdesign-card-chart-btn">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <button
                id={item.id}
                key={item.id}
                onClick={addToCart}
                className={"normal-click"}
              >
                {"Add to my cart"}{" "}
              </button>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
                 onClick={() => navigate(`/order/${item.id}`, { state: { id: index } })}>
              <button className="show-click">Show me more!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtienCard;
