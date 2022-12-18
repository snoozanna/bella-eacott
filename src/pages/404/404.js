import { useEffect } from "react";

import logo from "./../../assets/img/hand-face.png";

function NotFound({ setPageStatus }) {
  useEffect(() => {
    setPageStatus("notfound");
  }, []);
  return (
    <>
      <img src={logo} alt="logo" />
      <h1>404 Not Found</h1>
    </>
  );
}

export default NotFound;
