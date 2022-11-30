import { useSpring, animated } from "react-spring";
import { Link, NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import logo from "./../../../assets/img/hand-face.png";
import insta from "./../../../assets/img/instablue.png";
import acuity from "./../../../assets/img/acuityBlueCircle.png";

import "./Footer.css";
const Footer = ({ pageStatus }) => {
  const matches = useMediaQuery("(max-width:768px)");
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

  if (pageStatus === "landing") {
    return null;
  } else if (matches && pageStatus === "home") {
    return null;
  } else {
    return (
      <>
        {matches ? (
          // MOBILE VERSION
          <>
            <footer>
              <div className="footer-item">
                <div className="footer-wrapper">
                  <span>
                    <a
                      href="https://www.instagram.com/bellaeacott/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={insta}
                        alt="instagram logo "
                        className="social"
                      />
                    </a>
                  </span>
                  <span>
                    <img
                      src={acuity}
                      alt="instagram logo "
                      className="social"
                    />
                    <a
                      href="https://bellaeacottmassage.as.me/schedule.php"
                      target="_blank"
                      rel="noreferrer"
                      // class="highlighted"
                    >
                      Book a massage
                    </a>
                  </span>
                </div>
              </div>

              <div className="footer-item logo">
                <NavLink end to="/landing">
                  <animated.img
                    style={wave}
                    src={logo}
                    alt="logo"
                    className="logo"
                  />
                </NavLink>
              </div>
            </footer>
          </>
        ) : (
          // DESKTOP VERSION
          <>
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
                <span>
                  <img src={acuity} alt="instagram logo " className="social" />
                  <a
                    href="https://bellaeacottmassage.as.me/schedule.php"
                    target="_blank"
                    rel="noreferrer"
                    // class="highlighted"
                  >
                    Book a massage
                  </a>
                </span>
              </div>
            </div>

            <div className="footer-item logo">
              <NavLink end to="/landing">
                <animated.img
                  style={wave}
                  src={logo}
                  alt="logo"
                  className="logo"
                />
              </NavLink>
            </div>
          </>
        )}
      </>
    );
  }
};

export default Footer;
