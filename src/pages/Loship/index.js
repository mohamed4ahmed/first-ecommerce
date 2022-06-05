import React, { useEffect } from "react";
import { InfoMaps, Section } from "../../components";
import { online } from "../../data";
const Loship = () => {
  useEffect(() => {
    document.title = "Our Stores - ecommerce-one For Clothes";

    window.location = <a href="tel:+201099383905">201099383905 </a>; //Link
  }, []);
  return (
    <>
      <InfoMaps />
      {online.map((store, index) => (
        <Section
          subHeader={store.subHeader}
          header={store.header}
          description={store.description}
          linkBtn={store.linkBtn}
          img={store.img}
          key={index}
        />
      ))}
    </>
  );
};

export default Loship;
