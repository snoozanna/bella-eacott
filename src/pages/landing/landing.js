import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";
import SEO from "./../../components/Structure/SEO/SEO.js";
import "./landing.css";
import face from "./../../assets/img/face.png";
import insta from "./../../assets/img/insta.png";

// import { Link } from "react-router-dom";

const Landing = ({ setPageStatus }) => {
  useEffect(() => {
    setPageStatus("landing");
  }, []);

  const anim1 = useSpring({
    to: { scale: 1.1 },
    from: { scale: 1 },
    config: { duration: 1000 },
    delay: 500,
    loop: { reverse: true },
  });

  const anim2 = useSpring({
    to: { scale: 1.1 },
    from: { scale: 1 },
    config: { duration: 1000 },
    delay: 1000,
    loop: { reverse: true },
  });
  const anim3 = useSpring({
    to: { scale: 1.1 },
    from: { scale: 1 },
    config: { duration: 1000 },
    delay: 1500,
    loop: { reverse: true },
  });

  const faceanim = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 8000 },
  });

  return (
    <>
      <SEO
        title="Bella Eacott Massage"
        description="Sports, deep tissue, relaxing, pregnancy and remedial massage across
          London"
        name="Bella Eacott Massage"
        type="article"
      />
      {/* <header className="holding">
        <h1>
          Bella Eacott <span className="massage">Massage</span>{" "}
        </h1>{" "}
        <p className="description">
          Sports, deep tissue, relaxing, pregnancy and remedial massage across
          London.
        </p>
      </header> */}

      <div className="landingWrapper">
        <div className="hero">
          <NavLink to="/home">
            <div className="taglineWrapper">
              <animated.span style={anim1} className="tagline">
                LET'S
              </animated.span>
              <animated.span style={anim2} className="tagline">
                FEEL
              </animated.span>
              <animated.span style={anim3} className="tagline">
                NICE
              </animated.span>
            </div>
          </NavLink>
          <NavLink to="/home" className="navFace">
            <animated.img
              className="face"
              src={face}
              style={faceanim}
              alt="a little yellow paint splodge with a face inside it"
            />
          </NavLink>
        </div>
      </div>

      {/* <div className="description"></div> */}

      {/* <footer>
        <div className="footerItem">
          <img src={insta} alt="instagram logo " />
          <a
            href="https://www.instagram.com/bellaeacott/"
            target="_blank"
            rel="noreferrer"
          >
            @bellaeacott
          </a>
        </div>
        <div className="footerItem">
          <span>
            Book via{" "}
            <a
              href="https://bellaeacottmassage.as.me/schedule.php"
              target="_blank"
              rel="noreferrer"
              className="highlighted"
            >
              Acuity
            </a>
          </span>
        </div>
      </footer> */}
    </>
  );
};

export default Landing;
