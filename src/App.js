import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { MenuProvider } from "./contexts/menu.context";
import { HelmetProvider } from "react-helmet-async";
import HeaderWrapper from "./components/Structure/HeaderWrapper/HeaderWrapper";
import Footer from "./components/Structure/Footer/Footer";
import Home from "./pages/home/home";
import Book from "./pages/book/book";
import Contact from "./pages/contact/contact";
import Expect from "./pages/expect/expect";
import About from "./pages/about/about";
import Pricing from "./pages/pricing/pricing";
import Landing from "./pages/landing/landing";
import NotFound from "./pages/404/404";
// import Wrapper from "./components/Structure/Wrapper/Wrapper";

import "./App.css";
import "./styles/generics.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [pageStatus, setPageStatus] = useState("landing");

  return (
    <>
      <HelmetProvider>
        <MenuProvider>
          <Router>
            <ScrollToTop>
              <HeaderWrapper pageStatus={pageStatus} />
              <Routes>
                <Route
                  index
                  element={<Landing setPageStatus={setPageStatus} />}
                />
                <Route
                  path="/home"
                  element={<Home setPageStatus={setPageStatus} />}
                />
                <Route
                  path="/book"
                  element={<Book setPageStatus={setPageStatus} />}
                />
                <Route
                  path="/contact"
                  element={<Contact setPageStatus={setPageStatus} />}
                />
                <Route
                  path="/about"
                  element={<About setPageStatus={setPageStatus} />}
                />
                <Route
                  path="/what-to-expect"
                  element={<Expect setPageStatus={setPageStatus} />}
                />
                <Route
                  path="/pricing"
                  element={<Pricing setPageStatus={setPageStatus} />}
                />
                <Route
                  path="*"
                  element={<NotFound setPageStatus={setPageStatus} />}
                />
              </Routes>

              <Footer pageStatus={pageStatus} />
              {/* {window.location.pathname !== "/landing" ? <Footer /> : null} */}
            </ScrollToTop>
          </Router>
        </MenuProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
