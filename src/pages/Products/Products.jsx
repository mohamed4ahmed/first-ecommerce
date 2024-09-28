import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
  useEffect(() => {
    document.title = "Products - Smart Integrated Machinery";
  }, []);

  return (
    <>
      <ProductsContainer />
    </>
  );
};

export default Products;
