// import { Link } from "react-router-dom";
import { forwardRef } from "react";
import logo from "./../../../assets/img/bella-logo-bg.png";
import "./Header.css";

// export default function Header(paraRef) {
const Header = forwardRef((props, ref) => {
  console.log("ref in Header", ref);
  return (
    <>
      <header>
        <nav>
          <div className="center nav-item">
            <img
              src={logo}
              alt="logo"
              className="logo"
              onClick={() => props.paraRef.current.scrollTo(0)}
            />
          </div>
          <ul className="nav-item">
            <li onClick={() => ref.current.scrollTo(0)}>Home</li>
            <li onClick={() => ref.current.scrollTo(1)}>Book me</li>
            <li onClick={() => ref.current.scrollTo(2)}>Contact me</li>
            <li onClick={() => ref.current.scrollTo(3)}>
              Treatments & What to Expect
            </li>
            <li onClick={() => ref.current.scrollTo(4)}>About me</li>
            <li onClick={() => ref.current.scrollTo(5)}>Pricing</li>
          </ul>
        </nav>
      </header>
    </>
  );
});

export default Header;
