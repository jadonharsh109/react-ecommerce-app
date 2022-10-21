const ProductReducer = (state, action) => {
  switch (action.type) {
    case "PAGE_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_DATA":
      const featuredData = action.payload.filter((currElement) => {
        return currElement.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        featureProducts: featuredData,
        products: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };
  }
};

export default ProductReducer;
