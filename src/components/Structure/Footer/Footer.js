import logo from "./../../../assets/img/hand-face.png";
import { useSpring, animated } from "react-spring";

import "./Footer.css";
export default function Footer() {
  const wave = useSpring({
    to: { rotateZ: 7, transformOrigin: "bottom" },
    from: { rotateZ: -5, transformOrigin: "bottom" },
    config: {
      duration: 1000,
      mass: 1,
      tension: 180,
      friction: 12,
    },
    delay: 500,
    loop: { reverse: true },
  });
  return (
    <>
      <footer>
        <div className="footer-item">email@email.com</div>
        <div className="footer-item logo">
          <animated.img style={wave} src={logo} alt="logo" className="logo" />
        </div>
      </footer>
    </>
  );
}
