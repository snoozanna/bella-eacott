import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import img from "./../../assets/img/Bella.JPG";
import "../../components/Structure/Main/Main.js";
import "./home.css";

export const Home = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <>
      {matches ? (
        // MOBILE VERSION
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <main className="home">
            <section className="home content" href="#home">
              <img
                src={img}
                alt="Bella sitting in a chair, with her eyes closed, on a balcony facing the sun. In black and white."
                className="bella"
              />
              <div className="description">
                Sports, deep tissue, relaxing, pregnancy and remedial massage
                across London.
              </div>
              <div className="homeMenu">
                <div className="homeMenuItem">
                  <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "var(--yellow)"
                        : "  color: var(--blue);",
                    })}
                  >
                    About me
                  </NavLink>
                </div>
                <div className="homeMenuItem">
                  <NavLink
                    to="/what-to-expect"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "var(--yellow)"
                        : "  color: var(--blue);",
                    })}
                  >
                    <div className="treatments">
                      <span>Treatments & </span>
                      <span>What to Expect</span>
                    </div>
                  </NavLink>
                </div>
                <div className="homeMenuItem">
                  <NavLink
                    to="/pricing"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "var(--yellow)"
                        : "  color: var(--blue);",
                    })}
                  >
                    Pricing
                  </NavLink>
                </div>
                <div className="homeMenuItem">
                  <NavLink
                    to="/book"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "var(--yellow)"
                        : "  color: var(--blue);",
                    })}
                  >
                    Book me
                  </NavLink>
                </div>
                <div className="homeMenuItem">
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "var(--yellow)"
                        : "  color: var(--blue);",
                    })}
                  >
                    Contact me
                  </NavLink>
                </div>
              </div>
            </section>
          </main>
        </Parallax>
      ) : (
        // DESKTOP VERSION
        <main className="home">
          <section className="home content" href="#home">
            <img
              src={img}
              alt="Bella sitting in a chair, with her eyes closed, on a balcony facing the sun. In black and white."
              className="bella"
            />
            <div className="description">
              Sports, deep tissue, relaxing, pregnancy and remedial massage
              across London.
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
