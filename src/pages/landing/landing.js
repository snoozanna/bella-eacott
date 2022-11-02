import "./landing.css";
import face from "./../../assets/img/face.png";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Landing = () => {
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
      <div className="App landing">
        <Link to="/">
          <div className="hero">
            <animated.span style={anim1} className="tagline">
              LET'S
            </animated.span>
            <animated.span style={anim2} className="tagline">
              FEEL
            </animated.span>
            <animated.span style={anim3} className="tagline">
              NICE
            </animated.span>
            <animated.img
              className="face"
              src={face}
              style={faceanim}
              alt="a little yellow paint splodge with a face inside it"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Landing;
