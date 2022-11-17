// import { Link } from "react-router-dom";
import { forwardRef, useContext, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuContext } from "../../../contexts/menu.context";
import logo from "./../../../assets/img/bella-logo-bg.png";
import facesolo from "./../../../assets/img/faceSolo.png";
import "./Header.css";

const Header = forwardRef((props, ref) => {
  const { changePage, currentPage } = useContext(MenuContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const matches = useMediaQuery("(max-width:768px)");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("anchorEl", anchorEl);
    setAnchorEl(null);
  };

  useEffect(() => {
    ref.current.scrollTo(currentPage);
  }, [currentPage, ref]);

  const handleToggle = (newPage) => {
    setAnchorEl(null);
    changePage(newPage);
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
              <MenuItem onClick={() => handleToggle(0)} sx={menuItemStyles}>
                Home
              </MenuItem>
              <MenuItem onClick={() => handleToggle(1)} sx={menuItemStyles}>
                About me
              </MenuItem>
              <MenuItem onClick={() => handleToggle(2)} sx={menuItemStyles}>
                <div className="treatments">
                  <span>Treatments & </span>
                  <span>What to Expect</span>
                </div>
              </MenuItem>
              <MenuItem onClick={() => handleToggle(3.8)} sx={menuItemStyles}>
                Pricing
              </MenuItem>
              <MenuItem onClick={() => handleToggle(5)} sx={menuItemStyles}>
                Book me
              </MenuItem>
              <MenuItem onClick={() => handleToggle(6)} sx={menuItemStyles}>
                Contact me
              </MenuItem>
            </Menu>
          </div>
          <h1>Bella Eacott Massage</h1>
        </header>
      ) : (
        <>
          <header className="desktop">
            <nav>
              <ul className="nav-item">
                <li
                  onClick={() => handleToggle(0)}
                  className={currentPage === 0 ? "current" : ""}
                >
                  Home
                </li>
                <li
                  onClick={() => handleToggle(1)}
                  className={currentPage === 1 ? "current" : ""}
                >
                  About me
                </li>
                <li
                  onClick={() => handleToggle(2)}
                  className={currentPage === 2 ? "current" : ""}
                >
                  {" "}
                  Treatments & What to Expect
                </li>
                <li
                  onClick={() => handleToggle(3)}
                  className={currentPage === 3 ? "current" : ""}
                >
                  Pricing
                </li>
                <li
                  onClick={() => handleToggle(4)}
                  className={currentPage === 4 ? "current" : ""}
                >
                  Book me
                </li>
                <li
                  onClick={() => handleToggle(5)}
                  className={currentPage === 5 ? "current" : ""}
                >
                  Contact me
                </li>
              </ul>
            </nav>
          </header>
          <div className="logoWrapper">
            <img
              src={logo}
              alt="logo"
              className="logo circle"
              onClick={() => handleToggle(0)}
            />
          </div>
        </>
      )}
    </>
  );
});

export default Header;
