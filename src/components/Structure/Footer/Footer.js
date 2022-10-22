import logo from "./../../../assets/img/hand-face.png";

import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-item">email@email.com</div>
        <div className="footer-item">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </footer>
    </>
  );
}
