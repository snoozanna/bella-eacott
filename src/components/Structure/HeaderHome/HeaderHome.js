import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "./../../../assets/img/bella-logo-bg.png";

import facesolo from "./../../../assets/img/faceSolo.png";
import "./HeaderHome.css";

const HeaderHome = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [small, setSmall] = useState(false);
  const matches = useMediaQuery("(max-width:768px)");
  const open = Boolean(anchorEl);

  //TODO FIX THIS
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset > 200);
        // console.log("small logo required");
      });
    } else {
      console.log("issue with window", window);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   ref.current.scrollTo(currentPage);
  // }, [currentPage, ref]);

  // const handleToggle = (newPage) => {
  //   changePage(newPage);
  // };

  const handleToggle = (ref) => {
    setAnchorEl(null);
  };

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
        <header className="homeMob">
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
          <div className="description">
            <p>
              Sports, deep tissue, relaxing, pregnancy and remedial massage
              across London.
            </p>
          </div>
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
                <li>
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
              src={logo}
              alt="logo"
              className="logo "
              onClick={() => handleToggle(0)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default HeaderHome;
