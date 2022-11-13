// import { Link } from "react-router-dom";
import { forwardRef, useContext, useState } from "react";
import { MenuContext } from "../../../contexts/menu.context";
import logo from "./../../../assets/img/bella-logo-bg.png";
import "./Header.css";

// with forwardRef
// const Header = forwardRef(({ pageName }, ref) => {
//   console.log("pageName", pageName);
//   return (
//     <>
//       <header>
//         <nav>
//           <ul className="nav-item">
//             <li onClick={() => ref.current.scrollTo(0)}>Home</li>
//             <li onClick={() => ref.current.scrollTo(1)}>About me</li>
//             <li onClick={() => ref.current.scrollTo(2)}>
//               {" "}
//               Treatments & What to Expect
//             </li>
//             <li onClick={() => ref.current.scrollTo(3)}>Pricing</li>
//             <li onClick={() => ref.current.scrollTo(4)}>Book me</li>
//             <li onClick={() => ref.current.scrollTo(5)}>Contact me</li>
//           </ul>
//         </nav>
//         {pageName}
//       </header>
//       <div className="logoWrapper">
//         <img
//           src={logo}
//           alt="logo"
//           className="logo"
//           onClick={() => ref.current.scrollTo(0)}
//         />
//       </div>
//     </>
//   );
// });

// export default Header;

const Header = forwardRef((props, ref) => {
  const [isCurrent, setCurrent] = useState("false");
  const { changePage, currentPage } = useContext(MenuContext);

  const handleToggle = (page) => {
    setCurrent(!isCurrent);
    ref.current.scrollTo(changePage(page));
  };

  return (
    <>
      <header>
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
        <p>{currentPage}</p>
      </header>
      <div className="logoWrapper">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => ref.current.scrollTo(0)}
        />
      </div>
    </>
  );
});

export default Header;
