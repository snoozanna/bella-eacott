import { Link, NavLink } from "react-router-dom";
import { forwardRef, useContext, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuContext } from "../../../contexts/menu.context";
import logo from "./../../../assets/img/bella-logo-bg.png";
import facesolo from "./../../../assets/img/faceSolo.png";
import "./Header.css";

const Header = () => {
  const { changePage, currentPage } = useContext(MenuContext);
  // const { homeRef, aboutRef, bookRef, contactRef, expectRef, pricingRef } =
  //   ref.current;
  const [anchorEl, setAnchorEl] = useState(null);
  const [small, setSmall] = useState(false);
  const matches = useMediaQuery("(max-width:768px)");
  const open = Boolean(anchorEl);

  // console.log("ref in header", ref);

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
    console.log("ref in toggle", ref);
    setAnchorEl(null);
    ref.current.scrollIntoView();
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
          <Link to="/">
            <h1>Bella Eacott Massage</h1>
          </Link>
        </header>
      ) : (
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

export default Header;
