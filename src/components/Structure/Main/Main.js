import { forwardRef } from "react";
// import { MenuContext } from "./../../../contexts/menu.context";
import Home from "./../../../pages/home/home";
import Book from "./../../../pages/book/book";
import Contact from "./../../../pages/contact/contact";
import Expect from "./../../../pages/expect/expect";
import About from "./../../../pages/about/about";
import Pricing from "./../../../pages/pricing/pricing";

import "./Main.css";

// Using forwardRef

const Main = forwardRef((props, ref) => {
  // console.log("ref in main ", ref);
  return (
    <>
      <main>
        <Home ref={ref} />
        <About ref={ref} />
        <Expect ref={ref} />
        <Pricing ref={ref} />
        <Book ref={ref} />
        <Contact ref={ref} />
      </main>
    </>
  );
});

export default Main;
