import { Link } from "react-router-dom";
import logo from "./../../../assets/img/bella_full-logo.png";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <div className="left nav-item">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/book">Book me</Link>
              </li>
              <li>
                <Link to="/contact">Contact me</Link>
              </li>
            </div>

            <div className="center nav-item">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>
            <div className="nav-item left">
              <li>
                <Link to="/about">About me</Link>
              </li>
              <li>
                <Link to="/what-to-expect">Treatments & What to Expect</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
