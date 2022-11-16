import logo from "./../../../assets/img/hand-face.png";
import insta from "./../../../assets/img/instablue.png";
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
        <div className="footer-item">
          <div className="footer-wrapper">
            <span>
              <img src={insta} alt="instagram logo " className="social" />
              <a
                href="https://www.instagram.com/bellaeacott/"
                target="_blank"
                rel="noreferrer"
              >
                @bellaeacott
              </a>
            </span>
            {/* <span>
              <a
                href="https://bellaeacottmassage.as.me/schedule.php"
                target="_blank"
                rel="noreferrer"
                class="highlighted"
              >
                Book a massage
              </a>
            </span> */}
          </div>
        </div>

        <div className="footer-item logo">
          <animated.img style={wave} src={logo} alt="logo" className="logo" />
        </div>
      </footer>
    </>
  );
}
