import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import Landing from "./pages/landing/landing";
import Holding from "./pages/holding/holding";
import NotFound from "./pages/404/404";
// import Wrapper from "./components/Structure/Wrapper/Wrapper";

import "./App.css";
import "./styles/generics.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/landing" element={<Landing />} /> */}
        <Route index element={<Holding />} />
        {/* <Route index element={<Wrapper />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
