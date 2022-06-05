import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroProduct, fetchProduct } from "../../api";
import {
  OneCategory,
  TwoCategory,
  ThreeCategory,
  FourCategory,
  FiveCategory,
  SixCategory,
  SevenCategory,
  EightCategory,
  NineCategory,
  TenCategory,
} from "../../app/ItemTypes";
import {
  setProductSpecial,
  setHeroProduct,
  setProductsList,
} from "../../app/slice/fetchApi";
import { SpinnerBook, HeroPage, ProductsList } from "../../components";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.api.productsList);
  const heroProduct = useSelector((state) => state.api.heroProduct);

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (!productsList) {
      fetchProduct()
        .then((products) => {
          const special = [];

          const oneCategory = [];
          const twoCategory = [];
          const threeCategory = [];
          const fourCategory = [];
          const fiveCategory = [];
          const sixCategory = [];
          const sevenCategory = [];
          const eightCategory = [];
          const nineCategory = [];
          const tenCategory = [];

          products.map((product, index) => {
            if (product.projectType === OneCategory) oneCategory.push(product);
            else if (product.projectType === TwoCategory)
              twoCategory.push(product);
            else if (product.projectType === ThreeCategory)
              threeCategory.push(product);
            else if (product.projectType === FourCategory)
              fourCategory.push(product);
            else if (product.projectType === FiveCategory)
              fiveCategory.push(product);
            else if (product.projectType === SixCategory)
              sixCategory.push(product);
            else if (product.projectType === SevenCategory)
              sevenCategory.push(product);
            else if (product.projectType === EightCategory)
              eightCategory.push(product);
            else if (product.projectType === NineCategory)
              nineCategory.push(product);
            else if (product.projectType === TenCategory)
              tenCategory.push(product);

            product.special && special.push(product);

            return null;
          });
          let action;
          const object = {
            special: special,
            oneCategory: oneCategory,
            twoCategory: twoCategory,
            threeCategory: threeCategory,
            fourCategory: fourCategory,
            fiveCategory: fiveCategory,
            sixCategory: sixCategory,
            sevenCategory: sevenCategory,
            eightCategory: eightCategory,
            nineCategory: nineCategory,
            tenCategory: tenCategory,
          };
          action = setProductsList(object);
          dispatch(action);
          action = setProductSpecial(special);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, productsList]);

  useEffect(() => {
    if (!heroProduct) {
      fetchHeroProduct()
        .then((data) => {
          const action = setHeroProduct(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, heroProduct]);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <>
      {spinner ? (
        <SpinnerBook />
      ) : (
        <>
          {" "}
          <HeroPage slides={heroProduct} idScrollTo="productList" />
          <ProductsList products={productsList} />
        </>
      )}
    </>
  );
};

export default Products;
