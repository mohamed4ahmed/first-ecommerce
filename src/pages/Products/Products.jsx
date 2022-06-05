import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
  useEffect(() => {
    document.title = "Products - ecommerce-one For Clothes";
  }, []);

  return (
    <>
      <ProductsContainer />
    </>
  );
};

export default Products;
