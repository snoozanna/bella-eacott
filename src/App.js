import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import { BrowserRouter as Router } from "react-router-dom";
// import Landing from "./pages/landing/landing";
import Holding from "./pages/holding/holding";
import NotFound from "./pages/404/404";
// import Wrapper from "./components/Structure/Wrapper/Wrapper";

import "./App.css";
import "./styles/generics.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* <Route path="/landing" element={<Landing />} /> */}
          <Route index element={<Holding />} />
          {/* <Route index element={<Wrapper />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
