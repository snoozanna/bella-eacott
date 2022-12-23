import { useEffect } from "react";

import logo from "./../../assets/img/hand-face.png";

function NotFound({ setPageStatus }) {
  useEffect(() => {
    setPageStatus("notfound");
  }, []);
  return (
    <>
      <section className="content">
        <h1>Sorry... that page doesn't exist</h1>
      </section>
    </>
  );
}

export default NotFound;
