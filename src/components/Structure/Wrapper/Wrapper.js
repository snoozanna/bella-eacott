import { useRef, useContext } from "react";
import { MenuContext } from "../../../contexts/menu.context";
import Header from "./../Header/Header";
import Main from "./../Main/Main";
import Footer from "./../Footer/Footer";

export default function Wrapper() {
  const { currentPage } = useContext(MenuContext);
  const paraRef = useRef(currentPage);

  return (
    <>
      <Header ref={paraRef} />
      {/* <Header /> */}
      <Main ref={paraRef} />
      {/* <Main /> */}
      <Footer />
    </>
  );
}
