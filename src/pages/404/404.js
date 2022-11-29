import { useEffect } from "react";

import logo from "./../../assets/img/hand-face.png";

function NotFound({ setHeaderStatus }) {
  useEffect(() => {
    setHeaderStatus("pricing");
  }, []);
  return (
    <>
      <img src={logo} alt="logo" />
      <h1>404 Not Found</h1>
    </>
  );
}

export default NotFound;
