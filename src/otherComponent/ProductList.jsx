import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridViewFile from "./GridViewFile";
import ListViewFile from "./ListViewFile";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridViewFile products={filter_products} />;
  }
  if (grid_view === false) {
    return <ListViewFile products={filter_products} />;
  }
};

export default ProductList;
