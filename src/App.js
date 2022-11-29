import {
  BrowserRouter as Router,
  Route,
  Routes,
  matchPath,
} from "react-router-dom";
import { MenuProvider } from "./contexts/menu.context";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Structure/Header/Header";
import HeaderHome from "./components/Structure/HeaderHome/HeaderHome";
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

function App() {
  return (
    <HelmetProvider>
      <MenuProvider>
        <Router>
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route index element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-to-expect" element={<Expect />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route index element={<Wrapper />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </MenuProvider>
    </HelmetProvider>
  );
}

export default App;
