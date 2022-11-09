import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Landing from "./pages/landing/landing";
// import Home from "./pages/home/home";
// import Book from "./pages/book/book";
// import Contact from "./pages/contact/contact";
// import Expect from "./pages/expect/expect";
// import About from "./pages/about/about";
// import Pricing from "./pages/pricing/pricing";
import NotFound from "./pages/404/404";
import Wrapper from "./components/Structure/Wrapper/Wrapper";

import "./App.css";
import "./styles/generics.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route index element={<Wrapper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
