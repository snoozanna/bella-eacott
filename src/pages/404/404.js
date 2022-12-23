import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/img/hand-face.png";

import "./404.css";

function NotFound({ setPageStatus }) {
  useEffect(() => {
    setPageStatus("notfound");
  }, []);
  return (
    <>
      <section className="content notfound">
        <h1>Sorry... that page doesn't exist.</h1>
        <p>
          Shall we go back{" "}
          <Link to="/" className="highlighted">
            home?
          </Link>{" "}
        </p>
      </section>
    </>
  );
}

export default NotFound;
