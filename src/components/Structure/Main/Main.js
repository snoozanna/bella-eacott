import { forwardRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Home from "./../../../pages/home/home";
import Book from "./../../../pages/book/book";
import Contact from "./../../../pages/contact/contact";
import Expect from "./../../../pages/expect/expect";
import About from "./../../../pages/about/about";
import Pricing from "./../../../pages/pricing/pricing";

import "./Main.css";

const Main = forwardRef((props, ref) => {
  console.log("ref in Main", ref);
  return (
    <>
      <main className={"test"}>
        {props.children}
        <Parallax pages={7} style={{ top: "0", left: "0" }} ref={ref}>
          <ParallaxLayer
            offset={0.7}
            speed={2}
            style={{ backgroundColor: "#ff6d6d" }}
          />

          {/* <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route index element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-to-expect" element={<Expect />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes> */}

          <ParallaxLayer offset={0.1} speed={0.5}>
            <Home />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <Book paraRef={props.paraRef} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.1}
            speed={2}
            style={{ backgroundColor: "#ff6d6d" }}
          />
          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{ backgroundColor: "#ff6d6d" }}
          >
            <Contact />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0.5}
            style={{ backgroundColor: "#ff6d6d" }}
          >
            <Expect />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5}>
            <About paraRef={props.paraRef} />
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.5}>
            <Pricing />
          </ParallaxLayer>
        </Parallax>
      </main>
    </>
  );
});

export default Main;
