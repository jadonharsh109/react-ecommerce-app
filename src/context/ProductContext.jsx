import React from "react";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const CreateProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const ProductContextProvider = ({ children }) => {
  useEffect(() => {
    FetchedProduct(API);
  }, []);

  const initState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const FetchedProduct = async (url) => {
    dispatch("PAGE_LOADING");
    try {
      const getProduct = await axios.get(url);
      const getData = getProduct.data;
      dispatch({ type: "API_DATA", payload: getData });
    } catch (error) {
      console.log(error);
      dispatch("API_ERROR");
    }
  };

  return (
    <CreateProductContext.Provider value={{ ...state }}>
      {children}
    </CreateProductContext.Provider>
  );
};

export { ProductContextProvider, CreateProductContext };
