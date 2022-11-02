// import { Link } from "react-router-dom";
import logo from "./../../../assets/img/bella-logo-bg.png";
import "./Header.css";

// TODO ADD REF TO CONEXT
// export default function Header(paraRef) {
const Header = (props) => {
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
            <li onClick={() => props.paraRef.current.scrollTo(0)}>Home</li>
            <li onClick={() => props.paraRef.current.scrollTo(1)}>Book me</li>
            <li onClick={() => props.paraRef.current.scrollTo(2)}>
              Contact me
            </li>
            <li onClick={() => props.paraRef.current.scrollTo(3)}>
              Treatments & What to Expect
            </li>
            <li onClick={() => props.paraRef.current.scrollTo(4)}>About me</li>
            <li onClick={() => props.paraRef.current.scrollTo(5)}>Pricing</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
