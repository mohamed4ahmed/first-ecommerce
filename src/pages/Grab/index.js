import React, { useEffect } from "react";
import { InfoMaps, Section } from "../../components";
import { online } from "../../data";


const Grab = () => {
  useEffect(() => {
    document.title = "Contact - Smart Integrated Machinery";

    // window.location = <a href="tel:+966539941921">+966539941921 </a>; //Link

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

export default Grab;
