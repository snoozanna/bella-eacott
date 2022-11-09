import { useRef } from "react";
import Header from "./../Header/Header";
import Main from "./../Main/Main";
import Footer from "./../Footer/Footer";

export default function Wrapper() {
  const paraRef = useRef(null);
  console.log("paraRef in Wrapper", paraRef);

  return (
    <>
      {window.location.pathname !== "/landing" ? (
        <Header ref={paraRef} />
      ) : null}
      <Main ref={paraRef} />
      {window.location.pathname !== "/landing" ? <Footer /> : null}
    </>
  );
}
