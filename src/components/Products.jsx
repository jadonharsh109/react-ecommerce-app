import React from "react";
import { useContext } from "react";
import { CreateProductContext } from "../context/ProductContext";

const Products = () => {
  const { products } = useContext(CreateProductContext);

  return (
    <div>
      {products.map((mappingData) => {
        return <h2>{mappingData.name}</h2>;
      })}
      ;
    </div>
  );
};

export default Products;
