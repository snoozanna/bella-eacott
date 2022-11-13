import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./contexts/menu.context";
import Landing from "./pages/landing/landing";
import NotFound from "./pages/404/404";
import Wrapper from "./components/Structure/Wrapper/Wrapper";

import "./App.css";
import "./styles/generics.css";

function App() {
  return (
    <MenuProvider>
      <Router>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route index element={<Wrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;
