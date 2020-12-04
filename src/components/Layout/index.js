import React from "react";

import Header from "./Header";
import Footer from "./Footer";
const index = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default index;
