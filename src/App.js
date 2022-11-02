import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Landing from "./pages/landing/landing";
import Home from "./pages/home/home";
import Book from "./pages/book/book";
import Contact from "./pages/contact/contact";
import Expect from "./pages/expect/expect";
import About from "./pages/about/about";
import Pricing from "./pages/pricing/pricing";
import NotFound from "./pages/404/404";
import Header from "./components/Structure/Header/Header";
import Main from "./components/Structure/Main/Main";
import Footer from "./components/Structure/Footer/Footer";

import "./App.css";
import "./styles/generics.css";

function App() {
  const paraRef = useRef();
  // console.log("paraRef in app", paraRef);
  return (
    <Router>
      {window.location.pathname !== "/landing" ? (
        <Header paraRef={paraRef} />
      ) : null}
      <Main>
        <Parallax pages={7} style={{ top: "0", left: "0" }} ref={paraRef}>
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

          <ParallaxLayer offset={0.5} speed={0.5}>
            <Home />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <Book paraRef={paraRef} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.7}
            speed={2}
            style={{ backgroundColor: "#ff6d6d" }}
          />
          <ParallaxLayer offset={2} speed={0.5}>
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
            <About paraRef={paraRef} />
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.5}>
            <Pricing />
          </ParallaxLayer>
        </Parallax>
      </Main>
      {window.location.pathname !== "/landing" ? <Footer /> : null}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Router>
  );
}

export default App;
