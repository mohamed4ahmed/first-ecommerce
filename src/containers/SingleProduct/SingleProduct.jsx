import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, fetchSingleProduct } from "../../api";
import {
  FiberLaser,
  PressBrakes,
  Automation,
  // FourCategory,
  // FiveCategory,
  // SixCategory,
  // SevenCategory,
  // EightCategory,
  // NineCategory,
  // TenCategory,
} from "../../app/ItemTypes";
import { setProductsList, setProductSpecial } from "../../app/slice/fetchApi";
import { SingleProduct, SpinnerBook } from "../../components";

const SingleProductContainer = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const special = useSelector((state) => state.api.products.special);

  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!special) {
      fetchProduct()
        .then((products) => {
          const special = [];

          const fiberLaser = [];
          const pressBrakes = [];
          const automation = [];
          // const fourCategory = [];
          // const fiveCategory = [];
          // const sixCategory = [];
          // const sevenCategory = [];
          // const eightCategory = [];
          // const nineCategory = [];
          // const tenCategory = [];

          products.map((product, index) => {
            if (product.projectType === FiberLaser) fiberLaser.push(product);
            else if (product.projectType === PressBrakes)
              pressBrakes.push(product);
            else if (product.projectType === Automation)
              automation.push(product);
            // else if (product.projectType === FourCategory)
            //   fourCategory.push(product);
            // else if (product.projectType === FiveCategory)
            //   fiveCategory.push(product);
            // else if (product.projectType === SixCategory)
            //   sixCategory.push(product);
            // else if (product.projectType === SevenCategory)
            //   sevenCategory.push(product);
            // else if (product.projectType === EightCategory)
            //   eightCategory.push(product);
            // else if (product.projectType === NineCategory)
            //   nineCategory.push(product);
            // else if (product.projectType === TenCategory)
            //   tenCategory.push(product);

            product.special && special.push(product);

            return null;
          });
          let action;
          const object = {
            special: special,
            fiberLaser: fiberLaser,
            pressBrakes: pressBrakes,
            automation: automation,
            // fourCategory: fourCategory,
            // fiveCategory: fiveCategory,
            // sixCategory: sixCategory,
            // sevenCategory: sevenCategory,
            // eightCategory: eightCategory,
            // nineCategory: nineCategory,
            // tenCategory: tenCategory,
          };
          action = setProductsList(object);
          dispatch(action);
          action = setProductSpecial(special);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, special]);

  useEffect(() => {
    fetchSingleProduct(slug)
      .then((data) => {
        setSingleProduct(data[0]);
      })
      .catch((error) => console.log("error: ", error));
  }, [slug]);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div className="">
      {spinner ? (
        <SpinnerBook />
      ) : (
        <>
          <SingleProduct product={singleProduct} special={special} />
        </>
      )}
    </div>
  );
};

export default SingleProductContainer;
