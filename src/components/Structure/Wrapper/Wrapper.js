import { useRef } from "react";
import Header from "./../Header/Header";
import Main from "./../Main/Main";
import Footer from "./../Footer/Footer";

export default function Wrapper() {
  const paraRef = useRef(null);
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
