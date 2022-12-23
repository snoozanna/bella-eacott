import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "./../../../assets/img/bella-logo-bg.png";
import facesolo from "./../../../assets/img/faceSolo.png";
import logoInner from "./../../../assets/img/logo-no-text.png";
import text from "./../../../assets/img/blue-words.png";
import "./Header.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [small, setSmall] = useState(false);
  const matches = useMediaQuery("(max-width:768px)");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (ref) => {
    setAnchorEl(null);
  };

  const turn = useSpring({
    to: { rotateZ: 0 },
    from: { rotateZ: 360 },
    config: {
      duration: 100000,
      mass: 1,
      tension: 180,
      friction: 12,
    },
    delay: 500,
    loop: true,
  });

  const menuItemStyles = {
    backgroundColor: "var(--blue)",
    fontFamily: "var(--font-bold)",
    fontSize: "2rem",
    color: "var(--pink)",
    textTransform: "uppercase",
    maxWidth: "100%",
    wordWrap: "breakWord",
    minWidth: "60vw",
  };

  return (
    <>
      {matches ? (
        // MOBILE VERSION
        <header>
          <div>
            <Button
              id="hamburger-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img src={facesolo} alt="logo" className="logo facesolo" />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                // backgroundColor: "var(--blue)",
                boxShadow: "none",
                border: "none",
                top: "30px",
              }}
            >
              <MenuItem sx={menuItemStyles}>
                <NavLink
                  end
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--yellow)" : "var(--pink)",
                  })}
                >
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem sx={menuItemStyles}>
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--yellow)" : "var(--pink)",
                  })}
                >
                  About me
                </NavLink>
              </MenuItem>
              <MenuItem sx={menuItemStyles}>
                <NavLink
                  to="/what-to-expect"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--yellow)" : "var(--pink)",
                  })}
                >
                  <div className="treatments">
                    <span>Treatments & </span>
                    <span>What to Expect</span>
                  </div>
                </NavLink>
              </MenuItem>
              <MenuItem sx={menuItemStyles}>
                {" "}
                <NavLink
                  to="/pricing"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--yellow)" : "var(--pink)",
                  })}
                >
                  Pricing
                </NavLink>
              </MenuItem>
              <MenuItem sx={menuItemStyles}>
                {" "}
                <NavLink
                  to="/book"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--yellow)" : "var(--pink)",
                  })}
                >
                  Book me
                </NavLink>
              </MenuItem>
              <MenuItem sx={menuItemStyles}>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--yellow)" : "var(--pink)",
                  })}
                >
                  Contact me
                </NavLink>
              </MenuItem>
            </Menu>
          </div>
          <Link className={"title"} to="/">
            <h1>Bella Eacott Massage</h1>
          </Link>
        </header>
      ) : (
        // DESKTOP VERSION
        <>
          <header className={`desktop ${small ? "small" : ""}`}>
            <nav>
              <ul className="nav-item">
                <li>
                  <NavLink
                    end
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "var(--yellow)" : "var(--blue)",
                      fontSize: isActive ? "3rem" : "inherit",
                    })}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                      color: isActive ? "var(--yellow)" : "var(--blue)",
                      fontSize: isActive ? "3rem" : "inherit",
                    })}
                  >
                    About me
                  </NavLink>
                </li>
                <li className="bump">
                  <NavLink
                    to="/what-to-expect"
                    style={({ isActive }) => ({
                      color: isActive ? "var(--yellow)" : "var(--blue)",
                      fontSize: isActive ? "3rem" : "inherit",
                    })}
                  >
                    Treatments & What to Expect
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    style={({ isActive }) => ({
                      color: isActive ? "var(--yellow)" : "var(--blue)",
                      fontSize: isActive ? "3rem" : "inherit",
                    })}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/book"
                    style={({ isActive }) => ({
                      color: isActive ? "var(--yellow)" : "var(--blue)",
                      fontSize: isActive ? "3rem" : "inherit",
                    })}
                  >
                    Book me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                      color: isActive ? "var(--yellow)" : "var(--blue)",
                      fontSize: isActive ? "3rem" : "inherit",
                    })}
                  >
                    Contact me
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div className="logoWrapper">
            <img
              style={turn}
              src={logoInner}
              alt="Bella Eacott Massage"
              className={`logo mob inner`}
            />{" "}
            <animated.img
              style={turn}
              src={text}
              alt="I deserve to feel nice... You deserve to feel nice... We deserve to feel nice..."
              className={`logo mob text`}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
