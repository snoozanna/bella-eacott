import { useRef, useContext, forwardRef } from "react";
import { MenuContext } from "../../../contexts/menu.context";

import Header from "./../Header/Header";
import Main from "./../Main/Main";
import Footer from "./../Footer/Footer";

const Wrapper = () => {
  const { currentPage } = useContext(MenuContext);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const expectRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const bookRef = useRef(null);

  const ref = useRef({
    homeRef,
    aboutRef,
    expectRef,
    pricingRef,
    contactRef,
    bookRef,
  });

  return (
    <>
      <Header ref={ref} />
      <Main ref={ref} />
      <Footer />
    </>
  );
};

export default Wrapper;
