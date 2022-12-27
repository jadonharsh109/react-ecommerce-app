import React from "react";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import reducer from "../reducer/ProductReducer";
import { useContext } from "react";

const CreateProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const ProductContextProvider = ({ children }) => {
  const initState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    SingleProduct: {},
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const FetchedProduct = async (url) => {
    dispatch({ type: "PAGE_LOADING" });
    try {
      const getProduct = await axios.get(url);
      const getData = getProduct.data;
      dispatch({ type: "API_DATA", payload: getData });
    } catch (error) {
      console.log(error);
      dispatch("API_ERROR");
    }
  };

  const FetchSingleProduct = async (url) => {
    dispatch({ type: "SINGLE_PAGE_LOADING" });
    try {
      const getSingleProduct = await axios.get(url);
      const getData = getSingleProduct.data;
      dispatch({ type: "SINGLE_API_DATA", payload: getData });
    } catch (error) {
      console.log(error);
      dispatch("API_ERROR");
    }
  };

  useEffect(() => {
    FetchedProduct(API);
  }, []);

  return (
    <CreateProductContext.Provider value={{ ...state, FetchSingleProduct }}>
      {children}
    </CreateProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(CreateProductContext);
};

export { ProductContextProvider, CreateProductContext, useProductContext };
