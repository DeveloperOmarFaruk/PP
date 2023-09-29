import React, { createContext, useEffect, useReducer } from "react";
import { authInitialState, cartSize } from "./initialState";
import { auth, cart } from "./reducers";
import axios from "axios";
import { getHeader } from "./action/auth";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [cartState, cartDispatch] = useReducer(cart, cartSize);

  useEffect(() => {
    authDispatch({
      type: "LOADING_ON",
    });
    axios
      .get(
        `https://protien.catkinsofttech-bd.com/api/user/login-user`,
        getHeader()
      )
      .then((res) => {
        if (res.data.success != 0) {
          authDispatch({
            type: "USER_LOADED",
            payload: res.data.result,
          });
          authDispatch({
            type: "LOADING_OFF",
          });
        } else {
          authDispatch({
            type: "LOG_OUT",
          });
          authDispatch({
            type: "LOADING_OFF",
          });
        }
      })
      .catch((error) => {
        authDispatch({
          type: "LOG_OUT",
        });
        authDispatch({
          type: "LOADING_OFF",
        });
      });
  }, []);
  //console.log(authState)

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartDispatch({
      type: "ADD_PRODUCT",
      payload: cart.length,
    });
  }, []);

  return (
    <>
      <GlobalContext.Provider
        value={{
          authState,
          authDispatch,
          cartState,
          cartDispatch,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
